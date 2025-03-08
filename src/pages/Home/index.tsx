import * as S from './style';
import RoomIndicator from "../../components/RoomIndicator";

const Home = () => {
  return (
    <S.Container>
      <RoomIndicator room="LAB1" top={110} left={135}/>
      <RoomIndicator room="PROJECT3" top={440} left={210}/>
      <RoomIndicator room="SERVER" top={440} left={550}/>
      <RoomIndicator room="LAB2" top={110} left={810}/>
      <RoomIndicator room="PROJECT4" top={440} left={810}/>
      <RoomIndicator room="LAB3" top={250} left={1885}/>
      <RoomIndicator room="LAB4" top={250} left={2130}/>
      <RoomIndicator room="LAB5" top={220} left={2450}/>
      <RoomIndicator room="LAB6" top={570} left={2495}/>
      <RoomIndicator room="LAB7" top={570} left={2335}/>
      <RoomIndicator room="LAB8" top={590} left={2175}/>
      <RoomIndicator room="LAB9" top={590} left={2015}/>
      <RoomIndicator room="LAB10" top={570} left={1700}/>
      <RoomIndicator room="LAB11" top={570} left={1855}/>
      <S.Map src="/assets/SecondFloorMap.svg" alt="Second FloorMap"/>
    </S.Container>
  )
};

export default Home;
