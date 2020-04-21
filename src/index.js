// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './js/components/HelloWorld';

const appContainer = document.getElementById('react-app');
ReactDOM.render(<HelloWorld />, appContainer);

import Hobbies from './js/components/Hobbies';

const hobbiesContainer = document.getElementById('hobbies-container')
ReactDOM.render(<Hobbies hobbies={["Videogames", "Programming", "Sci-fi movies", "Wazone"]} />, hobbiesContainer)
