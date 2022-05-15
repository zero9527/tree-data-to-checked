import { TreeItem } from "./types";

/**
 * 获取所有的code
 * @param treeData
 */
export function getAllCodes(treeData: TreeItem[]): string[] {
  const codes: string[] = [];
  treeData.forEach((item) => {
    codes.push(item.code);
    if (item.child?.length) codes.push(...getAllCodes(item.child));
  });
  return codes;
}

/**
 * 获取所有checked为true的code
 * @param treeData
 */
export function getCheckedCodes(treeData: TreeItem[]): string[] {
  const codes: string[] = [];
  treeData.forEach((item) => {
    if (item.checked) codes.push(item.code);
    if (item.child?.length) codes.push(...getCheckedCodes(item.child));
  });
  return codes;
}

/**
 * 设置checked值
 * @param treeData
 */
export function setCheckedByValue(
  treeData: TreeItem[],
  toChecked: boolean
): TreeItem[] {
  treeData.forEach((item) => {
    item.checked = toChecked;
    if (item.child?.length) {
      item.child = setCheckedByValue(item.child, toChecked);
    }
  });
  return treeData;
}
