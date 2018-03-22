class Route {
  constructor (attrs) {
    this.attrs = attrs
  }

  get name () {
    return this.attrs.name
  }

  get description () {
    return this.attrs.description
  }

  get gpsId () {
    return this.attrs.gpsId
  }

  get distance () {
    return Math.round(this.attrs.distance / 1000)
  }

  get elevation () {
    return Math.round(this.attrs.elevation_gain)
  }

  get difficulty () {
    let diff = 1
    diff += Math.round((this.distance - 40.0) / 30)
    diff += Math.round(this.elevation / 500)
    diff = Math.max(1, diff)
    diff = Math.min(5, diff)
    return diff
  }
}

export default Route
