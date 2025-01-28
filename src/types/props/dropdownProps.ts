import { RoomOption } from "../rooms/roomOption";

export interface Option {
  name: string;
  value: string;
}

export interface DropdownProps {
  setValue: ((arg: Option) => void) | ((arg: RoomOption) => void);
  value: Option | RoomOption;
  options: Option[] | RoomOption[];
}
