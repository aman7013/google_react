import Navbar from "./Navbar";
function Home ()
{


    function close()
    {
      var x = document.getElementById("open");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }

  return(
    <>
    <Navbar/>
     {/* <h2>This is Home Page</h2> */}
    
      <div className="google">
        <div className="google_c1">
            <img src="../../googlelogo.png"/>
        </div>
        <div className="google_c2">
       <p> 
        <input type="search" id="site-search" name="q" placeholder="search here creted By Aman singh" />
        <i class="fa fa-microphone" aria-hidden="true"></i>
        <i class="fa fa-camera-retro" aria-hidden="true"></i>
        </p>
        </div>


      </div>

      {/* <div class="gcse-search"></div>
      <script async src="https://cse.google.com/cse.js?cx=6588715fa55dc4f7a">
</script> */}


       
   
      <div className="pop" id="open">
        <div className="pop_c1">
            <p onClick={close}>X</p>
            <table>
                <tr>
                    <td><i class="fa fa-facebook-official" aria-hidden="true"></i>
                    
                    <br/><br/><span>Facebook</span>
                    </td>
                    
                    <td><i class="fa fa-twitter" aria-hidden="true"></i>
                    
                    <br/><br/><span>Twiter</span>
                    </td>
                    
                    <td><i class="fa fa-instagram" aria-hidden="true"></i>
                    
                    <br/><br/><span>Instagaram</span>
                    </td>
                    
                </tr>
                <tr>
                    <td><i class="fa fa-google-plus-square" aria-hidden="true"></i>
                      <br/><br/><span>Google</span>
                    </td>
                    <td><i class="fa fa-youtube-play" aria-hidden="true"></i>
                      <br/><br/><span>youtube</span>
                    </td>
                    <td><i class="fa fa-play" aria-hidden="true"></i>
                      <br/><br/><span>playstore</span>
                    </td>
                </tr>
                <tr>
                    <td><i class="fa fa-envelope" aria-hidden="true"></i>
                      <br/><br/><span>massege</span>
                    </td>
                    <td><i class="fa fa-meetup" aria-hidden="true"></i>
                      <br/><br/><span>google Meet</span>
                    </td>
                    <td><i class="fa fa-linkedin" aria-hidden="true"></i>
                      <br/><br/><span>Linkedin</span>
                    </td>
                </tr>
                <tr>
                    <td><i class="fa fa-facebook-official" aria-hidden="true"></i>
                      <br/><br/><span>facebook</span>
                    </td>
                    <td><i class="fa fa-twitter" aria-hidden="true"></i>
                      <br/><br/><span>twitter</span>
                    </td>
                    <td><i class="fa fa-instagram" aria-hidden="true"></i>
                      <br/><br/><span>Instagram</span>
                    </td>
                </tr>
                <tr>
                    <td><i class="fa fa-google-plus-square" aria-hidden="true"></i>
                      <br/><br/><span>Google</span>
                    </td>
                    <td><i class="fa fa-youtube-play" aria-hidden="true"></i>
                      <br/><br/><span>youtube</span>
                    </td>
                    <td><i class="fa fa-play" aria-hidden="true"></i>
                      <br/><br/><span>playstore</span>
                    </td>
                </tr>
                <tr>
                    <td><i class="fa fa-envelope" aria-hidden="true"></i>
                      <br/><br/><span>massege</span>
                    </td>
                    <td><i class="fa fa-meetup" aria-hidden="true"></i>
                      <br/><br/><span>google Meet</span>
                    </td>
                    <td><i class="fa fa-linkedin" aria-hidden="true"></i>
                      <br/><br/><span>Linkedin</span>
                    </td>
                </tr>
                <tr>
                    <td><i class="fa fa-facebook-official" aria-hidden="true"></i>
                      <br/><br/><span>facebook</span>
                    </td>
                    <td><i class="fa fa-twitter" aria-hidden="true"></i>
                      <br/><br/><span>twitter</span>
                    </td>
                    <td><i class="fa fa-instagram" aria-hidden="true"></i>
                      <br/><br/><span>Instagram</span>
                    </td>
                </tr>
                <tr>
                    <td><i class="fa fa-google-plus-square" aria-hidden="true"></i>
                      <br/><br/><span>Google</span>
                    </td>
                    <td><i class="fa fa-youtube-play" aria-hidden="true"></i>
                      <br/><br/><span>youtube</span>
                    </td>
                    <td><i class="fa fa-play" aria-hidden="true"></i>
                      <br/><br/><span>playstore</span>
                    </td>
                </tr>
                <tr>
                    <td><i class="fa fa-envelope" aria-hidden="true"></i>
                      <br/><br/><span>massege</span>
                    </td>
                    <td><i class="fa fa-meetup" aria-hidden="true"></i>
                      <br/><br/><span>google Meet</span>
                    </td>
                    <td><i class="fa fa-linkedin" aria-hidden="true"></i>
                      <br/><br/><span>Linkedin</span>
                    </td>
                </tr>
                <tr>
                    <td><i class="fa fa-facebook-official" aria-hidden="true"></i>
                      <br/><br/><span>facebook</span>
                    </td>
                    <td><i class="fa fa-twitter" aria-hidden="true"></i>
                      <br/><br/><span>twitter</span>
                    </td>
                    <td><i class="fa fa-instagram" aria-hidden="true"></i>
                      <br/><br/><span>Instagram</span>
                    </td>
                </tr>
            </table>

        </div>
      </div>




    </>
  )
}

export default Home;