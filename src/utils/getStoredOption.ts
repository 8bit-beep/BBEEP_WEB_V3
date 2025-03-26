export const getStoredOption = (name: string) => {
  const data = localStorage.getItem(name);
  if(data) {
    return JSON.parse(data);
  }else{
    return;
  }
}