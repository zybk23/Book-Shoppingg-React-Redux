import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";



const BookDetail=({book,categories,onChange,onSave,errors})=>{
    return(
        <form onSubmit={onSave}
            className={"form-group"} >
            <h2>{book.id?"Güncelle":"Ekle"}</h2>

            <SelectInput
                name={"categoryId"}
                label={"Category"}
                value={book.categoryId || ""}
                defaultOption={"Seçiniz"}
                options={categories.map(category=>({
                    value:category.id,
                    text:category.categoryName
                }))}
                onChange={onChange}
                error={errors.categoryId}
            />
            <TextInput
                type={"text"}
                className={"form-control"}
                label={"Name"}
                name={"name"}
                error={errors.name}
                value={book.name}
                onChange={onChange}
                placeholder={"Enter the Name"}
            />
            <TextInput
                type={"text"}
                className={"form-control"}
                label={"Image"}
                name={"image"}
                error={errors.image}
                value={book.image}
                onChange={onChange}
                placeholder={"Enter the Image"}
            />
            <TextInput
                type={"text"}
                className={"form-control"}
                label={"Price"}
                name={"price"}
                error={errors.price}
                value={book.price}
                onChange={onChange}
                placeholder={"Enter the Price"}
            />
            <TextInput
                type={"text"}
                className={"form-control"}
                label={"UnitInStock"}
                name={"unitInStock"}
                error={errors.unitInStock}
                value={book.unitInStock}
                onChange={onChange}
                placeholder={"Enter the Unit "}
            />
            <TextInput
                type={"text"}
                className={"form-control"}
                label={"Author"}
                name={"author"}
                error={errors.author}
                value={book.author}
                onChange={onChange}
                placeholder={"Enter the Author"}
            />

            <button type={"submit"} className={"btn btn-danger"}>Save</button>
        </form>
    )
};



export default BookDetail;