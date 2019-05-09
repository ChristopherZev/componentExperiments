import React from 'react';
import ReactDOM from 'react-dom';
//imported Faker.js to generate fake data to use in projects
import faker from 'faker';  

//Components-------------
	// The "./" indicates to look in the current folder we are
	// in, plus add the file name to import component. No need
	// to include the .js if importing a JS file due to webpack 
	// automatically finding JS files with the given name 
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
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

//Props------------------
//Props(erties) are the system of passing data from parent to child component
//to customize/configure a child component. Name of prop can be whatever you 
//want it to be.Author below is the name of the prop that is called via props.author


//Reusable Components----
//To reference/view one component inside of another nest compoent inside of a parent 
//component. The nested/child component is reusable and will always have the ability 
//to be referenced via the "props.children" object. To nest a component within a component
//you need to use 2 tags i.e. (<ApprovalCard></ApprovalCard>) instead of a self-closing tag

const App = () => {
	return (

		<div className="ui container comments">
			
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					postTime="Today at 3:30pm" 
					commentBox="Hello everyone." 
					avatImg={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Bob" 
					postTime="Today at 7:00pm" 
					commentBox="This video is hilarious!" 
					avatImg={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>	
				<CommentDetail 
					author="Apple" 
					postTime="Yesterday at 10:05pm" 
					commentBox="1st comment!......damn it!" 
					avatImg={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>

		

	);
};

ReactDOM.render(<App />, document.querySelector('#root'));