import { useEffect, useState } from "react";
import {
  getAttendStatusIdxForTime,
  getNextAttendStatusIdxChangeTime,
} from "../../utils/getAttendStatusIdxByTime.ts";

export const useAttendStatusIdxByTime = (): 0 | 1 | 2 => {
  const [statusIdx, setStatusIdx] = useState<0 | 1 | 2>(() =>
    getAttendStatusIdxForTime(new Date())
  );

  useEffect(() => {
    const now = new Date();
    const nextChange = getNextAttendStatusIdxChangeTime(now);
    const delayMs = Math.max(0, nextChange.getTime() - now.getTime() + 200);

    const timeoutId = window.setTimeout(() => {
      setStatusIdx(getAttendStatusIdxForTime(new Date()));
    }, delayMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [statusIdx]);

  return statusIdx;
};
