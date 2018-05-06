import React from 'react';
class ProductItem extends React.Component{
	deleteProduct(e){
		
		this.props.deleteProduct(e);
	}
	render(){
		var product= this.props.product;
		var index=this.props.index;
		var trangthai=product.state?"Còn Hàng":"Hết hàng";
		var css=product.state?"success":"danger";
		return(
			<tr>
			    <td>{index+1}.</td>
		        <td>{product.id}</td>
				<td>{product.name}</td>
				<td>{product.gia}</td>
				<td><span className="label label-success">{trangthai}</span></td>
				<td>
					<button type="button" className="btn btn-primary mr-10" >Thêm</button>
					<button type="button" className="btn btn-danger " onClick={()=>this.deleteProduct(product.id)}>Xóa</button>
				</td>
			</tr>					
			);
	}
}
export default ProductItem;