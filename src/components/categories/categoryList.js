import React, {Component} from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import {get_categories} from "../../redux/actions/categoryActions";
import {get_features} from "../../redux/actions/featuresActions";
import {change_category} from "../../redux/actions/categoryActions";
import posed from "react-pose";







const Animation=posed.div({
    visible:{
        opacity:1,
        applyAtStart:{
            display:"block"
        }
    },
    hidden:{
        opacity:0,
        applyAtStart:{
            display:"none"
        }
    }
});


class CategoryList extends Component {
    state={
        visible:false
    };
    componentDidMount() {
        this.props.getCategories()
    }

    Change=()=>{
        this.setState({
            visible:!this.state.visible
        })
    };

    ChangeCategory=(name)=>{
        this.props.changeCategory(name)
    };


    BooksFilter=(id)=>{
        this.props.getFeatures(id)
    };

    render() {
        //console.log(this.props.categories);
        const{visible}=this.state;
        return (
            <div className={"card mt-3 ml-4"}>
                <div onClick={this.Change}
                    style={{color:"#fff",cursor:"pointer"}} className="card-header bg-secondary">
                    {visible?"Kategoriler":"Kategorileri Göster"}
                </div>
                <Animation pose={visible?"visible":"hidden"}>
                {
                    this.props.categories.map(category=>(
                        <ul key={category.id} className={"list-group"}>
                            <li onClick={()=>{this.ChangeCategory(category.categoryName);
                                this.BooksFilter(category.id)}}
                                style={{cursor:"pointer"}} className={"list-group-item"}>{category.categoryName}</li>
                        </ul>
                    ))
                }
                </Animation>
            </div>
        );
    }
}

function mapstateToProps(state) {
    return {
        currentCategory:state.changeCategoryReducer,
        categories:state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCategories:bindActionCreators(get_categories,dispatch),
        changeCategory:bindActionCreators(change_category,dispatch),
        getFeatures:bindActionCreators(get_features,dispatch)
    }
}


export default connect(mapstateToProps,mapDispatchToProps)(CategoryList) ;