import React from 'react';
import './DetailedInfoContainer.css';

function DetailedInfoContainer({detailObject})
{
    const keys=['id','name','username','email','phone','website']
    return(
        <div className='detailed-info-container'>
            {
            keys.map((key,index)=>
                <div className='detail' key={index}>
                    <p className='detail-left-side'>{key}</p>
                    <p className='detail-separator'>:</p>
                    <p className='detail-right-side'>{detailObject[key]}</p>
                </div>
            )
            }
        </div>
    )
}
export default React.memo(DetailedInfoContainer);