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

    return `<div class="navbar_div">   
    <div>
      <h1>ApnaCart</h1>
    </div>
    
    <div id="fix">
        <div >
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="product.html">Product</a>
                </li>
                <li>
                    <a href="login.html">Login</a>
                </li>
                <li>
                    <a href="cart.html">Cart ${length ? `- ${length}` : ""}</a>
                </li>
                <li>
                    <a href="registration.html">Sign Up</a>
                </li>
            </ul>
        </div>
    </div>
    </div>`


}

export default navbar;