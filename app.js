console.log('connectd');

const inputForm = document.querySelector('form');
inputForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputWeight = document.querySelector('#weight');
    const inputTanch = document.querySelector('#tanch');
    const inputWantTanch = document.querySelector('#wTanch');

    let weight = inputWeight.value;
    let tanch = inputTanch.value;
    let wTanch = inputWantTanch.value;
    const loader = document.querySelector('.loader');
    const resultsDOM = document.querySelector('.results');
    const pure = document.querySelector('#pure');

    let fine = (weight * tanch) / 100;
    let other = weight - fine;
    let divs = 100 - wTanch;
    let total = other / divs;
    let sub = total * 100;
    let add = sub - weight;

    resultsDOM.classList.add('showItem');
    pure.textContent = `${add.toFixed(3)}`;

    setTimeout(() => {
        inputWeight.value = ' ';
        inputTanch.value = ' ';
        inputWantTanch.value = ' ';
    }, 10000)


})