import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-items-container">
        <Item
          title="Model S"
          desc="Order Online for Touchless Delivery"
          descLink=""
          bgImage={ModelS}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          descLink=""
          bgImage={ModelY}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink=""
          bgImage={Model3}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink=""
          bgImage={ModelX}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar Panels"
          desc="Lowest Cost Solar Panels in America"
          descLink=""
          bgImage={SolarPanels}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar Roof"
          desc="Produce Clean Energy From Your Roof"
          descLink=""
          bgImage={SolarRoof}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Accessories"
          desc=""
          descLink=""
          bgImage={Accessories}
          leftBtnText="SHOP NOW"
          leftBtnLink=""
          rightBtnText=""
          rightBtnLink=""
          twoButtons="false"
        />
      </div>
    </div>
  );
}

export default App;