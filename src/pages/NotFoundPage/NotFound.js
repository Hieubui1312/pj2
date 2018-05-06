import React from 'react';
export default class NotFound extends React.Component{
	render(){
		return(
			<div className="container">
				<div className="alert alert-warning">
					<button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
					<strong>Không tìm thấy trang cần tìm</strong> 
				</div>
			</div>
			);
	}
}
