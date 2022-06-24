// 注意: 出码引擎注入的临时变量默认都以 "__$$" 开头，禁止在搭建的代码中直接访问。
// 例外：react 框架的导出名和各种组件名除外。
import React from "react";

import {
  Form,
  Input,
  Radio,
  Checkbox,
  Select,
  Cascader,
  DatePicker,
  TimePicker,
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

    this.state = {
      formData: {
        code: "22",
        name: "44",
        sex: 1,
        timer: [2],
        brand: 2,
        category: ["zhejiang", "hangzhou", "xihu"],
        date: new Date(),
        time: undefined,
      },
      brandList: [
        {
          value: 1,
          label: "AAA",
        },
        {
          value: 2,
          label: "BBB",
        },
        {
          value: 3,
          label: "CCC",
        },
        {
          value: 4,
          label: "DDD",
        },
      ],
      timerList: [
        {
          value: 1,
          label: "每天",
        },
        {
          value: 2,
          label: "每周",
        },
        {
          value: 3,
          label: "每月",
        },
        {
          value: 4,
          label: "每年",
        },
      ],
      sexList: [
        {
          value: 1,
          label: "男",
        },
        {
          value: 2,
          label: "女",
        },
      ],
      options: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          children: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children: [
                {
                  value: "xihu",
                  label: "West Lake",
                },
              ],
            },
          ],
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men",
                },
              ],
            },
          ],
        },
      ],
    };
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
    console.log(this.state.formData);
  }

  onReset() {
    this.setState({
      formData: {
        code: "",
        name: "",
        sax: "",
        timer: "",
        brand: "",
      },
    });
  }

  onValuesChange(v, all) {
    let key = Object.keys(v)[0];

    switch (key) {
      case "code":
        this.setState({
          formData: Object.assign({}, this.state.formData, {
            code: v[key].target.value,
          }),
        });
        break;

      case "name":
        this.setState({
          formData: Object.assign({}, this.state.formData, {
            name: v[key].target.value,
          }),
        });
        break;

      case "sex":
        console.log(v[key].target.value);
        this.setState({
          formData: Object.assign({}, this.state.formData, {
            sex: v[key].target.value,
          }),
        });
        break;

      case "timer":
        this.setState({
          formData: Object.assign({}, this.state.formData, {
            timer: v[key],
          }),
        });
        break;

      case "brand":
        this.setState({
          formData: Object.assign({}, this.state.formData, {
            brand: v[key].value,
          }),
        });
        break;

      case "category":
        this.setState({
          formData: Object.assign({}, this.state.formData, {
            category: v[key],
          }),
        });
        break;

      case "date":
        this.setState({
          formData: Object.assign({}, this.state.formData, {
            date: v[key],
          }),
        });
        break;

      case "time":
        this.setState({
          formData: Object.assign({}, this.state.formData, {
            time: v[key],
          }),
        });
        break;
    }

    console.log(this.state.formData);
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
          onFinish={function () {
            this.onSearch.apply(
              this,
              Array.prototype.slice.call(arguments).concat([])
            );
          }.bind(this)}
          name="basic"
          colon={false}
          hideRequiredMark={false}
          labelAlign="right"
          layout="horizontal"
          preserve={false}
          scrollToFirstError={false}
          size="middle"
          validateMessages={{ required: "'${name}' 不能为空" }}
          __events={{
            eventDataList: [
              {
                type: "componentEvent",
                name: "onValuesChange",
                relatedEventName: "onValuesChange",
              },
              {
                type: "componentEvent",
                name: "onFinish",
                relatedEventName: "onSearch",
              },
            ],
            eventList: [
              {
                name: "onFinish",
                template:
                  "onFinish(values,${extParams}){\n// 提交表单且数据验证成功后回调事件\nconsole.log('onFinish',values);}",
                disabled: true,
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
                disabled: false,
              },
              {
                name: "onValuesChange",
                template:
                  "onValuesChange(changedValues,allValues,${extParams}){\n// 字段值更新时触发回调事件\nconsole.log('onValuesChange',changedValues,allValues);}",
                disabled: true,
              },
            ],
          }}
          values={__$$eval(() => this.state.formData)}
          validateTrigger="onChange"
        >
          <Form.Item
            label="code"
            name="code"
            labelAlign="right"
            colon={false}
            required={true}
            initialValue={__$$eval(() => this.state.formData.code)}
            noStyle={false}
            valuePropName=""
            requiredobj={{ required: true, message: "code必填啊 " }}
            typeobj={{ type: "", message: "" }}
            lenobj={{ max: "", min: "", message: "" }}
            patternobj={{ pattern: "", message: "" }}
          >
            <Input
              placeholder="请输入"
              allowClear={true}
              bordered={true}
              disabled={false}
              maxLength={10}
              size="middle"
              value={__$$eval(() => this.state.formData.code)}
            />
          </Form.Item>
          <Form.Item
            label="name"
            name="name"
            labelAlign="right"
            colon={false}
            required={true}
            initialValue={__$$eval(() => this.state.formData.name)}
            noStyle={false}
            valuePropName=""
            requiredobj={{ required: true, message: "name有也是必填呀" }}
            typeobj={{ type: "", message: "" }}
            lenobj={{ max: "", min: "", message: "" }}
            patternobj={{ pattern: "", message: "" }}
          >
            <Input
              placeholder="请输入"
              allowClear={true}
              bordered={true}
              disabled={false}
              maxLength={100}
              size="middle"
              value={__$$eval(() => this.state.formData.name)}
            />
          </Form.Item>
          <Form.Item
            label="性别"
            name="sex"
            labelAlign="right"
            colon={false}
            required={true}
            initialValue={__$$eval(() => this.state.formData.sex)}
            noStyle={false}
            valuePropName=""
            requiredobj={{ required: true, message: "必须" }}
            typeobj={{ type: "", message: "" }}
            lenobj={{ max: "", min: "", message: "" }}
            patternobj={{ pattern: "", message: "" }}
          >
            <Radio.Group
              options={__$$eval(() => this.state.sexList)}
              defaultValue=""
              value={__$$eval(() => this.state.formData.sex)}
              disabled={false}
              name="sex"
              optionType="default"
              size="middle"
              buttonStyle="outline"
            />
          </Form.Item>
          <Form.Item
            label="循环周期"
            name="timer"
            labelAlign="right"
            colon={false}
            required={true}
            initialValue={__$$eval(() => this.state.formData.timer)}
            noStyle={false}
            valuePropName=""
            requiredobj={{ required: true, message: "" }}
            typeobj={{ type: "", message: "" }}
            lenobj={{ max: "", min: "", message: "" }}
            patternobj={{ pattern: "", message: "" }}
          >
            <Checkbox.Group
              options={__$$eval(() => this.state.timerList)}
              defaultValue={[]}
              value={__$$eval(() => this.state.formData.timer)}
              disabled={false}
              name="timer"
            />
          </Form.Item>
          <Form.Item
            label="品牌"
            name="brand"
            labelAlign="right"
            colon={false}
            required={true}
            initialValue={__$$eval(() => this.state.formData.brand)}
            noStyle={false}
            valuePropName=""
            requiredobj={{ required: true, message: "" }}
            typeobj={{ type: "", message: "" }}
            lenobj={{ max: "", min: "", message: "" }}
            patternobj={{ pattern: "", message: "" }}
          >
            <Select
              style={{ width: 200 }}
              options={__$$eval(() => this.state.brandList)}
              allowClear={true}
              autoFocus={false}
              defaultActiveFirstOption={false}
              disabled={false}
              labelInValue={true}
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
              mode="single"
              value={__$$eval(() => this.state.formData.brand)}
              defaultValue={__$$eval(() => this.state.formData.brand)}
            />
          </Form.Item>
          <Form.Item
            label="分类"
            name="category"
            labelAlign="right"
            colon={false}
            required={true}
            initialValue={__$$eval(() => this.state.formData.category)}
            noStyle={false}
            valuePropName=""
            requiredobj={{ required: true, message: "分类" }}
            typeobj={{ type: "", message: "" }}
            lenobj={{ max: "", min: "", message: "" }}
            patternobj={{ pattern: "", message: "" }}
          >
            <Cascader
              options={__$$eval(() => this.state.options)}
              defaultValue={__$$eval(() => this.state.formData.category)}
              value={__$$eval(() => this.state.formData.category)}
              allowClear={true}
              autoFocus={false}
              bordered={true}
              changeOnSelect={true}
              disabled={false}
              expandTrigger="click"
              notFoundContent=""
              placeholder=""
              popupClassName=""
              popupPlacement="bottomLeft"
              popupVisible={false}
              showSearch={true}
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="date"
            name="date"
            labelAlign="right"
            colon={false}
            required={true}
            initialValue={__$$eval(() => this.state.formData.date)}
            noStyle={false}
            valuePropName=""
            requiredobj={{ required: true, message: "" }}
            typeobj={{ type: "", message: "" }}
            lenobj={{ max: "", min: "", message: "" }}
            patternobj={{ pattern: "", message: "" }}
          >
            <DatePicker
              size="middle"
              format="YYYY-MM-DD"
              allowClear={true}
              bordered={true}
              showToday={true}
              autoFocus={false}
              disabled={false}
              inputReadOnly={false}
              showTime={false}
              defaultValue={__$$eval(() => this.state.formData.date)}
              value={__$$eval(() => this.state.formData.date)}
              picker="date"
              placeholder="选择日期"
            />
          </Form.Item>
          <Form.Item
            label="表单项"
            name="time"
            labelAlign="right"
            colon={false}
            required={true}
            initialValue={__$$eval(() => this.state.formData.time)}
            noStyle={false}
            valuePropName=""
            requiredobj={{ required: true, message: "" }}
            typeobj={{ type: "", message: "" }}
            lenobj={{ max: "", min: "", message: "" }}
            patternobj={{ pattern: "", message: "" }}
          >
            <TimePicker
              allowClear={true}
              autoFocus={false}
              bordered={true}
              clearText="删除"
              disabled={false}
              format=""
              hideDisabledOptions={false}
              hourStep={1}
              inputReadOnly={false}
              minuteStep={15}
              open={false}
              popupClassName=""
              secondStep={10}
              use12Hours={false}
              showNow={false}
              defaultValue={__$$eval(() => this.state.formData.time)}
              value={__$$eval(() => this.state.formData.time)}
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
            >
              提交
            </Button>
            <Button
              style={{ marginLeft: 20 }}
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
              取消
            </Button>
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
