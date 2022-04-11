import { useEffect, useState, useRef } from "react";
import './style.css';
import $ from 'jquery';
const axios = require('axios');

const Audio = ({ timestamp, setTimestamp, isPlaying, setIsPlaying, setAudioSampleIndex, audioSampleIndex, setIsAudioLoaded, isAudioLoaded, setHighlightColor, setAudioSpeed, audioSpeed, voiceCommand }) => {
	const [audioSrc, setAudioSrc] = useState(null);
	const [audioSample, setAudioSample] = useState(null);	
	const [showMessage, setShowMessage] = useState(false);	
	// const [commands, setCommands] = useState({'play': false, 'pause': true});	

	const { REACT_APP_AUDIO_1, REACT_APP_AUDIO_2, REACT_APP_AUDIO_3, REACT_APP_AUDIO_4 } = process.env;

	const [audioSamples, setAudioSamples] = useState(
		[	 
			{topic: 'The Great Gatsby - Chapter 1', src: REACT_APP_AUDIO_4}, 
			{topic: 'MLK - "I Have A Dream"', src: REACT_APP_AUDIO_2},
			{topic: 'Climate Change', src: REACT_APP_AUDIO_1},			 
			{topic: 'Astronomy', src: REACT_APP_AUDIO_3}, 
		])

	const audioTrack = useRef();

	const getTimestamp = () => {
		return audioTrack.current.currentTime;
	}    

	/* Event Handlers */
	const handleAudioPlay = () => {
		setIsPlaying(true);
	}	
	const handleAudioPause = () => {
		setIsPlaying(false);
	}

	const handleInput = e => {
	  setAudioSrc(e.target.value);	  
	};

	const handleSubmit = async (e) => {
	  e.preventDefault();

	  // show message for 2 seconds
	  setShowMessage(true);

    setTimeout(() => {
   		 setShowMessage(false);
  	}, 2000);      

		// 🛑 TODO: Debug - not working
		// POST 504 Router middleware error
    axios.post('/api/audio',    
    {
      'audioSrc': audioSrc
    })
    .then(response => {
        console.log(`POST Audio 200: ${JSON.stringify(response)}`);
    })
    .catch(error => {
        console.log(`POST Audio Error: ${error}`);
    });
	};	// End Snippet

  // Change audio sample <ul> color on mouse over
	const handleMouseEnter = async (e) => {
		if (e.target.getAttribute('id') !== audioSampleIndex) {
		addAndRemoveClass(e, 'text-hotpink', 'text-pink');
	}
	}	
	const handleMouseLeave = async (e) => {
		if (e.target.getAttribute('id') !== audioSampleIndex) {
		addAndRemoveClass(e, 'text-pink', 'text-hotpink');
	}
	}	

	const handleMouseClick = async (e) => {
		const id = e.target.getAttribute('id');
		const index = id.slice(id.length - 1);
		await setAudioSampleIndex(index);
		await setAudioSample(audioSamples[index].src);
		const listItems = document.getElementsByTagName('li');

		// only highlight selected audio text
		for(var i = 0; i < listItems.length; i++) {
			listItems[i].classList.remove('active');
		}
		// if (id == index) {
		addAndRemoveClass(e, 'active', 'text-pink');
	// }
	}

	const handleHighlighterClick = async (e) => {
		const classes = e.target.getAttribute('class');
		const color = classes.slice(classes.indexOf('-') + 1);
		setHighlightColor(color);
	}

	// Add or remove class from HTML element of id, {id}
	const addAndRemoveClass = (e, classToAdd, classToRemove) => {		
		const elmt = e.target;
		elmt.classList.remove(classToRemove);
		elmt.classList.add(classToAdd);
	}

	/* DOM Elements */
	const audioPlayer = 
    	<audio id='audio-player' className={isAudioLoaded ? 'show' : 'hide'} onPlay={(e) => {handleAudioPlay(e)}} onPause={(e) => {handleAudioPause(e)}} ref={audioTrack} controls>
          <source id='' src={isAudioLoaded} type="audio/mpeg" />
          Audio tag is not supported in this browser.
        </audio>

	const searchBar = 
		<form action="/api/audio" method="POST">
		  <label for="fname">Audio URL: </label> 
		  <input id='search-input' type="text" placeholder="MP3 Source" onChange={handleInput} /> &nbsp;
		  <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
		  		  <div className="clear">
		 		{/* TODO: fix fade -> hide animation */}
		  	<h6 className={`${showMessage ? 'show' : 'fade'}`} onTransitionEnd={() => setShowMessage(false)}>Coming soon! :)</h6>
			</div>
		</form>

		const highlighterPalette = 
		<div id='palette'>
			<span className='label'><span id='emoji-brush'>🖌</span> Choose highlighter color:</span> 
			<div className='spacing'></div>
			<div className='swatch highlight-yellow' onClick={(e) => handleHighlighterClick(e)}></div>
			<div className='swatch highlight-orange' onClick={(e) => handleHighlighterClick(e)}></div>
			<div className='swatch highlight-green' onClick={(e) => handleHighlighterClick(e)}></div>
			<div className='swatch highlight-blue' onClick={(e) => handleHighlighterClick(e)}></div>
			<div className='swatch highlight-pink' onClick={(e) => handleHighlighterClick(e)}></div>
			<div className='swatch'></div>
		</div>

		// const renderMessage = () => {
		// 	<h6 className='fade' onTransitionEnd={() => setShowMessage(false)}>Coming soon! :)</h6>
		// }

		const handleSpeedChange = async (e) => {
			setAudioSpeed(e.target.value);
		}

		const speedPicker = 
		<div className={isAudioLoaded ? 'show' : 'hide'}>
			<span className='label text-white text-normal'>Speed: &nbsp;</span> 
			<select id='speedometer' onChange={handleSpeedChange}>
			  <option value="0.5">0.5x</option>
			  <option value="0.75">0.75x</option>
			  <option value="1" selected>1x</option>
			  <option value="1.5">1.50x</option>
			  <option value="2">2x</option>
			  <option value="2.5">2.5x</option>
			  <option value="3">3x</option>
			</select>
		</div>

		const getVoiceCommands = (voiceCommand) => {
			let results = [];
			results.push(voiceCommand);
			return results;
		}

		// TODO: Fix code
		const detectSpeech = (speech, command) => {
			if (speech && speech.includes(command)) {
				const speed = $('#speedometer').val();

				switch (command) {
					// not working
				  case 'play':
				    $('#audio-player').play();
				    break;
				  case 'pause':
				    $('#audio-player').pause();
				    break; // END
				  case 'lower volume':
				     $('#audio-player').volume -= 5;
				    break;
				  case 'increase volume':
				    $('#audio-player').volume += 5;
				    break;			
				  // TODO: refactor - DRY  	  
			    case 'faster':					    		
			    		if (speed < $('select option:last').val()) {	    		   
						    $('#speedometer > option:selected')
						        .prop("selected", false)
						        .next()
						        .prop("selected", true);
						    changeSpeed(speed); 
					    }  
				    break;
				  case 'slower':	
			    		if (speed > $('select option:first').val()) {   
						    $('#speedometer > option:selected')
						        .prop("selected", false)
						        .prev()
						        .prop("selected", true);	
						 		 changeSpeed(speed); 
					  }
				    break;
			     case 'larger font':
			     		// font size ++
					    break;				     
			     case 'smaller font':
			     		// font size --
					    break;	
				}	
			}		
		}

		const changeSpeed = (speed) => {		
			audioTrack.current.playbackRate = speed; 
		}

	useEffect(() => {
		const timer = setInterval(() => {
			setTimestamp(getTimestamp());
		}, 1000)	

		// clearing interval
		return () => clearInterval(timer);			
	}, [])

	// Load audio from sample or user input
	useEffect(() => {
		audioTrack.current.src = audioSample;
		console.log(audioTrack.current.src);

		setIsAudioLoaded(audioSrc || audioSample);			
	}, [/*audioSrc,*/ audioSample])		

	useEffect(() => {
		changeSpeed(audioSpeed);
	}, [audioSpeed])	

	useEffect(() => {
		console.log('voiceCommand: ' + voiceCommand);
	}, [voiceCommand])	


	return (
		<>
		{/*<div className={}>*/}
		{/*isAudioLoaded ? audioPlayer : 'Loading...'*/}
		<div class='label'>Select an audio sample to view transcript:</div>
			<div id='sample-list'>
			<ul>
				{audioSamples.map((audio, i) => {
					return <li id={`sample-${i}`} onMouseEnter={(e) => {handleMouseEnter(e)}} onMouseLeave={(e) => {handleMouseLeave(e)}} onClick={(e) => {handleMouseClick(e)}}>{audio.topic}</li>			
				})}
			</ul>
		</div> <br/>		

		{audioPlayer} 
		{speedPicker}	
		{/*{voiceCommand && <span>{voiceCommand.includes('volume') ? alert('CHECK') : ''}</span>}*/}
		{/*{getVoiceCommands(voiceCommand)}*/}
		{detectSpeech(voiceCommand, 'faster')}
		{detectSpeech(voiceCommand, 'slower')}

		<div className='spacing'></div>
		<div className='spacing'></div>

		{highlighterPalette} <br/><div className='spacing'></div>
		

		{searchBar}

		

		{/*showMessage ? renderMessage() : null*/}
		 {/*</div>*/}
		</>
	);
}
  /* TODOs */
  // validate audio MP3 file path
  // Voice commands: adjust speed, text size, style, forward, backward, take notes (editorial, commentary, critique)
  // collapse & resize left column menu
  // autoscroll reader
  // generate agenda + timestamps
  // dark mode, +/- highlight base shades
  // clip, save, share, export direct quotes + notes
  // take notes + comment on sections for study & reference
  // color coded reader by audio type & speaker diarization
  // Voice notes + comments at timestamps, meeting minutes, memos, brainstorming, ideas free flow

// TODO: separate components

export default Audio;	