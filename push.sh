#!/bin/bash
# 飞书推送脚本 - 快捷命令
# 用法: ./push.sh [breaking|daily|category] [test]

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

MODE=${1:-daily}
TEST_FLAG=""

if [ "$2" = "test" ]; then
    TEST_FLAG="--test"
fi

echo "=========================================="
echo "🚀 前沿科技日报 - 飞书推送"
echo "=========================================="
echo "模式: $MODE"
echo "时间: $(date '+%Y-%m-%d %H:%M:%S')"
echo "------------------------------------------"

python3 feishu_push.py --mode "$MODE" $TEST_FLAG

EXIT_CODE=$?

echo "------------------------------------------"
if [ $EXIT_CODE -eq 0 ]; then
    echo "✅ 推送完成"
else
    echo "❌ 推送失败"
fi
echo "=========================================="

exit $EXIT_CODE
