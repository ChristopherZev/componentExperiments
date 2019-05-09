import React from 'react';


//"props.children" is used here to reference the CommentDetail component
//that is nested within the ApprovalCard component.

const ApprovalCard = (props) => {
	return(
		<div className="ui card">
			<div className="content">{props.children}</div>
			<div className="extra content">
				<div className="ui two buttons">
					<div className="ui basic green button">Yay</div>
					<div className="ui basic red button">Nay</div>
				</div>	
			</div>
        </div>
	);
};

//export makes Comment Detail Component available to outside files
export default ApprovalCard;