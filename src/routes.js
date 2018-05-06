import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFoundPage/NotFound";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
import React from 'react';
const routes=[
	{
		path:'/',
		exact:true,
		main:()=><HomePage/>
	},
	{
		path:'/productlist',
		exact:false,
		main:()=><ProductListPage />
	},
	{
		path:'/product/add',
		exact:false,
		main:({history})=><ProductActionPage history={history}/>
	},
	{
		path:'/product/:id/edit',
		exact:false,
		main:({match})=><ProductActionPage match={match}/>
	},
	{
		path:'',
		exact:false,
		main:()=><NotFound/>
	}
];
export default routes;