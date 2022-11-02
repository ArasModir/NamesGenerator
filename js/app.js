document.querySelector('#generate-names').addEventListener('submit', loadNames);


function loadNames(e) {
    e.preventDefault();

    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    let url = 'https://uinames.com/api/?'

    if (origin !== '') {
        url += `region=${origin}&`;
    }

    console.log(url)
}

