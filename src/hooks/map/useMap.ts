import { useEffect, useState } from "react"

export const useMap = () => {
  const defaultScale = localStorage.getItem("SCALE");
  const [scale, setScale] = useState(Number(defaultScale) || 5);

  const increase = () => {
    setScale(prev => prev < 7 ? prev += 1 : prev);
  }

  const decrease = () => {
    setScale(prev => prev > -2 ? prev -= 1 : prev);
  }

  useEffect(() => {
    localStorage.setItem("SCALE", `${scale}`);
  },[scale]);

  return {
    scale,
    decrease,
    increase
  }
}