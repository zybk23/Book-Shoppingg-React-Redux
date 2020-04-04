import React,{useEffect,useState} from "react";
import {connect} from "react-redux"
import {get_categories} from "../../redux/actions/categoryActions";
import BookDetail from "./BookDetail";
import {saveBook} from "../../redux/actions/featuresActions";


function AddOrUpdateBook({categories,books,saveBook,get_categories,history,...props}) {

    const [book,setBook]=useState({...props.book});
    const [errors,setError]=useState("");
    useEffect(()=>{
        if(categories.length===0){
            get_categories();
        }
        setBook({...props.book})
    },[props.book]);

    function handleChange(e) {
        const {name,value}=e.target;
        setBook(previousProduct=>({
            ...previousProduct,
            [name]:name==="categoryId"?parseInt(value,10):value
        }));
        validate(name,value)
    }

    function validate(name,value) {
        if(name==="name" && value===""){
            setError(previousError=>({
                ...previousError,
                name:"Alanı Doldurunuz"
            }))
        }
        if(name==="image" && value===""){
            setError(previousError=>({
                ...previousError,
                image:"Alanı Doldurunuz"
            }))
        }
        if(name==="price" && value===""){
            setError(previousError=>({
                ...previousError,
                price:"Alanı Doldurunuz"
            }))
        }
        if(name==="unitInStock" && value===""){
            setError(previousError=>({
                ...previousError,
                unitInStock:"Alanı Doldurunuz"
            }))
        }
        if(name==="author" && value===""){
            setError(previousError=>({
                ...previousError,
                author:"Alanı Doldurunuz"
            }))
        }
    }

    function handleSave(e) {
        if(errors===""){
            e.preventDefault();
            saveBook(book).then(()=>{
                history.push("/")
            })
        }
        else{
            alert ("Boş alanları doldurunuz")
        }

    }

    return(
        <div className={"container"}>
            <BookDetail book={book} categories={categories} onChange={handleChange} onSave={handleSave} errors={errors}/>
        </div>

    )
}



export function getBookById(books,bookId) {
    let book=books.find(book=>book.id == bookId) ||null;
    return book
}

function mapStateToProps(state,ownProps) {
    const bookId=ownProps.match.params.bookId;
    const book=bookId && state.featuresListReducer.length>0
    ?getBookById(state.featuresListReducer,bookId):{};

    return{
        book,
        books:state.featuresListReducer,
        categories:state.categoryListReducer
    }
}

const mapDispatchToProps={
    get_categories,saveBook
};



export default connect(mapStateToProps,mapDispatchToProps)(AddOrUpdateBook);