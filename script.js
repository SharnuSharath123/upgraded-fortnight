document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('loadData');
    
    button.addEventListener('click', () => {
        fetchData();
    });
});

function fetchData() {
    fetch('/data-endpoint')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Process and display the data
        })
        .catch(error => console.error('Error fetching data:', error));
}
