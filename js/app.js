document.querySelector('#generate-names').addEventListener('submit', loadNames);


function loadNames(e) {
    e.preventDefault();

    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    let url = 'https://jsonplaceholder.typicode.com/posts';

    if (origin !== '') {
        // url += `region=${origin}&`;
    }

    if (genre !== '') {
        // url += `gender=${genre}&`;
    }

    if (amount !== '') {
        // url += `amount=${amount}&`;
    }

    console.log(url);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.status === 200) {
            const names = JSON.parse(this.responseText);
            console.log(names);

            let html = '<h2>Generated Titles</h2>';
            html += '<ul class="list">'
            names.forEach(name => {
                html += `
                    <li>${name.title}</li>
                `;
            });

            html += '</ul>'
            document.querySelector('#result').innerHTML = html;
        }
    }

    xhr.send();
}