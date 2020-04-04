import React from 'react';
import '../../App.css';
import Navi from "../navi/Navi";
import {Route,Switch} from "react-router-dom"
import Dashboard from "./dashboard";
import CartDetail from "../cart/cartDetail";
import AddOrUpdateBook from "../books/AddOrUpdateBook";
import AddCategory from "../categories/addCategory";


function App() {
  return (
    <div className="App">
        <Navi/>
        <Switch>
            <Route path={"/"} exact component={Dashboard}/>
            <Route path={"/detail"} exact component={CartDetail}/>
            <Route path={"/savebook/:bookId"} exact component={AddOrUpdateBook}/>
            <Route path={"/savebook"} exact component={AddOrUpdateBook}/>
            <Route path={"/addcategory"} exact component={AddCategory}/>
        </Switch>

    </div>
  );
}

export default App;
