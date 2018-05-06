import React, { Component } from 'react';
import Menu from "./component/Menu";
import ProductList from "./component/ProductList";
import routes from "./routes.js";
import {Switch} from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Menu/>
          <div className="container">
            <div className="row">
             {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-primary mb-10" >Thêm sản phẩm</button>
                <ProductList />
              </div>*/}
             { this.showContent(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
  showContent=(routes)=>{
    var result=null;
    if(routes.length>0){
      result=routes.map((route,index)=>{
        return(
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
          );
      });
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
