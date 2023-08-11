import React from 'react'
import { useLocation } from 'react-router-dom';


const ViewData = () => {
    const location = useLocation(); //useLocation hook used to access the current location object
    const itemList = location.state?.itemList || []; //this line of code suggests to retrieve the itemList from the 
    //state object in the location if does not exist then return empty array.(using option chaining "?")

    //"location.search" is used to look for query params and URLSearchParams is used to access it
    const queryParams = new URLSearchParams(location.search);

    //items variable is assigned the parsed value of the "items" query params and to retrieve the array
    const items = JSON.parse(queryParams.get('items'));    
    return (
        <div className='container second'>
            <div className='header second'>
                <h2>List of Items:</h2>
            </div>
            <ul>
                {/* to iterate over itemList and generate list item for each item */}
                {itemList.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
    

export default ViewData
