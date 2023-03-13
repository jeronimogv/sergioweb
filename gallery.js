// gallery Image Container

const imageContainer = document.querySelector('.gallery__image--container')
const nextBtn = document.querySelector ('.gallery__image-next')
const previusBtn = document.querySelector('.gallery__image-previous')

let imageIndex = 1

nextBtn.addEventListener('click',() =>{
    changeNextImage(imageContainer)
    // console.log(imageIndex)
})

//change previus button
previusBtn.addEventListener('click', ()=>{
    changePreviusImage (imageContainer)
    // console.log(imageIndex)
})

//change Image when click on thumnails images
let thumbnails =  document.querySelectorAll('.gallery__thumnails')
thumbnails = [...thumbnails] // transform this node into an array
// console.log (thumbnails)
thumbnails.forEach(thumbnail =>(
    thumbnail.addEventListener('click', event =>{
        imageContainer.style.backgroundImage = `url('./images/concreate/thumnail_m${event.target.id}.jpg')`
        // console.log(event.target.id)
    })
))


// Functions

function changeNextImage(imageContainer){
    if (imageIndex == 6){
        imageIndex = 1
    }
    else {
        imageIndex++
    }
    imageContainer.style.backgroundImage = `url('../images/concreate/m${imageIndex}.jpeg')`

}
function changePreviusImage(imageContainer){
    if (imageIndex == 1){
        imageIndex = 6
    }
    else {
        imageIndex--
    }
    imageContainer.style.backgroundImage = `url('../images/concreate/m${imageIndex}.jpeg')`

}
