import React from "react";
import WelcomePageS from "./WelcomePageS";
import WelcomePageC from "./WelcomePageC";
const HomeScreen = () => {
  return (
    <div className="text-dark d-flex justify-content-between" style={{height:'100vh',marginTop:'-1'}}>
      <WelcomePageC/> {/*Welcome page for Compnies */}
      <WelcomePageS/> {/*Welcome page for Students */}
    </div>
  );
};

export default HomeScreen;
