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
    return this.attrs.distance
  }

  get elevation () {
    return this.attrs.elevation
  }

  get difficulty () {
    return this.attrs.difficulty
  }
}

export default Route
