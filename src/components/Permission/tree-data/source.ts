import { TreeItem } from "./types";

export const permissionData: TreeItem[] = [
  {
    code: "Product_Manage",
    label: "产品管理",
    checked: false,
    child: [
      {
        code: "Product_Manage_List",
        label: "产品列表",
        checked: false,
        child: [
          { code: "Product_Manage_List_Export", label: "导出", checked: false },
          { code: "Product_Manage_List_Create", label: "新建", checked: false },
          { code: "Product_Manage_List_Detail", label: "详情", checked: false },
          { code: "Product_Manage_List_Update", label: "编辑", checked: false },
          { code: "Product_Manage_List_Delete", label: "删除", checked: false },
        ],
      },
    ],
  },
  {
    label: "发货管理",
    code: "Express_Manage",
    checked: false,
    child: [
      {
        label: "待发货列表",
        code: "Express_Manage_Todo",
        checked: false,
        child: [
          { label: "导出", code: "Express_Manage_Todo_Export", checked: false },
          { label: "详情", code: "Express_Manage_Todo_Detail", checked: false },
          { label: "发货", code: "Express_Manage_Todo_Send", checked: false },
        ],
      },
      {
        label: "已发货列表",
        code: "Express_Manage_Process",
        checked: false,
        child: [
          {
            label: "导出",
            code: "Express_Manage_Process_Export",
            checked: false,
          },
          {
            label: "详情",
            code: "Express_Manage_Process_Detail",
            checked: false,
          },
        ],
      },
      {
        label: "已收货列表",
        code: "Express_Manage_Received",
        checked: false,
        child: [
          {
            label: "导出",
            code: "Express_Manage_Received_Export",
            checked: false,
          },
          {
            label: "详情",
            code: "Express_Manage_Received_Detail",
            checked: false,
          },
        ],
      },
    ],
  },
  {
    label: "售后管理",
    code: "Service_Manage",
    checked: false,
    child: [
      {
        label: "待处理列表",
        code: "Service_Manage_Todo",
        checked: false,
        child: [],
      },
      {
        label: "进行中列表",
        code: "Service_Manage_Process",
        checked: false,
        child: [],
      },
      {
        label: "已完成列表",
        code: "Service_Manage_Done",
        checked: false,
        child: [],
      },
    ],
  },
];
