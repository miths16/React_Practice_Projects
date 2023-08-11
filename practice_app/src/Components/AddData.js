import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';


const AddData = () => {
    //holds the current value of te input field
    const [inputData, setInputData] = useState('');
    const navigate = useNavigate();

    //an array that stores all the entered wishlist items  
    const [itemList, setItemList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //adds the input data value to itemList using "..." spread operator
        //and stores it in a new array
        const updatedList = [...itemList, inputData];
        //set the List to theupdated one
        setItemList(updatedList);
        //clear the input field
        setInputData('');
    };
    
    //function called to change the input data state with the new value entered by user
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleViewList = () => {
        // Send the list of items to AnotherPage
        //and pass itemList array as state to another page
        navigate('/view', { state: { itemList } })
    };




    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className='header'>
                <FontAwesomeIcon icon={faHeart} style={{ color: "purple" }} />
                Add To Your WishList
            </div>
            <div>
                <input type='text'
                    placeholder='What is it you wish for?'
                    style={{ textAlign: "center" }}
                    value={inputData}
                    onChange={handleInputChange} />
            </div>
            <div>
                <button type='submit' className='button'>
                    <FontAwesomeIcon icon={faStar} />
                    Add
                </button>
                <button onClick={handleViewList} className='button'>View List</button>
            </div>
        </form>

    )
}

export default AddData
