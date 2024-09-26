import React, { useState } from 'react';
import Login from './components/Login';
import ImageGallery from './components/ImageGallery';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {user ? (
        <>
          <h2 style={{fontFamily:'sans-serif'}}>Hello, {user}!</h2>
          <hr />
          <ImageGallery />
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
};

export default App;
