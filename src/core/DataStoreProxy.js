import DataStore from './DataStore'

class DataStoreProxy {
  static cachedDataStore = undefined

  static getDataStore () {
    return new Promise((resolve, reject) => {
      if (DataStoreProxy.cachedDataStore) {
        resolve(DataStoreProxy.cachedDataStore)
      } else {
        this._fetchSpreadsheet((data, tabletop) => {
          const dataStore = new DataStore(tabletop)
          dataStore.initialize()
          DataStoreProxy.cachedDataStore = dataStore
          resolve(dataStore)
        })
      }
    })
  }

  static _fetchSpreadsheet (callback) {
    console.log('Fetching JSON from Google Spreadsheet...')
    window.Tabletop.init({
      key: window.CONFIG.spreadsheetUrl,
      callback: callback,
      simpleSheet: false,
      parseNumbers: true
    })
  }
}

export default DataStoreProxy
