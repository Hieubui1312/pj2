import React from 'react';
import {Route,Link} from 'react-router-dom';
const menus=[
		{
			name:"Trang chủ",
			exact:true,
			to:"/"
		},
		{
			name:"Quản lí sản phẩm",
			exact:false,
			to:"/productlist"
		}
	];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => {
    	var active=match ? 'active': '';
        return(
      	<li className={active}>
      		<Link to={to}>{label}</Link>
      	</li>
      	);
    }}
  />
);
class Menu extends React.Component{
	render(){
		return(
			<div className="navbar navbar default">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">React JS</a>
					<ul className="nav navbar-nav">
						{this.showMenu(menus)}
					</ul>
				</div>
			</div>
			);
	}
	showMenu=(menus)=>{
		var result=null;
		if(menus.length>0){
			result=menus.map((menu,index)=>
				<MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
				
				)
		}
		return result;
		}
};

export default Menu;