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

// Format timestamp.
module.exports = (timestamp, { monthLength = 'short', dateSuffix = true } = {}) => {
  const monthsShort = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'];
  const monthsLong = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];

  const dateObj = new Date(timestamp);
  const formattedMonth = monthLength === 'short' ? monthsShort[dateObj.getMonth()] : monthsLong[dateObj.getMonth()];
  
  const dayOfMonth = dateSuffix ? addDateSuffix(dateObj.getDate()) : dateObj.getDate();
  const year = dateObj.getFullYear();
  
  // 12 hour format.
  let hour = dateObj.getHours() % 12 || 12; 
  const minutes = dateObj.getMinutes();
  const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';

  const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes.toString().padStart(2, '0')} ${periodOfDay}`;

  return formattedTimeStamp;
};