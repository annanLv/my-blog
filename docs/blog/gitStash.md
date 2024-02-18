# git stash

> 当我们突然接到新的任务, 但是项目已经开发了一半, 不想提交可以使用 `git stash`

## 使用

> 会保存当前工作进度, 会把暂存区和工作区的改动保存到一个未完结变更的堆栈中; 在执行 `git stash` 之后, 
> 使用`git status` 就会发现当前是一个干净的工作区, 没有任何改动.

::: tip git stash

- `git stash` 是本地, 不会上传到服务器上
- 可以使用 `git stash save 'message'` 添加一些注释

:::

## 相关命令

| 命令名                            | 作用                                            |
|--------------------------------|-----------------------------------------------|
| git stash                      | 隐藏当前的工作现场, 此时, git status                     |
| git stash list                 | 查看所有隐藏, 每一行的冒号前面的字符串就是标识此隐藏的id                |
| git stash apply                | 重新显示标识为 id 的隐藏(可以指定具体的id)                     |
| git stash drop                 | git apply恢复隐藏后, 需要手动删除 list 列表中的记录(可以指定具体的id) |
| git stash pop                  | 恢复最新的进度到工作区, 并删除                              |
| git stash pop stash@[stash_id] | 恢复指定的进度到工作区, 并删除                              |
| git stash show                 | 显示当前最新`stash`的改动(可以指定具体的id)                   |
| git stash clear                | 删除所有的 `stash` 记录                              |


## 使用方式

::: tip 使用过程

1. 首先使用 `git stash list` 查看是否有没有 `stash` 的记录
2. 如果想应用回指定版本, `git stash apply n`, n为stash list结果里面的序号(id)

:::




















