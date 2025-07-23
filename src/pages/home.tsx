import RoomIndicator from "../components/RoomIndicator";
import { useRef, useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { useMap } from "../hooks/map/useMap";
import { COLOR } from "../style/color/color";

const Home = () => {
    const [floor, setFloor] = useState(2);
    const { scale, increase, decrease } = useMap();
    const mapRef = useRef<HTMLDivElement>(null);
    return (
        <div className="w-full h-full overflow-scroll" ref={mapRef}>
            {/* map 감싸는 공간 */}
            <div
                className="w-full flex items-center relative p-6"
                style={{
                    transform: `scale(${1 - 0.1 * scale})`,
                    transformOrigin: `${100 * scale}px`,
                }}
            >
                {floor === 2 ? (
                    <>
                        {/* <RoomIndicator room="LAB1" top={110} left={135} /> */}
                        <RoomIndicator room="PROJECT3" top={560} left={74} />
                        {/* <RoomIndicator room="SERVER" top={440} left={550} />
                        <RoomIndicator room="LAB2" top={110} left={810} /> */}
                        <RoomIndicator room="PROJECT4" top={560} left={690} />
                        {/* <RoomIndicator room="LAB3_4" top={250} left={2005} />
                        <RoomIndicator room="LAB5" top={220} left={2450} />
                        <RoomIndicator room="LAB6" top={570} left={2495} />
                        <RoomIndicator room="LAB7" top={570} left={2335} />
                        <RoomIndicator room="LAB8" top={590} left={2175} />
                        <RoomIndicator room="LAB9" top={590} left={2015} />
                        <RoomIndicator room="LAB10" top={570} left={1700} />
                        <RoomIndicator room="LAB11" top={570} left={1855} /> */}
                    </>
                ) : floor === 3 ? (
                    <>
                        {/* <RoomIndicator room="LAB12" top={110} left={135} /> */}
                        <RoomIndicator room="PROJECT5" top={560} left={74} />
                        {/* <RoomIndicator room="PRINTER_MAKER" top={440} left={550} />
                        <RoomIndicator room="LAB13" top={110} left={810} /> */}
                        <RoomIndicator room="PROJECT6" top={560} left={690} />
                        {/* <RoomIndicator room="LAB14" top={250} left={1885} /> */}
                        <RoomIndicator room="LAB15_16" top={150} left={2020} />
                        <RoomIndicator room="LAB17_18" top={560} left={2185} />
                        <RoomIndicator room="LAB19_20" top={560} left={1880} />
                        <RoomIndicator room="LAB21_22" top={560} left={1574} />
                    </>
                ) : (
                    <>
                        <RoomIndicator room="PROJECT1" top={560} left={74} />
                        <RoomIndicator room="PROJECT2" top={560} left={690} />
                    </>
                )}

                {floor === 2 ? (
                    <img
                        src="/assets/SecondFloorMap.svg"
                        alt="Second FloorMap"
                        className="object-contain mt-32 mb-32
                    mx-auto h-[72rem] pr-64"
                    />
                ) : floor === 3 ? (
                    <img
                        src="/assets/ThirdFloorMap.svg"
                        alt="Third FloorMap"
                        className="object-contain mt-32 mb-32
                    mx-auto h-[72rem] pr-64"
                    />
                ) : (
                    <img
                        src="/assets/ThirdFloorMap.svg"
                        alt="Third FloorMap"
                        className="object-contain mt-32 mb-32
                    mx-auto h-[72rem] pr-64"
                    />
                )}
            </div>

            {/* 1층 2층 3층 선택하는 공간 */}
            <div
                className="w-62 p-2 flex justify-center items-center bg-white
                fixed top-24 left-4 gap-1.5 border border-main rounded-xl"
            >
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="flex-1 py-2 text-base items-center font-semibold rounded-xl text-center cursor-pointer"
                        style={{
                            color: floor === i ? COLOR.White : COLOR.Black,
                            background: floor === i ? COLOR.Main : COLOR.White,
                        }}
                        onClick={() => setFloor(i)}
                    >
                        {i}층
                    </div>
                ))}
            </div>

            <div className="w-20 h-46 border-1 border-solid border-gray rounded-xl
            bg-white fixed right-8 bottom-36 flex flex-col gap-8 items-center
            justify-between py-8 px-4 cursor-pointer" >
                <ZoomIn
                    size={32}
                    onClick={decrease}
                    color={scale !== -2 ? "black" : "gray"}
                />
                <ZoomOut
                    size={32}
                    onClick={increase}
                    color={scale !== 7 ? "black" : "gray"}
                />
            </div>
        </div>
    );
};

export default Home;
