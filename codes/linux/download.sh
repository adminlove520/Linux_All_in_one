#!/usr/bin/env bash

# ---------------------------------------------------------------------------------
# 控制台颜色
BLACK="\033[1;30m"
RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"
PURPLE="\033[1;35m"
CYAN="\033[1;36m"
RESET="$(tput sgr0)"
# ---------------------------------------------------------------------------------

printf "${BLUE}\n"
cat << EOF
###################################################################################
# Linux_All_in_one 运维脚本工具集下载脚本
# 下载 https://github.com/adminlove520/Linux_All_in_one 中的所有脚本到当前服务器的
# /home/scripts/linux-tutorial 目录下
# @system: 适用于 CentOS
# @author: anonymous
# See: https://github.com/adminlove520/Linux_All_in_one
###################################################################################
EOF
printf "${RESET}\n"

root=/home/scripts/Linux_All_in_one
printf "\n${GREEN}>>>>>>>> Download Linux_All_in_one to ${root} begin.${RESET}\n"
command -v yum > /dev/null 2>&1 || {
	printf "\n${RED}Not detected yum.${RESET}";
	exit 1;
}

command -v git > /dev/null 2>&1 || {
	printf "\n${YELLOW}Not detected git. Install git.${RESET}\n";
	yum install -y git;
}

if [[ -d ${root} ]]; then
	cd ${root}
	git pull
else
	mkdir -p ${root}
	git clone https://github.com/adminlove520/Linux_All_in_one.git ${root}
fi
chmod +x -R ${root}
printf "\n${GREEN}<<<<<<<< Download linux-tutorial to ${root} end.${RESET}\n"
