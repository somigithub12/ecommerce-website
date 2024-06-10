const clothes = [
    'Cardigan',
    'T-shirt',
    'Jacket',
    'Sweater',
    'Shorts',
    'Skirt',
    'Gown',
    'Crop top',
    'Hoodie',
    'Tank Top',
    'coat',
    'singlet',
   'vest',
];

const searchBar = document.getElementById('search-bar');
const resultsContainer = document.getElementById('results');

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const filteredClothes = clothes.filter(item => item.toLowerCase().includes(query));

    displayResults(filteredClothes);
});

function displayResults(items) {
    resultsContainer.innerHTML = '';
    
    if (items.length === 0) {
        resultsContainer.style.display = 'none';
        return;
    }

    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('list-group-item', 'result-item');
        div.textContent = item;
        resultsContainer.appendChild(div);
    });
    // Example usage:
const code = prompt('Enter a 3-character alphanumeric code to search for clothes:');
if (code && code.match(/^[A-Za-z0-9]{3}$/)) {
    searchClothes(code);
} else {
    console.log('Invalid code format. Please enter a 3-character alphanumeric code.');
}

    resultsContainer.style.display = 'block';

    // Set a timeout to hide the results after 5 seconds (5000 milliseconds)
    setTimeout(() => {
        resultsContainer.style.display = 'none';
    }, 5000);
}







