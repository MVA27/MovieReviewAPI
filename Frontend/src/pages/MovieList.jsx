import { useEffect, useState } from 'react';
import Moviecard from '../components/MovieCard'
import { Spinner, Box } from '@radix-ui/themes';

export default function MovieList() {

    const endpoint = import.meta.env.VITE_API_ENDPOINT

    const [data, setData] = useState(null);

    useEffect(()=>{

      fetch(endpoint)
        .then(res => res.json())
        .then(json => setData(json));

    },[]);

    const removeData = async (id) => {
      
      //First remove data from server
      try {
        const response = await fetch(`${endpoint}/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete item');
        }

        // Then update state only if API request is successful
        setData((prevItems) => prevItems.filter((item) => item.id !== id));
      } 
      catch (error) {
        console.error('Error deleting item:', error);
      }
    };
  
    return (
      <>
        { 
          data == null 
            ? 
              <Box style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                <Spinner size="3" />
              </Box> 
            : data.map( (item)=> <Moviecard key={item.id} id={item.id} name={item.name} review={item.review} removeData={removeData}/> )
        }
      </>
    )
  }