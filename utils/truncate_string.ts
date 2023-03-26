const truncate_string = (str: string, maxLength: number): string => {
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)}...`;
  } else {
    return str;
  }
};

export default truncate_string;
