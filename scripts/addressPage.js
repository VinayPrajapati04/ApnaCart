import navbar from "../components/navbar.js";
import data from "../utils/data.js"

const target = document.querySelector("#navbar")

target.innerHTML = navbar()

console.log(data)

const renderStateDetails = (data) => {
    const select = document.querySelector("#state_select");


    data.map((el)=> {

        const option = document.createElement("option");

        option.innerText = el;
        option.value = el;

        select.append(option);



    })
    
}




renderStateDetails(data)


const handlePaymentMode = () => {

    const value = document.querySelector("#paymentMode_select").value;
    if(value === 'cod'){
        const container = document.querySelector("#paymentDetails_div");
        container.innerHTML = null;
        return
    }else{
        const container = document.querySelector("#paymentDetails_div")
        

        const html = `<label for="">Card Number</label>
        <input type="number" id="cardNumber">

        <label for="">CVV</label>
        <input type="number" id="cvv">


        <label for="">Expiry Date</label>
        <input type="date" id="expiryDate">


        <label for="">Card holder Name</label>
        <input type="text" id="cardHolderName">`

        container.innerHTML = html;
    }

}




const paymentModeSelect = document.querySelector("#paymentMode_select");

paymentModeSelect.addEventListener("change", handlePaymentMode)


const handleFormSubmit = (event)=>{
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const address = document.querySelector("#address").value;
    const city = document.querySelector("#city").value;
    const stateSelect = document.querySelector("#state_select").value;
    const pin = document.querySelector("#pin").value;
    const paymentMode = document.querySelector("#paymentMode_select").value;

    if(!name || !address || !city || !stateSelect || !pin  || !paymentModeSelect){
        alert("Fill the Details")
        return
    }


    let cardNumber;
    let cvvNumber;
    let expiryDate;
    let cardHolderName;

    if(paymentMode === "card"){

       cardNumber = document.querySelector("#cardNumber").value;

       cvvNumber = document.querySelector("#cvv").value;

       expiryDate = document.querySelector("#expiryDate").value;

       cardHolderName = document.querySelector("#cardHolderName").value;

       if(!cardNumber || !cvvNumber || !expiryDate || !cardHolderName){

        alert("Fill the Details")
        return;

    }



}

   const payload = {

    name,
    address,
    city,
    stateSelect,
    pin,
    paymentMode
        
   }

 
   if(paymentMode   === "card"){
    payload.cardDetails = {
        cardNumber,
        cvvNumber,
        expiryDate,
        cardHolderName
    }
   }

   const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
   payload.totalPrice = totalPrice;

   console.log(payload)
   localStorage.setItem('addressPageData', JSON.stringify(payload));

   window.location.href = 'otp.html'
}

const form = document.querySelector('#addressForm_form');

form.addEventListener('submit',handleFormSubmit)