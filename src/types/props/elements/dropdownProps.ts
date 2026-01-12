export interface Option<T = string> {
  name: string;
  value: T;
}

export interface DropdownProps<T = string> {
  value: Option<T>;
  options: Option<T>[];
  setValue: (arg: Option<T>) => void;
}
