/* eslint-disable prettier/prettier */
export default class LocalConfig {
  constructor() { }

  get Dark() {
    var _dark = this._getItem('Dark')
    _dark = _dark == 'true' ? true : (_dark == 'false' ? false : true)
    return _dark
  }
  set Dark(_val) { this._setItem('Dark', _val) }
  
  get LastSync() { return this._getItem('lastSync') }
  set LastSync(_val) { this._setItem('lastSync', _val) }
  
  _setItem(_key, _val) {
    this['_' + _key] = _val
    if (_val === null || _val === 'null') { localStorage.removeItem(_key) } else { localStorage.setItem(_key, _val) }
  }
  _getItem(_key, _json) {
    let _item = localStorage.getItem(_key)
    if (_json && _item) { _item = JSON.parse(_item) }
    return _item
  }
}
