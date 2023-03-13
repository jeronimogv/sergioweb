// gallery Fence Image Container

const imageFence = document.querySelector('.gallery__image--fence')
const nextBtn = document.querySelector ('.gallery__image-next')
const previusBtn = document.querySelector('.gallery__image-previous')

let imageIndex = 1

nextBtn.addEventListener('click',() =>{
    changeNextImage(imageFence)
    // console.log(imageIndex)
})

//change previus button
previusBtn.addEventListener('click', ()=>{
    changePreviusImage (imageFence)
    // console.log(imageIndex)
})

//change Image when click on thumnails images
let thumbnails =  document.querySelectorAll('.gallery__thumnails')
thumbnails = [...thumbnails] // transform this node into an array
// console.log (thumbnails)
thumbnails.forEach(thumbnail =>(
    thumbnail.addEventListener('click', event =>{
        imageFence.style.backgroundImage = `url('./images/fence/thumnail_fence${event.target.id}.png')`
        // console.log(event.target.id)
    })
))


// Functions

function changeNextImage(imageFence){
    if (imageIndex == 6){
        imageIndex = 1
    }
    else {
        imageIndex++
    }
    imageFence.style.backgroundImage = `url('../images/fence/fence${imageIndex}.jpg')`

}
function changePreviusImage(imageFence){
    if (imageIndex == 1){
        imageIndex = 6
    }
    else {
        imageIndex--
    }
    imageFence.style.backgroundImage = `url('../images/fence/fence${imageIndex}.jpg')`

}
