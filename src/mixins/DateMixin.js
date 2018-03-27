const DateMixin = {
  filters: {
    shortDate (date) {
      return date.format('YYYY-MM-DD')
    },
    longDate (date) {
      return date.format('D MMMM')
    },
    dayOfWeek (date) {
      return date.format('dddd').capitalize()
    },
    dayOfWeekAndDate (date) {
      return date.format('dddd D MMMM').capitalize()
    },
    hourWithColon (hour) {
      return hour.replace('h', ':')
    }
  }
}

export default DateMixin
