// 注意: 出码引擎注入的临时变量默认都以 "__$$" 开头，禁止在搭建的代码中直接访问。
// 例外：react 框架的导出名和各种组件名除外。
import React from "react";

import {
  Card,
  Row,
  Col,
  Space,
  Button,
  Tabs,
  Tree,
  Form,
  Input,
  Select,
  DatePicker,
  Table,
  Modal,
} from "@alilc/antd-lowcode-materials";

import utils, { RefsManager } from "../../utils";

import * as __$$i18n from "../../i18n";

import "./index.css";

import moment from "moment"



window.antd = require('antd')

class Sample$$Page extends React.Component {
  _context = this;

  constructor(props, context) {
    super(props);

    this.utils = utils;

    this._refsManager = new RefsManager();

    __$$i18n._inject2(this);

    this.state = {
      hello: "Hello AliLowCode",
      formData: {
        name: "",
        status: undefined,
        source: undefined,
        times: [moment().subtract(3, "days"), moment()],
        transcode: undefined,
        courseId: "",
        lecturer: "",
        label: "",
      },
      categoryPlatform: [],
      category: [],
      lastSearchParams: {},
      categoryId: "",
      tabActive: "two",
      statusList: [],
      sourceList: [],
      transcodeList: [],
      list: [],
      paging: {
        current: 1,
        total: 0,
        pageSize: 10,
      },
      selectRowIds: [],
      relationCourseVisible: false,
      modalFormData: {
        courseCode: "",
      },
    };
  }

  $ = (refName) => {
    return this._refsManager.get(refName);
  };

  $$ = (refName) => {
    return this._refsManager.getAll(refName);
  };

  tree(data) {
    let map = {};
    let arr = [];
    data.forEach((item) => {
      item.title = item.name;
      item.key = item.id;
      map[item.id] = item;
    });
    data.forEach((item) => {
      let parent = map[item.parentId];

      if (parent) {
        parent.children || (parent.children = []).push(item);
      } else {
        arr.push(item);
      }
    });
    return arr;
  }

  getTableColumns() {
    const { Button, Space, Dropdown, Menu, Tag } = window.antd;
    // const { CaretDownOutlined, EditOutlined } = window.icons;

    const menuClick = (v, row) => {
      switch (v.key) {
        case "publish":
          console.log(v.key, row.id);
          break;

        case "view":
          console.log(v.key, row.id);
          break;

        case "copy":
          console.log(v.key, row.id);
          break;

        case "delete":
          console.log(v.key, row.id);
          break;
      }
    };

    return [
      {
        title: "课程名称",
        dataIndex: "name",
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: "课程ID",
        dataIndex: "id",
      },
      {
        title: "课程时长",
        dataIndex: "validityEndTime",
        render: (text, record, index) => {
          return text || "--";
        },
      },
      {
        title: "创建时间",
        dataIndex: "createTime",
        render: (text, record, index) => {
          return moment(text).format("YYYY-MM-DD");
        },
      },
      {
        title: "授课讲师",
        dataIndex: "teachers",
        render: (text, record, index) => {
          return text || "--";
        },
      },
      {
        title: "发布状态",
        dataIndex: "publishState",
        render: (text, record, index) => {
          return text == 0
            ? /*#__PURE__*/ React.createElement(
                Tag,
                {
                  color: "#aaa",
                },
                "\u672A\u53D1\u5E03"
              )
            : /*#__PURE__*/ React.createElement(
                Tag,
                {
                  color: "#f50",
                },
                "\u5DF2\u53D1\u5E03"
              );
        },
      },
      {
        title: "操作",
        dataIndex: "operation",
        key: "operation",
        render: (text, record, index) =>
          /*#__PURE__*/ React.createElement(
            Space,
            null,
            /*#__PURE__*/ React.createElement(
              Button,
              {
                size: "small",
                onClick: (e) => {
                  this.onEdit(e, record);
                },
              },
            ),
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
                "\u66F4\u591A",
              )
            )
          ),
      },
    ];
  }

  onFinish() {
    this.$("searchForm")
      .validateFields()
      .then((values) => {
        this.setState(
          {
            lastSearchParams: values,
            formData: values,
          },
          function () {
            this.fetchList();
          }
        );
      });
  }

  onTreeSelect(v) {
    this.setState(
      {
        categoryId: v[0],
      },
      function () {
        console.log(this.state.categoryId, "课程分类");
      }
    );
  }

  disabledDate(current) {
    return current && current < moment().endOf("day");
  }

  onEdit(e, record) {
    console.log("编辑数据", record);
  }

  fetchList() {
    let params = Object.assign({}, this.state.formData, {
      pageNum: this.state.paging.current,
      pageSize: this.state.paging.pageSize,
    });
    console.log(params, "请求接口");
  }

  tabChange(v) {
    this.setState({
      tabActive: v,
    });
  }

  onTableChange(newPagination, filters, sorter) {
    if (Object.keys(newPagination).length) {
      //分页变化
      this.setState(
        {
          paging: { ...newPagination },
        },
        () => {
          this.fetchList();
        }
      );
    }
  }

  rowSelectionChange(newSelectedRowKeys, row) {
    const { message } = window.antd;
    this.setState({
      selectRowIds: newSelectedRowKeys,
    });
    message.info(`selectRowIds${newSelectedRowKeys}`);
  }

  relationCourse() {
    this.setState({
      relationCourseVisible: true,
    });
  }

  onCancel() {
    this.setState({
      relationCourseVisible: false,
    });
  }

  onModalFinish() {
    this.$("modalForm")
      .validateFields()
      .then((values) => {
        console.log(values);
        this.setState({
          modalFormData: values,
        });
      });
  }

  onOk() {
    console.log(this.state.modalFormData, "课程编码");
  }

  exportCourse() {
    console.log(this.state.lastSearchParams, "导出课程参数");
  }

  publishCourse() {
    const { message } = window.antd;

    if (!this.state.selectRowIds.length) {
      message.info("请选择课程");
    }

    console.log(this.state.selectRowIds);
  }

  componentDidMount() {
    const statusArray = [
      {
        label: "全部",
        value: -1,
      },
      {
        label: "已发布",
        value: 1,
      },
      {
        label: "未发布",
        value: 0,
      },
      {
        label: "已下架",
        value: 2,
      },
    ];
    const listArray = [
      {
        id: "553798143458246656",
        name: "思修",
        source: 0,
        duration: "0",
        createTime: 1644219308000,
        transState: "2",
        logoPath: "",
        publishState: "0",
        validity: 0,
        validityEndTime: null,
        isExpire: false,
        platformRange: "1",
        originalId: "-1",
        closedState: "0",
        thirdCourse: 0,
        thirdPlatform: -1,
        thirdPlatformName: null,
        thirdCourseUrl: null,
        teachers: "",
        thirdCourseTeacher: "",
        openCourseFlag: 0,
      },
      {
        id: "55379814345824669956",
        name: "课程",
        source: 0,
        duration: "0",
        createTime: 1644219308000,
        transState: "2",
        logoPath: "",
        publishState: "0",
        validity: 0,
        validityEndTime: null,
        isExpire: false,
        platformRange: "1",
        originalId: "-1",
        closedState: "0",
        thirdCourse: 0,
        thirdPlatform: -1,
        thirdPlatformName: null,
        thirdCourseUrl: null,
        teachers: "",
        thirdCourseTeacher: "",
        openCourseFlag: 0,
      },
    ];
    const treeMap = [
      {
        id: "571904585352839168",
        name: "中医护理",
        parentId: "571899339885318144",
        sorting: 17,
        types: "1",
      },
      {
        id: "571905536272920576",
        name: "化妆品质量与安全",
        parentId: "571903957931462656",
        sorting: 17,
        types: "1",
      },
      {
        id: "571908386323763200",
        name: "机械装备制造技术",
        parentId: "571907078632050688",
        sorting: 17,
        types: "1",
      },
      {
        id: "571918574292373504",
        name: "舞台艺术设计与制作",
        parentId: "571918129524183040",
        sorting: 17,
        types: "1",
      },
      {
        id: "571919840573358080",
        name: "教育与体育大类",
        parentId: "571848169762795520",
        sorting: 17,
        types: "1",
      },
      {
        id: "571920169298104320",
        name: "密码技术应用",
        parentId: "571916177750589440",
        sorting: 17,
        types: "1",
      },
      {
        id: "571925029270802432",
        name: "药膳与食疗",
        parentId: "571922451255332864",
        sorting: 17,
        types: "1",
      },
      {
        id: "591462919456210944",
        name: "休闲农业生产与经营",
        parentId: "591462373076303872",
        sorting: 17,
        types: "1",
      },
      {
        id: "430591148264185856",
        name: "学科知识",
        parentId: "430579626431406080",
        sorting: 18,
        types: "1",
      },
      {
        id: "430611138191220736",
        name: "环境化工",
        parentId: "430609639230857216",
        sorting: 18,
        types: "1",
      },
      {
        id: "430906867001917440",
        name: "爱课程",
        parentId: "0",
        sorting: 18,
        types: "1",
      },
      {
        id: "430909463531945984",
        name: "河南公需课",
        parentId: "430906916101345280",
        sorting: 18,
        types: "1",
      },
      {
        id: "571891688240795648",
        name: "公共管理与服务大类",
        parentId: "571848111761862656",
        sorting: 18,
        types: "1",
      },
      {
        id: "571893479989342208",
        name: "现代农业经营与管理",
        parentId: "571892531648757760",
        sorting: 18,
        types: "1",
      },
      {
        id: "571898657526583296",
        name: "现代农业经济管理",
        parentId: "571896646507909120",
        sorting: 18,
        types: "1",
      },
      {
        id: "571905196865048576",
        name: "公共管理与服务大类",
        parentId: "571848220929110016",
        sorting: 18,
        types: "1",
      },
      {
        id: "571908420536397824",
        name: "工业产品质量检测技术",
        parentId: "571907078632050688",
        sorting: 18,
        types: "1",
      },
      {
        id: "571918593950773248",
        name: "作曲技术",
        parentId: "571918129524183040",
        sorting: 18,
        types: "1",
      },
      {
        id: "571922225165266944",
        name: "公共管理与服务大类",
        parentId: "571848169762795520",
        sorting: 18,
        types: "1",
      },
      {
        id: "571922413589581824",
        name: "工业产品质量检测技术",
        parentId: "571921308990263296",
        sorting: 18,
        types: "1",
      },
      {
        id: "591462936011128832",
        name: "农资营销与服务",
        parentId: "591462373076303872",
        sorting: 18,
        types: "1",
      },
      {
        id: "597315192077287424",
        name: "初中劳动教育",
        parentId: "430591148264185856",
        sorting: 18,
        types: "1",
      },
      {
        id: "597315424932769792",
        name: "初中劳动教育",
        parentId: "430593546504298496",
        sorting: 18,
        types: "1",
      },
      {
        id: "430592908580020224",
        name: "初中艺术（音乐、美术）",
        parentId: "430591148264185856",
        sorting: 19,
        types: "1",
      },
      {
        id: "430593546504298496",
        name: "学科教学",
        parentId: "430579626431406080",
        sorting: 19,
        types: "1",
      },
      {
        id: "430594402195652608",
        name: "初中艺术（音乐、美术）",
        parentId: "430593546504298496",
        sorting: 19,
        types: "1",
      },
      {
        id: "430611179001798656",
        name: "能源材料",
        parentId: "430609639230857216",
        sorting: 19,
        types: "1",
      },
      {
        id: "430906916101345280",
        name: "地方课程",
        parentId: "0",
        sorting: 19,
        types: "1",
      },
      {
        id: "463590666192867328",
        name: "教育部直属机关网上党校",
        parentId: "430906916101345280",
        sorting: 19,
        types: "1",
      },
      {
        id: "571895967945555968",
        name: "皮革制品设计与制作",
        parentId: "571894715937484800",
        sorting: 19,
        types: "1",
      },
      {
        id: "571908457328234496",
        name: "理化测试与质检技术",
        parentId: "571907078632050688",
        sorting: 19,
        types: "1",
      },
      {
        id: "571918613034795008",
        name: "现代魔术设计与表演",
        parentId: "571918129524183040",
        sorting: 19,
        types: "1",
      },
      {
        id: "571999361909682176",
        name: "农村新型经济组织管理",
        parentId: "571896646507909120",
        sorting: 19,
        types: "1",
      },
      {
        id: "591387192375427072",
        name: "公共基础课",
        parentId: "571848111761862656",
        sorting: 19,
        types: "1",
      },
      {
        id: "591399059168739328",
        name: "公共基础课",
        parentId: "571848169762795520",
        sorting: 19,
        types: "1",
      },
      {
        id: "591405284480565248",
        name: "公共基础课",
        parentId: "571848220929110016",
        sorting: 19,
        types: "1",
      },
      {
        id: "430592956066742272",
        name: "初中综合实践活动",
        parentId: "430591148264185856",
        sorting: 20,
        types: "1",
      },
      {
        id: "430594460736741376",
        name: "初中综合实践活动",
        parentId: "430593546504298496",
        sorting: 20,
        types: "1",
      },
      {
        id: "430595174060834816",
        name: "中考",
        parentId: "430579626431406080",
        sorting: 20,
        types: "1",
      },
      {
        id: "430611228447260672",
        name: "矿业工程",
        parentId: "430609639230857216",
        sorting: 20,
        types: "1",
      },
      {
        id: "430909504498618368",
        name: "智慧云研究院课程",
        parentId: "0",
        sorting: 20,
        types: "1",
      },
      {
        id: "498710655465529344",
        name: "2018大学生网络党校",
        parentId: "430906916101345280",
        sorting: 20,
        types: "1",
      },
      {
        id: "585970895148167168",
        name: "内涵建设",
        parentId: "571848111761862656",
        sorting: 20,
        types: "1",
      },
      {
        id: "585976135446028288",
        name: "内涵建设",
        parentId: "571848169762795520",
        sorting: 20,
        types: "1",
      },
      {
        id: "585990140017369088",
        name: "内涵建设",
        parentId: "571848220929110016",
        sorting: 20,
        types: "1",
      },
      {
        id: "430592991076597760",
        name: "高中语文",
        parentId: "430591148264185856",
        sorting: 21,
        types: "1",
      },
      {
        id: "430594501978144768",
        name: "高中语文",
        parentId: "430593546504298496",
        sorting: 21,
        types: "1",
      },
      {
        id: "430598043174486016",
        name: "高考",
        parentId: "430579626431406080",
        sorting: 21,
        types: "1",
      },
      {
        id: "498711210149732352",
        name: "2020“停课不停学”展示课程",
        parentId: "430906916101345280",
        sorting: 21,
        types: "1",
      },
      {
        id: "430593026163138560",
        name: "高中数学",
        parentId: "430591148264185856",
        sorting: 22,
        types: "1",
      },
      {
        id: "430594538380509184",
        name: "高中数学",
        parentId: "430593546504298496",
        sorting: 22,
        types: "1",
      },
      {
        id: "430598644201472000",
        name: "学前教育（学前教育干部）",
        parentId: "430579626431406080",
        sorting: 22,
        types: "1",
      },
      {
        id: "520832007721209856",
        name: "外派储备干部培训",
        parentId: "430906916101345280",
        sorting: 22,
        types: "1",
      },
      {
        id: "571896071528148992",
        name: "首饰设计与制作",
        parentId: "571894715937484800",
        sorting: 22,
        types: "1",
      },
      {
        id: "430593072073990144",
        name: "高中英语",
        parentId: "430591148264185856",
        sorting: 23,
        types: "1",
      },
      {
        id: "430594575882969088",
        name: "高中英语",
        parentId: "430593546504298496",
        sorting: 23,
        types: "1",
      },
      {
        id: "430599667171246080",
        name: "学前教育（教师）",
        parentId: "430579626431406080",
        sorting: 23,
        types: "1",
      },
      {
        id: "575467880620691456",
        name: "国人通内训",
        parentId: "430906916101345280",
        sorting: 23,
        types: "1",
      },
      {
        id: "430593110933028864",
        name: "高中思想政治",
        parentId: "430591148264185856",
        sorting: 24,
        types: "1",
      },
      {
        id: "430594612502249472",
        name: "高中思想政治",
        parentId: "430593546504298496",
        sorting: 24,
        types: "1",
      },
      {
        id: "430599927096459264",
        name: "民办教育",
        parentId: "430579626431406080",
        sorting: 24,
        types: "1",
      },
      {
        id: "430593185286643712",
        name: "高中科学（物理、化学、生物）",
        parentId: "430591148264185856",
        sorting: 25,
        types: "1",
      },
      {
        id: "430594699061288960",
        name: "高中科学（物理、化学、生物）",
        parentId: "430593546504298496",
        sorting: 25,
        types: "1",
      },
      {
        id: "430600169296543744",
        name: "教育史话",
        parentId: "430579626431406080",
        sorting: 25,
        types: "1",
      },
      {
        id: "430593246464761856",
        name: "高中历史与社会（历史、地理）",
        parentId: "430591148264185856",
        sorting: 26,
        types: "1",
      },
      {
        id: "430594733763772416",
        name: "高中历史与社会（历史、地理）",
        parentId: "430593546504298496",
        sorting: 26,
        types: "1",
      },
      {
        id: "430600290773164032",
        name: "比较教育",
        parentId: "430579626431406080",
        sorting: 26,
        types: "1",
      },
      {
        id: "571896057535889408",
        name: "服装陈列与展示设计",
        parentId: "571894831167537152",
        sorting: 26,
        types: "1",
      },
      {
        id: "571896208518250496",
        name: "服装陈列与展示设计",
        parentId: "571894715937484800",
        sorting: 26,
        types: "1",
      },
      {
        id: "430593289169977344",
        name: "高中信息技术",
        parentId: "430591148264185856",
        sorting: 27,
        types: "1",
      },
    ];
    this.setState({
      statusList: [...statusArray],
      sourceList: [...statusArray],
      transcodeList: [...statusArray],
      list: [...listArray],
      categoryPlatform: [...this.tree(treeMap)],
      category: [...this.tree(treeMap)],
    });
  }

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
          <Row align="top" justify="start" wrap={false}>
            <Col
              span={24}
              order={0}
              style={{
                borderBottomWidth: "1px",
                borderBottomColor: "#dddddd",
                borderBottomStyle: "solid",
              }}
            >
              <Space
                align="start"
                direction="horizontal"
                size="middle"
                style={{ marginBottom: "20px" }}
              >
                <Button
                  htmlType="button"
                  size="middle"
                  shape="default"
                  icon=""
                  block={false}
                  danger={false}
                  ghost={false}
                  disabled={false}
                  type="primary"
                >
                  创建课程
                </Button>
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
                  __events={{
                    eventDataList: [
                      {
                        type: "componentEvent",
                        name: "onClick",
                        relatedEventName: "publishCourse",
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
                    this.publishCourse.apply(
                      this,
                      Array.prototype.slice.call(arguments).concat([])
                    );
                  }.bind(this)}
                >
                  批量发布课程
                </Button>
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
                  __events={{
                    eventDataList: [
                      {
                        type: "componentEvent",
                        name: "onClick",
                        relatedEventName: "exportCourse",
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
                    this.exportCourse.apply(
                      this,
                      Array.prototype.slice.call(arguments).concat([])
                    );
                  }.bind(this)}
                >
                  导出课程信息
                </Button>
                <Button
                  htmlType="button"
                  size="middle"
                  shape="default"
                  icon=""
                  block={false}
                  danger={false}
                  ghost={false}
                  disabled={false}
                  type="primary"
                  __events={{
                    eventDataList: [
                      {
                        type: "componentEvent",
                        name: "onClick",
                        relatedEventName: "relationCourse",
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
                    this.relationCourse.apply(
                      this,
                      Array.prototype.slice.call(arguments).concat([])
                    );
                  }.bind(this)}
                >
                  创建关联课程
                </Button>
              </Space>
            </Col>
          </Row>
          <Row
            align="top"
            h-gutter={20}
            gutter={[20, 0]}
            justify="start"
            wrap={false}
          >
            <Col span={6} order={0}>
              <Tabs
                type="line"
                tabs={[
                  { key: "one", tab: "课程类目", disabled: false },
                  { key: "two", tab: "平台课程分类", disabled: false },
                ]}
                animated={true}
                size="default"
                centered={false}
                tabPosition="top"
                keyboard={false}
                __events={{
                  eventDataList: [
                    {
                      type: "componentEvent",
                      name: "onChange",
                      relatedEventName: "tabChange",
                    },
                  ],
                  eventList: [
                    {
                      name: "onChange",
                      template:
                        "onChange(activeKey,${extParams}){\n// 切换面板的回调\nconsole.log('onChange',activeKey);}",
                      disabled: true,
                    },
                    {
                      name: "onEdit",
                      template:
                        "onEdit(targetKey,action,${extParams}){\n// 新增和删除页签的回调\nconsole.log('onEdit',targetKey,action);}",
                      disabled: false,
                    },
                    {
                      name: "onTabClick",
                      template:
                        "onTabClick(key,event,${extParams}){\n// tab 被点击的回调\nconsole.log('onTabClick',key,event);}",
                      disabled: false,
                    },
                    {
                      name: "onTabScroll",
                      template:
                        "onTabScroll({direction},${extParams}){\n// tab 滚动时触\nconsole.log('onTabScroll',direction);}",
                      disabled: false,
                    },
                  ],
                }}
                onChange={function () {
                  this.tabChange.apply(
                    this,
                    Array.prototype.slice.call(arguments).concat([])
                  );
                }.bind(this)}
                defaultActiveKey={__$$eval(() => this.state.tabActive)}
              >
                <Tabs.TabPane key="one" tab="课程类目" disabled={false}>
                  {!!__$$eval(() => this.state.categoryPlatform.length > 0) && (
                    <Tree
                      treeData={__$$eval(() => this.state.category)}
                      defaultExpandAll={true}
                      autoExpandParent={true}
                      blockNode={false}
                      checkable={false}
                      checkStrictly={false}
                      defaultExpandParent={true}
                      disabled={false}
                      draggable={false}
                      multiple={false}
                      selectable={true}
                      showIcon={false}
                      virtual={true}
                      __events={{
                        eventDataList: [
                          {
                            type: "componentEvent",
                            name: "onSelect",
                            relatedEventName: "onTreeSelect",
                          },
                        ],
                        eventList: [
                          {
                            name: "onCheck",
                            template:
                              "onCheck(checkedKeys,event,${extParams}){\n// 点击复选框触发\nconsole.log('onCheck',checkedKeys,event);}",
                            disabled: false,
                          },
                          {
                            name: "onDragEnd",
                            template:
                              "onDragEnd({event,node},${extParams}){\n// dragend 触发时调用\nconsole.log('onDragEnd',event,node);}",
                            disabled: false,
                          },
                          {
                            name: "onDragEnter",
                            template:
                              "onDragEnter({event,node,expandedKeys},${extParams}){\n// dragenter 触发时调用\nconsole.log('onDragEnter',event,node,expandedKeys);}",
                            disabled: false,
                          },
                          {
                            name: "onDragLeave",
                            template:
                              "onDragLeave({event,node},${extParams}){\n// dragleave 触发时调用\nconsole.log('onDragLeave',event,node);}",
                            disabled: false,
                          },
                          {
                            name: "onDragOver",
                            template:
                              "onDragOver({event,node},${extParams}){\n// dragover 触发时调用\nconsole.log('onDragOver',event,node);}",
                            disabled: false,
                          },
                          {
                            name: "onDragStart",
                            template:
                              "onDragStart({event,node},${extParams}){\n// 开始拖拽时调用\nconsole.log('onDragStart',event,node);}",
                            disabled: false,
                          },
                          {
                            name: "onDrop",
                            template:
                              "onDrop({event,node,dragNode,dragNodesKeys},${extParams}){\n// drop 触发时调用\nconsole.log('onDrop',event,node,dragNode,dragNodesKeys);}",
                            disabled: false,
                          },
                          {
                            name: "onExpand",
                            template:
                              "onExpand(expandedKeys,{expanded,node},${extParams}){\n// 展开/收起节点时触发\nconsole.log('onExpand',expandedKeys,expanded,node);}",
                            disabled: false,
                          },
                          {
                            name: "onLoad",
                            template:
                              "onLoad(loadedKeys,{event,node},${extParams}){\n// 节点加载完毕时触发\nconsole.log('onLoad',loadedKeys,event,node);}",
                            disabled: false,
                          },
                          {
                            name: "onRightClick",
                            template:
                              "onRightClick({event,node},${extParams}){\n// 响应右键点击\nconsole.log('onRightClick',event,node);}",
                            disabled: false,
                          },
                          {
                            name: "onSelect",
                            template:
                              "onSelect(selectedKeys,event,${extParams}){\n// 点击树节点触发\nconsole.log('onSelect',selectedKeys,event);}",
                            disabled: true,
                          },
                        ],
                      }}
                      onSelect={function () {
                        this.onTreeSelect.apply(
                          this,
                          Array.prototype.slice.call(arguments).concat([])
                        );
                      }.bind(this)}
                    />
                  )}
                </Tabs.TabPane>
                <Tabs.TabPane key="two" tab="平台课程分类" disabled={false}>
                  {!!__$$eval(() => this.state.category.length > 0) && (
                    <Tree
                      treeData={__$$eval(() => this.state.categoryPlatform)}
                      defaultExpandAll={false}
                      autoExpandParent={true}
                      blockNode={false}
                      checkable={false}
                      checkStrictly={false}
                      defaultExpandParent={false}
                      disabled={false}
                      draggable={false}
                      multiple={false}
                      selectable={true}
                      showIcon={false}
                      virtual={false}
                      __events={{
                        eventDataList: [
                          {
                            type: "componentEvent",
                            name: "onSelect",
                            relatedEventName: "onTreeSelect",
                          },
                        ],
                        eventList: [
                          {
                            name: "onCheck",
                            template:
                              "onCheck(checkedKeys,event,${extParams}){\n// 点击复选框触发\nconsole.log('onCheck',checkedKeys,event);}",
                            disabled: false,
                          },
                          {
                            name: "onDragEnd",
                            template:
                              "onDragEnd({event,node},${extParams}){\n// dragend 触发时调用\nconsole.log('onDragEnd',event,node);}",
                            disabled: false,
                          },
                          {
                            name: "onDragEnter",
                            template:
                              "onDragEnter({event,node,expandedKeys},${extParams}){\n// dragenter 触发时调用\nconsole.log('onDragEnter',event,node,expandedKeys);}",
                            disabled: false,
                          },
                          {
                            name: "onDragLeave",
                            template:
                              "onDragLeave({event,node},${extParams}){\n// dragleave 触发时调用\nconsole.log('onDragLeave',event,node);}",
                            disabled: false,
                          },
                          {
                            name: "onDragOver",
                            template:
                              "onDragOver({event,node},${extParams}){\n// dragover 触发时调用\nconsole.log('onDragOver',event,node);}",
                            disabled: false,
                          },
                          {
                            name: "onDragStart",
                            template:
                              "onDragStart({event,node},${extParams}){\n// 开始拖拽时调用\nconsole.log('onDragStart',event,node);}",
                            disabled: false,
                          },
                          {
                            name: "onDrop",
                            template:
                              "onDrop({event,node,dragNode,dragNodesKeys},${extParams}){\n// drop 触发时调用\nconsole.log('onDrop',event,node,dragNode,dragNodesKeys);}",
                            disabled: false,
                          },
                          {
                            name: "onExpand",
                            template:
                              "onExpand(expandedKeys,{expanded,node},${extParams}){\n// 展开/收起节点时触发\nconsole.log('onExpand',expandedKeys,expanded,node);}",
                            disabled: false,
                          },
                          {
                            name: "onLoad",
                            template:
                              "onLoad(loadedKeys,{event,node},${extParams}){\n// 节点加载完毕时触发\nconsole.log('onLoad',loadedKeys,event,node);}",
                            disabled: false,
                          },
                          {
                            name: "onRightClick",
                            template:
                              "onRightClick({event,node},${extParams}){\n// 响应右键点击\nconsole.log('onRightClick',event,node);}",
                            disabled: false,
                          },
                          {
                            name: "onSelect",
                            template:
                              "onSelect(selectedKeys,event,${extParams}){\n// 点击树节点触发\nconsole.log('onSelect',selectedKeys,event);}",
                            disabled: true,
                          },
                        ],
                      }}
                      onSelect={function () {
                        this.onTreeSelect.apply(
                          this,
                          Array.prototype.slice.call(arguments).concat([])
                        );
                      }.bind(this)}
                    />
                  )}
                </Tabs.TabPane>
              </Tabs>
            </Col>
            <Col span={18} order={0} style={{ paddingTop: "20px" }}>
              <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                name="basic"
                ref={this._refsManager.linkRef("searchForm")}
                colon={true}
                hideRequiredMark={false}
                labelAlign="right"
                layout="horizontal"
                preserve={true}
                scrollToFirstError={true}
                size="middle"
                validateMessages={{ required: "'${name}' 不能为空" }}
                __events={{
                  eventDataList: [
                    {
                      type: "componentEvent",
                      name: "onFinish",
                      relatedEventName: "onFinish",
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
                onFinish={function () {
                  this.onFinish.apply(
                    this,
                    Array.prototype.slice.call(arguments).concat([])
                  );
                }.bind(this)}
              >
                <Row align="top" justify="start" wrap={false}>
                  <Col span={8}>
                    <Form.Item
                      label="课程名称"
                      labelAlign="right"
                      colon={true}
                      required={false}
                      noStyle={false}
                      valuePropName="value"
                      requiredobj={{ required: "", message: "" }}
                      typeobj={{ type: "", message: "" }}
                      lenobj={{ max: "", min: "", message: "" }}
                      patternobj={{ pattern: "", message: "" }}
                      name="name"
                      initialValue={__$$eval(() => this.state.formData.name)}
                    >
                      <Input
                        placeholder="请输入"
                        bordered={true}
                        disabled={false}
                        size="middle"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="发布状态"
                      labelAlign="right"
                      colon={true}
                      required={false}
                      noStyle={false}
                      valuePropName="value"
                      requiredobj={{ required: "", message: "" }}
                      typeobj={{ type: "", message: "" }}
                      lenobj={{ max: "", min: "", message: "" }}
                      patternobj={{ pattern: "", message: "" }}
                      name="status"
                      initialValue={__$$eval(() => this.state.formData.status)}
                    >
                      <Select
                        style={{ width: 200 }}
                        options={__$$eval(() => this.state.statusList)}
                        allowClear={false}
                        autoFocus={false}
                        defaultActiveFirstOption={true}
                        disabled={false}
                        labelInValue={false}
                        showSearch={false}
                        size="middle"
                        loading={false}
                        bordered={true}
                        filterOption={true}
                        optionFilterProp="value"
                        tokenSeparators={[]}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8} order={0}>
                    <Form.Item
                      label="课程来源"
                      labelAlign="right"
                      colon={true}
                      required={false}
                      noStyle={false}
                      valuePropName="value"
                      requiredobj={{ required: "", message: "" }}
                      typeobj={{ type: "", message: "" }}
                      lenobj={{ max: "", min: "", message: "" }}
                      patternobj={{ pattern: "", message: "" }}
                      name="source"
                      initialValue={__$$eval(() => this.state.formData.source)}
                    >
                      <Select
                        style={{ width: 200 }}
                        options={__$$eval(() => this.state.sourceList)}
                        allowClear={false}
                        autoFocus={false}
                        defaultActiveFirstOption={true}
                        disabled={false}
                        labelInValue={false}
                        showSearch={false}
                        size="middle"
                        loading={false}
                        bordered={true}
                        optionFilterProp="value"
                        tokenSeparators={[]}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row align="top" justify="start" wrap={false}>
                  <Col span={8} order={0}>
                    <Form.Item
                      label="创建时间"
                      name="times"
                      labelAlign="right"
                      colon={true}
                      required={false}
                      noStyle={false}
                      valuePropName="value"
                      requiredobj={{ required: "", message: "" }}
                      typeobj={{ type: "", message: "" }}
                      lenobj={{ max: "", min: "", message: "" }}
                      patternobj={{ pattern: "", message: "" }}
                      initialValue={__$$eval(() => this.state.formData.times)}
                    >
                      <DatePicker.RangePicker
                        size="middle"
                        picker="date"
                        allowClear={true}
                        bordered={true}
                        autoFocus={false}
                        disabled={false}
                        showTime={false}
                        inputReadOnly={false}
                        disabledDate={__$$eval(() => this.disabledDate)}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8} order={0}>
                    <Form.Item
                      label="转码状态"
                      labelAlign="right"
                      colon={true}
                      required={false}
                      noStyle={false}
                      valuePropName="value"
                      requiredobj={{ required: "", message: "" }}
                      typeobj={{ type: "", message: "" }}
                      lenobj={{ max: "", min: "", message: "" }}
                      patternobj={{ pattern: "", message: "" }}
                      name="transcode"
                      initialValue={__$$eval(
                        () => this.state.formData.transcode
                      )}
                    >
                      <Select
                        style={{ width: 200 }}
                        options={__$$eval(() => this.state.transcodeList)}
                        allowClear={false}
                        autoFocus={false}
                        defaultActiveFirstOption={true}
                        disabled={false}
                        labelInValue={false}
                        showSearch={false}
                        size="middle"
                        loading={false}
                        bordered={true}
                        optionFilterProp="value"
                        tokenSeparators={[]}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8} order={0}>
                    <Form.Item
                      wrapperCol={{ offset: 6 }}
                      labelAlign="right"
                      colon={true}
                      required={false}
                      noStyle={false}
                      valuePropName="value"
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
                        查询
                      </Button>
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
                      >
                        重置
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Table
                dataSource={__$$eval(() => this.state.list)}
                columns={__$$eval(() => this.getTableColumns())}
                rowKey="id"
                pagination={{
                  pageSize: __$$eval(() => this.state.paging.pageSize),
                  total: __$$eval(() => this.state.paging.total),
                  current: __$$eval(() => this.state.paging.current),
                  showSizeChanger: false,
                  showQuickJumper: false,
                  simple: true,
                  size: "small",
                }}
                loading={false}
                showHeader={true}
                size="default"
                tableLayout=""
                scroll={{ scrollToFirstRowOnChange: true }}
                rowSelection={{
                  type: "checkbox",
                  onChange: function () {
                    this.rowSelectionChange.apply(
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
                      relatedEventName: "rowSelectionChange",
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
              />
            </Col>
          </Row>
        </Card>
        <Modal
          title="创建关联"
          okText="确认"
          cancelText="取消"
          visible={__$$eval(() => this.state.relationCourseVisible)}
          destroyOnClose={true}
          centered={false}
          closable={true}
          confirmLoading={false}
          forceRender={false}
          keyboard={true}
          mask={true}
          maskClosable={true}
          zIndex={99}
          bodyStyle={{}}
          maskStyle={{}}
          __events={{
            eventDataList: [
              {
                type: "componentEvent",
                name: "onCancel",
                relatedEventName: "onCancel",
              },
              {
                type: "componentEvent",
                name: "onOk",
                relatedEventName: "onOk",
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
            this.onCancel.apply(
              this,
              Array.prototype.slice.call(arguments).concat([])
            );
          }.bind(this)}
          onOk={function () {
            this.onOk.apply(
              this,
              Array.prototype.slice.call(arguments).concat([])
            );
          }.bind(this)}
        >
          <Form
            wrapperCol={{ span: 24 }}
            onFinish={function () {
              this.onModalFinish.apply(
                this,
                Array.prototype.slice.call(arguments).concat([])
              );
            }.bind(this)}
            name="basic"
            ref={this._refsManager.linkRef("modalForm")}
            colon={true}
            hideRequiredMark={false}
            labelAlign="right"
            layout="horizontal"
            preserve={true}
            scrollToFirstError={true}
            size="middle"
            validateMessages={{ required: "'${name}' 不能为空" }}
            __events={{
              eventDataList: [
                {
                  type: "componentEvent",
                  name: "onFinish",
                  relatedEventName: "onModalFinish",
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
                  disabled: false,
                },
              ],
            }}
          >
            <Row
              align="top"
              h-gutter={20}
              gutter={[20, 0]}
              justify="start"
              wrap={false}
            >
              <Col span={18} order={0}>
                <Form.Item
                  label=""
                  labelAlign="right"
                  colon={true}
                  required={true}
                  noStyle={false}
                  valuePropName="value"
                  requiredobj={{ required: true, message: "填写课程编码" }}
                  typeobj={{ type: "", message: "" }}
                  lenobj={{ max: "", min: "", message: "" }}
                  patternobj={{ pattern: "", message: "" }}
                  name="courseCode"
                  initialValue={__$$eval(
                    () => this.state.modalFormData.courseCode
                  )}
                >
                  <Input
                    placeholder="请输入GRT课程管理系统中课程编号，并获课程信息"
                    bordered={true}
                    disabled={false}
                    size="middle"
                  />
                </Form.Item>
              </Col>
              <Col span={6} order={0}>
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
                  获取课程信息
                </Button>
              </Col>
            </Row>
          </Form>
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
