import { useEffect, useState } from "react";
import useSpeechToText from 'react-hook-speech-to-text';

// TODO: Extract code
const VoiceCommands = ({ setVoiceCommand }) => {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({    
    continuous: true,
    timeout: 120000, // does not override Chrome's default timeout
    onStartSpeaking: true,
    // crossBrowser: true,
    // googleApiKey: YOUR_GOOGLE_CLOUD_API_KEY_HERE,
    useLegacyResults: false
  });

  if (error) return <p>Please switch to Chrome browser</p>;
  
  // record indefinitely without stopping - not working
  const recordForever = () => {
      const recordBtn = document.getElementById('record-btn');
        if (!isRecording && recordBtn) {
          recordBtn.click();
          // return startSpeechToText
        } else {
          console.log('Not recording.')
        }
  }

  const emojiStyle = {
    fontSize: '2em',
    fontWeight: '900'
  }  
  const spacingStyle = {
    paddingBottom: '2em'
  }

  return (
    <div>
    <img style={emojiStyle} src='https://www.reshot.com/preview-assets/icons/JX93SC6M78/mic-JX93SC6M78.svg' width='65px' /> <br/>
      <button id='record-btn' onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? 'Voice Command: ON' : 'Voice Command: OFF'}
        {/*{recordForever()}*/}
      </button>
      {/*<div style={spacingStyle}></div>*/}
      {/*{setVoiceCommand(results)}*/}
{/*      <ul>      
        {results.map(result => (
          <li style={{listStyle: "none"}} key={result.timestamp}>{result.transcript}</li>          
        ))}
        {interimResult && <li style={{listStyle: "none"}}>{interimResult}</li>}        
      </ul>*/}
      {setVoiceCommand(interimResult)}
    </div>
  );
}

export default VoiceCommands;