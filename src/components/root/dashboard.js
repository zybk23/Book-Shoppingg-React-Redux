import React, {Component} from 'react';
import CategoryList from "../categories/categoryList";
import BooksList from "../books/Bookslist";



class Dashboard extends Component {
    render() {
        return (
            <div className={"row mt-4 "}>
                <div className="col-md-2"><CategoryList/></div>
                <div className={"col-md-8"}><BooksList/></div>
            </div>
        );
    }
}

export default Dashboard;