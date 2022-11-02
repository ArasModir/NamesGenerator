document.querySelector('#generate-names').addEventListener('submit', loadNames);


function loadNames(e) {
    e.preventDefault();

    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    let url = ' '

    if (origin !== '') {
        url += `region=${origin}&`;
    }

    if (genre !== '') {
        url += `gender=${genre}&`;
    }

    if (amount !== '') {
        url += `amount=${amount}&`;
    }

    console.log(url)
    // new Changes
}

