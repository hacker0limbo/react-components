# Outside Alerter

点击元素外部触发弹出对话框效果

## 思路
在该元素上绑定 ref, 全局进行 click 事件监听, 查看 `event.target` 对象是否被包含在这个元素里, 如果被包含, 说明 target 是该元素的子元素, 不是 outside, 否则说明点击的是 outside 元素, 触发对话框效果

## 参考
- https://codesandbox.io/s/lmr2y
- https://codesandbox.io/s/30q3mzjv91