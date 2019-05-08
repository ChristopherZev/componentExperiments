import React from 'react';
import ReactDOM from 'react-dom';
//imported Faker.js to generate fake data to use in projects
//import faker from 'faker'; ---- this import was moved to component 

//Components-------------
	// The "./" indicates to look in the current folder we are
	// in, plus add the file name to import component. No need
	// to include the .js if importing a JS file due to webpack 
	// automatically finding JS files with the given name 
import CommentDetail from './CommentDetail'
//-----------------------


const App = () => {
	return (
		// "ui container comments", "comment", "avatar", "metadata"
		//	"date", "content", "author", "text" are all classes from 
		//	semantic UI

		/*
		To invoke component from another file use the 
		<   /> structure seen below unlike when invoke a 
		func, obj, or var which uses the {} structure
		*/
		<div className="ui container comments">
			<CommentDetail />
			<CommentDetail />
			<CommentDetail />
			
		</div>

		

	);
};

ReactDOM.render(<App />, document.querySelector('#root'));