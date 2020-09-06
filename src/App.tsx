import React from 'react';
// const logo = require('./app/assets/img/reactjs.png');
// import logo from './app/assets/img/reactjs.png';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <img src="./app/assets/img/reactjs.png" />
      <img src={require('./app/assets/img/reactjs.png')} />
      <p>Hello, World</p>
    </div>
  );
};

export default App;
