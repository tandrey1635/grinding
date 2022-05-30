const menuBtn = document.querySelector('.burger-menu-img')
const close = document.querySelector('.close')
const menu = document.querySelector('.mobile__menu')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    
})

close.addEventListener('click', () => {
    menu.classList.toggle('active')
})


//Услуги показ цены
const blockImg1 = document.querySelector('.services__top__img-1')
const blockImg2 = document.querySelector('.services__top__img-2')
const blockImg3 = document.querySelector('.services__top__img-3')
const blockImg4 = document.querySelector('.services__top__img-4')

const price1 = document.querySelector('.services__top__img-price-1')
const price2 = document.querySelector('.services__top__img-price-2')
const price3 = document.querySelector('.services__top__img-price-3')
const price4 = document.querySelector('.services__top__img-price-4')

const link1 = document.querySelector('.services__link-1')
const link2 = document.querySelector('.services__link-2')
const link3 = document.querySelector('.services__link-3')
const link4 = document.querySelector('.services__link-4')

const close1 = document.querySelector('.close-1')
const close2 = document.querySelector('.close-2')
const close3 = document.querySelector('.close-3')
const close4 = document.querySelector('.close-4')


link1.addEventListener('click', (e)=>{
    e.preventDefault()
    price1.classList.add('active-1')
    blockImg1.classList.add('blur')
})

link2.addEventListener('click', (e)=>{
    e.preventDefault()
    price2.classList.add('active-2')
    blockImg2.classList.add('blur')
})


link3.addEventListener('click', (e)=>{
    e.preventDefault()
    price3.classList.add('active-3')
    blockImg3.classList.add('blur')
})

link4.addEventListener('click', (e)=>{
    e.preventDefault()
    price4.classList.add('active-4')
    blockImg4.classList.add('blur')
})


close1.addEventListener('click', (e)=>{
    e.preventDefault()
    price1.classList.remove('active-1')
    blockImg1.classList.remove('blur')
})

close2.addEventListener('click', (e)=>{
    e.preventDefault()
    price2.classList.remove('active-2')
    blockImg2.classList.remove('blur')
})

close3.addEventListener('click', (e)=>{
    e.preventDefault()
    price3.classList.remove('active-3')
    blockImg3.classList.remove('blur')
})

close4.addEventListener('click', (e)=>{
    e.preventDefault()
    price4.classList.remove('active-4')
    blockImg4.classList.remove('blur')
})

//нижний блок
const linkBottom = document.querySelector('.services__link-bottom')
const bottomImg = document.querySelector('.services__bottom')
const priceBottom = document.querySelector('.services__bottom-price')
const bottomСlose = document.querySelector('.services__bottom-close')


linkBottom.addEventListener('click', (e)=>{
    e.preventDefault()
    priceBottom.classList.add('active-bottom')
    bottomImg.classList.add('blur-bottom')
    
})


bottomСlose.addEventListener('click', (e)=>{
    e.preventDefault()
    priceBottom.classList.remove('active-bottom')
    bottomImg.classList.remove('blur-bottom')
})




//плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    menu.classList.remove('active')
  })
  
}


//Крепление заголовка вверху
const header = document.querySelector('.header')

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset >= 200) {
       header.classList.add('header-fixed')
    }else{
        header.classList.remove('header-fixed')
    }
})





// календарь

new AirDatepicker('#air-datepicker', {
    
    buttons: [
        {
            
            content(dp) {
                return dp.opts.timepicker 
                    ? 'Выключить выбор времени'
                    : 'Включить выбор времени'
            },
            onClick(dp) {
                let viewDate = dp.viewDate;
                let today = new Date();
                
                // Since timepicker takes initial time from 'viewDate', set up time here, 
                // otherwise time will be equal to 00:00 if user navigated through datepicker
                viewDate.setHours(today.getHours());
                viewDate.setMinutes(today.getMinutes());

                dp.update({
                    timepicker: !dp.opts.timepicker,
                    viewDate
                })
                
            }
            
        }
    ]
    
})

