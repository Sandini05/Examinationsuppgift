function fetchData(){ //En funktion för att knappen ska kunna generera citat. När man använder "onclick" attributen och kallar denna funktion först så genereras citaten på rätt sätt. Annars skulle knappen inte fungera.
    fetch("https://api.adviceslip.com/advice") //Hämtar data från API länken
    .then(response => response.json()) //Omvandlar datan till en json fil
    .then(data => {
        console.log(data); //Skriver ut datan i konsolen
        displayQuote(data); //Skriver ut funktionen
    })
    }
    
    function displayQuote(data){ //En funktion skapad för att kunna hämta den specifika informationen som behövs vilket är citaten och sedan visa upp den på HTML sidan.
        document.getElementById("quote").innerHTML = data.slip.advice;
    }
    
    fetchData();