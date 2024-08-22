const inputArea = document.getElementById('inputArea');

inputArea.addEventListener('input', function() {
    let text = inputArea.value;
    let lastWord = text.split(' ').pop();

    if (lastWord === 'Двойственность') {
        replaceWord('Честность');
    } else if (lastWord === 'Виктория') {
        replaceWord('Мой лучший жизненный эпизод');
    } else if (lastWord === 'Друзья') {
        replaceWord('Одни из самых главных людей на данный момент');
    } else {
        replaceLastCharacterWithRandomLetter();
    }
});

function replaceWord(replacement) {
    let text = inputArea.value;
    let words = text.split(' ');
    words.pop();
    words.push(replacement);
    inputArea.value = words.join(' ') + ' ';
}

function replaceLastCharacterWithRandomLetter() {
    let randomLetter = getRandomRussianLetter();
    let text = inputArea.value;
    inputArea.value = text.slice(0, -1) + randomLetter;
}

function getRandomRussianLetter() {
    const russianAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    return russianAlphabet[Math.floor(Math.random() * russianAlphabet.length)];
}
