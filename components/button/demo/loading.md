---
order: 4
title:
  zh-CN: 加载中状态
  en-US: Loading
---

## zh-CN

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

## en-US

A loading indicator can be added to a button by setting the `loading` property on the `Button`.

```jsx
import { Button } from 'modo-mobile';

class App extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    const { loading, iconLoading } = this.state;
    return (
      <div className="button-list">
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" loading={loading} onClick={this.enterLoading} inline>
          Click me!
        </Button>
        <Button
          type="primary"
          icon="search"
          loading={iconLoading}
          onClick={this.enterIconLoading}
          inline
        >
          Click me!
        </Button>
        <br />
        <Button type="primary" size="small" shape="circle" loading />
        <Button shape="circle" size="small" loading />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
