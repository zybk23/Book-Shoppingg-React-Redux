import React, {useEffect,useState} from 'react';
import {connect} from "react-redux"
import {get_features} from "../../redux/actions/featuresActions";
import {addToCart} from "../../redux/actions/cartActions";
import {Link} from "react-router-dom";


const Bookslist=({get_features,books,addToCart})=> {

    const[filter,filterSet]=useState("");

    useEffect(()=>{
        get_features()
    },[]);

    const updateSearch=(e)=>{
        filterSet(e.target.value)
    };

    const AddSepet=(book)=>{
        addToCart({quantity:1,book})
    };

    const filteredContacts=books.filter(item=>{
        return item.name.toLowerCase().indexOf(
            filter.toLowerCase()
        )!==-1
    });

    return (
        <div>
            <form style={{margin:"auto"}} action="" className={"form-inline my-2 ml-5"}>
                <input value={filter} name={"filter"} onChange={updateSearch}
                       className="form-control mr-sm-2" type="search" placeholder="Search"
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type={"submit"}>Search</button>
            </form>
            <div className="row">

                {
                    filteredContacts.map(book=>(
                        <div id={"card"} key={book.id} className={"card ml-3 mt-3"}>
                            <div className="card-header d-flex justify-content-between">
                                <h6 style={{cursor:"pointer"}}>
                                    <Link to={"/savebook/"+book.id}>{book.name}</Link>
                                </h6>
                                <i onClick={()=>AddSepet(book)}
                                   className="fas fa-cart-arrow-down icon"></i>
                            </div>
                            <div className="card-body">
                                <img id={"image"} src={book.image} alt=""/></div>
                            <p id={"author"} className={"cart-text"}>Yazar  :  {book.author}</p>
                            <p id={"price"} className={"cart-text"}>
                                <button className={"btn btn-danger"}>{book.price}</button>

                            </p>
                            <p  id={"unit"} className={"cart-text"}>Stokta Kalan Ürün {book.unitInStock}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );

};

function mapStateToProps(state) {
    return{
        books:state.featuresListReducer
    }
}


const mapDispatchToProps={
    get_features,addToCart
};


export default connect(mapStateToProps,mapDispatchToProps)(Bookslist) ;