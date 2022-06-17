// 注意: 出码引擎注入的临时变量默认都以 "__$$" 开头，禁止在搭建的代码中直接访问。
// 例外：react 框架的导出名和各种组件名除外。
import React from "react";

import {
  Form,
  Input,
  Select,
  Button,
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

    this.state = { hello: "Hello AliLowCode", code: "", name: "" };
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

  onSearch() {
    console.log("search");
    console.log(this.state.code, this.state.name);
  }

  onReset() {
    console.log("onReset");
    console.log(this.state.code, this.state.name);
  }

  onValuesChange() {
    console.log("onValuesChange");
  }

  onFieldsChange() {
    console.log("onFieldsChange");
  }

  componentDidMount() {}

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          onValuesChange={function () {
            this.onValuesChange.apply(
              this,
              Array.prototype.slice.call(arguments).concat([])
            );
          }.bind(this)}
          name="zl-demo"
          colon={false}
          hideRequiredMark={false}
          labelAlign="right"
          layout="inline"
          preserve={false}
          scrollToFirstError={false}
          size="middle"
          validateMessages={{ required: "'${name}' 不能为空" }}
          values={null}
          __events={{
            eventDataList: [
              {
                type: "componentEvent",
                name: "onValuesChange",
                relatedEventName: "onValuesChange",
              },
              {
                type: "componentEvent",
                name: "onFieldsChange",
                relatedEventName: "onFieldsChange",
              },
            ],
            eventList: [
              {
                name: "onFinish",
                template:
                  "onFinish(values,${extParams}){\n// 提交表单且数据验证成功后回调事件\nconsole.log('onFinish',values);}",
                disabled: false,
              },
              {
                name: "onFinishFailed",
                template:
                  "onFinishFailed({values,errorFields,outOfDate},${extParams}){\n// 提交表单且数据验证失败后回调事件\nconsole.log('onFinishFailed',values, errorFields, outOfDate);}",
                disabled: false,
              },
              {
                name: "onFieldsChange",
                template:
                  "onFieldsChange(changedFields,allFields,${extParams}){\n// 字段更新时触发回调事件\nconsole.log('onFieldsChange',changedFields,allFields);}",
                disabled: true,
              },
              {
                name: "onValuesChange",
                template:
                  "onValuesChange(changedValues,allValues,${extParams}){\n// 字段值更新时触发回调事件\nconsole.log('onValuesChange',changedValues,allValues);}",
                disabled: true,
              },
            ],
          }}
          onFieldsChange={function () {
            this.onFieldsChange.apply(
              this,
              Array.prototype.slice.call(arguments).concat([])
            );
          }.bind(this)}
        >
          <Form.Item
            label="商品编码"
            name={__$$eval(() => this.state.code)}
            initialValue=""
            labelAlign="right"
            colon={false}
            required={false}
            noStyle={false}
            valuePropName=""
            requiredobj={{ required: "", message: "" }}
            typeobj={{ type: "string", message: "" }}
            lenobj={{ max: "", min: "", message: "" }}
            patternobj={{ pattern: "", message: "" }}
          >
            <Input
              placeholder="shjhadas"
              allowClear={true}
              bordered={true}
              disabled={false}
              maxLength={100}
              size="middle"
              defaultValue={__$$eval(() => this.state.code)}
              value={__$$eval(() => this.state.code)}
            />
          </Form.Item>
          <Form.Item
            label="商品名称"
            name={__$$eval(() => this.state.name)}
            labelAlign="right"
            colon={false}
            required={false}
            initialValue=""
            noStyle={false}
            valuePropName=""
            requiredobj={{ required: "", message: "" }}
            typeobj={{ type: "", message: "" }}
            lenobj={{ max: "", min: "", message: "" }}
            patternobj={{ pattern: "", message: "" }}
          >
            <Select
              style={{ width: 200 }}
              options={[
                { label: "A", value: "A" },
                { label: "B", value: "B" },
                { label: "C", value: "C" },
              ]}
              allowClear={true}
              autoFocus={false}
              defaultActiveFirstOption={false}
              disabled={false}
              labelInValue={false}
              notFoundContent=""
              placeholder=""
              showArrow={true}
              showSearch={true}
              size="middle"
              loading={false}
              bordered={true}
              filterOption={true}
              optionFilterProp="value"
              tokenSeparators={[]}
              defaultValue={__$$eval(() => this.state.name)}
              value={__$$eval(() => this.state.name)}
              mode="single"
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 6 }}
            name=""
            labelAlign="right"
            colon={false}
            required={false}
            initialValue=""
            noStyle={false}
            valuePropName=""
            requiredobj={{ required: "", message: "" }}
            typeobj={{ type: "", message: "" }}
            lenobj={{ max: "", min: "", message: "" }}
            patternobj={{ pattern: "", message: "" }}
          >
            <Button
              type="primary"
              htmlType="submit"
              size="middle"
              shape="default"
              icon=""
              block={false}
              danger={false}
              ghost={false}
              disabled={false}
              __events={{
                eventDataList: [
                  {
                    type: "componentEvent",
                    name: "onClick",
                    relatedEventName: "onSearch",
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
                this.onSearch.apply(
                  this,
                  Array.prototype.slice.call(arguments).concat([])
                );
              }.bind(this)}
            >
              搜索
            </Button>
          </Form.Item>
          <Button
            style={{ marginLeft: 20 }}
            htmlType="reset"
            size="middle"
            shape="default"
            icon=""
            block={false}
            danger={false}
            ghost={false}
            disabled={false}
            __events={{
              eventDataList: [
                {
                  type: "componentEvent",
                  name: "onClick",
                  relatedEventName: "onReset",
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
              this.onReset.apply(
                this,
                Array.prototype.slice.call(arguments).concat([])
              );
            }.bind(this)}
          >
            重置
          </Button>
        </Form>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          onValuesChange={function () {
            const self = this;

            try {
              return function onValuesChange(changedValues, allValues) {
                console.log("onValuesChange", changedValues, allValues);
              }.apply(self, arguments);
            } catch (e) {
              console.log("call function which parsed by lowcode failed: ", e);
              return e.message;
            }
          }}
          onFinish={function () {
            const self = this;

            try {
              return function onFinish(values) {
                console.log("onFinish", values);
              }.apply(self, arguments);
            } catch (e) {
              console.log("call function which parsed by lowcode failed: ", e);
              return e.message;
            }
          }}
          onFinishFailed={function () {
            const self = this;

            try {
              return function onFinishFailed({
                values,
                errorFields,
                outOfDate,
              }) {
                console.log("onFinishFailed", values, errorFields, outOfDate);
              }.apply(self, arguments);
            } catch (e) {
              console.log("call function which parsed by lowcode failed: ", e);
              return e.message;
            }
          }}
          name="basic"
          colon={false}
          hideRequiredMark={false}
          labelAlign="right"
          layout="horizontal"
          preserve={false}
          scrollToFirstError={false}
          size="middle"
          validateMessages={{ required: "'${name}' 不能为空" }}
        >
          <Form.Item
            label="选项"
            name="optionTest"
            initialValue="A"
            labelAlign="right"
            colon={false}
            required={false}
            noStyle={false}
            valuePropName=""
            requiredobj={{ required: "", message: "" }}
            typeobj={{ type: "", message: "" }}
            lenobj={{ max: "", min: "", message: "" }}
            patternobj={{ pattern: "", message: "" }}
          >
            <Input
              placeholder="请输入"
              allowClear={false}
              bordered={false}
              disabled={false}
              maxLength={0}
              size="middle"
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 6 }}
            name=""
            labelAlign="right"
            colon={false}
            required={false}
            initialValue=""
            noStyle={false}
            valuePropName=""
            requiredobj={{ required: null, message: null }}
            typeobj={{ type: null, message: null }}
            lenobj={{ max: null, min: null, message: null }}
            patternobj={{ pattern: null, message: null }}
          >
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button style={{ marginLeft: 20 }}>取消</Button>
          </Form.Item>
        </Form>
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
