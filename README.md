# Scribe Lite

🌀 **[Installation](#installation)** &nbsp; &nbsp; 🌀 **[Configuration](#configuration)** &nbsp; &nbsp; 🌀 **[Project Structure](#project-structure)**  &nbsp; &nbsp; 🌀 **[What it is](#what-it-is)** &nbsp; &nbsp; 🌀 **[Screenshots](#screenshots)** &nbsp; &nbsp; 🌀 **[GIF Demo](#gif-demo)** &nbsp; &nbsp; 🌀 **[Challenges](#challenges)** &nbsp; &nbsp; 🌀 **[Future Plans](#future-plans)**

<br/>

## Installation 
1. Clone this repository
2. Run **`cd server && npm install`** to install all server dependencies
3. Run **`npm start`** from `server/` dir to run the node server on localhost:5000
5. Open a new Terminal tab, cd to `client/` dir, and run **`npm install`** to install all client dependencies
6. Run **`npm start`** to start the React app on localhost:3000

<br/>

## Configuration
Rename server side **`.env.example`** to **`.env`** and add your Deepgram_API_Key. <br/>
React **`.env`** file contains sample pre-recorded audios for quick demo and testing.

\* Voice commands are supported only in Chrome browser.

<br/>

## Project Structure
<details>
	<summary>Expand to view project tree</summary> 
	
	root
	├─ .gitignore
	├─ assets
	│  ├─ bugs
	│  ├─ icon
	│  ├─ demo
	│  ├─ img
	├─ node_modules
	├─ public
	│  ├─ index.htrml
	├─ server
	│  ├─ controllers
	│  │  ├─ transcript.controller.js
	│  ├─ routes
	│  │  ├─ index.js
	│  ├─ services
	│  │  ├─ transcript.service.js
	│  ├─ node_modules
	│  ├─ .env.example
	│  ├─ index.js
	│  ├─ package.json
	├─ src
	│  ├─ components
	│  │  ├─ Audio
	│  │  │  ├─ Audio.jsx
	│  │  │  ├─ style.css
	│  │  ├─ Navbar
	│  │  │  ├─ Navbar.jsx
	│  │  │  ├─ style.css
	│  │  ├─ Notes
	│  │  │  ├─ Notes.jsx
	│  │  │  ├─ style.css
	│  │  ├─ Transcript
	│  │  │  ├─ Transcript.jsx
	│  │  │  ├─ style.css
	│  │  ├─ Voice
	│  │  │  ├─ Voice.jsx
	│  │  ├─ index.js
	│  ├─ data
	│  ├─ App.css
	│  ├─ App.js
	│  ├─ index.css
	│  ├─ index.js
	│  ├─ setupProxy.js
	├─ .env
	├─ .gitignore
	├─ package.json
	├─ webpack.config.js 
	
</details>

<br/>

## What It Is
<p>A lightweight speech-to-text transcription reader for users who want to follow along with the contents contained in pre-recorded audios but struggle with hearing or need supplementary text to aid in information processing. With speed adjusments, colored highlights, voice commands, and other features in the works, the app delivers an interactive, seamless experience for readers and listeners that makes any audio content widely accessible, easy to absorb, and quick to understand.</p>

<p>Personally, this is an app that I would use myself (that's how I came up with it 🙂) because I prefer listening to English audios and videos at twice the speed (unless the speaker is speaking quickly). I like having the option to adjust the audio speed for variable speaking paces, which is one of the main benefits of having access to pre-recordings. But when an audio player does not offer the option to change speed or an agenda of topics with timestamps to jump to, it can be hard to sit through an hour long talk or lecture. This might sound weird, but I have a harder time processing speech that is spoken slowly than I do for faster-paced speech. I also deal with non-stop buzzing/ringing in my ears from tinnitus, an incurable condition, so my hearing is slightly impaired.</p>

<p>As we get older, our ability to hear certain frequencies diminishes with time. I cannot hear pitches beyond a certain frequency expected from my age group which is unfortunate and probably an indicator that I should do better in trying to preserve what I have left of my hearing. As much as this app is meant to help people who are deaf or people with hearing loss, catering to different learning styles and abilities (visual vs/in conjunction with audio), it also serves users who cannot rely on audio-only speech for any other reason (e.g. working or studying in a public library or quiet space without earbuds/headphones, in a noisy environment, wanting to preserve & protect auditory health from further deterioration, text translations for foreign language speakers/learners, etc). Providing audio as text built upon automated speech recognition AI, like Deepgram, improves accessibility by offering a plethora of supportive features and possibilities that are not supported by audio alone. 

<p>The current version is missing many of the <a href='#future-plans'><strong>features I had envisioned</strong></a>. I didn't get around to building out the app to what I want it to be, so what you see right now is more of a starter project with the bare bones laid out.</p>

<br/>

## Screenshots
<img src='assets/demo/1.png' alt='visualizer 1' width='800px' />
<img src='assets/demo/2.png' alt='visualizer 2' width='800px' />
<img src='assets/demo/3.png' alt='visualizer 3' width='800px' />
<img src='assets/demo/4.png' alt='visualizer 4' width='800px' />

<br/>

## GIF Demo
<img src='assets/demo/demo-1.gif' alt='gif demo 1' width='800px' />
<img src='assets/demo/demo-2.gif' alt='gif demo 2' width='800px' />

**†** Please click on the GIFs to restart from frame 1 &nbsp; &nbsp; **<a href='assets/demo/demo-1.gif'>GIF 1</a> ~ <a href='assets/demo/demo-2.gif'>GIF 2</a>** <br/>

**†** The mouse + frames freezing at the end do not reflect app performance. Runtime was smooth during recording. Unfortunately, these were the only two GIFs I was able to screen capture. The remaining batch of recordings turned out like **<a href='assets/demo/yikes.gif'>this</a> 😪**

<br/>

## Challenges
- <a href='assets/bugs/POST%20504.png'>504 Error</a> - <a href='assets/bugs/POST%20Router%20Error.png'>router middleware issue</a>
- picking one idea from a list of several to build

<br/>

## Future Plans
Features that I plan to add in future iterations:
- audio/video URL, file upload, video support
- voice commands: adjust speed, text size, style, forward, backward, take - speech-to-text notes 
	- editorial, commentary, critique, etc.
- real-time voice notes + comments at timestamps, meeting minutes, memos, brainstorming, ideas, free flow
- collapsible, resizable left column menu for full screen reader with autoscroll
- generate agenda + timestamps to jump to (useful for long audios + videos)
- dark mode, +/- highlighter shades
- clip, save, share, export direct quotes + notes
- take notes + comment on sections for study & reference
- multi-language support, translations in multiple languages
- glossary for terms, interpretations, symbols, motifs
- color coded highlights distinguised by speaker diarization for different audio formats 
	- meeting, podcast, video, speech, script, literature, poetry, song<sup>*</sup>
- build another tool for recording & song writing lyrics (return to my 1st idea during brainstorming)
	- there are other tools I'd like to build as well since speech-to-text is such a versatile application with many use cases

<br/>

