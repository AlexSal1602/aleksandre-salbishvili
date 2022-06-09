//for remove loadder in 2 secs.

const onLoadPage = document.querySelector('.onload-page')

window.addEventListener('load', function(){
    setTimeout(function(){
        onLoadPage.style.display= 'none';
    }, 2000);
  });

