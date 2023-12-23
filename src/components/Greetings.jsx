import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGreeting } from '../redux/actions';

const Greetings = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGreetings = async () => {
      const response = await fetch('http://127.0.0.1:3000/greetings/random');
      if (response.ok) {
        const data = await response.json();
        dispatch(setGreeting(data.greeting));
      } else {
        console.log(response);
      }
    };

    fetchGreetings();
  }, [dispatch]);

  return (<h1>{greeting}</h1>);
};

export default Greetings;
