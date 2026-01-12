import { useState, useEffect, useRef } from "react";
import { DropdownProps } from "../../../types/props/elements/dropdownProps.ts";
import { COLOR } from "../../../style/color/color";
import { TextStyles } from "../../../style/text/TextStyles.ts";

const CustomDropdown = (props: DropdownProps) => {
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
    <div
      className="flex rounded-xl px-5 py-2.5 gap-4 items-center relative cursor-pointer bg-white"
      ref={dropdownRef}
      onClick={() => setIsOpened((prev) => !prev)}
      style={{ boxShadow: "0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)" }}
    >
      {/* dropdown name & img */}
      <p className={TextStyles.Body.medium}>{props.value.name}</p>
      <img
        className="w-3 object-contain object-center"
        src="/assets/ListOpen.svg"
        style={{
          transform: isOpened ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.4s",
        }}
        alt={props.value.name}
      />
      {/* 안에 콘텐츠들 */}
      {isOpened && (
        <div
          className="w-full h-fit bg-white overflow-scroll rounded-xl absolute
                    left-0 top-12 z-100"
          style={{
            boxShadow: "0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)",
            msOverflowStyle: "scrollbar",
            scrollbarWidth: "thin",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/*위는 컨테이너, 밑에는 콘텐츠 옵션 */}
          {props.options.map((item) => (
            <div
              className={
                TextStyles.Body.medium +
                "w-full py-3 flex justify-center items-center  max-h-48"
              }
              style={{
                backgroundColor:
                  props.value.value === item.value
                    ? COLOR.selected
                    : COLOR.White,
              }}
              key={item.value}
              onClick={() => {
                props.setValue(item);
                setIsOpened(false);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
