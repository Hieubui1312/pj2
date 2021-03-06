import React from 'react';
import ProductItem from './ProductItem';
class ProductList extends React.Component{
	render(){
		return(
			
			<div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Danh sách sản phẩm</h3>
              </div>
              <div className="panel-body">
                <table className="table table-hover table-bordered">
					<thead>
						<tr>
							<th>STT</th>
							<th>Mã sản phẩm</th>
							<th>Tên sản phẩm</th>
							<th>Giá sản phẩm</th>
							<th>Trạng thái </th>
							<th>Hành động</th>
						</tr>
					</thead>
					<tbody>
						{this.props.children}
					</tbody>
				</table>
              </div>
            </div>
     
			);
	}
}
export default ProductList;