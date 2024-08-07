# git常用命令

## 仓库

```bash
# 在当前目录新建一个Git代码库
version-manage init

# 新建一个目录，将其初始化为Git代码库
version-manage init [project-name]

# 下载一个项目和它的整个代码历史
version-manage clone [url]

# 添加仓库地址
version-manage remote add origin 仓库地址

# 更换仓库地址
version-manage remote set-url origin 仓库地址
```

## 配置

```bash
# 显示当前的Git配置
version-manage config --list

# 编辑Git配置文件
version-manage config -e [--global]

# 设置提交代码时的用户信息
version-manage config [--global] user.name "[name]"
version-manage config [--global] user.email "[email address]"
```

## 增加/删除文件

```bash
# 添加指定文件到暂存区
version-manage add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
version-manage add [dir]

# 添加当前目录的所有文件到暂存区
version-manage add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
version-manage add -p

# 删除工作区文件，并且将这次删除放入暂存区
version-manage rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
version-manage rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
version-manage mv [file-original] [file-renamed]
```

## 代码提交

```bash
# 提交暂存区到仓库区
version-manage commit -m [message]

# 提交暂存区的指定文件到仓库区
version-manage commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
version-manage commit -a

# 提交时显示所有diff信息
version-manage commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
version-manage commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
version-manage commit --amend [file1] [file2] ...
```

## 分支

```bash
# 列出所有本地分支
version-manage branch

# 列出所有远程分支
version-manage branch -r

# 列出所有本地分支和远程分支
version-manage branch -a

# 新建一个分支，但依然停留在当前分支
version-manage branch [branch-name]

# 新建一个分支，并切换到该分支
version-manage checkout -b [branch]

# 新建一个分支，指向指定commit
version-manage branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
version-manage branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
version-manage checkout [branch-name]

# 切换到上一个分支
version-manage checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
version-manage branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
version-manage merge [branch]

# 选择一个commit，合并进当前分支
version-manage cherry-pick [commit]

# 删除分支
version-manage branch -d [branch-name]

# 删除远程分支
version-manage push origin --delete [branch-name]
version-manage branch -dr [remote/branch]
```

## 标签

```bash
# 列出所有tag
version-manage tag

# 新建一个tag在当前commit
version-manage tag [tag]

# 新建一个tag在指定commit
version-manage tag [tag] [commit]

# 删除本地tag
version-manage tag -d [tag]

# 删除远程tag
version-manage push origin :refs/tags/[tagName]

# 查看tag信息
version-manage show [tag]

# 提交指定tag
version-manage push [remote] [tag]

# 提交所有tag
version-manage push [remote] --tags

# 新建一个分支，指向某个tag
version-manage checkout -b [branch] [tag]
```

## 查看信息

```bash
# 显示有变更的文件
version-manage status

# 显示当前分支的版本历史
version-manage log

# 显示commit历史，以及每次commit发生变更的文件
version-manage log --stat

# 搜索提交历史，根据关键词
version-manage log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
version-manage log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
version-manage log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
version-manage log --follow [file]
version-manage whatchanged [file]

# 显示指定文件相关的每一次diff
version-manage log -p [file]

# 显示过去5次提交
version-manage log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
version-manage shortlog -sn

# 显示指定文件是什么人在什么时间修改过
version-manage blame [file]

# 显示暂存区和工作区的差异
version-manage diff

# 显示暂存区和上一个commit的差异
version-manage diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
version-manage diff HEAD

# 显示两次提交之间的差异
version-manage diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
version-manage diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
version-manage show [commit]

# 显示某次提交发生变化的文件
version-manage show --name-only [commit]

# 显示某次提交时，某个文件的内容
version-manage show [commit]:[filename]

# 显示当前分支的最近几次提交
version-manage reflog
```

## 远程同步

```bash
# 下载远程仓库的所有变动
version-manage fetch [remote]

# 显示所有远程仓库
version-manage remote -v

# 显示某个远程仓库的信息
version-manage remote show [remote]

# 增加一个新的远程仓库，并命名
version-manage remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
version-manage pull [remote] [branch]

# 上传本地指定分支到远程仓库
version-manage push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
version-manage push [remote] --force

# 推送所有分支到远程仓库
version-manage push [remote] --all

# 远程提交历史记录对不上导致报错  Git报错-refusing to merge unrelated histories 
version-manage pull origin master --allow-unrelated-histories
```

## 撤销

```bash
# 恢复暂存区的指定文件到工作区
version-manage checkout [file]




# 恢复某个commit的指定文件到暂存区和工作区
version-manage checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
version-manage checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
version-manage reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
version-manage reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
version-manage reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
version-manage reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
version-manage reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
version-manage revert [commit]

暂时将未提交的变化移除，稍后再移入
version-manage stash
version-manage stash pop
```

## 其他

```bash
# 生成一个可供发布的压缩包
version-manage archive
```