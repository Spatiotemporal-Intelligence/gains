let currentData = [];
let groupedData = new Map(); // 用于按时间戳存储数据
let allTimestamps = [];
let currentTimestampIndex = 0;
let isPlaying = false;
let animationInterval = null;
let metricMaxMap = {}; // Store max value for each metric separately
let onlyMainBoard = false; // Filter state

// 要同时显示的指标列表 - Bar Charts Grid
const targetMetrics = [
    
    { id: 'G1', name: 'G1 (1天后)' },
    { id: 'G2', name: 'G2 (2天后)' },
    { id: 'G3', name: 'G3 (3天后)' },
    { id: 'G5', name: 'G5 (5天后)' },
    { id: 'G10', name: 'G10 (10天后)' },
    { id: 'G20', name: 'G20 (20天后)' }
];

// Store D3 objects for each metric
let charts = {}; // { 'G1': { svg, g, x, y, width, height }, ... }
let g0Chart = null; // Separate specific chart object for G0 Treemap
let flatpickrInstance; // Store flatpickr instance
let expandedMetric = null; // Store currently expanded metric ID
let modalChart = null; // Store D3 object for modal chart

// D3 布局配置
const chartMargin = { top: 20, right: 30, bottom: 20, left: 60 }; 
const modalMargin = { top: 30, right: 50, bottom: 30, left: 80 }; // Larger margin for modal

// Initialize date picker default (Today) and limit future dates
function initDatePicker() {
      flatpickrInstance = flatpickr("#start-date", {
        locale: "zh",
        dateFormat: "Y-m-d",
        defaultDate: "today",
        allowInput: false, 
        disableMobile: "true",
        onChange: function(selectedDates, dateStr, instance) {
            if (selectedDates.length > 0) {
                const fmtDate = (d) => {
                      const y = d.getFullYear();
                      const m = String(d.getMonth() + 1).padStart(2, '0');
                      const day = String(d.getDate()).padStart(2, '0');
                      return `${y}-${m}-${day}`;
                };
                const idx = allTimestamps.findIndex(ts => fmtDate(new Date(ts)) === dateStr);
                if (idx !== -1) {
                    currentTimestampIndex = idx;
                    updateSlider();
                    updateChart();
                    if (isPlaying) pause();
                }
            }
        }
    });
}

// Open Modal Function
function openModal(metricId, metricName) {
    expandedMetric = metricId;
    const modal = document.getElementById('expanded-modal');
    const title = document.getElementById('modal-chart-title');
    const container = document.getElementById('modal-chart-container');
    
    title.textContent = metricName;
    modal.style.display = 'flex';
    
    // Clean prev
    container.innerHTML = '';
    
    // Wait for layout
    requestAnimationFrame(() => {
        const clientWidth = container.clientWidth;
        const clientHeight = container.clientHeight;
        const width = clientWidth - modalMargin.left - modalMargin.right;
        const height = clientHeight - modalMargin.top - modalMargin.bottom;

        const svg = d3.select("#modal-chart-container")
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("viewBox", `0 0 ${clientWidth} ${clientHeight}`)
            .attr("preserveAspectRatio", "none");
        
        // Add Gradient Definition (reuse or redefine)
        const defs = svg.append("defs");
        const gradient = defs.append("linearGradient")
            .attr("id", `gradient-modal`)
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");
        
        gradient.append("stop").attr("offset", "0%").attr("stop-color", "#6a11cb");
        gradient.append("stop").attr("offset", "100%").attr("stop-color", "#2575fc");

        const g = svg.append("g")
            .attr("transform", `translate(${modalMargin.left},${modalMargin.top})`);
            
        const x = d3.scaleLinear().range([0, width]);
        const y = d3.scaleBand().range([0, height]).padding(0.1);
        
        g.append("g").attr("class", "x-axis");

        modalChart = { svg, g, x, y, width, height };
        
        // Trigger update to render data immediately
        updateChart();
    });
}

function closeModal() {
    document.getElementById('expanded-modal').style.display = 'none';
    expandedMetric = null;
    modalChart = null; // Clear ref
}

// Close on click outside
document.getElementById('expanded-modal').addEventListener('click', (e) => {
    if (e.target.id === 'expanded-modal') closeModal();
});

// Initialize G0 Treemap Chart
function initG0Chart() {
    const chartDiv = document.getElementById('chart-G0');
    if (!chartDiv) return;

    // Wait for layout
    setTimeout(() => {
        const clientWidth = chartDiv.clientWidth || 800;
        const clientHeight = chartDiv.clientHeight || 400;
        
        const width = clientWidth - chartMargin.left - chartMargin.right;
        const height = clientHeight - chartMargin.top - chartMargin.bottom;

        const svg = d3.select("#chart-G0")
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("viewBox", `0 0 ${clientWidth} ${clientHeight}`)
            .attr("preserveAspectRatio", "none");

        // Reuse gradient definition if needed, or define specific

        const g = svg.append("g")
            .attr("transform", `translate(${chartMargin.left},${chartMargin.top})`); // Use standard margins

        g0Chart = { svg, g, width, height };
    }, 0);
}

// Initialize all Bar Charts (Grid)
function initChart() {
    initG0Chart();
    const container = document.getElementById('charts-container');
    container.innerHTML = ''; // Clear existing

    targetMetrics.forEach(metric => {
        // 1. Create DOM Elements
        const wrapper = document.createElement('div');
        wrapper.className = 'chart-container';
        
        const title = document.createElement('div');
        title.className = 'chart-title';
        title.innerHTML = `<span>${metric.name}</span> <button class="btn-expand" onclick="openModal('${metric.id}', '${metric.name}')">⤢</button>`;
        // Make title clickable too
        title.onclick = (e) => {
            // Prevent double trigger if button clicked
            if (e.target.tagName !== 'BUTTON') openModal(metric.id, metric.name);
        };
        wrapper.appendChild(title);
        
        const chartDiv = document.createElement('div');
        chartDiv.id = `chart-${metric.id}`;
        chartDiv.className = 'chart-svg-container';
        wrapper.appendChild(chartDiv);
        
        container.appendChild(wrapper);

        // Use a quick timeout to let layout settle before measuring
        setTimeout(() => {
            const clientWidth = chartDiv.clientWidth || 300; 
            const clientHeight = chartDiv.clientHeight || 200;
            
            const width = clientWidth - chartMargin.left - chartMargin.right;
            const height = clientHeight - chartMargin.top - chartMargin.bottom;

            const svg = d3.select(`#chart-${metric.id}`)
                .append("svg")
                .attr("width", "100%")
                .attr("height", "100%")
                .attr("viewBox", `0 0 ${clientWidth} ${clientHeight}`)
                .attr("preserveAspectRatio", "none"); // Allow stretch to fit container
            
            // Add Gradient Definition
            const defs = svg.append("defs");
            const gradient = defs.append("linearGradient")
                .attr("id", `gradient-${metric.id}`)
                .attr("x1", "0%")
                .attr("y1", "0%")
                .attr("x2", "100%")
                .attr("y2", "0%");
            
            gradient.append("stop").attr("offset", "0%").attr("stop-color", "#6a11cb");
            gradient.append("stop").attr("offset", "100%").attr("stop-color", "#2575fc");

            const g = svg.append("g")
                .attr("transform", `translate(${chartMargin.left},${chartMargin.top})`);
                
            // Scales
            const x = d3.scaleLinear().range([0, width]);
            const y = d3.scaleBand().range([0, height]).padding(0.1);
            
            // Add axis group
            g.append("g").attr("class", "x-axis");

            // Store references
            charts[metric.id] = { svg, g, x, y, width, height };

        }, 0);
    });

    // Add resize handler
    window.addEventListener('resize', () => {
        // Throttle resize events slightly? Or just run it. D3 is fast enough for 6 small charts usually.
        requestAnimationFrame(() => {
            targetMetrics.forEach(metric => {
                const chartObj = charts[metric.id];
                if (!chartObj) return;

                const chartDiv = document.getElementById(`chart-${metric.id}`);
                if (!chartDiv) return;

                const newClientWidth = chartDiv.clientWidth;
                const newClientHeight = chartDiv.clientHeight;
                
                if (newClientWidth > 0 && newClientHeight > 0) {
                    // Update SVG viewBox to match new container size
                    chartObj.svg.attr("viewBox", `0 0 ${newClientWidth} ${newClientHeight}`);
                    
                    // Update internal dimensions for scales
                    const newWidth = newClientWidth - chartMargin.left - chartMargin.right;
                    const newHeight = newClientHeight - chartMargin.top - chartMargin.bottom;

                    chartObj.width = newWidth;
                    chartObj.height = newHeight;

                    chartObj.x.range([0, newWidth]);
                    chartObj.y.range([0, newHeight]); // Important: Update Y range too!

                    // Re-render axis immediately
                    chartObj.g.select(".x-axis")
                        .call(d3.axisTop(chartObj.x).ticks(5).tickFormat(d => d + "%"));
                }
            });
            // Trigger chart update to reposition bars
            updateChart();
        });
    });
}

// Apply filter without refetching (if data is already loaded)

function toggleMainBoard() {
      onlyMainBoard = !onlyMainBoard;
      const btn = document.getElementById('btn-main-board');
      if (onlyMainBoard) {
          btn.style.backgroundColor = 'var(--primary-color)';
          btn.style.color = 'white';
      } else {
          btn.style.backgroundColor = 'white';
          btn.style.color = '#444';
      }
      // Apply filter logic
      // Since updateData re-processes 'rawData' which was lost if we don't store it properly.
      // Wait, currentData holds the *processed* dataset? Let's check fetchData.
      
      // In fetchData: currentData = dataset.map(...); updateData(currentData);
      // In updateData: function updateData(rawData) { let dataToProcess = rawData; ... }
      // Ah, updateData uses its argument as the source.
      // So if we call updateData(currentData) again, it works IF currentData is the FULL list.
      // But if updateData modifies currentData global variable?
      
      // Check updateData implementation:
      // It does NOT modify the input array 'rawData' in place, but it filters it into 'dataToProcess'.
      // However, it doesn't update the global 'currentData' variable.
      // Wait, fetchData sets 'currentData' then calls updateData(currentData).
      // Does updateData rely on 'currentData' being the pure source?
      
      // Let's re-read updateData function carefully.
      // function updateData(rawData) { ... }
      
      // If I call updateData(currentData), and currentData is the FULL dataset, it will work.
      // So I just need to make sure I pass the full dataset.
      // Thankfully, in fetchData, 'currentData' is assigned the full dataset.
      // updateData does not overwrite 'currentData'.
      
      updateData(currentData);
}

// 获取数据
async function fetchData() {
    document.getElementById('loading').style.display = 'block';
    
    try {
        // Fetch directly from static JSON file
        // Append timestamp to prevent caching if 'reload' button is clicked
        const response = await fetch('data/data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const dataset = await response.json();
        
        if (dataset && Array.isArray(dataset)) {
            // Columns based on the SQL query in export_data.py:
            // timestamp, code, name, open_price, close_price, G1, G2, G3, G5, G10, G20
            const columns = ['timestamp', 'code', 'name', 'open_price', 'close_price', 'G1', 'G2', 'G3', 'G5', 'G10', 'G20'];
            
            currentData = dataset.map(row => {
                let obj = {};
                columns.forEach((col, index) => {
                    obj[col] = row[index];
                });
                
                // Calculate Current Day Gain (G0)
                const open = Number(obj.open_price) || 0;
                const close = Number(obj.close_price) || 0;
                obj.G0 = (open > 0) ? ((close - open) / open) * 100 : 0;
                
                return obj;
            });
            
            // Parse timestamps if they are strings (QuestDB JSON usually returns ISO strings)
            // If they are already numbers (unlikely from QuestDB default), this is safe too if valid date string.
            currentData.forEach(d => {
                d.timestamp = new Date(d.timestamp).getTime(); 
            });

            updateData(currentData);

            // Update date picker limits based on loaded data
            if (allTimestamps.length > 0) {
                const minTime = Math.min(...allTimestamps);
                const maxTime = Math.max(...allTimestamps);
                
                const fmtDate = (d) => {
                      const y = d.getFullYear();
                      const m = String(d.getMonth() + 1).padStart(2, '0');
                      const day = String(d.getDate()).padStart(2, '0');
                      return `${y}-${m}-${day}`;
                };
                
                // Create SORTED Array of valid formatted date strings
                const availableDatesArray = allTimestamps.map(ts => {
                    const d = new Date(ts);
                    return fmtDate(d);
                }).sort();

                // Calculate default date: try 60 days ago if available, else latest
                let defaultDateStr = fmtDate(new Date(maxTime));
                const targetPrevTime = maxTime - (60 * 24 * 60 * 60 * 1000);
                // Find closest available date to 60 days ago
                let closest = null;
                let minDiff = Infinity;
                
                allTimestamps.forEach(ts => {
                    const diff = Math.abs(ts - targetPrevTime);
                    if (diff < minDiff) {
                        minDiff = diff;
                        closest = ts;
                    }
                });
                
                if (closest) {
                    defaultDateStr = fmtDate(new Date(closest));
                }

                // Update Flatpickr
                if (flatpickrInstance) {
                      flatpickrInstance.set('enable', availableDatesArray);
                      flatpickrInstance.setDate(defaultDateStr, false);
                      document.getElementById('start-date').value = defaultDateStr;
                }
                
                // Initial Seek to default date
                const defaultIdx = allTimestamps.findIndex(ts => fmtDate(new Date(ts)) === defaultDateStr);
                if (defaultIdx !== -1) {
                    currentTimestampIndex = defaultIdx;
                    updateSlider();
                    updateChart();
                }
            }

            document.getElementById('update-time').innerText = `数据最后更新: ${new Date().toLocaleString()} (共 ${allTimestamps.length} 个时间点)`;
        } else {
            console.error('Invalid dataset format');
        }
    } catch (error) {
        console.error('Fetch error:', error);
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

// 处理数据：按时间戳分组
function updateData(rawData) {
    let dataToProcess = rawData;
    
    // (Old Date Filter Removed - now we load all data and just seek)

    // Apply filters: Main Board Only
    if (onlyMainBoard) {
        dataToProcess = rawData.filter(d => {
            if (!d.code) return false;
            const c = String(d.code);
            return c.startsWith('60') || c.startsWith('00');
        });
    }

    groupedData.clear();
    const timestampSet = new Set();
    
    // 2. Identify all timestamps and group data
    dataToProcess.forEach(d => {
        const ts = d.timestamp;
        timestampSet.add(ts);
        if (!groupedData.has(ts)) {
            groupedData.set(ts, []);
        }
        groupedData.get(ts).push(d);
    });
    
    // 3. Calculate Global Max for EACH metric across the ENTIRE dataset
    metricMaxMap = {};
    targetMetrics.forEach(m => {
        metricMaxMap[m.id] = 0;
    });

    dataToProcess.forEach(d => {
        targetMetrics.forEach(m => {
            const val = d[m.id];
            if (val && val > metricMaxMap[m.id]) {
                metricMaxMap[m.id] = val;
            }
        });
    });
    
    // Add padding and floor to each metric's max
    targetMetrics.forEach(m => {
          metricMaxMap[m.id] = Math.max(metricMaxMap[m.id] * 1.1, 10);
    });

    allTimestamps = Array.from(timestampSet).sort();
    currentTimestampIndex = 0; // 默认显示最前（最早日期）
    
    // Update Timeline Slider
    const slider = document.getElementById('timeline');
    if(slider) {
        slider.max = allTimestamps.length - 1;
        slider.value = currentTimestampIndex;
    }

    updateChart();
}

// 切换排序指标 (Deprecating: now we show all metrics)

function toggleAnimation() {
    const btn = document.getElementById('btn-play');
    if (isPlaying) {
        pause();
    } else {
        play();
    }
}

function play() {
    const btn = document.getElementById('btn-play');
    isPlaying = true;
        
    // If at end, loop back carefully
    if (currentTimestampIndex >= allTimestamps.length - 1) {
        currentTimestampIndex = 0; 
    }
    btn.textContent = '暂停';
    btn.style.backgroundColor = '#ff4d4f';
    
    updateChart();
    
    animationInterval = setInterval(() => {
        currentTimestampIndex++;
        if (currentTimestampIndex >= allTimestamps.length) {
            currentTimestampIndex = 0; // Loop or stop
            // To stop at end instead:
            // pause();
            // return;
        }
        updateSlider();
        updateChart();
    }, 1000); 
}

function pause() {
    const btn = document.getElementById('btn-play');
    isPlaying = false;
    clearInterval(animationInterval);
    btn.textContent = '播放';
    btn.style.backgroundColor = '#1890ff';
}

function step(dir) {
    pause(); // Pause if playing
    currentTimestampIndex += dir;
    // Clamp
    if (currentTimestampIndex < 0) currentTimestampIndex = 0;
    if (currentTimestampIndex >= allTimestamps.length) currentTimestampIndex = allTimestamps.length - 1;
    
    updateSlider();
    updateChart();
}

function seek(val) {
    pause(); // Pause when user drags slider
    currentTimestampIndex = parseInt(val);
    updateChart();
}

function updateSlider() {
    const slider = document.getElementById('timeline');
    if(slider) slider.value = currentTimestampIndex;
}

// 更新图表 (D3核心逻辑 - 支持多个图表)
function updateChart() {
    if (allTimestamps.length === 0) return;
    
    const currentTs = allTimestamps[currentTimestampIndex];
    const currentDayData = groupedData.get(currentTs) || [];
    
    // 更新时间显示
    const dateStr = new Date(currentTs).toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });
    document.getElementById('current-date').textContent = dateStr;

    // Sync Flatpickr with current playback time (without triggering onChange)
    if (flatpickrInstance) {
        // Ensure format matches Y-m-d for flatpickr
        const y = new Date(currentTs).getFullYear();
        const m = String(new Date(currentTs).getMonth() + 1).padStart(2, '0');
        const d = String(new Date(currentTs).getDate()).padStart(2, '0');
        const fmtStr = `${y}-${m}-${d}`;
        
        // Only update if differ to avoid potential flicker/redraw costs
        const curVal = document.getElementById('start-date').value;
        if (curVal !== fmtStr) {
            flatpickrInstance.setDate(fmtStr, false); // false = no onChange trig
        }
    }

    // Loop through each metric and update its specific chart
    targetMetrics.forEach(metric => {
        const metricKey = metric.id;
        const chartObj = charts[metricKey];
        if (!chartObj) return;

        // Use the metric-specific max scale
        const scaleMax = metricMaxMap[metricKey] || 10;

        const { svg, g, x, y, width, height } = chartObj;

        // 1. 数据处理与排序
        const sortedData = [...currentDayData]
            .filter(d => d[metricKey] !== null && d[metricKey] !== undefined && d[metricKey] !== '')
            .sort((a, b) => (b[metricKey] || -9999) - (a[metricKey] || -9999))
            .slice(0, 15); // Show top 15 for cleaner look

        // 2. 更新比例尺域 (Use fixedGlobalMax)
        x.domain([0, scaleMax]); 
        y.domain(sortedData.map(d => d.code)); 

        const t = svg.transition().duration(500).ease(d3.easeLinear);

        // 3. 更新轴
        g.select(".x-axis")
            .transition(t)
            .call(d3.axisTop(x).ticks(5).tickFormat(d => d + "%"))
            .selectAll("text")
            .style("font-size", "10px")
            .style("fill", "#666");

        // 4. 数据绑定
        const bars = g.selectAll(".bar-group")
            .data(sortedData, d => d.code);

        // EXIT
        bars.exit()
            .transition(t)
            .attr("transform", d => `translate(0, ${height + 20})`) 
            .style("opacity", 0)
            .remove();

        // ENTER
        const enter = bars.enter()
            .append("g")
            .attr("class", "bar-group")
            .attr("transform", d => `translate(0, ${height + 20})`) 
            .style("opacity", 0);
        
        // Bar Rect
        enter.append("rect")
            .attr("class", "bar")
            .attr("height", y.bandwidth())
            .attr("x", 0)
            .attr("width", 0)
            .attr("rx", 3) // Rounded corners
            .attr("ry", 3)
            .style("fill", `url(#gradient-${metricKey})`)
            .on("mouseover", function(event, d) {
                showTooltip(event, d);
                d3.select(this)
                    .style("fill", "#ff9f43")
                    .style("filter", "brightness(1.1)");
            })
            .on("mouseout", function() {
                hideTooltip();
                d3.select(this)
                    .style("fill", `url(#gradient-${metricKey})`)
                    .style("filter", "none");
            });

        // Name Label
        enter.append("text")
            .attr("class", "name-label")
            .attr("x", -10) 
            .attr("y", y.bandwidth() / 2)
            .attr("dy", ".35em")
            .text(d => d.name);

        // Value Label
        enter.append("text")
            .attr("class", "value-label")
            .attr("x", 0)
            .attr("y", y.bandwidth() / 2)
            .attr("dy", ".35em")
            .attr("fill", "#fff")
            .attr("text-anchor", "end")
            .style("font-size", "11px")
            .style("font-weight", "bold");

        // MERGE & UPDATE
        const allBars = enter.merge(bars);

        // Move position
        allBars.transition(t)
            .attr("transform", d => `translate(0, ${y(d.code)})`)
            .style("opacity", 1);

        // Update width
        allBars.select(".bar")
            .transition(t)
            .attr("width", d => Math.max(0, x(d[metricKey]))) 
            .attr("height", y.bandwidth())
            // Ensure fill is correct if node was reused
            .style("fill", `url(#gradient-${metricKey})`);

        // Update Name
        allBars.select(".name-label")
            .transition(t)
            .attr("y", y.bandwidth() / 2)
            .text(d => d.name);

        // Update Value
        allBars.select(".value-label")
            .transition(t)
            .tween("text", function(d) {
                const prevVal = this._current || 0;
                const val = d[metricKey];
                const i = d3.interpolateNumber(prevVal, val);
                this._current = val;
                return function(t) {
                    this.textContent = i(t).toFixed(2) + "%";
                };
            })
            .attr("x", d => Math.max(0, x(d[metricKey])) - 6) 
            .attr("y", y.bandwidth() / 2);
    });
    
    // 5. Update Expanded Modal Chart if open
    if (expandedMetric && modalChart) {
        renderModalChart(currentDayData);
    }
    
    // 6. Update G0 Treemap
    if (g0Chart) {
        renderG0Treemap(currentDayData);
    }
}

function renderG0Treemap(data) {
    const chartObj = g0Chart;
    const metricKey = 'G0';
    const { svg, g } = chartObj;
    
    // Recalculate dimensions in case of resize
    const chartDiv = document.getElementById('chart-G0');
    const cw = chartDiv.clientWidth;
    const ch = chartDiv.clientHeight;
    const width = cw - chartMargin.left - chartMargin.right;
    const height = ch - chartMargin.top - chartMargin.bottom;

    svg.attr("viewBox", `0 0 ${cw} ${ch}`);

    // 1. 准备数据: Top 300 以充分利用屏幕
    let sortedData = [...data]
        .filter(d => d[metricKey] !== null && d[metricKey] !== undefined && d[metricKey] !== '')
        .sort((a, b) => (b[metricKey] || -9999) - (a[metricKey] || -9999))
        .slice(0, 300); // Show top 300 for G0 specifically
    if (sortedData.length === 0) return;

    // 构造层级数据 (Treemap 需要 root-children结构)
    const rootData = {
        name: "root",
        children: sortedData
    };
    
    // Important: Handle negative values for sizing? Treemap usually needs positive size.
    // Using Math.abs() + constant ensures visibility
    const root = d3.hierarchy(rootData)
        .sum(d => Math.abs(d[metricKey]) + 0.1) 
        .sort((a, b) => b.value - a.value);

    // 2. 创建 Treemap 布局
    // Try different tiling method for better aspect ratios (squarify is default)
    d3.treemap()
        .tile(d3.treemapSquarify.ratio(1)) // Resquarify
        .size([width, height])
        .paddingInner(1)
        .paddingOuter(0)
        .round(true)(root);

    const t = svg.transition().duration(500).ease(d3.easeCubicOut);
    
    // 定义颜色比例尺 (Red scheme for both, but Green for negative if needed. User asked for "Red scheme gradient")
    // Assuming the user wants a visualization where "hotter" = "more red". 
    // For gains, typically Red is good, Green is bad (in China). 
    // Let's enhance the Red gradient for positive values so it looks richer.
    // And maybe keep Green for negative but make it cleaner.
    
    const maxVal = d3.max(sortedData, d => Math.abs(d[metricKey])) || 10;
    
    // Refined Color Scale for better differentiation
    // Dark Green -> Light Green -> White -> Light Red -> Dark Red
    
    const colorScale = d3.scaleLinear()
          .domain([-maxVal, -maxVal * 0.4, 0, maxVal * 0.4, maxVal])
          .range(["#006400", "#4ade80", "#ffffff", "#ff7675", "#990000"]) 
          .interpolate(d3.interpolateRgb);

    // 3. 数据绑定
    const nodes = g.selectAll(".node-group")
        .data(root.leaves(), d => d.data.code);

    // EXIT
    nodes.exit()
        .transition(t)
        .style("opacity", 0)
        .remove();

    // ENTER
    const enter = nodes.enter()
        .append("g")
        .attr("class", "node-group")
        .attr("transform", d => `translate(${d.x0},${d.y0})`)
        .style("opacity", 0);

    // 矩形
    enter.append("rect")
        .attr("class", "tile")
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0)
        .attr("rx", 2).attr("ry", 2)
        .style("fill", d => colorScale(d.data[metricKey]))
        .style("stroke", "#fff")
        .style("stroke-width", "0.5px")
        .on("mouseover", function(event, d) {
            showTooltip(event, d.data);
            d3.select(this).style("stroke", "#333").style("stroke-width", "1px").style("z-index", "10");
        })
        .on("mouseout", function() {
            hideTooltip();
            d3.select(this).style("stroke", "#fff").style("stroke-width", "0.5px").style("z-index", "1");
        });

    // 文本 (股票名称) - Adaptive Font Size
    enter.append("text")
        .attr("class", "tile-name")
        .attr("x", d => (d.x1 - d.x0) / 2) // Center
        .attr("y", d => (d.y1 - d.y0) / 2 - 2) // Slightly above center
        .text(d => d.data.name)
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("fill", "#333") 
        .style("pointer-events", "none")
        .style("font-size", d => {
              const w = d.x1 - d.x0;
              const h = d.y1 - d.y0;
              const size = Math.max(10, Math.min(w / 4.5, h / 4.5, 20));
              return size + "px";
        })
        .style("opacity", d => (d.x1 - d.x0) > 25 && (d.y1 - d.y0) > 20 ? 1 : 0);

    // 文本 (涨幅数值) - Adaptive Font Size
    enter.append("text")
        .attr("class", "tile-val")
        .attr("x", d => (d.x1 - d.x0) / 2) // Center
        .attr("y", d => (d.y1 - d.y0) / 2 + 20) // Slightly below center
        .text(d => d.data[metricKey].toFixed(2) + "%")
        .attr("text-anchor", "middle")
        .style("fill", "rgba(0,0,0,0.8)") 
        .style("pointer-events", "none")
        .style("font-size", d => {
              const w = d.x1 - d.x0;
              const h = d.y1 - d.y0;
              const size = Math.max(10, Math.min(w / 4.5, h / 4.5, 20)); // Smaller than name
              return size + "px";
        })
        .style("opacity", d => (d.x1 - d.x0) > 25 && (d.y1 - d.y0) > 20 ? 1 : 0);

    // UPDATE
    const allNodes = enter.merge(nodes);
    
    allNodes.transition(t)
        .attr("transform", d => `translate(${d.x0},${d.y0})`)
        .style("opacity", 1);

    allNodes.select("rect")
        .transition(t)
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0)
        .style("fill", d => colorScale(d.data[metricKey]));

    allNodes.select(".tile-name")
        .text(d => d.data.name)
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("fill", "#333") 
        .attr("x", d => (d.x1 - d.x0) / 2)
        .attr("y", d => (d.y1 - d.y0) / 2 - 2)
        .style("font-size", d => {
              const w = d.x1 - d.x0;
              const h = d.y1 - d.y0;
              const size = Math.max(10, Math.min(w / 4.5, h / 4.5, 20));
              return size + "px";
        })
        .style("opacity", d => (d.x1 - d.x0) > 25 && (d.y1 - d.y0) > 20 ? 1 : 0);
    
    allNodes.select(".tile-val")
        .text(d => d.data[metricKey].toFixed(2) + "%")
        .attr("x", d => (d.x1 - d.x0) / 2)
        .attr("y", d => (d.y1 - d.y0) / 2 + 20) // Fixed offset from center
        .attr("text-anchor", "middle")
        .style("fill", "rgba(0,0,0,0.8)") 
        .style("font-size", d => {
              const w = d.x1 - d.x0;
              const h = d.y1 - d.y0;
              const size = Math.max(10, Math.min(w / 4.5, h / 4.5, 20));
              return size + "px";
        })
        .style("opacity", d => (d.x1 - d.x0) > 25 && (d.y1 - d.y0) > 20 ? 1 : 0);
}

function renderModalChart(data) {
    const chartObj = modalChart;
    const metricKey = expandedMetric;
    const { svg, g, width, height } = chartObj;
    
    // 1. 准备数据: Top 80 以充分利用屏幕
    let sortedData = [...data]
        .filter(d => d[metricKey] !== null && d[metricKey] !== undefined && d[metricKey] !== '')
        .sort((a, b) => (b[metricKey] || -9999) - (a[metricKey] || -9999))
        .slice(0, 80);

    if (sortedData.length === 0) return;

    // 构造层级数据 (Treemap 需要 root-children结构)
    const rootData = {
        name: "root",
        children: sortedData
    };

    const root = d3.hierarchy(rootData)
        .sum(d => Math.abs(d[metricKey]) + 0.1) // 面积映射：绝对值
        .sort((a, b) => b.value - a.value);

    // 2. 创建 Treemap 布局
    d3.treemap()
        .size([width, height])
        .paddingInner(2)
        .paddingOuter(0)
        .round(true)(root);

    const t = svg.transition().duration(500).ease(d3.easeCubicOut);
    
    // 清除坐标轴 (Treemap 不需要)
    g.select(".x-axis").style("display", "none");
    
    // 定义颜色比例尺 (增强区分度: 深绿 -> 浅绿 -> 白 -> 浅红 -> 深红)
    const maxVal = d3.max(sortedData, d => Math.abs(d[metricKey])) || 10;
    
    const colorScaleCustom = d3.scaleLinear()
          .domain([-maxVal, -maxVal * 0.4, 0, maxVal * 0.4, maxVal])
          .range(["#006400", "#4ade80", "#ffffff", "#ff7675", "#990000"]) 
          .interpolate(d3.interpolateRgb); 

    // 3. 数据绑定
    const nodes = g.selectAll(".node-group")
        .data(root.leaves(), d => d.data.code);

    // EXIT
    nodes.exit()
        .transition(t)
        .style("opacity", 0)
        .remove();

    // ENTER
    const enter = nodes.enter()
        .append("g")
        .attr("class", "node-group")
        .attr("transform", d => `translate(${d.x0},${d.y0})`)
        .style("opacity", 0);

    // 矩形
    enter.append("rect")
        .attr("class", "tile")
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0)
        .attr("rx", 4).attr("ry", 4)
        .style("fill", d => colorScaleCustom(d.data[metricKey]))
        .style("stroke", "#fff")
        .on("mouseover", function(event, d) {
            showTooltip(event, d.data);
            d3.select(this).style("filter", "brightness(1.2)").style("stroke", "#333");
        })
        .on("mouseout", function() {
            hideTooltip();
            d3.select(this).style("filter", "none").style("stroke", "#fff");
        });

    // 文本 (股票名称)
    enter.append("text")
        .attr("class", "tile-name")
        .attr("x", d => (d.x1 - d.x0) / 2) // Center
        .attr("y", d => (d.y1 - d.y0) / 2 - 2)
        .text(d => d.data.name)
        .attr("text-anchor", "middle")
        .style("font-size", d => {
              const w = d.x1 - d.x0;
              const h = d.y1 - d.y0;
              const size = Math.max(8, Math.min(w / 5, h / 5, 14));
              return size + "px";
        })
        .style("font-weight", "bold")
        .style("fill", "white")
        .style("pointer-events", "none")
        .style("opacity", d => (d.x1 - d.x0) > 40 && (d.y1 - d.y0) > 20 ? 1 : 0);

    // 文本 (涨幅数值)
    enter.append("text")
        .attr("class", "tile-val")
        .attr("x", d => (d.x1 - d.x0) / 2) // Center
        .attr("y", d => (d.y1 - d.y0) / 2 + 16)
        .text(d => d.data[metricKey].toFixed(2) + "%")
        .attr("text-anchor", "middle")
        .style("font-size", d => {
              const w = d.x1 - d.x0;
              const h = d.y1 - d.y0;
              const size = Math.max(8, Math.min(w / 5, h / 5, 14));
              return size + "px";
        })
        .style("fill", "rgba(255,255,255,0.95)")
        .style("pointer-events", "none")
        .style("opacity", d => (d.x1 - d.x0) > 40 && (d.y1 - d.y0) > 20 ? 1 : 0);

    // UPDATE
    const allNodes = enter.merge(nodes);
    
    allNodes.transition(t)
        .attr("transform", d => `translate(${d.x0},${d.y0})`)
        .style("opacity", 1);

    allNodes.select("rect")
        .transition(t)
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0)
        .style("fill", d => colorScaleCustom(d.data[metricKey]));

    allNodes.select(".tile-name")
        .text(d => d.data.name)
        .attr("x", d => (d.x1 - d.x0) / 2)
        .attr("y", d => (d.y1 - d.y0) / 2 - 2)
        .style("font-size", d => {
              const w = d.x1 - d.x0;
              const h = d.y1 - d.y0;
              const size = Math.max(12, Math.min(w / 3.5, h / 3.5, 32));
              return size + "px";
        })
        .style("opacity", d => (d.x1 - d.x0) > 40 && (d.y1 - d.y0) > 25 ? 1 : 0);
    
    allNodes.select(".tile-val")
        .tween("text", function(d) {
            const prevVal = this._current || 0;
            const val = d.data[metricKey];
            const i = d3.interpolateNumber(prevVal, val);
            this._current = val;
            return function(t) {
                this.textContent = i(t).toFixed(2) + "%";
            };
        })
        .attr("x", d => (d.x1 - d.x0) / 2)
        .attr("y", d => (d.y1 - d.y0) / 2 + 16)
        .style("font-size", d => {
              const w = d.x1 - d.x0;
              const h = d.y1 - d.y0;
              const size = Math.max(10, Math.min(w / 4, h / 4, 24));
              return size + "px";
        })
        .style("opacity", d => (d.x1 - d.x0) > 40 && (d.y1 - d.y0) > 45 ? 1 : 0);
}


// Tooltip 功能
const tooltip = document.getElementById('tooltip');
function showTooltip(event, d) {
    const dateStr = d.timestamp ? new Date(d.timestamp).toISOString().split('T')[0] : '-';
    
    // Build metrics grid
    let items = '';
    
    // Add Current Day Gain (Open -> Close)
    const open = d.open_price || 0;
    const close = d.close_price || 0;
    let dayGain = 0;
    if (open > 0) {
        dayGain = ((close - open) / open) * 100;
    }
    const dayGainColor = dayGain > 0 ? '#ff4d4f' : (dayGain < 0 ? '#52c41a' : '#aaa');
    const dayGainStr = (dayGain > 0 ? '+' : '') + dayGain.toFixed(2) + '%';

    const metrics = [
        {key: 'G1', label: '1日后'},
        {key: 'G2', label: '2日后'},
        {key: 'G3', label: '3日后'},
        {key: 'G5', label: '5日后'},
        {key: 'G10', label: '10日后'},
        {key: 'G20', label: '20日后'}
    ];
    
    metrics.forEach(m => {
        const val = d[m.key];
        const color = val > 0 ? '#ff4d4f' : (val < 0 ? '#52c41a' : '#aaa');
        // Handle 0 correctly by checking null/undefined explicitly
        const hasVal = val !== null && val !== undefined;
        let valStr = '-';
        if (hasVal) {
              valStr = (val > 0 ? '+' : '') + val.toFixed(2) + '%';
        }
        
        items += `<div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px; margin-bottom: 4px;">
                    <span style="color: #666; font-family: 'Noto Sans SC', sans-serif;">${m.label}</span>
                    <span style="color: ${color}; font-family: 'Roboto Mono'; font-weight: 600;">${valStr}</span>
                  </div>`;
    });

    tooltip.innerHTML = `
        <div class="tooltip-header" style="margin-bottom: 8px;">
            ${d.name} <span style="font-weight: 400; color: #888; font-size: 12px;">${d.code}</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; margin-bottom: 8px;">
              <div class="tooltip-row">
                <span style="color: #666;">日期</span>
                <span>${dateStr}</span>
              </div>
              <div class="tooltip-row">
                <span style="color: #666;">当日</span>
                <span style="color: ${dayGainColor}">${dayGainStr}</span>
              </div>
              <div class="tooltip-row">
                <span style="color: #666;">开盘</span>
                <span>${d.open_price ? Number(d.open_price).toFixed(2) : '-'}</span>
              </div>
              <div class="tooltip-row">
                <span style="color: #666;">收盘</span>
                <span>${d.close_price ? Number(d.close_price).toFixed(2) : '-'}</span>
              </div>
        </div>
        <div style="height: 1px; background: #eee; margin: 4px 0 8px 0;"></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px 16px;">
            ${items}
        </div>
    `;

    tooltip.style.display = 'block';
    
    // Position Logic with Boundary Check
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    
    let left = event.pageX + 15;
    let top = event.pageY + 15;
    
    // Check right edge
    if (left + tooltipRect.width > scrollX + viewportWidth) {
        left = event.pageX - tooltipRect.width - 15;
    }
    
    // Check bottom edge
    if (top + tooltipRect.height > scrollY + viewportHeight) {
        top = event.pageY - tooltipRect.height - 15;
    }
    
    // Ensure not off-screen left/top
    if (left < scrollX) left = scrollX + 5;
    if (top < scrollY) top = scrollY + 5;

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
}

function hideTooltip() {
    tooltip.style.display = 'none';
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    initDatePicker(); // Initialize the date picker
    initChart();
    fetchData(); 
});