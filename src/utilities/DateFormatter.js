const DateFormatter = {
  // TODO: Use momentjs for nicer looking datetime
  formatDate(date){
    return date.toString().slice(4, 15);
  },

  formatTime(date){
    return date.toString().slice(16, 21);
  }
}

export default DateFormatter;
