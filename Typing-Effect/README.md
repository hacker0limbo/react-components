# Typing Effect

使用 hooks 实现的打字效果

## 思路
一次完整的打字完成过程需要经历: **最初从字母数量 0 开始打字 -> 打出所有字母(一个 word) -> 删除所有字母(一个轮回结束) -> (下一个轮回开始)重新开始从 0 打字**, 记为一个 count, 包含的状态更改如下:
- 进入打字状态开始打字, count 初始化为 0(第一个轮回), 此时 `isDeleting=false`, speed 设置为打字速度, 一开始打出的为空字符串, 即`text=''`
- 仍旧处于打字状态, 打出的字不断增加, `isDeleting=false`, `-> text=xxx`, speed 依旧为打字速度
- 所有字母(一个完整的字)打出, `isDeleting=false`, `text=fullWord`, 此时需要做以下 state 变更:
  - `isDeleting=true`, 开始进入删除字母状态
  - *延迟设置*, 将速度 speed 设置为 delay, 使之呈现出在打完字和即将开始删除字母中间停顿的效果
  - 判断, 如果有 loop, 继续, 否则停止 return 出去
- 进入删除字母状态, `isDeleting=true`, 字母不断开始向左减少, `text=xx <-`, 速度 speed 变更为删除字的速度, 这里默认为打字速度的一半
- 仍旧处于删除字母状态, `isDeleting=false`, 此时所有字母都已经被删除, 此时要进行 state 变更:
  - `isDeleting=true`, 一个轮回结束, 重新回到开始打字的状态
  - `counter += 1`, 进行下一个轮回, 也就是下一个字的开始
- 回到最初的状态, `isDeleting=true`, 设置 speed 为打字速度, 重新新的一个轮回

**也就是说一次 count 等于一个 word 的完整打出与删除, 也就是一个轮回**

当然要注意的是, 实际所有的效果都是连续的, 因为状态很多(isDeleting, text 等等), 状态也在不断改变, 每次一改变就会重新调用 useEffect, 那么会清楚旧的 timer, 设置新的 timer, 打字速度的效果就是在这里出来的

## 参考
- https://github.com/awran5/React-Typewriting-effect