import React, { useEffect } from "react";
import "./styles/App.scss";
import gsap from "gsap";
import Header from "./components/header/header.component";
import { Route } from "react-router-dom";
//*Pages
import MainHomepage from "./pages/main-homepage/main-homepage.page";
import About from "./pages/about/about.page";
import Albums from "./pages/albums/albums.page";
import Announcements from "./pages/announcements/announcements.pages";
import DeanMessage from "./pages/dean-messages.pages.js/dean-message.page";
import PreviousPlacements from "./pages/previous-placements/previous-placements.page";

const routes = [
  { path: '/', name: "Home", Component: MainHomepage, navStatus: false },
  { path: '/about', name: "About", Component: About, navStatus: true },
  { path: '/albums', name: "Albums", Component: Albums, navStatus: true },
  { path: '/announcements', name: "Announcements", Component: Announcements, navStatus: true },
  { path: '/dean-message', name: "DeanMessage", Component: DeanMessage, navStatus: true },
  { path: '/previous-placements', name: "PreviousPlacements", Component: PreviousPlacements, navStatus: true }
]
//routes


function App() {
  //Addjusing vh
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);


  //prevent flashing while continuous refreshing
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } })
  })

  return (
    <>
      <Header />
      {routes.map(({ path, Component }) => (<Route key={path} exact path={path}><Component /></Route>))}
    </>
  );
}

export default App;
