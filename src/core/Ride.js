class Ride {
  constructor (params) {
    this.attrs = params.attrs
    this.events = []
  }

  addEvent (evnt) {
    this.events.push(evnt)
  }

  get nextEvent () {
    return this.events.find(evnt => !evnt.isOver()) || {}
  }

  get routesIds () {
    const routes = [this.attrs.route1_gpsId, this.attrs.route2_gpsId]
    return routes.filter(e => e)
  }

  get name () {
    return this.attrs.name
  }

  get slug () {
    return this.attrs.slug
  }

  get meetingPlace () {
    return this.attrs.meetingPlace
  }

  get meetingAddress () {
    return this.attrs.meetingAddress
  }
}

export default Ride
