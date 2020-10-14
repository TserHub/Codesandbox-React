import React from 'react';
import { useHooks } from './components/hooks';
// import Demo from './components/proxy';
// import Demo from './components/object-define-property';
// import Demo from './components/form';
// import Demo from './components/function';
// import Demo from './components/function-currying';
// import Demo from "./components/classname";
// import Demo from "./components/set-map";
// import Demo from "./components/function-overloading";
// import Demo from './components/preload-image';
import Demo from './components/base64';
// import Demo from './components/count-down';
// import Demo from './components/json';
import './styles.css';

export default function App() {
	const state = useHooks();
	return (
		<div className="App">
			<h1>Hello {state.name}</h1>
			<h2>Start editing to see some magic happen!</h2>
			<Demo />
		</div>
	);
}
