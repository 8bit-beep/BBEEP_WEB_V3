import axios from "axios"

export const useDownloadExcel = (date: string) => {
  const getUrl = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/excel/presigned-url?date=${date}`);
    if(data) {
      axios.get(data);
    }
  }

  return getUrl;
}