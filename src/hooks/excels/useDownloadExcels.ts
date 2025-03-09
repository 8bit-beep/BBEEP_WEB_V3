import bbeepAxios from "../../libs/axios/customAxios.ts";

export const useDownloadExcels = (date: string) => {
  const download = async () => {
    try {
      const { data } = await bbeepAxios.get(`/excel/download?date=${date}`);
      return data;
    }catch {
      return;
    }
  }
  
  return download;
}