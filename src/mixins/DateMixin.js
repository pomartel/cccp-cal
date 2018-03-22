const DateMixin = {
  filters: {
    shortDate (date) {
      return date.format('YYYY-MM-DD')
    },
    longDate (date) {
      return date.format('ll')
    },
    dayOfWeek (date) {
      return date.format('dddd').capitalize()
    },
    hourWithColon (hour) {
      return hour.replace('h', ':')
    }
  }
}

export default DateMixin
