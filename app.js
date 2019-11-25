const resultsElement = document.getElementById('results');

function search(input) {
    const apiKey = 'KJRMEI6A4vMVZp1Rdzn4h9BcKWciiSR6';
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${input}`;

    fetch(path)
        // Handles response
        .then((res) => {
            return res.json();
        })
        // Data that is loaded
        .then((json) => {
            let resultsHTML = '';

            json.data.forEach((obj) => {
                const { url, height, width } = obj.images.fixed_width;

                resultsHTML += `
                <img src="${url}" 
                class="item"
                width="${width}" 
                height="${height} 
                alt="${obj.title}">
                </img>`;
            });

            resultsElement.innerHTML = resultsHTML;
        })
        .catch((err) => {
            console.log(`Failed to load: ${err.message}`);
        });
}

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = searchInput.value;
    search(input);
});
