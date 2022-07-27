import React from 'react';

const Welcome = (props) => {
    let items = [];
    for(let i=0; i<200; i++) {
        items.push(<h1>Hello world</h1>)
    }

    return (
        <div className='content'>
            <div className='homeBanner'>
                <h1>
                    Learn 
                    <br/>
                    case law 
                    <br/>
                    your way
                </h1>
            </div>
            {items}
        </div>
    )
}

export default Welcome;