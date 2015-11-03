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
  }
}

export default DateUtilities;
