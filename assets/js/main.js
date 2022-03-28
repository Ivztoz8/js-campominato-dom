
/* Variabili */
//selezioniamo il bottone di inizio
let start = document.getElementById('btn');
//selezioniamo il valore della difficoltà scelta
let select = document.getElementById('difficoltà');
// Selezioniamo <p></p> nella griglia
let paragrafo = document.getElementById('welcome');
let scoreboard = document.getElementById('scoreboard');
let box;





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

                for(let i = 0; i < 100; i++){ 
                        // Selezioniamo la griglia
                        let grid = document.getElementById('grid');
                        // Creazione del box interno alla griglia
                        box = document.createElement('div');
                        //Inserire 100 box all'interno della griglia      
                        grid.appendChild(box);
                        //Aggiungere classe al singolo box
                        box.classList.add('box-10');
                        // Inserire numero dentro il box
                        box.innerHTML += `<span>${(array[i])}</span>`;
                        // Al click del box cambia il colore della cella diventando blu
                        box.addEventListener('click', checkedBombedBox)
                }

        }else if (select.value == "media"){

                for(let i = 0; i < 81; i++){ 
                        // Selezioniamo la griglia 9x9(81 cells)
                        let grid = document.getElementById('grid');
                        // Creazione del box interno alla griglia
                        box = document.createElement('div');
                        //Inserire 100 box all'interno della griglia      
                        grid.appendChild(box);
                        //Aggiungere classe al singolo box
                        box.classList.add('box-9');
                        // Inserire numero dentro il box
                        box.innerHTML += `<span>${(array[i])}</span>`;
                        // Al click del box cambia il colore della cella diventando blu
                        box.addEventListener('click', checkedBombedBox)
                        
                }
        }else{
                
                for(let i = 0; i < 49; i++){ 
                        // Selezioniamo la griglia 7x7(49 cells)
                        let grid = document.getElementById('grid');
                        // Creazione del box interno alla griglia
                        box = document.createElement('div');
                        //Inserire 100 box all'interno della griglia      
                        grid.appendChild(box);
                        //Aggiungere classe al singolo box
                        box.classList.add('box-7');
                        // Inserire numero dentro il box
                        box.innerHTML += `<span>${(array[i])}</span>`;
                        // Al click del box cambia il colore della cella diventando blu
                        box.addEventListener('click', checkedBombedBox, bombedFound)
                }
        }
        
} )

function getRandomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()* (max - min + 1) + min);
}


    let array = [];

        for (y=0; y <= 100; y++){
        array.push(y);        
        }

        function shuffle(array){
                return array.sort(() => Math.random() - 0.5);
        }


        array = shuffle(array);

//array per le bombe
let arrayBombe = [];
for (bombe=1; bombe < 100; bombe++){
        arrayBombe.push(bombe);
}
arrayBombe = shuffle(arrayBombe);

//array 16 bombe
let arraySediciBombe = [];
for (bombe=1; bombe < 16; bombe++){
        arraySediciBombe.push(arrayBombe[bombe]);
}
console.log(arraySediciBombe);

function checkedBombedBox(){
        if (arraySediciBombe.includes(parseInt(this.innerText))){
                this.classList.add('bomba');
                alert(`Hai fatto esplodere una bomba, hai perso!`)
        }else{
                this.classList.add('clicked');
                let point = 0;
                point++;
                scoreboard.innerHTML = `Il tuo punteggio è: `; 
                scoreboard.innerHTML = `${point}`
        }
}

