// const form = document.querySelector("#registration_form");

// const handleFormSubmit = (events) => {
//     events.preventDefault();
//     const name = document.querySelector('#name').value;
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;
//     const confirmPassword = document.querySelector('#cpassword').value

//     if(!email  || !password || !name || !confirmPassword){
//         alert('Please Fill the details ')
//         return; 
//     }

//     const payload = {
//         name,
//         email,
//         password,
//         confirmPassword

//     }
//     console.log(payload)
//     localStorage.setItem('userDetails', JSON.stringify(payload))

//         alert('Reginsteration successfull')

//         window.location.href="login.html"
// }

// form.addEventListener('submit', handleFormSubmit);




import navbar from "../components/navbar.js";

const target = document.querySelector("#navbar")

target.innerHTML = navbar()




const form = document.querySelector('#registration_form');

const handleFormSubmit = async (events) => {
    events.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#cPassword').value;

    if(!email || !password || !name || !confirmPassword) {
        alert("Fill the details")
        return;
    }

    const payload ={
        email : "eve.hot@reqres.in",
        password : "cityslicka",
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
