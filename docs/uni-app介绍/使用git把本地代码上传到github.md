## 如何使用git把本地代码上传到github

> git常用命令:

master为默认开发的分支，Head为默认开发分支

origin为默认远程版本库，`Head^`为Head的父提交

> 创建版本库

`git clone <url>`克隆远程版本库

`git init`初始化本地版本库

> 修改和提交

`git status`查看状态

`git diff`查看变更内容

`git add .`跟踪所有改动过的文件

`git add <file>`跟踪指定的文件

`git mv <old> <new>`文件改名

`git rm <file>` 删除文件

`git rm --cached <file>` 停止跟踪文件但不删除

`git commit --amend` 修改最后一次提交

> 查看提交历史

`git log` 查看提交历史

`git log -p <file>`查看指定文件的提交历史

`git blame <file>` 以列表方式查看指定文件的提交历史

> `撤销`

`git reset --hard HEAD` 撤销工作目录中所有末提交文件的修改内容

`git checkout HEAD <file>` 撤销指定的未提交文件的修改内容

`git revert <commit>` 撤销指定的提交

> 分支与标签

`git branch` 显示所有本地分支

`git checkout <branch/tag>` 切换到指定的分支或标签

`git branch <new-branch>` 创建新分支

`git branch -d <branch>` 删除本地分支

`git tag` 列出所有本地标签

`git tag <tagname>` 基于最新提交创建标签

`git tag -d <tagname>` 删除标签

> 合并与衍合

`git merge <branch>` 合并指定分支到当前分支

`git rebase <branch>` 衍合指定分支到当前分支

> 远程操作

`git remote -v` 查看远程版本库信息

`git remote show <remote>` 查看指定远程版本库信息

`git remote add <remote> <url>` 添加远程版本库

`git fetch <remote>` 从远程库获取代码

`git pull <remote> <branch>` 下载代码以及快速合并

`git push <remote> <branch>` 上传代码以及快速合并

`git push <remote> :<brach/tag-name>` 删除远程分支或标签

`git push --tags` 上传所有标签

1. `git clone xxx` // 克隆远程仓库到本地
2. `git pull` // 拉取服务器代码
3. `git status` // 查看当前目录工作状态
4. `git add +` // 将修改过的文件全部提交缓存
5. `git commit -m '注解'` // 提交到本地仓库
6. `git remote add origin git@github.com:xxx`
7. `git push -u origin master` // 提交到master分支

`Git Bash Here`

`git init`

`git add .`

`git commit -m '说明'`

`git remote add origin https://github.com//.git`

`git remote add origin git@github.com:******/manage.git`

`git pull --rebase origin master`

`git push -u origin master`

mkdir： XX (创建一个空目录 XX指目录名)

pwd： 显示当前目录的路径。

`git init` 把当前的目录变成可以管理的git仓库，生成隐藏.git文件。

`git add XX` 把xx文件添加到暂存区去。

`git commit –m “XX”` 提交文件 –m 后面的是注释。

`git status` 查看仓库状态

`git diff XX` 查看XX文件修改了那些内容

`git log` 查看历史记录

git reset –hard HEAD^ 或者 git reset –hard HEAD~ 回退到上一个版本

> 建立git仓库

`git init`

将项目的所有文件添加到仓库中

`git add .`

将add的文件commit到仓库

`git commit -m "注释语句"`

将本地的仓库关联到github上

`git remote add origin https:// h`

`git pull --rebase origin master`
上传代码到github远程仓库

`git push -u origin master`

语法：`git config –-global user.name ''`
语法：`git config –-global user.email ''`

在本地创建一个文件夹
语法：mkdir

在wandou文件夹下创建文件

语法：touch

语法：git status

> `git`其他命令

1. `git push origin master` // 把本地源码库Push到github上
2. `git pull origin master` // 从github上pull到本地源码库
3. `git config --list` // 查看配置信息
4. `git status` // 查看项目状态信息
5. `git branch` // 查看项目分支
6. `git checkout -b host` // 添加一个名为host
7. `git checkout master` // 切换到主干
8. `git merge host` // 合并分支host到主干
9. `git branch -d host` // 删除分支host
10. `git remote -v` // 查看当前在哪一个远程仓库

?> `git`相关术语

工作区working directory

暂存区stage/index

本地历史仓库repository

远程仓库remote