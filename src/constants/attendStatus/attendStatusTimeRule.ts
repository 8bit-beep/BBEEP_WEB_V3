export const ATTEND_STATUS_TIME_BOUNDARIES = {
    // 00:00 ~ 13:20  => 0
    toPeriod1: "13:20",
    // 13:20 ~ 19:00  => 1
    toPeriod2: "19:00",
    // 19:00 ~ 24:00  => 2 (24:00은 다음날 00:00)
    toPeriod0: "24:00",
} as const;
