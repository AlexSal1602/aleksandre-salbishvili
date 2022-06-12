'use strict';


//for remove loadder in 2 secs.

const onLoadPage = document.querySelector('.onload-page')

window.addEventListener('load', function(){
    setTimeout(function(){
        onLoadPage.style.display= 'none';
    }, 2000);
  });

  document.querySelector('.my-photo').setAttribute('draggable', false);

  

  
  




  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});