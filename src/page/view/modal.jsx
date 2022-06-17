// 注意: 出码引擎注入的临时变量默认都以 "__$$" 开头，禁止在搭建的代码中直接访问。
// 例外：react 框架的导出名和各种组件名除外。
import React from "react";

import {
  Card,
  Button,
  Icon,
  Modal,
  Spin,
  Result,
} from "@alilc/antd-lowcode-materials"; // 此处需要修改

import utils from "../../utils";

import * as __$$i18n from "../../i18n";

import "./index.css";

class Sample$$Page extends React.Component {
  _context = this;

  constructor(props, context) {
    super(props);

    this.utils = utils;

    __$$i18n._inject2(this);

    this.state = { hello: "Hello AliLowCode", isVisible: false };
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

  show() {
    this.setState({
      isVisible: true,
    });
    console.log("show");
  }

  hide() {
    this.setState({
      isVisible: false,
    });
    console.log("hide");
  }

  componentDidMount() {}

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <div>
        <Card
          title="Default size card"
          bordered={false}
          hoverable={false}
          loading={false}
          size="default"
          type="default"
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
            __events={{
              eventDataList: [
                {
                  type: "componentEvent",
                  name: "onClick",
                  relatedEventName: "show",
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
              this.show.apply(
                this,
                Array.prototype.slice.call(arguments).concat([])
              );
            }.bind(this)}
          >
            主按钮
          </Button>
        </Card>
        <Card
          title="Default size card"
          bordered={false}
          hoverable={false}
          loading={false}
          size="default"
          type="default"
        >
          <Button
            type="danger"
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
                  relatedEventName: "show",
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
              this.show.apply(
                this,
                Array.prototype.slice.call(arguments).concat([])
              );
            }.bind(this)}
          >
            危险按钮
          </Button>
        </Card>
        <Modal
          title="Basic Modal"
          okText="确认"
          cancelText="取消"
          visible={__$$eval(() => this.state.isVisible)}
          destroyOnClose={true}
          centered={false}
          closable={true}
          closeIcon=""
          confirmLoading={false}
          forceRender={false}
          keyboard={false}
          mask={true}
          maskClosable={true}
          zIndex={99}
          width=""
          bodyStyle={{}}
          maskStyle={{}}
          wrapClassName=""
          __events={{
            eventDataList: [
              {
                type: "componentEvent",
                name: "onCancel",
                relatedEventName: "hide",
              },
              {
                type: "componentEvent",
                name: "onOk",
                relatedEventName: "hide",
              },
            ],
            eventList: [
              {
                name: "afterClose",
                templete:
                  "onCancel(${extParams}){\n// 完全关闭后的回调\nconsole.log('afterClose');}",
                disabled: false,
              },
              {
                name: "onCancel",
                template:
                  "onCancel(${extParams}){\n// 点击遮罩层或右上角叉或取消按钮的回调\nconsole.log('onCancel');}",
                disabled: true,
              },
              {
                name: "onOk",
                template:
                  "onOk(${extParams}){\n// 点击确定回调\nconsole.log('onOk');}",
                disabled: true,
              },
            ],
          }}
          onCancel={function () {
            this.hide.apply(
              this,
              Array.prototype.slice.call(arguments).concat([])
            );
          }.bind(this)}
          onOk={function () {
            this.hide.apply(
              this,
              Array.prototype.slice.call(arguments).concat([])
            );
          }.bind(this)}
        >
          <Spin
            size="large"
            tip="loading..."
            delay={0}
            spinning={false}
            wrapperClassName=""
          >
            <Result
              status="success"
              title="Success!"
              subTitle="Order number: 123"
            />
          </Spin>
        </Modal>
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
