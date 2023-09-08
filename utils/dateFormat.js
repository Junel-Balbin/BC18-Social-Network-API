// Add a date suffix.
const addDateSuffix = date => {
  const dateStr = date.toString();
  const lastTwoDigits = dateStr.slice(-2);

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${dateStr}th`;
  }

  const lastDigit = dateStr.charAt(dateStr.length - 1);

  switch (lastDigit) {
    case '1':
      return `${dateStr}st`;
    case '2':
      return `${dateStr}nd`;
    case '3':
      return `${dateStr}rd`;
    default:
      return `${dateStr}th`;
  }
};
