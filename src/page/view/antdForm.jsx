// 注意: 出码引擎注入的临时变量默认都以 "__$$" 开头，禁止在搭建的代码中直接访问。
// 例外：react 框架的导出名和各种组件名除外。
import React from "react";

import {
  ConfigProvider,
  Button,
  Icon,
} from "@alilc/antd-lowcode-materials";

import utils from "../../utils";

import * as __$$i18n from "../../i18n";

import "./index.css";



class Sample$$Page extends React.Component {
  _context = this;

  constructor(props, context) {
    super(props);

    this.utils = utils;

    __$$i18n._inject2(this);

    this.state = { hello: "Hello AliLowCode" };
  }

  $ = () => null;

  $$ = () => [];

  testFunc() {
    console.log("test aliLowcode func");
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "test-aliLowcode-func",
      },
      this.state.test
    );
  }

  onClick() {
    const ref = this.$("zhouliDemo");
    console.log(ref);

 
  }

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <div>
        <ConfigProvider
          theme={{primaryColor:"#ddd"}}
          autoInsertSpaceInButton={false}
          componentSize="small"
          locale="zh-CN"
          prefixCls=""
          direction="ltr"
          space="small"
          virtual={false}
        >
          <Button
            type="primary"
            htmlType="button"
            size="middle"
            shape="default"
            icon={<Icon type="SearchOutlined" size={14} />}
            block={false}
            danger={false}
            ghost={false}
            disabled={false}
          >
            主按钮
          </Button>
          <Button
            type="primary"
            htmlType="button"
            size="middle"
            shape="default"
            icon={<Icon type="SearchOutlined" size={14} />}
            block={false}
            danger={false}
            ghost={false}
            disabled={false}
            __events={{
              eventDataList: [
                {
                  type: "componentEvent",
                  name: "onClick",
                  relatedEventName: "onClick",
                },
              ],
              eventList: [
                {
                  name: "onClick",
                  template:
                    "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
                  disabled: true,
                },
              ],
            }}
            onClick={function () {
              this.onClick.apply(
                this,
                Array.prototype.slice.call(arguments).concat([])
              );
            }.bind(this)}
          >
            主按钮
          </Button>
        </ConfigProvider>
      </div>
    );
  }
}

export default Sample$$Page;

function __$$eval(expr) {
  try {
    return expr();
  } catch (error) {}
}

function __$$evalArray(expr) {
  const res = __$$eval(expr);
  return Array.isArray(res) ? res : [];
}

function __$$createChildContext(oldContext, ext) {
  const childContext = {
    ...oldContext,
    ...ext,
  };
  childContext.__proto__ = oldContext;
  return childContext;
}
