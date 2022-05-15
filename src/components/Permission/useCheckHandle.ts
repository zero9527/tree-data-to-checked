import { useEffect, useRef, useState } from "react";
import { getAllCodes } from "./tree-data";
import { PermisisonProps } from ".";

/**
 * check处理逻辑
 * @param permissionData
 * @param props
 */
export function useCheckHandle({
  treeData,
  checkedCodesRaw,
  onChange,
}: PermisisonProps) {
  const allCodes = useRef(getAllCodes(treeData));
  const checkedCodesRef = useRef([...checkedCodesRaw]); // 解决循环的数据同步问题
  const [checkedCodes, setCheckedCodes] = useState([...checkedCodesRaw]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    // console.log("checkedCodes:", checkedCodes);
    setIsAllChecked(checkedCodes.length === allCodes.current.length);
    if (onChange) onChange(checkedCodes);
  }, [checkedCodes, onChange]);

  /** 添加某一个 */
  const addCodeFromCheck = (code: string) => {
    const index = checkedCodesRef.current.indexOf(code);
    if (index === -1) checkedCodesRef.current.push(code);
  };

  /** 删除某一个 */
  const deleteCodeFromCheck = (code: string) => {
    const index = checkedCodesRef.current.indexOf(code);
    if (index !== -1) checkedCodesRef.current.splice(index, 1);
  };

  /** 半选中 */
  const isIndeterminate = (code: string) => {
    const allChildCodes = allCodes.current.filter((i) => i.includes(code));
    if (checkedCodes.includes(code)) {
      return allChildCodes.some((i) => !checkedCodes.includes(i));
    }
    return false;
  };

  /** 选中处理 */
  const handleCheck = (code: string, toChecked: boolean) => {
    // console.log(checkedCodesRef.current, code, toChecked);
    const hasChild = allCodes.current.some(
      (_code) => code !== _code && _code.includes(code)
    );
    // 反选且没有下级:只处理自己
    if (!toChecked && !hasChild) {
      deleteCodeFromCheck(code);
      // console.log("_checkedCodes: ", checkedCodesRef.current);
      setCheckedCodes([...checkedCodesRef.current]);
      return;
    }
    // 遍历处理上下级
    allCodes.current.forEach((_code) => {
      const isParentOrSelf = code.includes(_code);
      const isChildOrSelf = _code.includes(code);
      // console.log(_code, isParentOrSelf, isChildOrSelf);
      // 处理选中:自己和parent, child
      if (toChecked) {
        if (isParentOrSelf || isChildOrSelf) {
          addCodeFromCheck(_code);
        }
      } else {
        // 处理反选:自己和child
        if (isChildOrSelf) {
          deleteCodeFromCheck(_code);
        }
      }
    });
    // console.log("checkedCodesRef.current: ", checkedCodesRef.current);
    setCheckedCodes([...checkedCodesRef.current]);
  };

  /** 全选 */
  const onCheckAll = (toChecked: boolean) => {
    if (toChecked) {
      checkedCodesRef.current = allCodes.current;
    } else {
      checkedCodesRef.current = [];
    }
    setCheckedCodes([...checkedCodesRef.current]);
  };

  return {
    allCodes,
    checkedCodes,
    isAllChecked,
    isIndeterminate,
    handleCheck,
    onCheckAll,
  };
}
