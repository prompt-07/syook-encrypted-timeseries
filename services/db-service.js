const TimeSeries = require('../models/timeseries')

module.exports.saveToDb = async(name, origin, destination, timestamp) => {
    try{
        console.log(timestamp)
        let timeSeriesData = await TimeSeries.create({timestamp, name, origin, destination})
    }catch(err){
        console.log(err)
    }
}