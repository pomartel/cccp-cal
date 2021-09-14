import Evnt from './Evnt'
import Ride from './Ride'
class DataStore {
  constructor (backend) {
    this.backend = backend
  }

  async initialize () {
    await this._buildEvents()
    await this._buildRides()
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

  async _buildEvents () {
    const eventsData = await this.backend.dataFor({ sheet: 'calendrier' })
    this.events = eventsData.map(attrs => new Evnt({ attrs: attrs }))
  }

  async _buildRides () {
    const ridesData = await this.backend.dataFor({ sheet: 'sorties' })
    this.rides = ridesData.map(attrs => new Ride({ attrs: attrs }))
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
