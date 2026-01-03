import { ATTEND_STATUS_TIME_BOUNDARIES } from "../constants/attendStatus/attendStatusTimeRule.ts";

const parseHHMMToMinutes = (hhmm: string): number => {
    const [hhRaw, mmRaw] = hhmm.split(":");
    const hours = Number(hhRaw);
    const minutes = Number(mmRaw);

    // 24:00만 허용 (다른 24:xx는 비정상)
    if (hours === 24 && minutes === 0) return 24 * 60;

    if (
        Number.isNaN(hours) ||
        Number.isNaN(minutes) ||
        hours < 0 ||
        hours > 23 ||
        minutes < 0 ||
        minutes > 59
    ) {
        throw new Error(`Invalid time format: ${hhmm}`);
    }

    return hours * 60 + minutes;
};

const getMinutesOfDay = (date: Date) => date.getHours() * 60 + date.getMinutes();

export const getAttendStatusIdxForTime = (
    date: Date = new Date(),
    boundaries = ATTEND_STATUS_TIME_BOUNDARIES
): 0 | 1 | 2 => {
    const minutes = getMinutesOfDay(date);
    const toPeriod1 = parseHHMMToMinutes(boundaries.toPeriod1);
    const toPeriod2 = parseHHMMToMinutes(boundaries.toPeriod2);

    // 00:00 ~ toPeriod1 => 0
    if (minutes < toPeriod1) return 0;

    // toPeriod1 ~ toPeriod2 => 1
    if (minutes < toPeriod2) return 1;

    // toPeriod2 ~ 24:00 => 2
    return 2;
};

export const getNextAttendStatusIdxChangeTime = (
    date: Date = new Date(),
    boundaries = ATTEND_STATUS_TIME_BOUNDARIES
): Date => {
    const minutes = getMinutesOfDay(date);

    const toPeriod1 = parseHHMMToMinutes(boundaries.toPeriod1);
    const toPeriod2 = parseHHMMToMinutes(boundaries.toPeriod2);
    const toPeriod0 = parseHHMMToMinutes(boundaries.toPeriod0); // 24:00

    // 현재 시각 이후의 가장 가까운 경계 시간을 반환
    // - toPeriod0(24:00)은 다음날 00:00으로 취급
    const makeTodayAt = (targetMinutes: number) => {
        const d = new Date(date);
        d.setSeconds(0, 0);
        d.setHours(Math.floor(targetMinutes / 60), targetMinutes % 60, 0, 0);
        return d;
    };

    if (minutes < toPeriod1) {
        return makeTodayAt(toPeriod1);
    }

    if (minutes < toPeriod2) {
        return makeTodayAt(toPeriod2);
    }

    if (minutes < toPeriod0) {
        // 오늘 24:00 == 내일 00:00
        const d = new Date(date);
        d.setSeconds(0, 0);
        d.setDate(d.getDate() + 1);
        d.setHours(0, 0, 0, 0);
        return d;
    }

    // 방어 코드: 이론상 여기까지 오지 않음
    const fallback = new Date(date);
    fallback.setDate(fallback.getDate() + 1);
    fallback.setHours(0, 0, 0, 0);
    return fallback;
};
