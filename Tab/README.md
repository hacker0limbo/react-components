# Tab

## 思路
Tab 分为标题(title)和内容(content), 一个选项卡正常显示如下:
- 所有的 title 都显示, 但只有一个属于激活状态(样式会不同)
- content 只显示当前被激活的 title 底下的内容

**实现**:
- 一起实现: 渲染一个列表, 每个元素包含 title 和 content, 记录当前被激活的 tab 是哪个, 该 title 的样式改为激活样式, content 渲染出, 其余为被激活的 tab 的 content 渲染成 null
- 分别实现: title 和之前一样, content 部分使用 filter 筛选出 active 的进行渲染(还是一个列表, 但只存在一个元素)

参考:
- https://alligator.io/react/tabs-component/ 

