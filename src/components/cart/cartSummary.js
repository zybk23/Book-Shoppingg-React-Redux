import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import {deleteCart} from "../../redux/actions/cartActions";



class CartSummary extends Component {
    renderEmpty(){
        return (
            <li className={"nav-item d-flex justify-content-center"}>
                <i style={{fontSize:"45px"}} className="fas fa-cart-arrow-down icon"></i>
                <p style={{fontFamily: ('Indie Flower', "cursive")}} className={"mt-2"}>Sepetiniz boş</p>
            </li>
        )
    }

    RemoveItem=(item)=>{
        this.props.removeCart(item)
    };
    renderSummary(){
       // console.log(style={{padding:0.5}} className={"btn btn-success"})
        return(
            <li className="nav-item dropdown">
                <Link to={"/"} className="nav-link dropdown-toggle d-flex justify-content-center" id="navbarDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i style={{fontSize:"45px"}} className="fas fa-cart-arrow-down icon"></i>
                    <p style={{fontFamily: ('Indie Flower', "cursive")}} className={"mt-2"}>Sepetiniz</p>
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {
                        this.props.carts.map(cart=>(
                            <Link to={"/"} key={cart.book.id} className="dropdown-item d-flex justify-content-between" >
                                <img width={40} height={40} style={{left:"-20px"}} src={cart.book.image} alt=""/>
                                <div className={"d-flex justify-content-between"}>
                                    <p className={"mr-2"}>{cart.book.name}</p>
                                    <span style={{color:"#BDB8B4"}} className={"pb-2"}>x{cart.quantity}</span>
                                </div>

                                <i onClick={()=>this.RemoveItem(cart.book)}
                                    style={{color:"red"}} className="fas fa-times-circle mt-1 ml-2"></i>
                            </Link>
                        ))
                    }
                    <div className="dropdown-divider"></div>
                    <div className={"d-flex justify-content-between"}>
                        <button className={"btn btn-warning"}><Link style={{textDecoration:"none"}} to={"/detail"}>Tümünü Göster</Link></button>
                        <button className={"btn btn-danger"}>Satın Al</button>
                    </div>

                </div>
            </li>
        )
    }
    render() {
        return (
            <div>
                {
                    this.props.carts.length>0?this.renderSummary():this.renderEmpty()
                }

            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        carts:state.cartReducer
    }
}


function mapDispatchToProps(dispatch) {
    return{
        removeCart:bindActionCreators(deleteCart,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary) ;