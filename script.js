function sortNames(order) {
    const input = document.getElementById('namesInput').value;
    const namesArray = input.split('\n').filter(name => name.trim() !== '').map(name => name.trim());
    
    if (order === 'asc') {
        namesArray.sort();
    } else if (order === 'desc') {
        namesArray.sort().reverse();
    }
    
    displaySortedNames(namesArray);
}

function displaySortedNames(namesArray) {
    const sortedNamesElement = document.getElementById('sortedNames');
    sortedNamesElement.textContent = namesArray.map((name, index) => `${index + 1}. ${name}`).join('\n');
    
    // Clear search input when displaying sorted names
    document.getElementById('searchInput').value = '';
}

function searchNames() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const sortedNamesElement = document.getElementById('sortedNames').textContent.split('\n');
    const filteredNames = sortedNamesElement.filter(line => line.toLowerCase().includes(input));

    const displayArea = document.getElementById('sortedNames');
    displayArea.textContent = filteredNames.join('\n') || 'No results found';
}

function copyToClipboard() {
    const sortedNamesElement = document.getElementById('sortedNames').textContent;

    // Create a temporary textarea element to hold the text
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = sortedNamesElement;
    document.body.appendChild(tempTextArea);

    // Select and copy the text
    tempTextArea.select();
    document.execCommand('copy');

    // Remove the temporary textarea element
    document.body.removeChild(tempTextArea);

    // Alert user that the text has been copied
    alert('Sorted list copied to clipboard!');
}
