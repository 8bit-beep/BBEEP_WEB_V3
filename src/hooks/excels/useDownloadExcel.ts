import axios from "axios"

export const useDownloadExcel = (date: string) => {
  const getUrl = async () => {
    const { data } = await axios.get(`/excel/presigned-url?date=${date}`);
    if(data) {
      axios.get(data);
    }
  }

  return getUrl;
}