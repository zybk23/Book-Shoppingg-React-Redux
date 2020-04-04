import React, {Component} from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import {deleteCart} from "../../redux/actions/cartActions";


class CartDetail extends Component {

    RemoveItem=(book)=>{
        this.props.removeItem(book)
    };

    render() {

        return (
            <div className={"container mt-5"}>
                <table id={"table"} className={"table"}>
                    <thead>
                    <tr>
                        <th>Ürün</th>
                        <th>Miktar</th>
                        <th>Birim Fiyatı</th>
                        <th>Toplam Fiyat</th>
                        <th><button  className={"btn btn-warning"}>Satın Al</button></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.cartDetail.map(item=>(
                            <tr key={item.book.id}>
                                <td>
                                    <div className={"row"}>
                                        <div className="col-md-3">
                                            <img width={60} height={80} src={item.book.image} alt=""/>
                                        </div>
                                        <div className="col-md-9">
                                            <p style={{marginTop:"20px"}}>{item.book.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.quantity}</td>
                                <td>{item.book.price}</td>
                                <td>{item.book.price}</td>
                                <td><button onClick={()=>this.RemoveItem(item.book)}
                                    className={"btn btn-danger"}>Sil</button></td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cartDetail:state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return{
        removeItem:bindActionCreators(deleteCart,dispatch)
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(CartDetail) ;