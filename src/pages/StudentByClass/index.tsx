import * as S from "./style";
import Dropdown from "../../components/common/Dropdown";
import ThemedIcon from "../../components/common/ThemedIcon";
import { useState } from "react";
import { Option } from "../../types/props/dropdownProps.ts";
import { useGetStudentByClass } from "../../hooks/class/useGetStudentByClass.ts";
import Skeleton from "../../components/common/Skeleton";
import ClassStudent from "../../components/students/ClassStudent";

const StudentByClass = () => {
  const getStoredOption = (name: string) => {
    const data = localStorage.getItem(name);
    if(data) {
      return JSON.parse(data);
    }else{
      return;
    }
  }
  
  const [grade, setGrade] = useState<Option>(getStoredOption("GRADE_OPTION") || { name: "1학년", value: "1" });
  const [cls, setCls] = useState<Option>(getStoredOption("CLS_OPTION") || { name: "1반", value: "1" });

  const handleGrade = (option: Option) => {
    setGrade(option);
    localStorage.setItem("GRADE_OPTION", JSON.stringify(option));
  };

  const handleCls = (option: Option) => {
    setCls(option);
    localStorage.setItem("CLS_OPTION", JSON.stringify(option));
  };

  const { data, isLoading } = useGetStudentByClass(grade.value, cls.value);

  return (
    <S.Container>
      <S.ContentWrap>
        <S.ContentHeaderWrap>
          <S.HeaderWrap>
          <ThemedIcon src="/assets/Group.svg" width="5rem" height="2.5rem" />
          <div>
            <S.Title>반별 조회하기</S.Title>
            <S.Subtitle>
              담임 선생님께서 학생의 출석 상태를 미리 입력하세요!
            </S.Subtitle>
          </div>
          </S.HeaderWrap>
          <S.Spacer />
          <Dropdown
            value={grade}
            setValue={handleGrade}
            options={[
              { value: "1", name: "1학년" },
              { value: "2", name: "2학년" },
              { value: "3", name: "3학년" },
            ]}
          />
          <Dropdown
            value={cls}
            setValue={handleCls}
            options={[
              { value: "1", name: "1반" },
              { value: "2", name: "2반" },
              { value: "3", name: "3반" },
              { value: "4", name: "4반" },
            ]}
          />
        </S.ContentHeaderWrap>
        <S.TableHead>
          <S.TableColumn $flex="1">학번</S.TableColumn>
          <S.TableColumn $flex="1">이름</S.TableColumn>
          <S.TableColumn $flex="2.2">실</S.TableColumn>
          <S.TableColumn $flex="2">8교시</S.TableColumn>
          <S.TableColumn $flex="2">9교시</S.TableColumn>
          <S.TableColumn $flex="2">10교시</S.TableColumn>
          <S.TableColumn $flex="2">11교시</S.TableColumn>
        </S.TableHead>
        <S.TableContent>
          {isLoading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <Skeleton
                width="100%"
                height="5rem"
                borderRadius="0.8rem"
                key={idx}
              />
            ))
          ) : data && data.length > 0 ? (
            data?.map((item) => (
              <S.ListGap key={item.studentId}>
                <ClassStudent data={item} />
              </S.ListGap>
            ))
          ) : (
            <S.NoContent>출석한 인원이 없습니다.</S.NoContent>
          )}
        </S.TableContent>
      </S.ContentWrap>
    </S.Container>
  );
};

export default StudentByClass;
