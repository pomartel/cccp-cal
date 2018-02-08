import moment from 'moment'

class Evnt {
  constructor (params) {
    this.attrs = params.attrs
    this.ride = null
  }

  get title () {
    return this.ride ? this.ride.name : this.attrs.title
  }

  get type () {
    return this.attrs.type
  }

  get date () {
    return moment(this.attrs.date)
  }

  get time () {
    return this.attrs.time
  }

  get slug () {
    return this.attrs.rideSlug
  }

  get url () {
    return this.attrs.url
  }

  get carpoolUrl () {
    return this.attrs.carpoolUrl
  }

  get defaultDistance () {
    if (this.ride) {
      return this.ride.routes[0].distance
    }
  }

  isOver () {
    return this.date < moment(new Date()).add(-1, 'days')
  }
}

export default Evnt
