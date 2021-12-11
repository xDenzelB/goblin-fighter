// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHpEl = document.querySelector('#adventurer-hp');
const adventurerImgEl = document.querySelector('.adventurer-img');

const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');
// let state
let defeatedGoblinsCount = 0;
let playerHp = 10;
let goblins = [
    { name: 'Steven', hp: 1 },
    { name: 'Mark', hp: 4 },
];

// set event listeners 
// to submit and have a new goblin to challenge
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    const newGoblin = {
        name: (goblinName === '') ? `Goblin #${Math.floor(Math.random() * 1000)}` : goblinName,
        hp: Math.ceil(Math.random() * 5),
    };
// display new goblin 
    goblins.push(newGoblin);

    displayGoblins();
});

function displayGoblins() {
    // clear out the DOM 
    goblinListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        // HP and Attack actions 
        if (goblin.hp > 0) {
            //For clicking the goblins then changing the state
            goblinEl.addEventListener('click', () => {
                if (Math.random() < .5) {
                    goblin.hp--;
                    alert('You sliced' + goblin.name);
                } else {
                    alert('You tried to slice' + goblin.name + 'but it was not effective');
                }
                if (Math.random() < .33) {
                    playerHp--;
                    alert(goblin.name + 'Hit you!!');
                } else {
                    alert(goblin.name + 'Tried to hit you but missed');
                }
                if (goblin.hp === 0) {
                    defeatedGoblinsCount++;
                }
                if (playerHp === 0) {
                    // adventurerImgEl.classList.add('Game-Over'); // For some reason doesn't make my image transparent???? 
                    alert ('GAME OVER!');
                }
                adventurerHpEl.textContent = playerHp;
                defeatedNumberEl.textContent = defeatedGoblinsCount;

                displayGoblins();
            });
        } 

        if (goblin.hp <= 0) {
            goblinEl.classList.add('dead-goblin');
        }

        if (playerHp <= 0) {
            adventurerImgEl.classList.add('Game-Over');
        }
        goblinListEl.append(goblinEl);
    }
}
displayGoblins();


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
