import React, { useEffect } from 'react'
import "@adyen/adyen-web/dist/adyen.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Provider } from 'react-redux';
import './App.css';
import { store, MyAccount, Config, Checkout, Register } from '@cleeng/mediastore-sdk-react-16';


function App() {
  useEffect(() => {
    Config.setPublisher("646179653");
    Config.setEnvironment("staging");

  }, [])

  return (
    <div className="App">
      <Provider store={store}>
        {/* <Register /> */}
        {/* <Checkout offerId="S627820490_PL" /> */}
        <MyAccount />
      </Provider>
    </div>
  );
}

export default App;