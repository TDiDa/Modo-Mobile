---
order: 4
title:
  zh-CN: 显示时间
  en-US: Shows time
---

## zh-CN

5s 后隐藏。

## en-US

shows time.

```jsx
import { NoticeBar } from 'modo-mobile';

ReactDOM.render(
  <div style={{ padding: 10 }}>
    <NoticeBar duration={5000}>duration</NoticeBar>
  </div>,
  mountNode
);
```
