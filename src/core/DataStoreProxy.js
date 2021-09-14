import DataStore from './DataStore'
import GoogleSheetsBackend from './GoogleSheetsBackend'

class DataStoreProxy {
  static cachedDataStore = undefined

  static getDataStore () {
    return new Promise((resolve, reject) => {
      if (DataStoreProxy.cachedDataStore) {
        resolve(DataStoreProxy.cachedDataStore)
      } else {
        const backend = new GoogleSheetsBackend({
          spreadsheetId: window.CONFIG.spreadsheetId,
          apiKey: window.CONFIG.apiKey
        })
        const dataStore = new DataStore(backend)
        dataStore.initialize().then(() => {
          DataStoreProxy.cachedDataStore = dataStore
          resolve(dataStore)
        })
      }
    })
  }
}

export default DataStoreProxy
