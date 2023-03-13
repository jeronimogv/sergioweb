// gallery Land Image Container

const imageLand = document.querySelector('.gallery__image--land')
const nextBtn = document.querySelector ('.gallery__image-next')
const previusBtn = document.querySelector('.gallery__image-previous')

let imageIndex = 1

nextBtn.addEventListener('click',() =>{
    changeNextImage(imageLand)
    // console.log(imageIndex)
})

//change previus button
previusBtn.addEventListener('click', ()=>{
    changePreviusImage (imageLand)
    // console.log(imageIndex)
})

//change Image when click on thumnails images
let thumbnails =  document.querySelectorAll('.gallery__thumnails')
thumbnails = [...thumbnails] // transform this node into an array
// console.log (thumbnails)
thumbnails.forEach(thumbnail =>(
    thumbnail.addEventListener('click', event =>{
        imageLand.style.backgroundImage = `url('./images/land/thumnail_land${event.target.id}.png')`
        // console.log(event.target.id)
    })
))


// Functions

function changeNextImage(imageLand){
    if (imageIndex == 6){
        imageIndex = 1
    }
    else {
        imageIndex++
    }
    imageLand.style.backgroundImage = `url('../images/land/land${imageIndex}.jpg')`

}
function changePreviusImage(imageLand){
    if (imageIndex == 1){
        imageIndex = 6
    }
    else {
        imageIndex--
    }
    imageLand.style.backgroundImage = `url('../images/land/land${imageIndex}.jpg')`

}
