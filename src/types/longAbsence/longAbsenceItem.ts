import {Student} from "../entity/student.ts";

export interface LongAbsenceItem {
    absenceId: number;
    studentName: string;
    studentInfo: Student;
    startDate: string;
    endDate: string;
    reason: string;
}
