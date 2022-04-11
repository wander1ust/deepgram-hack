import { useEffect, useState } from "react";
import useSpeechToText from 'react-hook-speech-to-text';
import { Link, useLocation } from "react-router-dom";
import './style.css';

const Navbar = ({  }) => {
    const location = useLocation();
	return (
		<>
		<div id='navbar'>
			<ul>
				<li><Link to={'/notes'}>🎙📘 Voice Memos + Text Notes</Link></li>
				<li><a href=''>📓 Journal</a></li>
				<li><a href=''>⏱ Agenda</a></li>
			</ul>
		</div>

     
      	{/*<Link to={'/notes'}>Link</Link>*/}
  
    
    </>	
	)
}

export default Navbar;