import moment from 'moment';

const DateUtilities = {
  formatDate(date){
    return moment(date).format("ddd, MMMM Do YYYY");
  },

  formatTime(date){
    return moment(date).format("H:mm");
  }
}

export default DateUtilities;
