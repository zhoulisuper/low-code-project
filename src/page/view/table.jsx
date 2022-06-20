// 注意: 出码引擎注入的临时变量默认都以 "__$$" 开头，禁止在搭建的代码中直接访问。
// 例外：react 框架的导出名和各种组件名除外。
import React from "react";

import { Table } from "@alilc/antd-lowcode-materials";

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
      dataSource: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"],
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
          tags: ["loser"],
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
        {
          key: "4",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"],
        },
        {
          key: "5",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
          tags: ["loser"],
        },
        {
          key: "6",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
        {
          key: "7",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"],
        },
        {
          key: "8",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
          tags: ["loser"],
        },
        {
          key: "9",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
      ],
      total: 9,
      currentPage: 1,
      pageSize: 5,
      selectRowId: [],
    };
  }

  $ = () => null;

  $$ = () => [];

  getTable() {
    return [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.length - b.name.length,
        render: (text) => /*#__PURE__*/ React.createElement("a", null, text),
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (_, { tags }) =>
          /*#__PURE__*/ React.createElement(
            React.Fragment,
            null,
            tags.map((tag) => {
              let color = tag.length > 5 ? "#ddd" : "#ddggjj";

              if (tag === "loser") {
                color = "volcano";
              }

              return /*#__PURE__*/ React.createElement(
                "span",
                {
                  color: color,
                  key: tag,
                },
                tag.toUpperCase()
              );
            })
          ),
      },
      {
        title: "Action",
        key: "action",
        render: (text, record, index) =>
          /*#__PURE__*/ React.createElement(
            React.Fragment,
            null,
            /*#__PURE__*/ React.createElement(
              "a",
              {
                "data-index": index,
                onClick: this.testFunc,
              },
              "\u67E5\u770B",
              record.name
            ),
            /*#__PURE__*/ React.createElement("a", null, "\u5220\u9664")
          ),
      },
    ];
  }

  testFunc(e) {
    const { index } = e.target.dataset;
    console.log(index);
    console.log("test aliLowcode func");
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "test-aliLowcode-func",
      },
      this.state.test
    );
  }

  onTableChange(newPagination, filters, sorter) {
    console.log(newPagination, filters, sorter);
    this.setState({
      currentPage: newPagination.current,
    });
  }

  selectChange(newSelectedRowKeys, row) {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    console.log("selectedRowKeys changed: ", row);
    this.setState({
      selectRowId: newSelectedRowKeys,
    });
  }

  componentDidMount() {}

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <div>
        <Table
          dataSource={__$$eval(() => this.state.dataSource)}
          columns={__$$eval(() => this.getTable())}
          rowKey="key"
          pagination={{
            pageSize: __$$eval(() => this.state.pageSize),
            total: __$$eval(() => this.state.total),
            defaultCurrent: __$$eval(() => this.state.currentPage),
            current: __$$eval(() => this.state.currentPage),
            showSizeChanger: false,
            showQuickJumper: false,
            simple: false,
            size: "default",
          }}
          loading={false}
          showHeader={true}
          size="default"
          tableLayout=""
          scroll={{ scrollToFirstRowOnChange: true }}
          rowSelection={{
            type: "checkbox",
            selectedRowKeys: __$$eval(() => this.state.selectRowId),
            onChange: function () {
              this.selectChange.apply(
                this,
                Array.prototype.slice.call(arguments).concat([])
              );
            }.bind(this),
          }}
          __events={{
            eventDataList: [
              {
                type: "componentEvent",
                name: "onChange",
                relatedEventName: "onTableChange",
              },
              {
                type: "componentEvent",
                name: "rowSelection.onChange",
                relatedEventName: "selectChange",
              },
            ],
            eventList: [
              {
                name: "onChange",
                template:
                  "onChange(pagination,filters,sorter,extra,${extParams}){\n// 表格翻页事件\nconsole.log('onChange', pagination);}",
                disabled: true,
              },
              {
                name: "rowSelection.onChange",
                template:
                  "onRowSelectionChange(selectedRowKeys,selectedRows,${extParams}){\n// 选中项发生变化时的回调\nconsole.log('onRowSelectionChange', selectedRowKeys, selectedRows);}",
                disabled: true,
              },
            ],
          }}
          onChange={function () {
            this.onTableChange.apply(
              this,
              Array.prototype.slice.call(arguments).concat([])
            );
          }.bind(this)}
          title=""
          footer=""
        />
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
