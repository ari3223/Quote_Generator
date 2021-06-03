 //all info from api and adding the into the html is here
class UI_API {
     //switch from main to loading page
    loadinStart(){
        main.hidden = true;
        load.hidden = false;

    }
     ////switch from loading to main page
    loadingEnd(){
        main.hidden = false;
        load.hidden = true;
    }
     //get quote from api and adding them to the ui
    get_addQuote(){
         //start loadin until we completely access to data from server
        uia.loadinStart();
        getQuote();
         //thats an async function for waiting while we are accessing data of server
        async function getQuote(){
             //use try and catch for handling errors if there is any
            try{
                 //send request to our site for accessing to quotes
                let info = await fetch("https://whispering-tor-04671.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json");
                let data = await info.json(),
                    quote   = data.quoteText;
                 //if quotes is too long search for next one
                if(quote.length > 250){
                    getQuote();
                }
                 //if quotes is long make fontsize smaller
                 if(quote.length > 180 && quote.length < 250){
                    txPlace.style.fontSize = '25px';
                }
                //now that everything is OK access and add data to the html
                txPlace.textContent = quote;
                author.textContent = data.quoteAuthor;
                uia.loadingEnd();
            }

            catch(er){
                //if any error is there , repeat sending request (might be in that secend server is intrupt) and all we need is repeat
               getQuote();
            }
        }
    }
    
}

