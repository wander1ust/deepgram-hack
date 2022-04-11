const fs = require('fs');
const { Deepgram } = require('@deepgram/sdk');

const secretFile = process.env.FILE_SRC;

// Mimetype for the file you want to transcribe
// Only necessary if transcribing a local file
// Example: audio/wav
const mimetype = 'audio/mp3';

// Initialize the Deepgram SDK
const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);

const setupAudio = (audioSrc) => {
  // let source;
  let file = audioSrc || secretFile;
  // if (!file) {
    console.log(file);
  // }
  // remote file
  if (file.startsWith('http')) {
      source = {
        url: file
      }
  }
  // local file
  else {
    const audio = fs.readFileSync(file);
    source = {
      buffer: audio,
      mimetype: mimetype
    }
  }
  return source;
}

// setupAudio(null);

// setupAudio('https://www.learnoutloud.com/samples/3501/Astronomy%20I%20-%2001.mp3'); // works

const transcribeAudio = async (audioSrc) => {
  try {
    // await setupAudio(secretFile);
    // Send the audio to Deepgram and get the response
    const response = await deepgram.transcription.preRecorded(
      source,
      {
        punctuate: true
      }
    )    
    console.dir(response, {depth: null});
    return response;
  } catch(err) {
    console.log(err);
  }
}

const transcribeAudio2 = () => {
  // Send the audio to Deepgram and get the response
  deepgram.transcription.preRecorded(
    source,
    {
      punctuate: true
    }
  )
  .then(response => {
    // Write the response to the console
    console.dir(response, {depth: null});
    return response;
  })
  .catch(err => {
    console.log(err);
  })
}

module.exports = {
  setupAudio: setupAudio,
  transcribeAudio: transcribeAudio,
}