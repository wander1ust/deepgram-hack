import { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import { BiExport } from 'react-icons/bi';
import './style.css';

const Notes = ({ setNotes, notes }) => {  

  // const exportIcon = <BiExport />

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
    useLegacyResults: false,
  });

  if (error) return <p>Please switch to Chrome browser</p>;

  const emojiStyle = {
    fontSize: '2em',
    fontWeight: '900',
  };
  const spacingStyle = {
    paddingBottom: '2em',
  };  
  // const wrapperStyle = {
  //   paddingLeft: '25em',
  //   margin: '0 auto',
  //   marginTop: '-20em'
  // };

  return (
    <div className='wrapper'>
      <h3>My Notes & Memos</h3>
      <span style={emojiStyle}>🎙</span> <br />
      <button
        id="record-btn-2"
        onClick={isRecording ? stopSpeechToText : startSpeechToText}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      {setNotes(results)}
      <ul>
        {results.map(result => (
          // <li style={{listStyle: "none"}} key={result.timestamp}>{result.transcript}</li>
          <span key={result.timestamp}>{result.transcript}</span>
        ))}
        {
          // interimResult && <li style={{listStyle: "none"}}>{interimResult}</li>
          interimResult && <span>{interimResult}</span>
      }
        {/*  {setVoiceCommand(interimResult)}*/}
      </ul>

      <div>{notes.length ? <BiExport className='export-icon' /> : null}</div>
    </div>
  );
};

export default Notes;