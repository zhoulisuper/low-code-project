// 注意: 出码引擎注入的临时变量默认都以 "__$$" 开头，禁止在搭建的代码中直接访问。
// 例外：react 框架的导出名和各种组件名除外。
import React from "react";

import {
  Card,
  Row,
  Col,
  Form,
  Input,
  Button,
  Typography,
  Switch,
  Breadcrumb,
  Table,
} from "@alilc/antd-lowcode-materials";

import { createFetchHandler as __$$createFetchRequestHandler } from "@alilc/lowcode-datasource-fetch-handler";

import { create as __$$createDataSourceEngine } from "@alilc/lowcode-datasource-engine/runtime";

import utils, { RefsManager } from "../../utils";

import * as __$$i18n from "../../i18n";

import "./index.css";

import moment from "moment"
window.antd = require('antd')
window.icons = require('@ant-design/icons')

class $$Page extends React.Component {
  _context = this;

  _dataSourceConfig = this._defineDataSourceConfig();
  _dataSourceEngine = __$$createDataSourceEngine(this._dataSourceConfig, this, {
    runtimeConfig: true,
    requestHandlersMap: { fetch: __$$createFetchRequestHandler() },
  });

  get dataSourceMap() {
    return this._dataSourceEngine.dataSourceMap || {};
  }

  reloadDataSource = async () => {
    await this._dataSourceEngine.reloadDataSource();
  };

  constructor(props, context) {
    super(props);

    this.utils = utils;

    this._refsManager = new RefsManager();

    __$$i18n._inject2(this);

    this.state = {
      originData: {},
      paging: {
        current: 1,
        pageSize: 10,
        total: 0,
      },
      expandedRowKeys: [],
    };
  }

  $ = (refName) => {
    return this._refsManager.get(refName);
  };

  $$ = (refName) => {
    return this._refsManager.getAll(refName);
  };

  _defineDataSourceConfig() {
    const _this = this;
    return {
      list: [
        {
          type: "fetch",
          isInit: function () {
            return true;
          },
          options: function () {
            return {
              params: {},
              method: "GET",
              isCors: true,
              timeout: 5000,
              headers: {},
              uri: "https://org.ttcdw.cn/org/api/v1/assess/template/allcontent?templateId=607004954816184320&_=1656919116160&orgId=529144888941436928",
            };
          },
          id: "getAllContent",
          shouldFetch: function () {
            console.log("should fetch.....");
            return true;
          },
          dataHandler: function (res) {
            return res.data;
          },
        },
      ],
    };
  }

  testFunc() {
    const { EditOutlined } = window.icons;
    return /*#__PURE__*/ React.createElement(
      React.Fragment,
      null,
      /*#__PURE__*/ React.createElement(EditOutlined, null),
      "\u8003\u6838\u6A21\u7248"
    );
  }

  onNameChange(e) {
    this.setState(
      Object.assign(this.state.originData, {
        name: e.target.value,
      })
    );
  }

  data(){
    const data = [];

    for (let i = 0; i < 3; ++i) {
        data.push(this.state.originData.segmentList[1].itemsList[i]);
    }
    console.log(data)
    return data
}
// getData(){
//     return JSON.parse(JSON.stringify(this.state.originData.segmentList[1].itemsList))
// }

  expandedRowRender({itemsList}) {
    console.log(itemsList, "itemsList");
    // const data = JSON.parse(JSON.stringify(itemsList))
    const { Badge, Dropdown, Menu, Space, Table, Tag, Button } = window.antd;
    const {
      DownOutlined,
      CaretDownOutlined,
      EditOutlined,
      PlusOutlined,
      DeleteOutlined,
    } = window.icons;

    const menuClick = (v, row) => {
      switch (v.key) {
        case "publish":
          console.log(v.key, row);
          break;

        case "view":
          console.log(v.key, row);
          break;

        case "copy":
          console.log(v.key, row);
          break;

        case "delete":
          console.log(v.key, row);
          break;
      }
    };

    const thirdRender = ({ contentList }) => {
      console.log(contentList, "contentList");
      const { Badge, Space, Table, Tag, Button } = window.antd;
      const { EditOutlined, DeleteOutlined } = window.icons;

      const menuClick = (v, row) => {
        switch (v.key) {
          case "publish":
            console.log(v.key, row);
            break;

          case "view":
            console.log(v.key, row);
            break;

          case "copy":
            console.log(v.key, row);
            break;

          case "delete":
            console.log(v.key, row);
            break;
        }
      };

      const columns = [
        {
          dataIndex: "name",
        },
        {
          dataIndex: "courseNum",
          render: (text, record, index) => {
            return `课程数：${text}`;
          },
        },
        {
          dataIndex: "chooseNumTimes",
          render: (text) => {
            return /*#__PURE__*/ React.createElement(
              "span",
              null,
              /*#__PURE__*/ React.createElement(Badge, {
                status: "success",
              }),
              "\u603B\u65F6\u957F\uFF1A",
              text,
              "\u5206\u949F "
            );
          },
        },
        {
          title: "操作",
          dataIndex: "operation",
          width: "10%",
          key: "operation",
          render: (text, record, index) =>
            /*#__PURE__*/ React.createElement(
              Space,
              null,
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  size: "small",
                },
                " \u8BFE\u7A0B\u7BA1\u7406"
              ),
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  size: "small",
                  onClick: (e) => {
                    this.onEdit(e, record);
                  },
                },
                /*#__PURE__*/ React.createElement(EditOutlined, null)
              ),
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  size: "small",
                  onClick: (e) => {
                    this.onEdit(e, record);
                  },
                },
                /*#__PURE__*/ React.createElement(DeleteOutlined, null)
              )
            ),
        },
      ];
      return /*#__PURE__*/ React.createElement(Table, {
        columns: columns,
        dataSource: contentList,
        pagination: false,
        showHeader: false,
      });
    };


    const columns = [
      {
        dataIndex: "title",
        render: (text, record, index) => {
          return /*#__PURE__*/ React.createElement(
            "span",
            null,
            record.type == 1
              ? /*#__PURE__*/ React.createElement(
                  Tag,
                  {
                    color: "#aaa",
                  },
                  "\u5FC5\u4FEE"
                )
              : /*#__PURE__*/ React.createElement(
                  Tag,
                  {
                    color: "#f50",
                  },
                  "\u7814\u8BA8"
                ),
            text
          );
        },
      },
      {
        dataIndex: "assessNumTimes",
        render: (text, record, index) => {
          return `考核数量：${text}分钟`;
        },
      },
      {
        dataIndex: "chooseNumTimes",
        render: (text) => {
          return /*#__PURE__*/ React.createElement(
            "span",
            null,
            /*#__PURE__*/ React.createElement(Badge, {
              status: "success",
            }),
            "\u5DF2\u5206\u914D\uFF1A",
            text,
            "\u5206\u949F "
          );
        },
      },
      {
        dataIndex: "ratio",
        render: (text) => {
          return `权重：${text}`;
        },
      },
      {
        title: "操作",
        dataIndex: "operation",
        width: "10%",
        key: "operation",
        render: (text, record, index) =>
          /*#__PURE__*/ React.createElement(
            Space,
            null,
            /*#__PURE__*/ React.createElement(
              Dropdown,
              {
                overlay: /*#__PURE__*/ React.createElement(
                  Menu,
                  {
                    onClick: (e) => {
                      menuClick(e, record);
                    },
                  },
                  /*#__PURE__*/ React.createElement(
                    Menu.Item,
                    {
                      key: "publish",
                    },
                    "\u53D1\u5E03"
                  ),
                  /*#__PURE__*/ React.createElement(
                    Menu.Item,
                    {
                      key: "view",
                    },
                    "\u9884\u89C8"
                  ),
                  /*#__PURE__*/ React.createElement(
                    Menu.Item,
                    {
                      key: "copy",
                    },
                    "\u590D\u5236\u8BFE\u7A0BID"
                  ),
                  /*#__PURE__*/ React.createElement(
                    Menu.Item,
                    {
                      key: "delete",
                    },
                    "\u5220\u9664"
                  )
                ),
                arrow: true,
              },
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  size: "small",
                },
                "  ",
                /*#__PURE__*/ React.createElement(PlusOutlined, null),
                "\u8BFE\u7A0B\u6A21\u7248",
                /*#__PURE__*/ React.createElement(CaretDownOutlined, null)
              )
            ),
            /*#__PURE__*/ React.createElement(
              Button,
              {
                size: "small",
                onClick: (e) => {
                  this.onEdit(e, record);
                },
              },
              /*#__PURE__*/ React.createElement(EditOutlined, null)
            ),
            /*#__PURE__*/ React.createElement(
              Button,
              {
                size: "small",
                onClick: (e) => {
                  this.onEdit(e, record);
                },
              },
              /*#__PURE__*/ React.createElement(DeleteOutlined, null)
            )
          ),
      },
    ];
    return /*#__PURE__*/ React.createElement(Table, {
      columns: columns,
      dataSource: this.data(),
      pagination: false,
      showHeader: false,
      rowKey:"id",
      expandable: {
        expandedRowRender: thirdRender,
      },
    });
  }

  getTableColumns() {
    const { Button, Space, Dropdown, Menu, Tag } = window.antd;
    const { CaretDownOutlined, EditOutlined, PlusOutlined, DeleteOutlined } =
      window.icons;

    const menuClick = (v, row) => {
      switch (v.key) {
        case "publish":
          console.log(v.key, row);
          break;

        case "view":
          console.log(v.key, row);
          break;

        case "copy":
          console.log(v.key, row);
          break;

        case "delete":
          console.log(v.key, row);
          break;
      }
    };

    return [
      {
        title: "名称",
        width: "10%",
        dataIndex: "name",
      },
      {
        title: "时长",
        dataIndex: "createTime",
        width: "60%",
        render: (text, record, index) => {
          return `${moment(record.createTime).format("YYYY-MM-DD")}-${moment(
            record.endTime
          ).format("YYYY-MM-DD")}`;
        },
      },
      {
        title: "类型",
        dataIndex: "type",
        width: "20%",
        render: (text, record, index) => {
          return text == 0
            ? /*#__PURE__*/ React.createElement(
                Tag,
                {
                  color: "#aaa",
                },
                "\u81EA\u7531\u6A21\u5F0F"
              )
            : /*#__PURE__*/ React.createElement(
                Tag,
                {
                  color: "#f50",
                },
                "\u95EF\u5173\u6A21\u5F0F"
              );
        },
      },
      {
        title: "操作",
        dataIndex: "operation",
        width: "10%",
        key: "operation",
        render: (text, record, index) =>
          /*#__PURE__*/ React.createElement(
            Space,
            null,
            /*#__PURE__*/ React.createElement(
              Dropdown,
              {
                overlay: /*#__PURE__*/ React.createElement(
                  Menu,
                  {
                    onClick: (e) => {
                      menuClick(e, record);
                    },
                  },
                  /*#__PURE__*/ React.createElement(
                    Menu.Item,
                    {
                      key: "publish",
                    },
                    "\u53D1\u5E03"
                  ),
                  /*#__PURE__*/ React.createElement(
                    Menu.Item,
                    {
                      key: "view",
                    },
                    "\u9884\u89C8"
                  ),
                  /*#__PURE__*/ React.createElement(
                    Menu.Item,
                    {
                      key: "copy",
                    },
                    "\u590D\u5236\u8BFE\u7A0BID"
                  ),
                  /*#__PURE__*/ React.createElement(
                    Menu.Item,
                    {
                      key: "delete",
                    },
                    "\u5220\u9664"
                  )
                ),
                arrow: true,
              },
              /*#__PURE__*/ React.createElement(
                Button,
                {
                  size: "small",
                },
                "  ",
                /*#__PURE__*/ React.createElement(PlusOutlined, null),
                "\u8003\u6838\u9879",
                /*#__PURE__*/ React.createElement(CaretDownOutlined, null)
              )
            ),
            /*#__PURE__*/ React.createElement(
              Button,
              {
                size: "small",
                onClick: (e) => {
                  this.onEdit(e, record);
                },
              },
              /*#__PURE__*/ React.createElement(EditOutlined, null)
            ),
            /*#__PURE__*/ React.createElement(
              Button,
              {
                size: "small",
                onClick: (e) => {
                  this.onEdit(e, record);
                },
              },
              /*#__PURE__*/ React.createElement(DeleteOutlined, null)
            )
          ),
      },
    ];
  }

  componentDidMount() {
    this._dataSourceEngine.reloadDataSource();

    this.dataSourceMap["getAllContent"].load().then((res) => {
      // let list = res.data.data.segmentList;
      // list.forEach(item => {
      //   item.itemsList && item.itemsList.forEach(i => {
      //     i.children = i.contentList
      //   })
      //   item.children = item.itemsList || [];
      // })
      // this.setState({
      //   originData: Object.assign({}, res.data.data, {"segmentList": list }),
      // })
      this.setState({
        originData: res.data.data,
      });
    });
  }

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <div
        ref={this._refsManager.linkRef("outerView")}
        style={{ height: "100%" }}
      >
        <Card
          title={
            <Breadcrumb
              routes={[
                {
                  path: "javascript:;",
                  breadcrumbName: __$$eval(() => this.testFunc()),
                },
                { path: "javascript:;", breadcrumbName: "编辑模版" },
              ]}
              itemRender={(route, params, routes, paths) =>
                ((__$$context) => (
                  <Typography.Link href={__$$eval(() => route.path)}>
                    {__$$eval(() => route.breadcrumbName)}
                  </Typography.Link>
                ))(
                  __$$createChildContext(__$$context, {
                    route,
                    params,
                    routes,
                    paths,
                  })
                )
              }
            />
          }
          bordered={false}
          hoverable={false}
          loading={false}
          size="default"
          type="default"
        >
          <Row
            align="top"
            justify="start"
            wrap={false}
            h-gutter={20}
            gutter={[20, 0]}
          >
            <Col span={10} order={0}>
              <Form.Item
                label="考核模版名称"
                labelAlign="right"
                colon={true}
                required={false}
                noStyle={false}
                valuePropName="value"
                requiredobj={{ required: "", message: "" }}
                typeobj={{ type: "", message: "" }}
                lenobj={{ max: "", min: "", message: "" }}
                patternobj={{ pattern: "", message: "" }}
                style={{ fontWeight: 500, fontSize: "16px" }}
              >
                <Input
                  placeholder="请输入"
                  bordered={true}
                  disabled={false}
                  size="middle"
                  addonAfter=""
                  value={__$$eval(() => this.state.originData.name)}
                  __events={{
                    eventDataList: [
                      {
                        type: "componentEvent",
                        name: "onChange",
                        relatedEventName: "onNameChange",
                      },
                    ],
                    eventList: [
                      {
                        name: "onChange",
                        template:
                          "onChange(event,${extParams}){\n// 输入框内容变化时的回调\nconsole.log('onChange',event);}",
                        disabled: true,
                      },
                      {
                        name: "onPressEnter",
                        template:
                          "onPressEnter(event,${extParams}){\n// 按下回车的回调\nconsole.log('onPressEnter',event);}",
                        disabled: false,
                      },
                      {
                        name: "onFocus",
                        template:
                          "onFocus(event,${extParams}){\n// 获取焦点回调\nconsole.log('onFocus',event);}",
                        disabled: false,
                      },
                      {
                        name: "onKeyDown",
                        template:
                          "onKeyDown(event,${extParams}){\n// 按键按下时的回调\nconsole.log('onKeyDown',event);}",
                        disabled: false,
                      },
                      {
                        name: "onKeyPress",
                        template:
                          "onKeyPress(event,${extParams}){\n// 按键按下后的回调\nconsole.log('onKeyPress',event);}",
                        disabled: false,
                      },
                      {
                        name: "onKeyUp",
                        template:
                          "onKeyUp(event,${extParams}){\n// 按键释放回调\nconsole.log('onKeyUp',event);}",
                        disabled: false,
                      },
                      {
                        name: "onBlur",
                        template:
                          "onBlur(event,${extParams}){\n// 按键释放回调\nconsole.log('onBlur',event);}",
                        disabled: false,
                      },
                    ],
                  }}
                  onChange={function () {
                    this.onNameChange.apply(
                      this,
                      Array.prototype.slice.call(arguments).concat([])
                    );
                  }.bind(this)}
                  suffix=""
                />
              </Form.Item>
            </Col>
            <Col span={2} order={0}>
              <Button
                type="primary"
                htmlType="button"
                size="middle"
                shape="default"
                icon=""
                block={false}
                danger={false}
                ghost={false}
                disabled={false}
              >
                保存
              </Button>
            </Col>
            <Col span={12} order={0} style={{ textAlign: "right" }}>
              <Button
                type="primary"
                htmlType="button"
                size="middle"
                shape="default"
                icon=""
                block={false}
                danger={false}
                ghost={false}
                disabled={false}
              >
                新建阶段
              </Button>
            </Col>
          </Row>
          <Row align="top" justify="start" wrap={false}>
            <Col span={21} order={0}>
              <Typography.Paragraph
                ellipsis={true}
                code={false}
                copyable={false}
                delete={false}
                disabled={false}
                editable={false}
                mark={false}
                underline={false}
                strong={false}
                type="default"
              >
                * 考核的配置过程：阶段配置-&#62;考核项配置-&#62;考核内容配置
              </Typography.Paragraph>
              <Typography.Paragraph
                ellipsis={true}
                code={false}
                copyable={false}
                delete={false}
                disabled={false}
                editable={false}
                mark={false}
                underline={false}
                strong={false}
              >
                * 开启排序功能后，拖拽阶段、考核项、考核内容模块可以调整顺序
              </Typography.Paragraph>
              <Typography.Paragraph
                ellipsis={true}
                code={false}
                copyable={false}
                delete={false}
                disabled={false}
                editable={false}
                mark={false}
                underline={false}
                strong={false}
              >
                *
                修改考核模板的考核内容后，项目或班级需要重新应用考核模板才能生效
              </Typography.Paragraph>
            </Col>
            <Col span={3} order={0}>
              <Form.Item
                label="排序功能"
                labelAlign="right"
                colon={true}
                required={false}
                noStyle={false}
                valuePropName="value"
                requiredobj={{ required: "", message: "" }}
                typeobj={{ type: "", message: "" }}
                lenobj={{ max: "", min: "", message: "" }}
                patternobj={{ pattern: "", message: "" }}
                style={{ textAlign: "right" }}
              >
                <Switch
                  defaultChecked={true}
                  autoFocus={false}
                  disabled={false}
                  loading={false}
                  size="default"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card
          title=""
          bordered={false}
          hoverable={false}
          loading={false}
          size="default"
          type="default"
        >
          <Table
            dataSource={__$$eval(() => this.state.originData.segmentList)}
            rowKey="id"
            pagination={false}
            loading={false}
            showHeader={false}
            size="default"
            tableLayout=""
            rowSelection={false}
            expandable={{
              expandedRowRender: function () {
                return this.expandedRowRender.apply(
                  this,
                  Array.prototype.slice.call(arguments).concat([])
                );
              }.bind(this),
            }}
            title=""
            columns={__$$eval(() => this.getTableColumns())}
          />
        </Card>
      </div>
    );
  }
}

export default $$Page;

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
