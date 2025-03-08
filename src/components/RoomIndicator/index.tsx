import {RoomIndicatorProps} from "../../types/props/roomIndicatorProps.ts";
import * as S from './style.ts'
import {useSidebarDataStore} from "../../store/sidebar/useSidebarDataStore.ts";

const RoomIndicator = ({ room, top, left }: RoomIndicatorProps) => {
  const { setSidebarData } = useSidebarDataStore();
  
  const handleOpen = () => {
    setSidebarData(room);
  };
  
  return (
    <S.IndicatorContainer
      top={top}
      left={left}
      id={room}
      onClick={handleOpen}
    >
      <S.Label>{room}</S.Label>
    </S.IndicatorContainer>
  );
};

export default RoomIndicator;