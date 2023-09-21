import express from "express";
import axios from 'axios';

async function getAirports(req: express.Request, res: express.Response) {
  try {
    const response = await axios.get(process.env['JSON_URL']! + '/airports')
    res.send(response.data);
  } catch (e) {
    res.status(500)
    res.send({ 'message': 'error' })
  }
}

export default getAirports