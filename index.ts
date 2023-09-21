import express from 'express'
import dotenv from 'dotenv'
import getAirports from './controllers/airportControllers'


dotenv.config()

const PORT = process.env['PORT'] || 8080

const app = express()


app.get('/airports', getAirports)

app.listen(PORT, function() {
  console.log("app is listening on port " + PORT) 
})