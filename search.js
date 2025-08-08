let searchInputEl = document.getElementById('searchInput');
let searchResultsEl = document.getElementById('searchResults');
let spinnerEl = document.getElementById('spinner');
searchInputEl.addEventListener("keydown", searchWikipedia);

function createAndAppendSearchResults(result) {
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add('result-item');
    searchInputEl.appendChild(resultItemEl);

    let {
        title,
        link,
        description
    } = result;
    let titleEl = document.createElement('a');
    titleEl.href = link;
    titleEl.blank = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    let titleBreakEl = document.createElement('br');
    resultItemEl.appendChild(titleBreakEl);

    let urlEl = document.createElement('a');
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    urlEl.classList.add("result-url");
    resultItemEl.appendChild(urlEl);

    let lineBreakEl = document.createElement('br');
    resultItemEl.appendChild(lineBreakEl);

    let descriptionEl = document.createElement('p');
    descriptionEl.textContent = description;
    descriptionEl.classList.add('link-description');
    resultItemEl.appendChild(descriptionEl);

    searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
    for (let result of searchResults) {
        createAndAppendSearchResults(result);
        spinnerEl.classList.add('d-none');
    }

}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        searchResultsEl.textContent = " ";
        spinnerEl.classList.remove('d-none');
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }


}
