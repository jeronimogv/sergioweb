// gallery Welding Image Container

const imageWelding = document.querySelector('.gallery__image--welding')
const nextBtn = document.querySelector ('.gallery__image-next')
const previusBtn = document.querySelector('.gallery__image-previous')

let imageIndex = 1

nextBtn.addEventListener('click',() =>{
    changeNextImage(imageWelding)
    // console.log(imageIndex)
})

//change previus button
previusBtn.addEventListener('click', ()=>{
    changePreviusImage (imageWelding)
    // console.log(imageIndex)
})

//change Image when click on thumnails images
let thumbnails =  document.querySelectorAll('.gallery__thumnails')
thumbnails = [...thumbnails] // transform this node into an array
// console.log (thumbnails)
thumbnails.forEach(thumbnail =>(
    thumbnail.addEventListener('click', event =>{
        imageWelding.style.backgroundImage = `url('./images/welding/thumnail_welding${event.target.id}.png')`
        // console.log(event.target.id)
    })
))


// Functions

function changeNextImage(imageWelding){
    if (imageIndex == 6){
        imageIndex = 1
    }
    else {
        imageIndex++
    }
    imageWelding.style.backgroundImage = `url('../images/welding/welding${imageIndex}.jpg')`

}
function changePreviusImage(imageWelding){
    if (imageIndex == 1){
        imageIndex = 6
    }
    else {
        imageIndex--
    }
    imageWelding.style.backgroundImage = `url('../images/welding/welding${imageIndex}.jpg')`

}
