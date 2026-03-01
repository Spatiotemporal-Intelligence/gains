#!/bin/bash
cd "$(dirname "$0")"
date_str=$(date +%Y%m%d)

export QUERY_STR="
WITH daily_data AS (
    SELECT 
        timestamp, 
        code,
        name, 
        cast(open as DOUBLE) as open_price,
        cast(close as DOUBLE) as close_price
    FROM daily_quote
    WHERE timestamp >  '2026-02-22'
),
price_data AS (
    SELECT 
        timestamp, 
        code,
        name,
        open_price,
        close_price,
        lead(close_price, 1) OVER (PARTITION BY code ORDER BY timestamp) as price_next,
        lead(close_price, 2) OVER (PARTITION BY code ORDER BY timestamp) as price_2_days_later,
        lead(close_price, 3) OVER (PARTITION BY code ORDER BY timestamp) as price_3_days_later,
        lead(close_price, 5) OVER (PARTITION BY code ORDER BY timestamp) as price_5_days_later,
        lead(close_price, 10) OVER (PARTITION BY code ORDER BY timestamp) as price_10_days_later,
        lead(close_price, 20) OVER (PARTITION BY code ORDER BY timestamp) as price_20_days_later
    FROM daily_data
),
change_data as (SELECT 
    timestamp,
    code,
    name,                
    open_price,
    close_price,                
    (price_next / close_price - 1) * 100 as G1,
    (price_2_days_later / close_price - 1) * 100 as G2,
    (price_3_days_later / close_price - 1) * 100 as G3,
    (price_5_days_later / close_price - 1) * 100 as G5,
    (price_10_days_later / close_price - 1) * 100 as G10,
    (price_20_days_later / close_price - 1) * 100 as G20
FROM price_data
)
select * from change_data ORDER BY timestamp ASC, code; 
"

# Update manifest.json
python -c '
import requests
import os
import json

query = os.environ.get("QUERY_STR")

response = requests.get(f"http://localhost:9000/exec", params={"query": query})
response.raise_for_status()

data = response.json()

output_path = "data/data.json"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(data["dataset"], f, ensure_ascii=False)
'

git add .

if [ -n "$(git status --porcelain)" ]; then
    export GIT_COMMITTER_NAME="[bot]"
    export GIT_COMMITTER_EMAIL="bot@noreply.sti"
    git commit --author="[bot] <bot@noreply.sti>" -m "update $date_str"
    git push origin main
else
    echo "No changes to commit."
fi

