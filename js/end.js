'use strict';

function displayEndPage () {
    const mainWrapper = document.createElement('main');
    mainWrapper.className = 'result-main';

    const header = document.createElement('header');
    header.className = 'result-header';
    mainWrapper.appendChild(header); // Append header to main

    const h1Result = document.createElement('h1');
    h1Result.textContent = 'Slutresultat';
    header.appendChild(h1Result); // Append h1 to header

    const paragraph = document.createElement('p');
    paragraph.textContent = '10 av 10 rätt!';
    paragraph.id = 'showScore';
    paragraph.className = 'show-score';
    header.appendChild(paragraph); // Append p to header

    const resultBtn = document.createElement('button');
    resultBtn.textContent = 'Visa resultat';
    resultBtn.id = 'resultBtn';
    resultBtn.className = 'result-btn'
    header.appendChild(resultBtn); // Append result button to header

    const resultList = document.createElement('ul');
    resultList.className = 'result-list';
    resultList.id = 'resultContainer';
    // Create li element for each item
    const resultItem = ['Fråga 1', 'Fråga 2', 'Fråga 3', 'Fråga 4', 'Fråga 5', 'Fråga 6', 'Fråga 7', 'Fråga 8', 'Fråga 9', 'Fråga 10'];
    resultItem.forEach(itemText => {
        const item = document.createElement('li');
        item.textContent = itemText;
        item.className = 'result-item';
        resultList.appendChild(item)
    });
    
    mainWrapper.appendChild(resultList); // Append UL list to main

    const newRoundDiv = document.createElement('div');
    newRoundDiv.className = 'new-round';
    mainWrapper.appendChild(newRoundDiv); // Append div to main

    const newRoundBtn = document.createElement('button');
    newRoundBtn.textContent = 'Kör en ny omgång';
    newRoundBtn.id = 'newRoundBtn';
    newRoundBtn.classList = 'new-round-btn';
    newRoundDiv.appendChild(newRoundBtn); // Append button to div

    document.body.appendChild(mainWrapper)

}
displayEndPage()