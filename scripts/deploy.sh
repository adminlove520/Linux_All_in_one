#!/usr/bin/env sh

# ------------------------------------------------------------------------------
# gh-pages 部署脚本
# @author anonymous
# @since 2020/2/10
# ------------------------------------------------------------------------------

# 装载其它库
ROOT_DIR=$(cd "$(dirname "$0")"/..; pwd)

# 确保脚本抛出遇到的错误
set -e

# 设置默认值
GITHUB_REPOSITORY=${GITHUB_REPOSITORY:-"adminlove520/Linux_All_in_one"}

# 显示当前环境信息
echo "部署环境信息："
echo "- 工作目录: ${ROOT_DIR}"
echo "- GitHub仓库: ${GITHUB_REPOSITORY}"

# 进入docs目录
cd "${ROOT_DIR}/docs"

# 生成静态文件
echo "开始安装依赖..."
npm install  # 使用install安装依赖
echo "开始构建项目..."
npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

echo "初始化git仓库..."
git init
git config user.name "GitHub Actions Bot"
git config user.email "github-actions[bot]@users.noreply.github.com"
git checkout -b gh-pages
git add .
# 使用更有意义的提交信息
COMMIT_MSG="Deploy site - $(date +'%Y-%m-%d %H:%M:%S')"
# 如果在GitHub Actions环境中，使用实际的提交消息
if [ -n "${GITHUB_SHA}" ]; then
    # 使用sh兼容的方式提取前7个字符
    COMMIT_MSG="Deploy site - $(echo "${GITHUB_SHA}" | cut -c1-7)"
fi
git commit -m "${COMMIT_MSG}"

# 部署逻辑
echo "开始部署到gh-pages分支..."
if [ -n "${GITHUB_TOKEN}" ]; then
    echo "使用GitHub Actions token部署 gh-pages"
    # 使用GitHub Actions提供的环境变量
    git push --force --quiet "https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git" gh-pages
elif [ -n "${GH_TOKEN}" ]; then
    echo "使用自定义token部署 gh-pages"
    git push --force --quiet "https://x-access-token:${GH_TOKEN}@github.com/${GITHUB_REPOSITORY}.git" gh-pages
else
    echo "使用 ssh 公钥部署 gh-pages"
    git push -f "git@github.com:${GITHUB_REPOSITORY}.git" gh-pages
fi

echo "部署完成！"
cd "${ROOT_DIR}"
