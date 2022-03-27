
/* Variabili */
//selezioniamo il bottone di inizio
let start = document.getElementById('btn');
//selezioniamo il valore della difficoltà scelta
let select = document.getElementById('difficoltà');
// Selezioniamo <p></p> nella griglia
let paragrafo = document.getElementById('welcome');





/* Eventi */
start.addEventListener('click', function(){

        // Reset del contenuto interno della griglia per nuova partita
        grid.innerHTML = '';
        // Aggiungo la classe griglia all'ellemento grid
        grid.classList.add('griglia');
        // Rimuovo la classe "none" dall'elemento grid
        grid.classList.remove('none');
        //Aggiungo la classe "none" al <p></p>
        paragrafo.classList.add('none');

        console.log(select.value);
        
        //Condizione legata alla difficoltà scelta
        if (select.value == "facile"){

                for(let i = 1; i < 101; i++){ 
                        // Selezioniamo la griglia
                        let grid = document.getElementById('grid');
                        // Creazione del box interno alla griglia
                        let box = document.createElement('div');
                        //Inserire 100 box all'interno della griglia      
                        grid.appendChild(box);
                        //Aggiungere classe al singolo box
                        box.classList.add('box-10');
                        // Inserire numero dentro il box
                        box.innerHTML += `<span>${(i)}</span>`;
                }

        }else if (select.value == "media"){

        }else{

        }
        
} )

function getRandomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()* (max - min + 1) + min);
}

//console.log(getRandomIntInclusive(1,100));

        let array = [];

        for (y=1; y <= 100; y++){
                let numberRando = getRandomIntInclusive(1,100);

                do{
                         array.push(numberRando)
                }while(!array.includes(numberRando))
        }
  
//console.log(array);