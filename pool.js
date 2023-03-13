// gallery Pool Image Container

const imagePool = document.querySelector('.gallery__image--pool')
const nextBtn = document.querySelector ('.gallery__image-next')
const previusBtn = document.querySelector('.gallery__image-previous')

let imageIndex = 1

nextBtn.addEventListener('click',() =>{
    changeNextImage(imagePool)
    // console.log(imageIndex)
})

//change previus button
previusBtn.addEventListener('click', ()=>{
    changePreviusImage (imagePool)
    // console.log(imageIndex)
})

//change Image when click on thumnails images
let thumbnails =  document.querySelectorAll('.gallery__thumnails')
thumbnails = [...thumbnails] // transform this node into an array
// console.log (thumbnails)
thumbnails.forEach(thumbnail =>(
    thumbnail.addEventListener('click', event =>{
        imagePool.style.backgroundImage = `url('./images/pool/thumnail_pool${event.target.id}.png')`
        // console.log(event.target.id)
    })
))


// Functions

function changeNextImage(imagePool){
    if (imageIndex == 6){
        imageIndex = 1
    }
    else {
        imageIndex++
    }
    imagePool.style.backgroundImage = `url('../images/pool/pool${imageIndex}.jpg')`

}
function changePreviusImage(imagePool){
    if (imageIndex == 1){
        imageIndex = 6
    }
    else {
        imageIndex--
    }
    imagePool.style.backgroundImage = `url('../images/pool/pool${imageIndex}.jpg')`

}
