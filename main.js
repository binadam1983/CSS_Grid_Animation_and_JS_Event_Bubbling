/* document.querySelector('.js-button').addEventListener('click', () => {
    console.log('test')
    document.querySelector('.js-grid').classList.toggle('grid--full')
  }) */

//clearing the state; starting anew
    window.localStorage.clear()

//catching the event at the parent
    document.querySelector('.js-grid').addEventListener('click', (e) => {
    
    const target = e.target

//calculating the clicked item's location using row and column
    
    let elementNumber = parseInt(target.classList[1])
    let selectRow = Math.floor(elementNumber / 4)    
    let selectColumn = elementNumber%4

//adjusting the row for the 4th column

    if (selectColumn == 0){
        selectRow = selectRow - 1;
    }

//saving & retrieving the state of clicked item in the browser

    let expanded_article = window.localStorage.getItem("expanded_article")
    let expanded_article_number = parseInt(expanded_article)

// pulling the default if the clicked-item is clicked again
    
    if (expanded_article_number == elementNumber){
        document.querySelector('.js-grid').style.gridTemplateColumns="200px 200px 200px 200px"
        document.querySelector('.js-grid').style.gridTemplateRows="100px 100px 100px 100px"
        window.localStorage.clear()
        return
    }
    
    let expanded_article_string = elementNumber.toString()

    window.localStorage.setItem("expanded_article", expanded_article_string) 

//Selecting the column of the clicked item

        switch(selectColumn) {
            case 0:
                document.querySelector('.js-grid').style.gridTemplateColumns= "0px 0px 0px 805px";
                break;
            case 1:
                document.querySelector('.js-grid').style.gridTemplateColumns= "805px 0px 0px 0px";
                break;
            case 2:
                document.querySelector('.js-grid').style.gridTemplateColumns= "0px 805px 0px 0px";
                break;
            case 3:
                document.querySelector('.js-grid').style.gridTemplateColumns= "0px 0px 805px 0px";
                break;
            default:
                document.querySelector('.js-grid').style.gridTemplateColumns= "200px 200px 200px 200px";
        }
//Selecting the row of the clicked item

        switch(selectRow) {
            case 0:
                document.querySelector('.js-grid').style.gridTemplateRows= "500px 0px 0px 0px";
                break;
            case 1:            
                document.querySelector('.js-grid').style.gridTemplateRows= "0px 500px 0px 0px";
                break;
            case 2:
                document.querySelector('.js-grid').style.gridTemplateRows= "0px 0px 500px 0px";
                break;
            case 3:
                document.querySelector('.js-grid').style.gridTemplateRows= "0px 0px 0px 500px";
                break;
            default:
            document.querySelector('.js-grid').style.gridTemplateRows= "100px 100px 100px 100px";
        }
    })