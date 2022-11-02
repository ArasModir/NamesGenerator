document.querySelector('#generate-names').addEventListener('submit', loadNames);


function loadNames(e) {
    e.preventDefault();

    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    let url = 'https://uinames.com/api/?';

    if (origin !== '') {
        url += `region=${origin}&`;
    }

    if (genre !== '') {
        url += `gender=${genre}&`;
    }

    if (amount !== '') {
        url += `amount=${amount}&`;
    }

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.status === 2000) {
            const names = JSON.parse(this.responseText);
            console.log(names);
        }
    }

    xhr.send();
}