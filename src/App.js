import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Prenavbar from "./components/Prenavbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Slider from "./components/Slider";
import data from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StartProduct from "./components/StartProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOptions from "./components/NavOptions";
function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        accessories={data.accessories}
        audio={data.audio}
      />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StartProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Route exact path="/music">
        <HotAccessories
          music={data.hotAccessories.music}
          musicCover={data.hotAccessoriesCover.music}
        />
      </Route>
      <Route exact path="/smartDevice">
        <HotAccessories
          smartDevice={data.hotAccessories.smartDevice}
          smartDeviceCover={data.hotAccessoriesCover.smartDevice}
        />
      </Route>
      <Route exact path="/home">
        <HotAccessories
          home={data.hotAccessories.home}
          homeCover={data.hotAccessoriesCover.home}
        />
      </Route>
      <Route exact path="/lifestyle">
        <HotAccessories
          lifeStyle={data.hotAccessories.lifeStyle}
          lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
        />
      </Route>
      <Route exact path="/mobileAccessories">
        <HotAccessories
          mobileAccessories={data.hotAccessories.mobileAccessories}
          mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}
        />
      </Route>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
