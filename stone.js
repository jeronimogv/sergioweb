// gallery Stone Image Container

const imageStone = document.querySelector('.gallery__image--stone')
const nextBtn = document.querySelector ('.gallery__image-next')
const previusBtn = document.querySelector('.gallery__image-previous')

let imageIndex = 1

nextBtn.addEventListener('click',() =>{
    changeNextImage(imageStone)
    // console.log(imageIndex)
})

//change previus button
previusBtn.addEventListener('click', ()=>{
    changePreviusImage (imageStone)
    // console.log(imageIndex)
})

//change Image when click on thumnails images
let thumbnails =  document.querySelectorAll('.gallery__thumnails')
thumbnails = [...thumbnails] // transform this node into an array
// console.log (thumbnails)
thumbnails.forEach(thumbnail =>(
    thumbnail.addEventListener('click', event =>{
        imageStone.style.backgroundImage = `url('./images/stone/thumnail_stone${event.target.id}.png')`
        // console.log(event.target.id)
    })
))


// Functions

function changeNextImage(imageStone){
    if (imageIndex == 6){
        imageIndex = 1
    }
    else {
        imageIndex++
    }
    imageStone.style.backgroundImage = `url('../images/stone/stone${imageIndex}.jpeg')`

}
function changePreviusImage(imageStone){
    if (imageIndex == 1){
        imageIndex = 6
    }
    else {
        imageIndex--
    }
    imageStone.style.backgroundImage = `url('../images/stone/stone${imageIndex}.jpeg')`

}
