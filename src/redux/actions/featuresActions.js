


export function get_features_success(features) {
    return {type:"GET_FEATURES",payload:features}
}

export function createFeatureSuccess(book) {
    return {type:"CREATE_FEATURES_SUCCESS",payload:book}
}

export function updateFeatureSuccess(book) {
    return {type:"UPDATE_FEATURES_SUCCESS",payload:book}
}

export function saveBookApi(book){
    return fetch ("http://localhost:3000/features/"+(book.id || ""),
        {method:book.id?"PUT":"POST",
              headers:{"content-type":"application/json"},
              body:JSON.stringify(book)})
        .then(handleResponse)
        .catch(handleError)
}

export function saveBook(book) {
    return function (dispatch) {
        return saveBookApi(book).then(savedBook=>{
            book.id?dispatch(updateFeatureSuccess(savedBook)):dispatch(createFeatureSuccess(savedBook))
        }).catch(err=>{throw err})
    }
}

export async function handleResponse(response) {
    if(response.ok){
        return response.json()
    }
    const error=await response.text()
    throw new Error(error)
}
export function handleError(error) {
    console.log("Bir Hata Oluştu");

    throw error;
}

export function get_features(id) {
    return function (dispatch) {
        let url="http://localhost:3000/features";

        if(id){
            url= url+"?categoryId="+id
        }
        return fetch(url)
            .then(response=>response.json())
            .then(result=>dispatch(get_features_success(result)))
    }
}