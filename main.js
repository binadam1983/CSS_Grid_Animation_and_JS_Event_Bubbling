/* document.querySelector('.js-button').addEventListener('click', () => {
    console.log('test')
    document.querySelector('.js-grid').classList.toggle('grid--full')
  }) */

    document.querySelector('.js-grid').addEventListener('click', (e) => {
    
    const target = e.target

    if (target.matches('article')){
    }
    let elementNumber = parseInt(target.classList[1])
    let selectRow = Math.floor(elementNumber / 4)    
    let selectColumn = elementNumber%4

    if (selectColumn == 0){
        selectRow = selectRow - 1;
    }

    switch(selectColumn) {
        case 0:
            document.querySelector('.js-grid').style.gridTemplateColumns= "200px 200px 200px 500px";
            break;
        case 1:
            document.querySelector('.js-grid').style.gridTemplateColumns= "500px 200px 200px 200px";
            break;
        case 2:
            document.querySelector('.js-grid').style.gridTemplateColumns= "200px 500px 200px 200px";
            break;
        case 3:
            document.querySelector('.js-grid').style.gridTemplateColumns= "200px 200px 500px 200px";
            break;
        default:
            document.querySelector('.js-grid').style.gridTemplateColumns= "200px 200px 200px 200px";
    }

    switch(selectRow) {
        case 0:
            document.querySelector('.js-grid').style.gridTemplateRows= "500px 200px 200px 200px";
            break;
        case 1:            
            document.querySelector('.js-grid').style.gridTemplateRows= "200px 500px 200px 200px";
            break;
        case 2:
            document.querySelector('.js-grid').style.gridTemplateRows= "200px 200px 500px 200px";
            break;
        case 3:
            document.querySelector('.js-grid').style.gridTemplateRows= "200px 200px 200px 500px";
            break;
        default:
           document.querySelector('.js-grid').style.gridTemplateRows= "200px 200px 200px 200px";
        }

    })