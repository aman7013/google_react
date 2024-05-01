import { Link } from "react-router-dom";
function Navbar()
{

// const abc=()=>{
//  console.log('ckl')   
// }

  function abc()
  {
    var x = document.getElementById("open");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

    return(
        <>
     {/* <Link to="/"> Home</Link>  
     <Link to="/About">  About</Link>
     <Link to="/Contact">  Contact </Link>
     <Link to="/Gallery">  Gallery </Link> */}

   
   <div className="header">
    <div className="header_c1">
    <ul>
        <li><Link to="https://www.google.com/gmail/about/">Gmail</Link> </li>
        <li><Link to="/">Images</Link></li>
        <li onClick={abc}><Link to="/"><i class="fa fa-th" aria-hidden="true"></i></Link></li>
        <li><Link to="/"><img src="../../aman.jpg"/></Link></li>
       </ul>
    </div>
   </div>
    

        </>
    )
}
export default Navbar;