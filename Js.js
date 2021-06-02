//class
let uia = new UI_API();
//variabless
 //access to  writer and the text of the quote
let author  = document.querySelector('#writer'),
    txPlace = document.querySelector('.textContainar');
 //access to the main and the secend page for on and off them(waiting page)
 let main   = document.querySelector('.containar'),
     load   = document.querySelector('.loading');  

//evenlisener
evenLisener()
function evenLisener() {
     //get and add new quote to our page
    document.querySelector('#new').addEventListener('click', () => uia.get_addQuote() );
     //after every reload we should add new quote
    document.addEventListener('DOMContentLoaded', () => uia.get_addQuote() );
     //send user to twitter for posting this quote to hes(shes) twitter
    document.querySelector('#tw').addEventListener('click', (e) => window.open(`https://twitter.com/intent/tweet?text=${txPlace.textContent} - ${author.textContent}`, '_blank') );
}
