import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App ()
{
  return(
    <>
     
     {/* <Home/>
     <About/>
     <Contact/>
     <Gallery/> */}
    
    <BrowserRouter>
     <Routes>
      <Route path="/"element = {<Home/>} />
      <Route path="/About"element = {<About/>} />
      <Route path="/Contact"element = {<Contact/>} />
      <Route path="/Gallery"element = {<Gallery/>} />
     </Routes>
    </BrowserRouter>
   




    </>
  )
}

export default App;