import Route from '@/core/Route'

class Ride {
  constructor (params) {
    this.attrs = params.attrs
    this.events = []
    this.routes = []
    this.buildRoutes()
  }

  addEvent (evnt) {
    this.events.push(evnt)
  }

  buildRoutes () {
    for (const routeId of [1, 2]) {
      let routeAttrs = {}
      for (const [key, value] of Object.entries(this.attrs)) {
        if (key.startsWith(`route${routeId}_`)) {
          const newKey = key.split('_')[1]
          routeAttrs[newKey] = value
        }
      }
      if (Object.keys(routeAttrs).length) {
        this.routes.push(new Route(routeAttrs))
      }
    }
  }

  get nextEvent () {
    return this.events.find(evnt => !evnt.isOver())
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
