import { useMemo } from "react";
import { Checkbox } from "antd";
import { TreeItem } from "./tree-data";
import { useCheckHandle } from "./useCheckHandle";
import { TreeNode } from "./TreeNode";
import "./styles.css";

export interface PermisisonProps {
  checkedCodesRaw: string[]; // 选中的code[]
  treeData: TreeItem[];
  onChange?: (codes: string[]) => void;
}

/**
 * 权限树渲染
 * @description code结构为{ParentCode}_{ChildCode}，当前code的结构即可知道祖先code
 */
export const Permission: React.FC<PermisisonProps> = (props) => {
  const {
    allCodes,
    checkedCodes,
    isAllChecked,
    isIndeterminate,
    handleCheck,
    onCheckAll,
  } = useCheckHandle(props);

  // 全选的半选中状态
  const isAllIndeterminate = useMemo(() => {
    if (!checkedCodes.length) return false;
    return checkedCodes.length !== allCodes.current.length;
  }, [allCodes, checkedCodes]);

  if (!props.treeData.length) return null;

  return (
    <div className="Permission">
      <div>
        <Checkbox
          checked={isAllChecked}
          indeterminate={isAllIndeterminate}
          onClick={() => onCheckAll(!isAllChecked)}
        >
          全选
        </Checkbox>
      </div>
      {props.treeData.map((item) => (
        <TreeNode
          key={item.code}
          item={item}
          checkedCodes={checkedCodes}
          isIndeterminate={isIndeterminate}
          handleCheck={handleCheck}
        />
      ))}
    </div>
  );
};
