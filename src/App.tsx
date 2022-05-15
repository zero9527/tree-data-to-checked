import { useState } from "react";
import { Permission } from "./components/Permission";
import { permissionData } from "./components/Permission/tree-data";
import "./App.css";

export default function App() {
  const [checkedCodes, setCheckedCodes] = useState<string[]>([]);

  const onChange = (codes: string[]) => {
    setCheckedCodes(codes);
  };

  return (
    <div className="App">
      <h1>树结构选中扁平化处理</h1>
      <div className="flex-box">
        <section className="left">
          <p>权限树选中：</p>
          <Permission
            treeData={permissionData}
            checkedCodesRaw={[]}
            onChange={(codes: string[]) => onChange(codes)}
          />
        </section>
        <section className="right">
          <p>选中的code({checkedCodes.length}): </p>
          {checkedCodes.map((code) => (
            <div key={code}>{code}</div>
          ))}
        </section>
      </div>
    </div>
  );
}
