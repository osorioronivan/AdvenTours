// const btnLeft = document.getElementById("btn-arrowLeft")
// const btnRight = document.getElementById("btn-arrowRight")
// const carousel = document.getElementById("image-carousel")
let elNido = new touristSpot("El Nido", "Asset/Elnido.jpg", "Philippines", "5.0", "5.5k")
let mountFuji = new touristSpot("Mount Fuji","Asset/mount-fuji.jpg","Japan","4.8","1.2k")
let twinTower = new touristSpot("Kuala Lumpur", "Asset/Twin-Tower.jpg","Malaysia","4.0","1.6k")
let marinaBay = new touristSpot("Marina Bay","Asset/Marina-bay.jpg","Singapore","4.6","2.2k")
let bali = new touristSpot("Bali","Asset/Bali.jpg","Indonesia","5.0","2.5k")
const touristSpotList = [elNido,mountFuji,twinTower,marinaBay,bali]
const btnAccept = document.getElementById("btnAccept")
const btnDecline = document.getElementById("btnDecline")
const modal = document.getElementById("modal")
const btnCloseModal = document.getElementById("btn-modal-close")
const formConsent = document.getElementById("consent-form")
const modalContent = document.getElementById("modal-content")
const modalText = document.getElementById("modal-Text")
const modalControls = document.getElementById("modal-controls")
let slideItems = document.getElementsByClassName("tourist-spots")

function touristSpot (
  loc_Title,
  loc_Img,
  loc_Country,
  loc_Rate,
  loc_Reviews){
    this.loc_Title = loc_Title;
    this.loc_Img = loc_Img;
    this.loc_Country = loc_Country;
    this.loc_Rate = loc_Rate;
    this.loc_Reviews = loc_Reviews;
}


renderTouristSpots()

function renderTouristSpots(){
    const touristSpotHTML = touristSpotList.map(function(spots){
      return `
      <div class="tourist-spots" >
        <img src="${spots.loc_Img}" alt="" srcset="" class="img-location">
        <div class="Location">
          <h2 class="location-title">${spots.loc_Title}, ${spots.loc_Country}</h2>
          <div class="location-rate">
            <div class="location-country">
              <img src="Asset/location-pin.png" alt="" height="">
              <h4 class="country">${spots.loc_Country}</h4>
            </div>
            <div class="ratings">
              <img src="Asset/star.png" alt="" height = "18px">
              <p class="rate">${spots.loc_Rate}<span>(${spots.loc_Reviews})</span></p>
            </div>
          </div>
        </div>
      </div>`
    }).join('')
    document.getElementById("image-carousel").innerHTML = touristSpotHTML
  }


// const touristSpot = touristSpotList.map(function)
let slideCount = slideItems.length
let slideIndex = 0;
function plusSlides(n) {
  if (slideCount > 3 && slideCount < slideItems.length + 1){
    slideItems[slideIndex].style.display = "none"
    slideIndex += n
    slideCount -= 1
  }else if(slideCount == slideItems.length){
    slideIndex = 0
    slideItems[slideIndex].style.display = "block"
  }
}
function minusSlides(n) {
  if(slideCount < slideItems.length +1 ){
      slideItems[slideIndex].style.display = "block"
      if (slideIndex > 0){
        slideCount += 1
        slideIndex -= n
      }
    }
}

setTimeout(()=>{
    modal.style.display = "block" 
}, 1500)

btnCloseModal.addEventListener("click",function(){
  btnCloseModal.style.color = "Red"
  setTimeout(()=>{
    modal.style.display = "none"
  }, 100)
})

formConsent.addEventListener('submit',(e)=>{
    e.preventDefault()
    modalText.innerHTML = `<div class="modal-inner-loading">
    <img src = "Asset/loading.svg" class="loading" width 100%>
    <p id="upload-text"> Uploading your data to the dark web..</p>
    </div>
    `
    setTimeout(()=>{
      document.getElementById("upload-text").innerText = "Making the sale"
    }, 1500)

    const formData = new FormData(formConsent)
    const formName = formData.get('txtName')
    const username = formName
    setTimeout(()=>{
      btnCloseModal.disabled = false
      modalContent.innerHTML = `<h1>Thanks <span class="formName">${formName}<span></h1>
    <p> We just sold your data..</p>
    `},3000)
  }
)


btnDecline.onmouseover = ()=>{
  modalControls.classList.toggle('reverse')
}
// function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("tourist-spots")
//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 3) {slideIndex = slides.length};
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slides[slideIndex-1].style.display = "block";
//     slides[slideIndex-2].style.display = "block";
//     slides[slideIndex-3].style.display = "block";
//   }
