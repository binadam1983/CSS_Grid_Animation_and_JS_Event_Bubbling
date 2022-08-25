document.querySelector('.js-button').addEventListener('click', () => {
    console.log('test')
    document.querySelector('.js-grid').classList.toggle('grid--full')
  })



document.querySelector('.js-grid').addEventListener('click', (e) => {
    console.log(e.target)
    document.querySelector('.js-grid').classList.toggle('grid--full')
})

/* document.querySelector('.js-grid').addEventListener('mouseleave', () => {
    console.log('item1 hovered')
    document.querySelector('.js-grid').classList.remove ('grid--full')
}) */

