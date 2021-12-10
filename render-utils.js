export function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblinData.name;
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

// changes the emoji of the goblin when it reaches an HP of 0
    faceEl.textContent = goblinData.hp > 0 ? '👹' : '💀 ';

    if (goblinData.hp < 0) {
        goblinEl.classList.add('dead'); // Doesn't make the goblin transparent?? 
    }

    goblinEl.append(nameEl, faceEl, hpEl);

    return goblinEl;
}