window.addEventListener('DOMContentLoaded',()=>{

    const navContent = document.querySelector('.nav-content');

    navContent.addEventListener('click',(e)=>{
        if(e.target.classList.contains('bars')){
            const bars = document.querySelector('.bars');
            const tabs = document.querySelector('.tabs');
            const close = document.querySelector('.close');

            bars.addEventListener('click',()=>{
                tabs.classList.remove('invisible');
            });

            close.addEventListener('click',()=>{
                tabs.classList.add('invisible')
            })
        }
    })

})