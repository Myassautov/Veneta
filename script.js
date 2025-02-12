let elDivModal = document.querySelector('.modal')

let ela = document.querySelector('.modal-section-item-decor')

let elDivback = document.querySelector('.media-collection-kovr')

let elbtnPoints = document.querySelector('.media-collection-points-disp')

let elbtnPoints2 = document.querySelector('.media-collection-points-disp2')

let elbtnPoints3 = document.querySelector('.media-collection-points-disp3')

let ela2 = document.querySelector('.text-2')

let ela3 = document.querySelector('.text-3')

let ela4 = document.querySelector('.text-4')

let ela5 = document.querySelector('.text-5')

let ela6 = document.querySelector('.text-6')

let ela7 = document.querySelector('.text-7')

let ela8 = document.querySelector('.text-8')

let ela9 = document.querySelector('.text-9')

let ela10 = document.querySelector('.text-10')

let ela11 = document.querySelector('.text-11')

let ela12 = document.querySelector('.text-12')

let elbtn = document.querySelector('.header-Bayan__city')

ela.addEventListener('click', function(e){
    e.preventDefault()

    elbtn.textContent = 'Алматы'


})

ela2.addEventListener('click', function(e){
    e.preventDefault()

    elbtn.textContent = 'Нур-Султан'


})

ela2.addEventListener('click', function(e){
    e.preventDefault()

    elbtn.textContent = 'Нур-Султан'


})

ela3.addEventListener('click', function(e){
    e.preventDefault()

    elbtn.textContent = 'Аксай'


})

ela4.addEventListener('click', function(e){
    e.preventDefault()

    elbtn.textContent = 'Акcy'


})

ela5.addEventListener('click', function(e){
    e.preventDefault()

    elbtn.textContent = 'Актау'


})

ela6.addEventListener('click', function(e){
    e.preventDefault()

    elbtn.textContent = 'Актобе'


})

ela7.addEventListener('click', function(e){
    e.preventDefault()

    elbtn.textContent = 'Алтай'


})

ela8.addEventListener('click', function(e){
    e.preventDefault()

    elbtn.textContent = 'Арысь'


})

ela9.addEventListener('click', function(e){
    e.preventDefault()

    elbtn.textContent = 'Атыру'


})

ela10.addEventListener('click', function(e){
    e.preventDefault()

    elbtn.textContent = 'Балшах'


})

ela11.addEventListener('click', function(e){
    e.preventDefault()

    elbtn.textContent = 'Бейнеу'


})

ela12.addEventListener('click', function(e){
    e.preventDefault()

    elbtn.textContent = 'Есик'


})

elbtnPoints.addEventListener('click', function(e) {
    e.preventDefault()

    elDivback.style.backgroundImage = 'foto/Login.png'

})

function modalFunctionOpen(){
  elDivModal.classList.add('modal-clouse')
}

function modalFunctionClouse(){
  elDivModal.classList.remove('modal-clouse')
}