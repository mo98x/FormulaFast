import { useEffect, useState } from 'react';
import backend from '../api/backend';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    const findrest = async () => {
      console.log('Hey There');
      try{
        const response = await backend.get('/restaurant/viewrest',{
          params:
          {
            id:1
          }
        });
        setResults(response.data.restaurantlist);}
        catch (err) {
          setErrorMessage('Something went wrong');
          console.log(err.message);
        }
      };
      findrest();
    }, []);

  return [ results, errorMessage];
};
