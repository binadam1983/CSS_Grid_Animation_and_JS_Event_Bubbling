/* document.querySelector('.js-button').addEventListener('click', () => {
    console.log('test')
    document.querySelector('.js-grid').classList.toggle('grid--full')
  }) */

    window.localStorage.clear()

    document.querySelector('.js-grid').addEventListener('click', (e) => {
    
    const target = e.target

    
    let elementNumber = parseInt(target.classList[1])
    let selectRow = Math.floor(elementNumber / 4)    
    let selectColumn = elementNumber%4

    if (selectColumn == 0){
        selectRow = selectRow - 1;
    }
    let expanded_article = window.localStorage.getItem("expanded_article")
    let expanded_article_number = parseInt(expanded_article)
    console.log(expanded_article_number)
    
    if (expanded_article_number == elementNumber){
        document.querySelector('.js-grid').style.gridTemplateColumns="200px 200px 200px 200px"
        document.querySelector('.js-grid').style.gridTemplateRows="200px 200px 200px 200px"
        return
    }
    
    let expanded_article_string = elementNumber.toString()

    window.localStorage.setItem("expanded_article", expanded_article_string) 

        
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