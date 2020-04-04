import React, {Component} from 'react';
import {Link} from "react-router-dom"
import CartSummary from "../cart/cartSummary";

class Navi extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div id={"title-div"}><Link id={"title"} to={"/"} className="navbar-brand" >Taha'nın Kitap Evi</Link></div>
                <div className={"container"}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <div className={"subtitle mr-3"}><Link to={"/"} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link></div>
                            </li>
                            <li className="nav-item">
                                <div className="subtitle"><Link to={"/savebook"} className="nav-link" href="#">AddBooks</Link></div>
                            </li>
                            <li className="nav-item ml-3">
                                <div className="subtitle"><Link to={"/addcategory"} className="nav-link" href="#">AddCategory</Link></div>
                            </li>

                            <CartSummary/>

                        </ul>


                    </div>
                </div>
            </nav>

        );
    }
}

export default Navi;