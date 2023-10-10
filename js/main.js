const btnMenu = document.getElementById('btn-menu');
const subnav = document.querySelector('.navbar__right')
const closeMenu = document.querySelector('#btn-close');

if(btnMenu){
    btnMenu.addEventListener('click', ()=>{
        subnav.style.transform = "translateX(0)";
        closeMenu.style.display = 'inline-block';
        btnMenu.style.display = 'none';
    })
}

if(closeMenu){
    closeMenu.addEventListener('click', ()=>{
        subnav.style.transform = "translateX(-800px)";
        closeMenu.style.display = 'none';
        btnMenu.style.display = 'inline-block';
    })
}