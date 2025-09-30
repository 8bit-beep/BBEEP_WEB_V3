import {RoomIndicatorProps} from "../types/props/elements/roomIndicatorProps.ts";
import {useSidebarDataStore} from "../store/sidebar/useSidebarDataStore.ts";
import {parseRoomName} from "../utils/parseRoomName.ts";

const RoomIndicator = (props: RoomIndicatorProps) => {
    const {setSidebarData} = useSidebarDataStore();

    const handleOpen = () => {
        setSidebarData(props.room);
    };

    return (
        <div
            className="w-30 h-30 absolute bg-white cursor-pointer
            rounded-xl transition-transform duration-300 active:scale-95"
            style={{
                top: `${props.top}px`,
                left: `${props.left}px`,
                boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
            }}
            onClick={handleOpen}
            id={props.room}
        >
            <p
                className="w-full h-full flex items-center justify-center
                text-base font-medium overflow-ellipsis overflow-hidden"
            >
                {parseRoomName(props.room)}
            </p>
        </div>
    );
};

export default RoomIndicator;
