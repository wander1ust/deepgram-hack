import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Switch } from "react-router-dom";
import { Transcript, Audio, VoiceCommands, Navbar, Notes } from "./components";
import logo from './logo.svg';
import './App.css';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

function App() {
  const [timestamp, setTimestamp] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSampleIndex, setAudioSampleIndex] = useState(0);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);  
  const [highlightColor, setHighlightColor] = useState('yellow');  
  const [audioSpeed, setAudioSpeed] = useState(1);  
  const [voiceCommand, setVoiceCommand] = useState(null); 
  const [notes, setNotes] = useState(''); 

  return (
    <div className="App">
      <header className="App-header">    
    <div className="split split-left left">
    <div className="container">
      <h2>Scribe Lite</h2>   
      <VoiceCommands setVoiceCommand={setVoiceCommand} /> 

      <Audio timestamp={timestamp} setTimestamp={setTimestamp} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setAudioSampleIndex={setAudioSampleIndex} setIsAudioLoaded={setIsAudioLoaded} isAudioLoaded={isAudioLoaded} setHighlightColor={setHighlightColor} setAudioSpeed={setAudioSpeed} audioSpeed={audioSpeed} voiceCommand={voiceCommand} />
      
      </div>
    </div>

      <Router history={history}>
        <> 
        <Routes> 
        <Route path="/api/audio" component={Audio} /> 
        <Route path="/notes" element={<Notes setNotes={setNotes} notes={notes} />} />
        

        <Route exact path="/" element={ 
          <div class="split split-right right">
            <div class="centered">              
                <Transcript timestamp={timestamp} isPlaying={isPlaying} audioSampleIndex={audioSampleIndex} isAudioLoaded={isAudioLoaded} highlightColor={highlightColor} audioSpeed={audioSpeed} />                
            </div>
            <Navbar />
          </div>        
      } />
      
      </Routes>
      </> 
      </Router>

      </header>
    </div>
  );
}

export default App;
