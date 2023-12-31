import moment from 'moment';

export const getWeekDay = (day) => {
  switch (day) {
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tue';
    case 3:
      return 'Wed';
    case 4:
      return 'Thu';
    case 5:
      return 'Fri';
    case 6:
      return 'Sat';
    default:
      return '';
  }
};

export function checkPrevDate(d) {
  let date = moment(d);
  var iscurrentDate = date.isSame(new Date(), 'day');
  return !iscurrentDate;
}
