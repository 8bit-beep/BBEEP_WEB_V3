import * as S from "./style";
import RoomIndicator from "../../components/RoomIndicator";
import { useState } from "react";
import { useConfirmAttend } from "../../hooks/attends/useConfirmAttend";

const Home = () => {
    const [isSecondFloor, setSecondFloor] = useState(true);
    const { isButtonEnabled, data, confirmAttend } = useConfirmAttend();

    return (
        <S.Container>
            {isSecondFloor ? (
                <>
                    {/* <RoomIndicator room="LAB1" top={110} left={135} /> */}
                    <RoomIndicator room="PROJECT3" top={440} left={210} />
                    {/* <RoomIndicator room="SERVER" top={440} left={550} />
                    <RoomIndicator room="LAB2" top={110} left={810} /> */}
                    <RoomIndicator room="PROJECT4" top={440} left={810} />
                    {/* <RoomIndicator room="LAB3_4" top={250} left={2005} />
                    <RoomIndicator room="LAB5" top={220} left={2450} />
                    <RoomIndicator room="LAB6" top={570} left={2495} />
                    <RoomIndicator room="LAB7" top={570} left={2335} />
                    <RoomIndicator room="LAB8" top={590} left={2175} />
                    <RoomIndicator room="LAB9" top={590} left={2015} />
                    <RoomIndicator room="LAB10" top={570} left={1700} />
                    <RoomIndicator room="LAB11" top={570} left={1855} /> */}
                </>
            ) : (
                <>
                    {/* <RoomIndicator room="LAB12" top={110} left={135} /> */}
                    <RoomIndicator room="PROJECT5" top={440} left={140} />
                    {/* <RoomIndicator room="PRINTER_MAKER" top={440} left={550} />
                    <RoomIndicator room="LAB13" top={110} left={810} /> */}
                    <RoomIndicator room="PROJECT6" top={440} left={810} />
                    {/* <RoomIndicator room="LAB14" top={250} left={1885} /> */}
                    <RoomIndicator room="LAB15_16" top={250} left={2320} />
                    <RoomIndicator room="LAB17_18" top={570} left={2410} />
                    <RoomIndicator room="LAB19_20" top={590} left={2095} />
                    <RoomIndicator room="LAB21_22" top={570} left={1780} />
                </>
            )}

            {isSecondFloor ? (
                <S.Map src="/assets/SecondFloorMap.svg" alt="Second FloorMap" />
            ) : (
                <S.Map src="/assets/ThirdFloorMap.svg" alt="Third FloorMap" />
            )}

            <S.ToggleWrap>
                <S.ToggleItem
                    $isFocused={isSecondFloor}
                    onClick={() => setSecondFloor(true)}
                >
                    2층
                </S.ToggleItem>
                <S.ToggleItem
                    $isFocused={!isSecondFloor}
                    onClick={() => setSecondFloor(false)}
                >
                    3층
                </S.ToggleItem>
            </S.ToggleWrap>

            <S.ConfirmAttend
                disabled={!isButtonEnabled}
                onClick={confirmAttend}
            >
                {data.length === 0
                    ? "출석 승인"
                    : `${data[data.length - 1].time} 승인`}
            </S.ConfirmAttend>
        </S.Container>
    );
};

export default Home;
