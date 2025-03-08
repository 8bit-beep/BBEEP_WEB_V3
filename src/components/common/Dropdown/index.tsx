import { useState, useEffect, useRef } from "react";
import { DropdownProps } from "../../../types/props/dropdownProps";
import * as S from "./style";

const Dropdown = ({ value, setValue, options }: DropdownProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <S.Container ref={dropdownRef}  onClick={() => setIsOpened((prev) => !prev)}>
      <S.Value>{value.name}</S.Value>
      <S.Arrow src="/assets/ListOpen.svg" $isOpened={isOpened} />
      {isOpened && (
        <S.OptionContainer onClick={(e) => e.stopPropagation()}>
          {options.map((item) => (
            <S.Option
              $isSelected={value.value === item.value}
              key={item.value}
              onClick={() => {
                setValue(item);
                setIsOpened(false);
              }}
            >
              {item.name}
            </S.Option>
          ))}
        </S.OptionContainer>
      )}
    </S.Container>
  );
};

export default Dropdown;
