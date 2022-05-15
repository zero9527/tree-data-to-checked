import { Checkbox } from "antd";
import { TreeItem } from "./tree-data";

interface TreeNodeProps {
  item: TreeItem;
  checkedCodes: string[];
  isIndeterminate: (code: string) => boolean;
  handleCheck: (code: string, toChecked: boolean) => void;
}

/**
 * 渲染单个节点
 */
export const TreeNode: React.FC<TreeNodeProps> = ({
  item,
  checkedCodes,
  isIndeterminate,
  handleCheck,
}) => {
  const onClick = (code: string) => {
    const toChecked = !checkedCodes.includes(code);
    handleCheck(code, toChecked);
  };

  return (
    <div className="tree-item" data-code={item.code}>
      <Checkbox
        checked={checkedCodes.includes(item.code)}
        indeterminate={isIndeterminate(item.code)}
        onClick={() => onClick(item.code)}
      >
        {item.label}
      </Checkbox>
      {!!item?.child?.length && (
        <section className="tree-item__child-wrapper">
          {item.child.map((childItem) => (
            <TreeNode
              key={childItem.code}
              item={childItem}
              checkedCodes={checkedCodes}
              isIndeterminate={isIndeterminate}
              handleCheck={handleCheck}
            />
          ))}
        </section>
      )}
    </div>
  );
};
