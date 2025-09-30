import {RegisterLongAbsence} from "./registerLongAbsence.ts";

export interface LongAbsenceModalProps {
    visible: boolean;
    onClose: () => void;
    onSubmit: (form: RegisterLongAbsence) => void;
}
