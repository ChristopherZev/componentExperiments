import React from 'react';
import ReactDOM from 'react-dom';
//imported Faker.js to generate fake data to use in projects
//import faker from 'faker'; ---- this import was moved to component 

//Components-------------
	// The "./" indicates to look in the current folder we are
	// in, plus add the file name to import component. No need
	// to include the .js if importing a JS file due to webpack 
	// automatically finding JS files with the given name 
import CommentDetail from './CommentDetail';
//-----------------------

//Component Hierarchy----
//The App Component is what engulfs the components below
//through "component nesting" make all interior components
// "child components" and making App the "parent component"

//Classes----------------
// "ui container comments", "comment", "avatar", "metadata"
//	"date", "content", "author", "text" are all classes from 
//	semantic UI

//Using Components-------
//To invoke component from another file use the 
//<   /> structure seen below unlike when invoke a 
//func, obj, or var which uses the {} structure

//Props----------------
//Props(erties) are the system of passing data from parent to child component
//to customize/configure a child component. Name of prop can be whatever you 
//want it to be.Author below is the name of the prop that is called via props.author

const App = () => {
	return (

		<div className="ui container comments">
			<CommentDetail author="Sam"/>
			<CommentDetail author="Bob"/>
			<CommentDetail author="Apple"/>
			
		</div>

		

	);
};

ReactDOM.render(<App />, document.querySelector('#root'));