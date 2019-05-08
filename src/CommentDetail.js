import React from 'react';
//imported Faker.js to generate fake data to use in projects
import faker from 'faker';

//const CommentDetail is a reusable component. Components
// use uppercase naming convention.
const CommentDetail = () => {
	return(
		// "ui container comments", "comment", "avatar", "metadata"
		//	"date", "content", "author", "text" are all classes from 
		//	semantic UI
		<div className="comment">
			<a href="/" className="avatar">
				{/* {faker.image.avatar()} is called via interpolation
					to generate a random image for this tag from the
					faker import.*/}
				<img alt="avatar" src={faker.image.avatar()}/>
			</a>
			<div className="content">
				<a href="/" className="author">Bob</a>
				<div className="metadata">
					<span className="date"> Today at 6:00PM</span>
				</div>
				<div className="text"> Nice Blog Post!</div>
			</div>
		</div>
		);
};

//export makes Comment Detail Component available to outside files
export default CommentDetail;