import React,{useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {


    const [inputValue, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value)
    } 

    const handleSubmit = (e) =>{
        e.preventDefault() 

        if(inputValue.trim().length >= 1){
            setCategories(cats => [inputValue, ...cats])
            setInput('');
        }
    }
    return (
        <>
            <form onSubmit = {handleSubmit}>
            
                <h2>Add Category</h2>
                <input type="text" value = {inputValue} onChange = {handleInputChange}></input>
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
