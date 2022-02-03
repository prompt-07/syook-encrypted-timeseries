const express = require('express')
const router = express.Router()
const TimeSeries = require('../models/timeseries')

router.get('/getdata', async(req, res)=>{
    try{
        console.log('here')
        const filter = {};
    const timeseriesRecords = await TimeSeries.find(filter)
    console.log(timeseriesRecords)
    res.send(timeseriesRecords)
    }catch(err) {
        console.log(err)
        res.status(500).json({message : "something wet wrong"})
    }
    
 });

 module.exports =router