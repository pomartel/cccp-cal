class Ride {
  constructor (params) {
    this.attrs = params.attrs
    this.events = []
  }

  addEvent (evnt) {
    this.events.push(evnt)
  }

  get nextEvents () {
    return this.events.filter(evnt => !evnt.isOver()) || []
  }

  get nextEvent () {
    return this.nextEvents[0]
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
