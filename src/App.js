import React from "react";
import Header from "./component/header";
import AboutSection from "./component/aboutsection";
import MenuSection from "./component/menusection";
function App() {
  return (
    <div className="App">
      <Header />
      <MenuSection />
      <AboutSection />
    </div>
  );
}
export default App;
