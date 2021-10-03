import React from "react";

const AddCategories = () => {
    const fetch = require('node-fetch');

    const [newSubcategory, setNewSubcategory] = useState({
        categoryId: "",
        type: "",
    })

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('https://wines-db.herokuapp.com/product', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSubcategory)
        })
        const data = await response.json()
        alert('Subcategory Added 🙂')
        setNewSubcategory({
            categoryId: "",
            type: "",
        })
    }

    const handleChange = (e) => {
        setNewSubcategory({
            ...type,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="label">
                    <span className="label-text badge mx-2 badge-accent"></span>
                </label>
                <textarea name="comment" value={newReview.comment} onChange={(e) => handleChange(e)} className="textarea h-24 textarea-bordered textarea-primary" placeholder="About the product..."></textarea>
            </form>
        </div>
    )

}

export default AddCategories;