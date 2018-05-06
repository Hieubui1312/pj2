import React from 'react';
import ProductItem from './../../component/ProductItem';
import ProductList from './../../component/ProductList';
import {connect} from 'react-redux';
import axios from 'axios';
import callAPI from './../../utils/apiCaller.js';
import{Link} from 'react-router-dom';
class ProductListPage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			products:[]
		}
	}
	componentDidMount(){
		var test = callAPI('products','GET', null);
		test.then(res=>{
			console.log(res);
			this.setState({products:res.data});
		}).catch(er=>{
			console.log(er);
		})
		console.log(test);
	}
	findIndex=(products,id)=>{
		var result=-1;
		products.forEach((product, index)=>{
			if(product.id===id){
				result=index;
			}
		});
		console.log(result);
		return result;
	}
	deleteProduct(id){
		var url='products/'+id;
		console.log(url);
		var {products}=this.state;
		callAPI(url,'DELETE',null).then(res=>{
			console.log(res);
			var result=this.findIndex(products,id);
			if(result!==-1){
				products.splice(result,1);
				this.setState({products:products});
			}
		});
	};

	render(){
		var products=[];
		
		return(
			<div>
				<Link to='/product' className="btn btn-primary mb-10">Thêm sản phẩm</Link>
				<ProductList>{this.showProduct(this.state.products)}</ProductList>
			</div>
			);
	}
	showProduct=(products)=>{
		var result=null;
		if(products.length>0){
			result=products.map((product,index)=>
					<ProductItem key={index} product={product} index={index} deleteProduct={(id)=>this.deleteProduct(id)} />
					
			)
		}
		return result;
	}
}

export default connect(function(state){
	return{products:state.product}
})(ProductListPage);