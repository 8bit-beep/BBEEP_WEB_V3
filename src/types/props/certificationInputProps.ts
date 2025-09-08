import { StyledInputProps } from "./styledInputProps";

export interface CertificationInputProps extends StyledInputProps {
    buttonName: string;
    action: () => void;
}
