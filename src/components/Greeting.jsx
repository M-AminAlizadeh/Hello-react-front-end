import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setGreeting } from '../greetingSlice';

const Greeting = ({ greeting, setGreeting }) => {
  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/random_greeting')
      .then((response) => response.json())
      .then((data) => setGreeting(data.greeting))
      .catch((error) => console.error('Error fetching greeting:', error));
  }, [setGreeting]);

  return (
    <div>
      <h1 className="alert alert-primary" role="alert">Welcome to this simple app!</h1>
      <p>Refresh the page to see new greetings</p>
      <h4>{greeting}</h4>
    </div>
  );
};

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
  setGreeting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

export default connect(mapStateToProps, { setGreeting })(Greeting);
