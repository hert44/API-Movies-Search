const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    const searchInput = searchForm.elements.query.value;
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchInput}`);
    console.log(response.data);

});



