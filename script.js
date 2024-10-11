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
const link = document.querySelectorAll('.services__link') 
const blockImg = document.querySelectorAll('.services__top__img')
const price = document.querySelectorAll('.services__top__img-price')
const closeTop = document.querySelectorAll('.top__price-close')


function showPrice(link, blockImg, price, addClass, addClass1){
    link.addEventListener('click', (e)=>{
        e.preventDefault()
        blockImg.classList.add(addClass)
        price.classList.add(addClass1)
    })
}


showPrice(link[0], blockImg[0], price[0], 'blur', 'active-1')
showPrice(link[1], blockImg[1], price[1], 'blur', 'active-2')
showPrice(link[2], blockImg[2], price[2], 'blur', 'active-3')
showPrice(link[3], blockImg[3], price[3], 'blur', 'active-4' )


function hidePrice(closeBtn, blockImg, price, removeClass, removeClass1){
    closeBtn.addEventListener('click', (e)=>{
        blockImg.classList.remove(removeClass)
        price.classList.remove(removeClass1)
    })
}

hidePrice(closeTop[0], blockImg[0], price[0], 'blur', 'active-1')
hidePrice(closeTop[1], blockImg[1], price[1], 'blur', 'active-2')
hidePrice(closeTop[2], blockImg[2], price[2], 'blur', 'active-3')
hidePrice(closeTop[3], blockImg[3], price[3], 'blur', 'active-4' )

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
    } else{
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

