// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

console.log("FizzBuzz")

// stampa i numeri da 1 a 100
    for(let i= 1; i <= 100; i++){
       

        // if (i  % 3 === 0){
        //     console.log("Fizz");
        // } else if (i  % 5 === 0){        //ERA DI PROVA HO INCLUSO TUTTO IN IF
        // console.log("Buzz");         
        // }
        // else{
        //     console.log(i);
        // }

        
        // Se i e diverso da 3 e i e diverso da 5 allora mi stampa FizzBuzz
        if(i  % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        
        // ALtrimenti se i è diverso da 3 mi stampi solo Fizz
        else if (i  % 3 === 0){
            console.log("Fizz");
        }
        
        //  ALtrimenti se i è diverso da 5 mi stampi solo Buzz
        else if (i  % 5 === 0){
            console.log("Buzz");
        }
        // Altrimenti mi stampi i
        else{
            console.log(i);
        }


    }
   
        



    