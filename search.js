const items = [
    "Vanilla",
    "Chocolate",
    "Strawberry",
    "Mint",
    "Cream",
    "Butter"
  "Peach"
  "Pops"
];

function search() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const resultsList = document.getElementById('results');
    
    // Clear previous results
    resultsList.innerHTML = '';

    // Filter items and display matches
    const filteredItems = items.filter(item => item.toLowerCase().includes(input));
    
    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        resultsList.appendChild(li);
    });

    // Display 'No results' if nothing is found
    if (filteredItems.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No results found';
        resultsList.appendChild(li);
    }
}
