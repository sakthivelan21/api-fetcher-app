import { useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import InfoContainer from "./Components/InfoContainer/InfoContainer";
import NavBar from "./Components/NavBar/NavBar";

const navBarModel={
  title:"Info Users",
  iconClass:'',
  imgSrc:'file-image.png',
  navButtonList:[
    {
      iconClass:'fa-solid fa-house',
      title:'Home'
    },
    {
      iconClass:'fa-solid fa-circle-info',
      title:'Support'
    }
  ]

}

function App() {
  useEffect(()=>{
    var theme="light";    //default to light
    //local storage is used to override OS theme settings
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") === "dark"){
             theme = "dark";
        }
    } else if(!window.matchMedia) {
        //matchMedia method not supported
        console.log("matchmedia not supported");
        return;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
         theme = "dark";
    }
  
    document.documentElement.setAttribute("data-theme", theme);

  },[]);
  return (
    <>
    <NavBar {...navBarModel}/>
    <div className="app-body" id='Home'>
      <InfoContainer/>
    </div>
    <Footer imgSrc = {navBarModel.imgSrc} title={navBarModel.title}/>
  </>
  );
}

export default App;
