import * as S from "./style";
import RoomIndicator from "../../components/RoomIndicator";
import { useState } from "react";
import { useConfirmAttend } from "../../hooks/attends/useConfirmAttend";
import { NotebookIcon, X, ZoomIn, ZoomOut } from "lucide-react";
import { useEditMemo } from "../../hooks/memo/useEditMemo";
import { useMap } from "../../hooks/map/useMap";

const Home = () => {
    const [floor, setFloor] = useState(2);
    const { isButtonEnabled, data, confirmAttend } = useConfirmAttend();
    const [isMemoOpened, setIsMemoOpened] = useState(true);
    const { scale, increase, decrease } = useMap();
    const { memo, handleMemo } = useEditMemo();

    return (
        <S.Container>
            <S.MapWrap scale={scale}>
                {floor === 2 ? (
                    <>
                        
                        {/* <RoomIndicator room="LAB1" top={110} left={135} /> */}
                        <RoomIndicator room="PROJECT3" top={610} left={120} />
                        {/* <RoomIndicator room="SERVER" top={440} left={550} />
                        <RoomIndicator room="LAB2" top={110} left={810} /> */}
                        <RoomIndicator room="PROJECT4" top={610} left={740} />
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
                        <RoomIndicator room="PROJECT5" top={610} left={120} />
                        {/* <RoomIndicator room="PRINTER_MAKER" top={440} left={550} />
                        <RoomIndicator room="LAB13" top={110} left={810} /> */}
                        <RoomIndicator room="PROJECT6" top={610} left={740} />
                        {/* <RoomIndicator room="LAB14" top={250} left={1885} /> */}
                        <RoomIndicator room="LAB15_16" top={190} left={2090} />
                        <RoomIndicator room="LAB17_18" top={610} left={2240} />
                        <RoomIndicator room="LAB19_20" top={610} left={1920} />
                        <RoomIndicator room="LAB21_22" top={610} left={1620} />
                    </>
                ) : (
                    <>
                        <RoomIndicator room="PROJECT1" top={610} left={120} />
                        <RoomIndicator room="PROJECT2" top={610} left={740} />
                    </>
                )}

                {floor === 2 ? (
                    <S.Map scale={scale} src="/assets/SecondFloorMap.svg" alt="Second FloorMap" />
                ) : floor === 3 ? (
                    <S.Map scale={scale} src="/assets/ThirdFloorMap.svg" alt="Third FloorMap" />
                ) : (
                    <S.Map scale={scale} src="/assets/FirstFloorMap.svg" alt="First FloorMap" />
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

            <S.ConfirmAttend
                disabled={!isButtonEnabled}
                onClick={confirmAttend}
            >
                {data.length === 0
                    ? "출석 승인"
                    : `${data[data.length - 1].time} 승인`}
            </S.ConfirmAttend>
            <S.MemoWrap $isOpened={isMemoOpened}>
                {
                    isMemoOpened ? (
                        <>
                            <S.MemoHeader>
                                <p>메모사항</p>
                                <X onClick={() => setIsMemoOpened(false)} />
                            </S.MemoHeader>
                            <S.Memo placeholder="메모사항을 입력해주세요." onChange={handleMemo} value={memo} />
                        </>
                    ) : (
                        <NotebookIcon onClick={() => setIsMemoOpened(true)} />
                    )
                }
                
            </S.MemoWrap>
            <S.ScaleControllerWrap>
                <ZoomIn size={32} onClick={decrease} color={scale !== -2 ? "black" : "gray"} />
                <ZoomOut size={32} onClick={increase} color={scale !== 7 ? "black" : "gray"} />
            </S.ScaleControllerWrap>
        </S.Container>
    );
};

export default Home;


