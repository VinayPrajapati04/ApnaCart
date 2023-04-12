import navbar from "../components/navbar.js";

const target = document.querySelector("#navbar")

target.innerHTML = navbar()


const renderTotalPrice =() => {

    // get the data from the local stoage

    const data = JSON.parse(localStorage.getItem("addressPageData"))
   
    // console.log(data)

    const{totalPrice} = data;

    // console.log(totalPrice)

    const span = document.querySelector("#totalPrice_span");

    span.innerText = totalPrice;

    // console.log(span)
}

renderTotalPrice()


// all four input


const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");

const handleInputOne =() =>{

    // console.log("i m runnig here")

    // value for first input

    const oneValue = one.value;
 

    if(oneValue.length== 1){
        two.focus();
    }
    // if(oneValue.length==0){

    // }
    
}

const handleInputTwo =() =>{

    // check if something present in first input or not

    if(!one.value){
        two.value = null;
        one.focus();
        return;
    }

    const twoValue = two.value;

    if(twoValue.length == 1){
        three.focus();
    }
    if(twoValue.length == 0){
        one.focus();
    }
}

const handleInputThree =() =>{

    if(!one.value || !two.value){
        three.value = null;
        one.focus();
        return;
    }

    const threeValue = three.value;

    if(threeValue.length == 1){
        four.focus();

    }
    if(threeValue.length==0){
        two.focus()
    }
}

const handleInputFour =() =>{

    if(!one.value || !two.value || !three.value){
        four.value = null;
        one.focus();
        return;
    }

    const fourValue = four.value;

    if(fourValue.length == 0 || fourValue.length == null){
        three.focus();
      

    }

    if(fourValue.length >1){
        four.value = fourValue[0];
        return;
    }
}

one.addEventListener("input",handleInputOne)
two.addEventListener("input",handleInputTwo)
three.addEventListener("input",handleInputThree)
four.addEventListener("input",handleInputFour)



const handleSubmit= () =>{
   
    const otp = one.value + two.value + three.value + four.value;

    if(otp !== "1234"){
        alert("Incorrect details");
        return;
    }
    // user give correct otp

    const cont = document.querySelector(".otp_div");
    cont.innerHTML = null;

    const h2 = document.createElement("h2");
    h2.innerText = "Order SuccessFully Placed,Thank You for Shopping with US!";

    h2.style.textAlign ="center";
    h2.style.marginTop="2rem"
    h2.style.color="yellow"


    cont.append(h2)

    setTimeout(()=>{

        localStorage.removeItem("cart");
        window.location.href="product.html";

    },3000)
 


}


const button = document.querySelector("#submit");
button.addEventListener("click",handleSubmit)