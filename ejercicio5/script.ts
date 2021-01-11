const lettersNumberEl: HTMLInputElement = document.querySelector('#letters-number');
const textAreaEl: HTMLTextAreaElement = document.querySelector('textarea');

displayWords(parseInt(lettersNumberEl.value));

lettersNumberEl.addEventListener('keyup', e => {
  const el = <HTMLInputElement>e.target;

  if(el.value) displayWords(parseInt(el.value));
});

function displayWords(limit: number): void {
  const resultEl:  HTMLElement = document.querySelector('.result');
  const filteredTextContent = textAreaEl.textContent.replace(/[^\w\s]/gi,'');
  let resultArr: Array<string> = filteredTextContent.split(' ').filter(word => word.length >= limit);
  resultArr = resultArr.sort((a, b) => a.length - b.length);

  resultEl.innerHTML = resultArr.map(word => `${word} (${word.length})`).join('<br>');
}