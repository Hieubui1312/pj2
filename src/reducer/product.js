var initialState=[{
	id:1,
	name:"Iphone",
	gia:500,
	state:true
}];
const product=(state=initialState,action)=>{
	switch(action.type){
		default:return [...state];
	}
}
export default product;