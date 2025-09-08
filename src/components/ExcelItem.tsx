import { ExcelItemProps } from "../types/props/ExcelItemProps.ts";
import { File } from "lucide-react";
import { useDownloadExcel } from "../hooks/excels/useDownloadExcel.ts";

const ExcelItem = ({ fileName }: ExcelItemProps) => {
    const date = fileName.split("attendance_")[1].split(".xlsx")[0];
    const getUrl = useDownloadExcel(date);

    return (
        <div
            className="w-full h-52 border border-gray rounded-xl flex items-center justify-between flex-col
        px-3 pt-6 pb-2"
        >
            <div className="w-full flex-[1] flex flex-col items-center justify-center gap-5">
                <File size={44} />
                <p className="text-black font-medium text-xl">{date}</p>
            </div>
            <div
                className="w-full text-center text-xs font-normal text-white bg-main rounded-xl cursor-pointer decoration-0 py-2"
                onClick={getUrl}
            >
                다운로드
            </div>
        </div>
    );
};
export default ExcelItem;
