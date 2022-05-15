export interface TreeItem {
  code: string;
  label: string;
  checked: boolean;
  child?: TreeItem[];
}
