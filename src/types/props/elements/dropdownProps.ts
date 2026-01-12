export interface Option {
  name: string;
  value: string;
}

export interface DropdownProps {
  setValue: (arg: Option) => void;
  value: Option;
  options: Option[];
}
