import React, { Component } from "react";
import Tab from "./Tab";

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 当前选中的 tab, 对应的是父组件传的 label 属性
      activeTab: this.props.children[0].props.label
    };
  }

  selecteTab = newTab => {
    this.setState({
      activeTab: newTab
    });
  };

  render() {
    return (
      <div>
        <div className="tab-titles">
          {this.props.children.map(child => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={this.state.activeTab}
                key={label}
                label={label}
                selectTab={this.selecteTab}
              />
            );
          })}
        </div>

        <div className="tab-contents">
          {/* 渲染内容的时候只渲染匹配的那一个 */}
          {this.props.children.filter(
            child => child.props.label === this.state.activeTab
          )}
        </div>
      </div>
    );
  }
}
