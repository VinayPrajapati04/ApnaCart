
import navbar from "../components/navbar.js";

const target = document.querySelector("#navbar")

target.innerHTML = navbar()



  // hum burgar coding

const hamMunu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".navbar_div");


hamMunu.addEventListener('click',()=>{
  hamMunu.classList.toggle('active');
  offScreenMenu.classList.toggle("active")
})




function slideShow() {


    const arr = [
    "https://storiesflistgv2.blob.core.windows.net/stories/2021/05/FKSfooterbanner_new__.jpg",
    "https://rukminim1.flixcart.com/flap/1800/1800/image/322183a2d81a09fb.jpg?q=80",
    "https://hungamadeal.co.in/wp-content/uploads/2016/06/amazon-offer-9-848x300.jpg",
    "https://sc01.alicdn.com/kf/U4241859eca0e4c25b00310ce17329d497/973133484/U4241859eca0e4c25b00310ce17329d497.jpg",
    "https://images.bestsellerclothing.in/live/image/catalog/brandstore/jackjones/27-11-2020//jj_upto50_webbanner_91422.jpg",
    "https://freepixel-prod.s3.amazonaws.com/preview/free-vector-graphic-big-discount-sale-upto-40-flat-offer-on-cyber-monday-sale-shiny-purple-website-header-or-banner-desi-preview-110108994.jpg"
    ];
     let i= 0;
    let div = document.getElementById('slider');

    let img = document.createElement('img');
    img.src = arr[0];

    div.append(img);
    i = i+1;

    setInterval (function () {

      if( i==6){
        i=0;
      }
      img.src = arr[i];
      i= i+1;
      div.append(img);

    },2000)
  }
  slideShow();





const getData = async () => {

    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        console.log(data)
        append(data)
    } catch (error) {
        console.log(error)
    }
}

getData()

const append = (data)=> {

    const container = document.getElementById('appendData');
    container.innerHTML = null;


    data.map((el)=>{
    
        let div = document.createElement("div");

        let img = document.createElement('img');
        img.src = el.image;

        let title = document.createElement('p');
        title.innerText = `Product Name - ${el.title}`;

        let price = document.createElement('p');
        price.innerText = ` Price -${el.price} Doller`;

        div.append(img, title, price);
        container.append(div);
    })
}

append()

