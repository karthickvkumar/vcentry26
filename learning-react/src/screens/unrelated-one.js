import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import DataSharing from '../context/data-sharing';

const UnrelatedOneScreen = () => {

    const context = useContext(DataSharing);
    // console.log(context);

    const [message, updateMessage] = useState("");
    const [toDoList, updateToDoList] = useState([]);

    const handleText = (event) => {
        updateMessage(event.target.value);
    }

    const addToDoMessage = () => {
        updateToDoList([...toDoList, message]);
        updateMessage("");
        context.callback([...toDoList, message]);
    }

    return (
        <div>
            <h3>Unrelated Page ONE</h3>
            <NavLink to="/page2">Go to Unrelated Page 2</NavLink>
            <div>
                <label>Enter your Message :</label>
                <textarea onChange={handleText} value={message} placeholder='Enter message here..'></textarea>
                <button onClick={() => addToDoMessage()}>Add ToDo Message</button>
                <ol>
                    {
                        toDoList.map((value, index) => {
                            return(
                                <li key={index}>{value}</li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    );
};

export default UnrelatedOneScreen;