import React from 'react';
import DynamicTreeMenu from './components/dynamicTreeMenu/DynamicTreeMenu';
import NavigationHeader from './components/navigationHeader/NavigationHeader';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <DynamicTreeMenu />
      <Footer/>
    </div>
  );
}

export default App;


