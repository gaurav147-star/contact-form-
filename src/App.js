// import Alert from './Alert';
import ContactForm from './ContactForm';
import React from 'react'

function App() {
  const url = process.env.REACT_APP_API_URL;

  return (
    <div className='App'>

      {/* <Alert/> */}
      <ContactForm url={url}/>


    </div>
  );
};

export default App;