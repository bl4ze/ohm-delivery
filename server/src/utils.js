const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const adapter = new FileAsync('db.json');
const config = require('../db.config.json');

const db = (async () => {
  const _db = await low(adapter);
  await _db.defaults(config).write();
  return _db;
})()

async function getOhmByTrackingId(trackingId) {
    const _db = await db;
    const ohm = _db.get('ohms')
        .find({ trackingId })
        .value()

    return ohm;
}

module.exports = { getOhmByTrackingId }