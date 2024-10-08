const navbar = () => {

   
    let length ;
    const status = JSON.parse(localStorage.getItem('token'));
    console.log(status)
    if(!status){
        length = null;
    }else{
        const cartArr = JSON.parse(localStorage.getItem('cart'));
        if(!cartArr){
            length = 0;
        }else{
            length = cartArr.length;
        }
       
    }
    console.log(length)

    

    return `
        <div class="navbar_div">   
                                 
                      <ul>
                         <h1 id="logo" ><a href="./index.html">ApnaCart</a></h1>
                      </ul>
                    
                        <ul>
                            <li>
                                <a id="navbarTag" href="index.html">Home</a>
                            </li>
                            <li>
                                <a id="navbarTag" href="product.html">Product</a>
                            </li>
                            <li>
                                <a id="navbarTag" href="login.html">LogIn</a>
                            </li>
                            <li>
                                <a id="navbarTag" href="cart.html">Cart ${length ? `- ${length}` : ""}</a>
                            </li>
                            <li>
                                <a id="navbarTag" href="registration.html">Sign Up</a>
                            </li>


                            <li>
                                <a id="AboutProjectTxt" href="AboutProject.html"> <img id="logo_exclamationMark" src="./Images/greenExcamationmark.png" alt="GreenExcalmatiomMark">  About Projects</a>
                            </li>       
                        </ul>
                  
               
        </div>
        
        
        
  <nav>
    <div class="ham-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
  `



}

export default navbar;