const DateMixin = {
  filters: {
    longDate (date) {
      return date.format('ll')
    },
    dayOfWeek (date) {
      return date.format('dddd').capitalize()
    }
  }
}

export default DateMixin
