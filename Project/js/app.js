// chech if threr's local storage
let mainColor = localStorage.getItem("color-option");

console.log(mainColor);
if (mainColor!== null) {
  
  document.documentElement.style.setProperty('--main-color' , mainColor);
  
  document.querySelectorAll(".colors-list li").forEach(element => {
    
    // remove active class from all items
    element.classList.remove("active");

    // Add active class on element with dats color === local storage item
    if(element.dataset.color === mainColor) {
      
      //add active class to selected item
      element.classList.add("active");

    }
  });

}

// random background option
let backgroundOption = true;

// Variable to conatrol the interval
let backInterval;

//ckeck is there's local random background
let backLocalItem = localStorage.getItem("background_option");

//check if random backgorund local storage not empty
if (backLocalItem !== null) {

  
  if (backLocalItem === 'true') {
  
    backgroundOption = true;
    
  } else {
    backgroundOption = false;
  }

  //remove active class from all span
  document.querySelectorAll(".random span").forEach(element => {

    element.classList.remove("active")

  })

  if(backLocalItem === 'true') {

    document.querySelector(".random .yes").classList.add("active");

  }else {
    document.querySelector(".random .no").classList.add("active");
  }
}

// toggle option menu
let optionMenu = document.querySelector('.toggle-setting img');

optionMenu.addEventListener('click', function() {

  // gear spin on itself
  this.classList.toggle('spin');

  // toggle option menu
  document.querySelector('.settings-box').classList.toggle('open')

})

//switch colors
const colorsLi = document.querySelectorAll('.colors-list li');

// Loop on All list items
colorsLi.forEach(li => {

  // click on every list items
  li.addEventListener('click' , (e) => {
    
    // set color on root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    
    // set color in local storage
    localStorage.setItem("color-option", e.target.dataset.color);

    handleActive(e);


  
  });
})

//switch random background images
const randomBackEl = document.querySelectorAll('.random span');
// Loop on All spans
randomBackEl.forEach(span => {
// click on every span
  span.addEventListener('click' , (e) => {

    handleActive(e);

    if (e.target.dataset.background === 'yes') {

      backgroundOption = true;

      randomizeImages();

      localStorage.setItem('background_option', true);

    } else {
      
      backgroundOption = false;

      clearInterval(backInterval);

      localStorage.setItem('background_option', false);
    }
  
  });
});


// select landing page

let landingPage = document.querySelector('.landing-page');

//get array of image 

let imageArray = ["ship_shipping.jpg" , "road-shipping.jpg" , "train-shipping.jpg" , "Air-shipping.jpg" ];

// function randomize images
function randomizeImages() {

  if (backgroundOption === true) {

    // Get random image 

  backInterval = setInterval(() => {
    
  let randomimage = Math.floor(Math.random() * imageArray.length);

  // change background image url 

  landingPage.style.backgroundImage = 'url("images/' + imageArray[randomimage] + '")';

}, 10000);

}

}
randomizeImages();


function handleActive(ev) {

  ev.target.parentElement.querySelectorAll(".active").forEach(element => {
    
    element.classList.remove("active");

  });

  ev.target.classList.add("active");

}

document.querySelector(".rest-options").onclick = function() {

  

  localStorage.removeItem("color-option");
  localStorage.removeItem("bacground_option");

  window.location.reload();
};

// Toggle menu

let toggelBtn = document.querySelector(".toggle-menu");

let menuLink = document.querySelector(".nav-list");

toggelBtn.onclick = function(e) {

  e.stopPropagation();

  this.classList.toggle("avtive-menu");

  menuLink.classList.toggle("open");
}

document.addEventListener('click', (e) => {

  if (e.target !== toggelBtn && e.target !== menuLink) {

    if (menuLink.classList.contains("open")) {

      toggelBtn.classList.toggle("avtive-menu");

      menuLink.classList.toggle("open");

    }
  }
})


menuLink.onclick = function(e) {

  e.stopPropagation();
}

// Go to top button
const mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener('click', function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} );
