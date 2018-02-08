import Evnt from './Evnt'
import Ride from './Ride'
class DataStore {
  constructor (tabletop) {
    this.tabletop = tabletop
  }

  initialize () {
    this._buildEvents()
    this._buildRides()
    this._buildDependencies()
  }

  allEvents () {
    return this.events
  }

  allRides () {
    return this.rides
  }

  findRideBySlug (slug) {
    return this.rides.find(ev => ev.slug === slug)
  }

  _buildEvents () {
    this.events = this.tabletop
      .sheets('calendrier')
      .all()
      .map(attrs => new Evnt({ attrs: attrs }))
  }

  _buildRides () {
    this.rides = this.tabletop
      .sheets('sorties')
      .all()
      .map(attrs => new Ride({ attrs: attrs }))
  }

  _buildDependencies () {
    this.events.forEach(evnt => {
      if (evnt.slug) {
        const ride = this.findRideBySlug(evnt.slug)
        evnt.ride = ride
        ride.addEvent(evnt)
      }
    })
  }
}

export default DataStore
