import { useEffect, useState } from "react";
import climateScript from '../../data/edited/climate';
// import financeScript from '../../data/edited/finance';
import MLKSpeechScript from '../../data/edited/MLK-speech';
import astronomyScript from '../../data/edited/astronomy';
import GreatGatsbyChapter1 from '../../data/edited/gatsby-ch1';
import astronomyStartTimes from '../../data/timestamps/astronomy';
import financeStartTimes from '../../data/timestamps/finance';
import MLKSpeechStartTimes from '../../data/timestamps/MLK-speech';
import climateStartTimes from '../../data/timestamps/climate';
import greatGatsbyStartTimes from '../../data/timestamps/gatsby-ch1';
import './style.css';

const Transcript = ({ timestamp, isPlaying, audioSampleIndex, isAudioLoaded, highlightColor, audioSpeed }) => {	
	const [transcript, setTranscript] = useState([]);	
	const [words, setWords] = useState('');	

	// temp hardcoded start times for sample audios
	// some start times have not been recorded (need to fix)
	const [startTimes, setStartTimes] = useState([greatGatsbyStartTimes, MLKSpeechStartTimes, climateStartTimes, astronomyStartTimes]); 	

	const [scriptTimes, setScriptTimes] = useState([]);	

	const scripts = [GreatGatsbyChapter1, MLKSpeechScript, climateScript, astronomyScript];

	// const highlighters = [{'default': 'yellow', 'primary':'orange', 'secondary':'green', 'tertiary':'blue'}]

	// static dataset retrieved from local file
	// use for testing with limited Deepgram API usage credits
	const setData = () => {
		const script = scripts[audioSampleIndex].results.channels[0].alternatives[0];
		const { transcript, words } = script;
		setTranscript(transcript);	
		setWords(words);	
		// setStartTimes(words.map(word => word.start));
	}	

	// dynamic dataset fetched from Deepgram + server
  const fetchTranscript = async () => {
    const data = await fetch("/api/transcript")
      .then(res => res.json())
      .then(data => data);

    const script = await data.results.channels[0].alternatives[0];
	
		const { transcript, words } = await script;
		setTranscript(transcript);
		setWords(words);	
		setStartTimes(words.map(word => word.start));
		
		console.log(data);
  };	

	// get index of last word in a sentence
	// get all indexes of words ending in period in a transcript
	const getIndexesOfEndWords = () => {
		let arr = [];
		words.map((word, i) => {
			if (/[.?!]$/.test(word.punctuated_word)) {
				arr.push(i);
			}
		})
		return arr;
	}

	/* 🛑 TODO: Refactor + debug
		 Incorrect start times after i = 0, off by 1
		 firstWord at index 1 is skipped over - why? */

	// Split transcript into array of sentences
	const splitTranscriptIntoSentences = () => {
		let str = '';
		let res = [];

		const LINES_IN_PARAGRAPH = 7;
		const transcriptArr = transcript.split(/[.?!]/);
		const lastWordsIndexes = getIndexesOfEndWords();
		let scriptWithTimes = [];
		// let startTimes = [];

		transcriptArr.map((line, i) => {
			let lastWordIndex = lastWordsIndexes[i];
			let firstWord = words[lastWordIndex + 1];

			if (i < transcriptArr.length && firstWord && audioSampleIndex) {
				let lastWord = words[lastWordIndex];
				/* TODO: Debug
				 let startTime = firstWord.start; 
				 🐛: off by 1 index, skips over i = 1
				 */
				// let startTime = 0;
				// startTimes[audioSampleIndex].map((time, j) => {

					 let startTime = startTimes[audioSampleIndex][i]; // temp placeholder
				// })
				let endTime = lastWord.end;

				// DELETE THIS
				// let startTime = firstWord.start;
			
				// if (i === 0) {
				// 	firstWord = words[0];
				// }		
				// if (i === 1) {
				// 	firstWord = words[10];					
				// }		

				// startTime = firstWord.start;
				// endTime = lastWord.end;
				// END								
				
				let obj = {};			

				str = '';
				str += transcriptArr[i].slice(0, transcriptArr[i].lastIndexOf(' '));
				str += ' ' + lastWord['punctuated_word'];	
				res.push(<span id={i} key={i} className={isWithinTime(startTime + 0.01, endTime + 0.2) ? `highlight highlight-${highlightColor}` : 'normal'}>{str}</span>);	

				// line break after first sentence
				// new paragraph break after every {x} sentences 
				if (i % LINES_IN_PARAGRAPH == 0) {
					res.push(<p></p>);
				}
				
				obj.sentence = str;
				obj.startTime = startTime;
				obj.endTime = endTime;

				scriptWithTimes.push(obj);		

				startTimes.push(startTime);							
			}
		})
		console.log('startTimes: ' + startTimes);
		getIdOfMatchingSentence(scriptWithTimes)
		// setScriptTimes(scriptWithTimes);	
		console.log(lastWordsIndexes);
		return res;
	}

	// Is timestamp between start & end times?
	const isWithinTime = (start, end) => {
		return timestamp >= start && timestamp <= end;
	}

	// get ID (index) of sentence matching timestamp
	const getIdOfMatchingSentence = (scriptWithTimes) => {
		let id = scriptWithTimes.findIndex(sentence => {
			isWithinTime(sentence.startTime, sentence.endTime);			
		})
		console.log('getIdOfMatchingSentence: ' + id);
	}

	// re-render sentence during time

	// {sentence: '', startTime: '', endTime: ''}

	// replace last word in sentence with substitute word
	const replaceLastWord = (sentence, word) => {
		let arr = sentence.replace(/[\s.?!]$/, word);
		arr.map((sentence, i) => {

		})
	}

	const renderStartView = () => {
		return (
			<>
			<img id='arrow-gif' src='https://media.giphy.com/media/lR6Xtly3SKVZP4w9QC/giphy.gif' /><h2 id='guide'>{/*&lt;&lt; &nbsp;*/} Select an audio to start!</h2><br/>

		{/* TODO: Add user starter guide, voice commands */}
		
			{/*<img src='https://media.giphy.com/media/aZVOjzbW8cPDm9PQzP/giphy.gif' />*/}
			</>
		)
	}
 
	// is word startTime <= current timestamp?
	// const isStartTimeBefore = 

	// highlight word if <= index
// {"start":0.09988687, "end":0.21975112},
// {"start":0.21975112, "end":0.3795701}
// "Hi. How are you? I'm good. Thanks for asking." [0, 3, 5, 8]

	useEffect(() => {
		setData();
		// fetchTranscript();		
	}, [audioSampleIndex])

	// useEffect(() => {
	// 	// change highlight color
	// 	const highlights = document.getElementsByClassName('highlight');
	// 	for(var i = 0; i < highlights.length; i++) {
	// 		highlights[i].setAttribute('style', 'background-color: skyblue');
	// 	}
	// }, [highlighter])		

	useEffect(() => {
		console.log(`currentTime: ${timestamp}`);	
	}, [timestamp])	

	return (
		<>

		<div className={`scroll transcript`} /*style={Object.assign({},
		 transcriptStyle, scrollStyle)}*/>			
			{/*{transcript}*/}
			{/*<div>{transcript}</div>*/}
			{!isAudioLoaded ? renderStartView() : null}
			{
				transcript.length > 0 && words.length > 0 && startTimes.length > 0 &&
				<div id='transcript'>
					{/*timestamp > 30 ? splitTranscriptIntoSentences(transcript) : ''*/}
					{transcript ? splitTranscriptIntoSentences(transcript) : 'Oops! Transcript not found.'}
					{/*transcript*/}
					{/*deepgramData ? JSON.stringify(deepgramData) : 'Not found'*/}
				</div>
			}
			{console.log(startTimes)}
		</div>
		</>
	);
}

export default Transcript;