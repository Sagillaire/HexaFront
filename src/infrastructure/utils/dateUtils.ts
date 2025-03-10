export const formatDate = (date: Date, locale: string = "en-US"): string => {
  return new Intl.DateTimeFormat(locale).format(date);
};

export const getTimeAgo = (date: Date): string => {
  const diff = Date.now() - date.getTime();
  if (diff < 60 * 1000) return "Just now";
  if (diff < 60 * 60 * 1000) return `${Math.floor(diff / (60 * 1000))} min ago`;
  return `${Math.floor(diff / (60 * 60 * 1000))} hours ago`;
};
