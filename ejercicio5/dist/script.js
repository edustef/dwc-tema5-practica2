var lettersNumberEl = document.querySelector('#letters-number');
var textAreaEl = document.querySelector('textarea');
displayWords(parseInt(lettersNumberEl.value));
lettersNumberEl.addEventListener('keyup', function (e) {
    var el = e.target;
    if (el.value)
        displayWords(parseInt(el.value));
});
function displayWords(limit) {
    var resultEl = document.querySelector('.result');
    var filteredTextContent = textAreaEl.textContent.replace(/[^\w\s]/gi, '');
    var resultArr = filteredTextContent.split(' ').filter(function (word) { return word.length >= limit; });
    resultArr = resultArr.sort(function (a, b) { return a.length - b.length; });
    resultEl.innerHTML = resultArr.map(function (word) { return word + " (" + word.length + ")"; }).join('<br>');
}
