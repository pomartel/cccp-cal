class GoogleSheetsBackend {
  constructor (opts) {
    this.spreadsheetId = opts.spreadsheetId
    this.apiKey = opts.apiKey
  }

  dataFor (opts) {
    return new Promise((resolve) => {
      this._fetchJsonSheetData(opts['sheet']).then(data => {
        resolve(this._dataToObjects(data))
      })
    })
  }

  _fetchJsonSheetData (sheet) {
    return new Promise((resolve) => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${sheet}?key=${this.apiKey}`
      console.debug(`Fetching ${sheet} spreadsheet...`)
      fetch(url).then(response => {
        response.json().then(data => {
          resolve(data.values)
        })
      })
    })
  }

  _dataToObjects (data) {
    let objects = []
    const headers = data.shift()
    data.forEach(line => {
      let obj = {}
      headers.forEach((key, index) => {
        const value = line[index]
        obj[key] = value || ''
      })
      objects.push(obj)
    })
    return objects
  }
}

export default GoogleSheetsBackend
