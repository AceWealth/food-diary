import moment from 'moment';

const DateUtilities = {
  encode(date){
    return moment(date).format('YYYY-MM-DD')
  },

  formatDate(date){
    return moment(date).format("ddd, MMMM Do YYYY");
  },

  formatTime(date){
    return moment(date).format("H:mm");
  },

  nextDay(date){
    return moment(date).add(1, 'days').toDate();
  },

  previousDay(date){
    return moment(date).subtract(1, 'days').toDate();
  },

  isSameDate(date1, date2){
    return moment(date1).isSame(moment(date2), 'day');
  }
}

export default DateUtilities;
