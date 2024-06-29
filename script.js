/*Initialize Swiper*/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
  //counter design
  document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
      let obj = document.getElementById(id),
      curent = start,
      range = end-start,
      increament = end>start?1:-1,
      step = Math.abs(Math.floor(duration/range)) //math.abs ===> convert negative value into positive
      timer = setInterval(()=>{
        curent+=increament;
        obj.textContent = curent;
        if(curent == end){
          clearInterval(timer)
        }
      },step);
    }
    counter("count1",156,1287,3000);
    counter("count2",12,5768,2500);
    counter("count3",325,1440,3000);
    counter("count4",346,7110,3000);
  });

  //counter 2
  document.addEventListener("DOMContentLoaded",()=>{
    function calculation(id,start,end,duration){
      let info = document.getElementById(id),
      current2 = start,
      range2 = end - start,
      increament2 = end > start? 1 : -1,
      step2 = Math.abs(Math.floor(duration/range2))
      timer = setInterval(()=>{
        current2+= increament2;
        info.textContent = current2;
        if(current2 == end) clearInterval(timer)
      },step2) 
    }
    calculation("calculate1",156,1287,3000);
    calculation("calculate2",12,5768,2500);
    calculation("calculate3",325,1440,3000);
    calculation("calculate4",346,7110,3000);
  })
