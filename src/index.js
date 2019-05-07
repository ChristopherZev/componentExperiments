import React from 'react';
import ReactDOM from 'react-dom';
//imported Faker.js to generate fake data to use in projects
import faker from 'faker';


const App = () => {
	return (
		// "ui container comments", "comment", "avatar", "metadata"
		//	"date", "content", "author", "text" are all classes from 
		//	semantic UI
		<div className="ui container comments">
			<div className="comment">
				<a href="/" className="avatar">
					{/* {faker.image.avatar()} is called via interpolation
					to generate a random image for this tag from the
					faker import.*/}
					<img alt="avatar" src={faker.image.avatar()}/>
				</a>
				<div className="content">
					<a href="/" className="author">
						Sam
					</a>
					<div className="metadata">
						<span className="date"> Today at 6:00PM</span>
					</div>

					<div className="text"> Nice Blog Post!</div>
				</div>
			</div>

			<div className="comment">
				<a href="/" className="avatar">
					<img alt="avatar" src={faker.image.avatar()}/>
				</a>
				<div className="content">
					<a href="/" className="author">
						Sam
					</a>
					<div className="metadata">
						<span className="date"> Today at 6:00PM</span>
					</div>

					<div className="text"> Nice Blog Post!</div>
				</div>
			</div>

			<div className="comment">
				<a href="/" className="avatar">
					<img alt="avatar" src={faker.image.avatar()}/>
				</a>
				<div className="content">
					<a href="/" className="author">
						Sam
					</a>
					<div className="metadata">
						<span className="date"> Today at 6:00PM</span>
					</div>

					<div className="text"> Nice Blog Post!</div>
				</div>
			</div>

		</div>

	);
};

ReactDOM.render(<App />, document.querySelector('#root'));