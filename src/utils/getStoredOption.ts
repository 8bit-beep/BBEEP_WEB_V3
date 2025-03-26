import {Option} from "../types/props/dropdownProps.ts";

export const getStoredOption = (name: string) => {
  const data = localStorage.getItem(name);
  if(data) {
    return JSON.parse(data) as Option;
  }else{
    return;
  }
}