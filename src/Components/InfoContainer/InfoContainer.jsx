import React, { useEffect ,useState} from 'react';
import DetailedInfoContainer from '../DetailedInfoContainer/DetailedInfoContainer';
import Input from '../Input/Input';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './InfoContainer.css';

function InfoContainer(){
    const [details,setDetails]=useState([]);
    const [filterValue,setFilterValue]=useState('');
    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((result) => {
                    setDetails(result);
                    console.log('Success:', result);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
    },[]);
    const updateFilterValue=(event)=>{
        setFilterValue(event.target.value);
    }
    return(
      <div className='info-container'>
        {
            (details.length===0) 
            ?
                <LoadingSpinner/>
            :
            <>
                <Input
                type='search'
                placeholder='type name to filter'
                value={filterValue}
                onChange={updateFilterValue}
                name='filter'
                autoFocus={true}
                />
                {
                    (filterValue==='') ? 
                    details.map((detail)=>
                    <DetailedInfoContainer
                        key={detail.id}
                        detailObject={detail}
                    />
                    )
                    :
                    details.filter((detail)=>detail.name.toLowerCase().includes(filterValue)).map((detail)=>
                    <DetailedInfoContainer
                        key={detail.id}
                        detailObject={detail}
                    />
                    )
                }
            </>
        }
      </div>  
    );
}

export default React.memo(InfoContainer);