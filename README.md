# Scribe Lite

🌀 **[Installation](#installation)** &nbsp; &nbsp; 🌀 **[Configuration](#configuration)** &nbsp; &nbsp; 🌀 **[Project Structure](#project-structure)** &nbsp; &nbsp; 🌀 **[Screenshots](#screenshots)** &nbsp; &nbsp; 🌀 **[GIF Demo](#gif-demo)**

<br/>

## Installation 
1. Clone this repository
2. Run **`cd server && npm install`** to install all server dependencies
3. Run **`npm start`** from `server/` dir to run the node server on localhost:5000
5. Open a new Terminal tab, cd to `client/` dir, and run **`npm install`** to install all client dependencies
6. Run **`npm start`** to start the React app on localhost:3000

<br/>

## Configuration
Rename server side **`.env.example`** to **`.env`** and add your Deepgram_API_Key. React **`.env`** file contains sample pre-recorded audios for quick demo and testing.

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

## Screenshots
<img src='assets/demo/1.png' alt='visualizer 1' width='800px' />
<img src='assets/demo/2.png' alt='visualizer 2' width='800px' />
<img src='assets/demo/3.png' alt='visualizer 3' width='800px' />
<img src='assets/demo/4.png' alt='visualizer 4' width='800px' />

<br/>

## GIF Demo
<img src='assets/demo/demo-1.gif' alt='gif demo 1' width='800px' />
<img src='assets/demo/demo-2.gif' alt='gif demo 2' width='800px' />

† The mouse + frames freezing at the end do not reflect app performance. Runtime was smooth during recording. However, these were the only two GIFs I was able to screen capture. The remaining batch of recordings turned out like **<a href='assets/demo/yikes.gif'>this</a> 😪**


