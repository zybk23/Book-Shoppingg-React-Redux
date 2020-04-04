


export function change_category(category) {
    return{type:"CHANGE_CATEGORY",payload:category}
}

export function addCategory(category) {
    return{type:"ADD_CATEGORY",payload:category}
}


export function get_categories_success(category){
    return {type:"GET_CATEGORY",payload:category}
}


export function get_categories() {

    return function (dispatch) {

        let url="http://localhost:3000/categories";

        return fetch(url)
            .then(response=>response.json())
            .then(result=>dispatch(get_categories_success(result)))

    }

}