var path = require('path');
// const express = require('express');
// const routes = require('../routes');
// let router = express.Router();
const transcriptService = require(path.join(__dirname, '../services', 'transcript.service'));

const axios = require('axios');

const { transcribeAudio, setupAudio } = transcriptService
let audioSrc = null;
// 'https://www.learnoutloud.com/samples/3501/Astronomy%20I%20-%2001.mp3'

// const app = express(); 
// app.use(router);
// app.use('/api', routes);

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

// const url = 'localhost:5000/api/audio';

// let getData = () => {
//   console.log('getData called');
//   axios.get(url)
//      .then(res => console.log(res.data))
//      .catch(err => console.log(err.data))
// }  

// getData();

// 🐛 POST Audio Error: Error: Request failed with status code 504
// const postAudio = asyncMiddleware(async (req, res, next) => {
const postAudio = async (req, res, next) => {
  // router.post('/audio', (req, res, next) => {
    try {
      console.log('Audio source: ');
      console.log(req.body.audioSrc);
      audioSrc = await req.body.audioSrc;
      await init();
      // app.get('/api/transcript');
      // res.send(audioSrc);
      // next()
      return audioSrc;
    } catch(err) {
        console.log('POSTAUDIO ERROR:');
        console.log(err.message);
        // res.sendStatus(500) && next(err);
    }
  // });  
}
// }) 

postAudio();

// GET /api/transcript
// const init = asyncMiddleware(async (req, res, next) => {
const init = async (req, res, next) => {
// function init(req, res, next) {
  // router.get('/api/audio', asyncMiddleware(async (req, res, next) => { 
  // postAudio();
  // console.log(`audioSrc: ${audioSrc}`);
      try {
        // let audioSrc = await postAudio();
        
        // const audio = await setupAudio(audioSrc);
        // setupAudio(audioSrc);
        audioSrc ? setupAudio(audioSrc) : setupAudio(null);
        const transcript = await transcribeAudio(audioSrc);

        console.dir('Success! Audio transcribed!');
      	res.send(transcript);
        next()
      } catch(err) {
        console.log(err.message)
        res.sendStatus(500) && next(err)
      }	
    // }))
}

module.exports = {
  init: init,
  postAudio: postAudio
}
