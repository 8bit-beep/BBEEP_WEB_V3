import {Option} from "../types/props/elements/dropdownProps.ts";

export const getStoredOption = (name: string) => {
  const data = localStorage.getItem(name);
  if(data) {
    return JSON.parse(data) as Option;
  }else{
    return;
  }
}
