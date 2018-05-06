import React from 'react';
import callAPI from './../../utils/apiCaller.js';
import {Link } from 'react-router-dom';
class ProductActionPage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			id:'',
			name:'',
			gia:'',
			state:''
		};
	}
	onChange=(e)=>{
		var target=e.target;
		var name=target.name;
		var value=target.type === 'checkbox' ?target.checked:target.value;

		this.setState({[name]:value});
	}
	onSubmit=(e)=>{
		e.preventDefault();
		callAPI('products','POST',{
			name:this.state.name,
			gia:this.state.gia,
			state:this.state.gia,
		}).then(res=>{
			this.props.history.goBack();
		});
	}
	render(){
		return(
			<div>
				<form onSubmit={this.onSubmit}>
					<legend>Sản phẩm</legend>
				
					<div className="form-group">
						<label >Tên sản phẩm</label>
						<input type="text" className="form-control" id="" placeholder="Name Product" name="name" onChange={this.onChange}/>
					</div>
					<div className="form-group">
						<label >Giá sản phẩm</label>
						<input type="text" className="form-control" id="" placeholder="Price Product" name='gia' onChange={this.onChange}/>
					</div>
					<div className="form-group">
						<label >Trạng thái</label>
						<div className="checkbox">
							<label>
								<input type="checkbox" value="" name='state' onChange={this.onChange}/>
								Còn hàng
							</label>
						</div>
					</div>
					<Link to='/productlist' className='mr-10 btn btn-success'>
						Trở lại
					</Link>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
			);
	}
}
export default ProductActionPage;