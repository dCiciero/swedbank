document.addEventListener('DOMContentLoaded', function () {
   let searchBtn = document.querySelector('.search-btn-menu');
   let closeSearchBtn = document.querySelector('#close-search-btn').onclick;
   let proceedBtn = document.querySelector('.btn-proceed');

   if (searchBtn){
        searchBtn.onclick = showSearchControl
    }

    if (closeSearchBtn){
        closeSearchBtn.onclick = closeSearchControl
    }
    if (proceedBtn){
        proceedBtn.onclick = getUserDetails
    }

});


function showSearchControl() {
    document.querySelector('.search-form').setAttribute('type','show'); //  .style.display = "block"
    document.querySelector('swed-menu ul').style.display = "none"
    close-search-btn
}

function closeSearchControl() {
    document.querySelector('.search-form').setAttribute('type','hide'); //  .style.display = "block"
    document.querySelector('swed-menu ul').style.display = "flex"
    
}

function getUserDetails() {
    // alert('User details ');
}