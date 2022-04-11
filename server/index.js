const express = require('express');
const app = express(); 
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000; 
const fetch = require('node-fetch');
var path = require('path');

const fs = require('fs');
const { Deepgram } = require('@deepgram/sdk');

const routes = require('./routes');

let router = express.Router();

// let audioSrc;
// middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(router);
// routes.initialize(app);
app.use('/api', routes);

// create a GET route
app.get('/', (req, res) => { 
  res.status(200).send({ message: "Hello from server!" });
});

const transcript = require(path.join(__dirname, './controllers', 'transcript.controller'));

router.get('/transcript', transcript.init);
router.post('/audio', transcript.postAudio);

 // router.route('/api/transcript').get(function(req, res) { return res.send('hi'); }) 
 // router.route('/api/audio').post(function(req, res) { return res.send('hello world'); }) 

// router.post('/audio', (req, res) => {
//   console.log('Audio source: ');
//   console.log(req.body.audioSrc);
//   audioSrc = req.body.audioSrc;
//   return audioSrc;
// });  

// router.post('/api/audio', (req, res) => {
//   // Logs course sent from front end
//   console.log('Audio source: ');
//   console.log(req.body.audioSrc);
//   audioSrc = req.body.audioSrc;
//   // res.status(200).send({ message: 'reload' });
//   // res.send('Word count from server: ' + req.body.wordCount);
// }); 

// run and listen to server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = router;
module.exports = app;