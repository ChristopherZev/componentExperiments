import React from 'react';
//imported Faker.js to generate fake data to use in projects
//import faker from 'faker'; ----This import was moved to App component to
//								be called from that level rather than from 
//								within the CommentDetail component, to use prop

//const CommentDetail is a reusable component. Components
// use uppercase naming convention.

//Need to added props as an argument to the component to use props
const CommentDetail = (props) => {
	return(
		// "ui container comments", "comment", "avatar", "metadata"
		//	"date", "content", "author", "text" are all classes from 
		//	semantic UI
		<div className="comment">
			<a href="/" className="avatar">
				{/* {faker.image.avatar()} is called via interpolation
					to generate a random image for this tag from the
					faker import.*/}
				<img alt="avatar" src={props.avatImg}/>
			</a>
			<div className="content">
				{/*props.author calls the author prop referenced in index.js
					within the Comment Detail component tage*/}
				<a href="/" className="author">{props.author}</a>
				<div className="metadata">
					<span className="date"> {props.postTime}</span>
				</div>
				<div className="text"> {props.commentBox}</div>
			</div>
		</div>
		);
};

//export makes Comment Detail Component available to outside files
export default CommentDetail;