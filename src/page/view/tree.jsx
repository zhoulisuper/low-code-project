// 注意: 出码引擎注入的临时变量默认都以 "__$$" 开头，禁止在搭建的代码中直接访问。
// 例外：react 框架的导出名和各种组件名除外。
import React from "react";

import { Card, Tree } from "@alilc/antd-lowcode-materials";

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
      hello: "Hello AliLowCode",
      treeData: [
        {
          title: "Expand to load",
          key: "0",
        },
        {
          title: "Expand to load",
          key: "1",
        },
        {
          title: "Tree Node",
          key: "2",
          isLeaf: true,
        },
      ],
    };
  }

  $ = () => null;

  $$ = () => [];


  updateTreeData(list, key, children) {
    let res =  list.map((node) => {
        if (node.key === key) {
          return { ...node, children };
        }
  
        if (node.children) {
          return {
            ...node,
            children: this.updateTreeData(node.children, key, children),
          };
        }
        return node
      });
     return res
  }

  loadData({ key, children }) {
    
    return new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }

      setTimeout(() => {
         const res =  this.updateTreeData(this.state.treeData, key, [
            {
              title: "Child Node",
              key: `${key}-0`,
            },
            {
              title: "Child Node",
              key: `${key}-1`,
            },
          ])
        this.setState({
            treeData: res,
          });
        
        resolve();
      }, 1000);
    });
  }

  componentDidMount() {}

  render() {
    const __$$context = this._context || this;
    const { state } = __$$context;
    return (
      <div>
        <Card
          title=""
          bordered={false}
          hoverable={false}
          loading={false}
          size="default"
          type="default"
        >
          <Tree
            defaultExpandAll={false}
            autoExpandParent={false}
            blockNode={false}
            checkable={false}
            checkStrictly={false}
            defaultExpandParent={false}
            disabled={false}
            draggable={false}
            multiple={false}
            selectable={true}
            showIcon={false}
            virtual={true}
            loadData={function () {
              return this.loadData.apply(
                this,
                Array.prototype.slice.call(arguments).concat([])
              );
            }.bind(this)}
            treeData={__$$eval(() => this.state.treeData)}
          />
        </Card>
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
