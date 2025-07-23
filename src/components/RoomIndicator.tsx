import { RoomIndicatorProps } from "../types/props/roomIndicatorProps.ts";
import { useSidebarDataStore } from "../store/sidebar/useSidebarDataStore.ts";
import { parseRoomName } from "../utils/parseRoomName.ts";

const RoomIndicator = ({ room, top, left }: RoomIndicatorProps) => {
    const { setSidebarData } = useSidebarDataStore();

    const handleOpen = () => {
        setSidebarData(room);
    };

    return (
        <div
            className="w-80 h-80 absolute bg-white cursor-pointer
            rounded-xl transition-transform duration-300 active:scale-95"
            style={{ top: `${top / 16}rem`, left: `${left / 16}rem` }}
            onClick={handleOpen}
            id={room}
        >
            <p
                className="w-full h-full flex items-center justify-center
      font-normal text-5xl overflow-ellipsis overflow-hidden"
            >
                {parseRoomName(room)}
            </p>
        </div>
    );
};

export default RoomIndicator;
