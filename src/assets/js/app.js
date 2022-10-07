

let buttons = document.getElementsByClassName("accordion");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let text = this.nextElementSibling;
    if (text.style.maxHeight) {
      text.style.maxHeight = null;
    } else {
      text.style.maxHeight = text.scrollHeight + "px";
    }
  });
}

// end accordion


//slider 

const swiper = new Swiper('.gallery__wrapper-inner', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    414: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
    }
  },
  slidesPerView: 3,
  spaceBetween: 60,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})



const slides = document.querySelectorAll('.gallery__wrapper .swiper-slide')
const modal = document.querySelector('.modal')
const y = document.querySelector('.gallery').getBoundingClientRect().top + window.scrollY - 300;

const modalSet = () => {

  if (modal.classList[1]) {
    modal.classList.remove('active')
    document.querySelector('body').classList.remove('block')
  } else {
    modal.classList.add('active')
    document.querySelector('body').classList.add('block')
    window.scroll({ top: y, });

    setTimeout(() => {
      //reinit slides
      const swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 3,
        breakpoints: {
          0: {
            slidesPerView: 2
          },
          414: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
          }
        },
        freeMode: true,
        watchSlidesProgress: true,
      });

      const swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 40,
        navigation: {
          nextEl: ".next-slide",
          prevEl: ".prev-slide",
        },
        thumbs: {
          swiper: swiper,
        },
      });
      //reinit slides


      //validate click for close
      let validateClick = (e) => {
        if (e.target.classList[1] == 'active' || e.target.classList == 'close') {
          modalSet()
          swiper.destroy();
          swiper2.destroy();
          window.removeEventListener('click', validateClick)
        }
      }
      window.addEventListener('click', validateClick)
      //end validate click for close



    }, 200);


  }
}


slides.forEach(slide => {
  slide.addEventListener('click', (e) => {
    modalSet()

    let sliderFull = document.querySelector('.mySwiper2 .swiper-wrapper')
    let sliderMini = document.querySelector('.mySwiper .swiper-wrapper')
    sliderFull.innerHTML = ``;
    sliderMini.innerHTML = ``;

    let photos = slide.querySelectorAll('.inputs>input');
    photos.forEach(photo => {
      let image_url = photo.value;

      // add full image
      let divFull = document.createElement('div')
      let imageFull = document.createElement("img")
      imageFull.src = image_url
      divFull.className = 'swiper-slide'

      divFull.appendChild(imageFull)

      sliderFull.appendChild(divFull)
      // end add full image

      // add add mini image
      let divMini = document.createElement('div')
      let imageMini = document.createElement("img")
      imageMini.src = image_url
      divMini.className = 'swiper-slide'

      divMini.appendChild(imageMini)

      sliderMini.appendChild(divMini)
      // end add mini image

    });

  })
});



// end slider




//map


let map = document.getElementById('map')
let count = 0;
map.addEventListener('mouseout', (e) => {
  if (count == 0) {
    map.innerHTML = `<iframe
  src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab89bd5971f742d068a6c1a81a2673ae6961fd40779f414abcacdb3c402363e64&amp;source=constructor"
  width="100%" height="100%"></iframe>`
    count++;
  } else {

  }

})