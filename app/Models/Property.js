'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {typeof import('@adonisjs/lucid/src/Database')} */
const Database = use('Database')

class Property extends Model {

    static scopeNearBy (query, latitude, longitude, distance) {
        const haversine = `(6371 * acos(cos(radians(${latitude}))
            * cos(radians(latitude))
            * cos(radians(longitude)
            - radians(${longitude}))
            + sin(radians(${latitude}))
            * sin(radians(latitude))))`

  return query
    .select('*', Database.raw(`${haversine} as distance`))
    .whereRaw(`${haversine} < ${distance}`)
    }

    /**
    * Relashionship bettween `User` and `Property`.
    *
    * @returns {Object}
    */
    user() {
        return this.belongsTo('App/Models/User')
    }

    /**
    * Relashionship bettween `Property` and `Image`.
    *
    * @returns {Object}
    */
    images() {
        return this.hasMany('App/Models/Image')
    }
}

module.exports = Property
