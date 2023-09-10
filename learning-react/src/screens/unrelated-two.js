import React, {useContext} from 'react';
import DataSharing from '../context/data-sharing';

const UnrelatedTwoScreen = () => {

    const context = useContext(DataSharing);
    console.log(context)

    return (
        <div>
            <h3>Unrealted Page Two</h3>
            <ol>
                    {
                        context?.todo.map((value, index) => {
                            return(
                                <li key={index}>{value}</li>
                            )
                        })
                    }
                </ol>
        </div>
    );
};

export default UnrelatedTwoScreen;