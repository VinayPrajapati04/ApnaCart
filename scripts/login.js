
import navbar from "../components/navbar.js";

const target = document.querySelector("#navbar")

target.innerHTML = navbar()


// let data = JSON.parse(localStorage.getItem('userDetails'))

// const form = document.querySelector("#login_form")

// let payload;

// const handleFormSubmit =  (events) => {

//     events.preventDefault();

//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;


//    payload={
//         email,
//         password,
//     }

//     if(!email || !password) {
//         alert('Fill the details')
//         return;

//     }
//     if(email == data.email && password == data.password) {
//         alert('login successfull')
//         window.location.href = 'product.html'
//     }else{
//         alert('Please enter a valid email and password')
//     }


// }

const form = document.querySelector('#login_form');

const handleFormSubmit = async (events) => {
    events.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if(!email || !password) {
        alert("Fill the details")
        return;
    }

    const payload ={
        email : "eve.holt@reqres.in",
        password :" cityslicka",
    }

    console.log(payload)

    // email  ==>  eve.holt@reqres.in
    // pswd  ==>  cityslicka

    try {

        const response = await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    
        const data =await response.json();
        console.log(data)

        alert("Login successfull")
    
        localStorage.setItem("token",JSON.stringify(data))

        window.location.href = 'product.html';
        
    } catch (error) {
    
        console.log(error)
        
    }
    
}


form.addEventListener('submit', handleFormSubmit);


form.addEventListener('submit', handleFormSubmit)


