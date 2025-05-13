import { useState } from "react"

export const useMap = () => {
  const [scale, setScale] = useState(1);

  const increase = () => {
    setScale(prev => prev < 3 ? prev += 1 : prev);
  }

  const decrease = () => {
    setScale(prev => prev > -2 ? prev -= 1 : prev);
  }

  return {
    scale,
    decrease,
    increase
  }
}