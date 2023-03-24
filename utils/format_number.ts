const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return Math.round((num / 1000000) * 10) / 10 + "M";
  } else if (num >= 1000) {
    return num >= 100000
      ? Math.round(num / 1000) + "k"
      : num.toLocaleString("en-US");
  }
  return num.toString();
};

export default formatNumber;
