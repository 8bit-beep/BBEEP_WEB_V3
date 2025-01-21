export const getTime = (date: string | undefined) => {
  if(!date) return "--"
  const splited = date.split("T")[1].split(".")[0].split(":");
  return `${Number(splited[0])}:${Number(splited[1])}`;
};
