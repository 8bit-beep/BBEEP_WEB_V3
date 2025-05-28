import * as S from "./style";
import RoomIndicator from "../../components/RoomIndicator";
import { useRef, useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { useMap } from "../../hooks/map/useMap";

const Home = () => {
    const [floor, setFloor] = useState(2);
    const { scale, increase, decrease } = useMap();
    const mapRef = useRef<HTMLDivElement>(null);

      

    return (
        <S.Container ref={mapRef}>
            <S.MapWrap scale={scale}>
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
                    <S.Map src="/assets/SecondFloorMap.svg" alt="Second FloorMap" />
                ) : floor === 3 ? (
                    <S.Map src="/assets/ThirdFloorMap.svg" alt="Third FloorMap" />
                ) : (
                    <S.Map src="/assets/FirstFloorMap.svg" alt="First FloorMap" />
                )} 
            </S.MapWrap>
            

            <S.ToggleWrap>
            <S.ToggleItem
                    $isFocused={floor === 1}
                    onClick={() => setFloor(1)}
                >
                    1층
                </S.ToggleItem>
                <S.ToggleItem
                    $isFocused={floor === 2}
                    onClick={() => setFloor(2)}
                >
                    2층
                </S.ToggleItem>
                <S.ToggleItem
                    $isFocused={floor === 3}
                    onClick={() => setFloor(3)}
                >
                    3층
                </S.ToggleItem>
            </S.ToggleWrap>
            <S.ScaleControllerWrap>
                <ZoomIn size={32} onClick={decrease} color={scale !== -2 ? "black" : "gray"} />
                <ZoomOut size={32} onClick={increase} color={scale !== 7 ? "black" : "gray"} />
            </S.ScaleControllerWrap>
        </S.Container>
    );
};

export default Home;


