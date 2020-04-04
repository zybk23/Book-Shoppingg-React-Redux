import React, {Component} from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import * as categoryActions from "../../redux/actions/categoryActions"
import axios from "axios"
import alertify from "alertifyjs"


class AddCategory extends Component {
    state={
        id:"",
        categoryName:"",
        error:false
    };

    ChangeCategory=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    validateForm=(e)=>{
        const{id,categoryName}=this.state;
        if(id==="" || categoryName===""){
            return false;
        }
        else{
            return true;
        }
    };

    OnSubmitCategory=async (e)=>{
        e.preventDefault();
        const{id,categoryName}=this.state;

        const newCategory={
            id:id,
            categoryName: categoryName
        };
        this.setState({
            id:"",
            categoryName: ""
        });

        if(!this.validateForm()){
            alertify.error("Boş alnları doldurunuz");
            this.setState({
                error:true
            })
        }

        const response=await axios.post("http://localhost:3000/categories",newCategory);

        this.props.AddCategories(response.data);

        this.props.history.push("/")

    };

    render() {
        const{id,categoryName}=this.state;
        return (

                <div className="card col-md-6 container mt-4">
                    <div className="card-header">Eklemek İstediğiniz kategorinin Bilgilerini Doldurunuz</div>
                    <div className="card-body">
                        <form onSubmit={this.OnSubmitCategory}>
                            <div className="form-group">
                                <label htmlFor="id">ID</label>
                                <input type="text" name={"id"} value={id}
                                    onChange={this.ChangeCategory} placeholder={"Enter The Id"}
                                    className={"form-control"}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="categoryName">Category Name</label>
                                <input type="text" name={"categoryName"} value={categoryName}
                                       onChange={this.ChangeCategory} placeholder={"Enter The CategoryName"}
                                       className={"form-control"}/>
                            </div>

                            <button type={"submit"} className={"btn btn-danger mt-3"}>Add Category</button>
                        </form>
                    </div>
                </div>

        );
    }
}



function mapStateToProps(state) {
    return {
        categories:state.addCategoryReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        AddCategories:bindActionCreators(categoryActions.addCategory,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddCategory) ;
