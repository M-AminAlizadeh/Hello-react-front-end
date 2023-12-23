import { useState, useEffect } from 'react';

const Greetings = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchGreetings = async () => {
      const response = await fetch('http://127.0.0.1:3000/greetings/random');
      if (response.ok) {
        const data = await response.json();
        setGreeting(data.greeting);
      } else {
        console.log(response);
      }
    };

    fetchGreetings();
  }, []);

  return (<h1>{greeting}</h1>);
};

export default Greetings;
