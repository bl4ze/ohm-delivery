const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
const adapter = new FileAsync('db.json')
const config = require('../db.config.json')

const db = (async () => {
  const _db = await low(adapter)
  await _db.defaults(config).write()
  return _db
})()

async function getOhmByTrackingId(trackingId) {
  const _db = await db;
  const ohm = _db.get('ohms')
    .find({ trackingId })
    .value()

  return ohm
}

async function updateOhm(trackingId, ohmInfo) {
  const _db = await db;
  const ohm = _db.get('ohms')
    .find({ trackingId })
    .assign({ ...ohmInfo })
    .value()

  await _db.write()
  return ohm

}

const STATUS_CHANGE_MAP = {
  CREATED: 'PREPARING',
  PREPARING: 'READY',
  READY: 'IN_DELIVERY',
  IN_DELIVERY: ['DELIVERED', 'REFUSED']
}

function validateStatusChange(oldStatus, newStatus) {
  if (!STATUS_CHANGE_MAP[oldStatus] || !newStatus) {
    return false
  }

  if (typeof STATUS_CHANGE_MAP[oldStatus] == 'string' && STATUS_CHANGE_MAP[oldStatus] != newStatus) {
    return false
  }

  if (typeof STATUS_CHANGE_MAP[oldStatus] == 'object' && !STATUS_CHANGE_MAP[oldStatus].includes(newStatus)) {
    return false
  }

  return true
}

module.exports = { getOhmByTrackingId, updateOhm, validateStatusChange }