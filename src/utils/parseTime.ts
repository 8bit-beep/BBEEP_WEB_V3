export const parseTime = (dateString: string): string => {
  const date = new Date(dateString);
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${hour}:${minute}`;
};
