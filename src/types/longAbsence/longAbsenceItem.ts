import {Student} from "../entity/student";

export interface LongAbsenceItem {
    absenceId: number,
    studentName: string,
    studentInfo: Student,
    startDate: string,
    endDate: string,
    reason: string
}
