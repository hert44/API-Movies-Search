const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    searchResultsData.innerHTML = "";

    const searchInput = searchForm.elements.query.value;
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchInput}`);
    const allData = response.data; /*data[0].show.image.medium  .name .score*/
    let currentSearchText = document.querySelector('#currentSearchText');
    currentSearchText.innerHTML = `Search results for "${searchInput}":`;

    for (let i = 0; i < allData.length && i < 10; i++) {
        const individualData = allData[i];
        const currentSearchDataUl = document.querySelector('#searchResultsData');

        let tempDataDiv = document.createElement("div");
        let tempDataImage = document.createElement("img");
        if(individualData.show.image === null){
            tempDataImage.src = "./notfound.png";
        }else{
            tempDataImage.src = individualData.show.image.medium;
        }
        let tempDataTitle = document.createElement("h3");
        tempDataTitle.innerHTML = individualData.show.name;
        let tempDataScore = document.createElement("p");
        tempDataScore.innerHTML = `Rating: ${(individualData.score*10).toFixed(1)} / 10`;
        let tempDataLink = document.createElement("a");
        tempDataLink.href = `https://www.google.com/search?q=${tempDataTitle.innerHTML}+where+to+watch`
        tempDataLink.target = "_blank";

        currentSearchDataUl.appendChild(tempDataDiv);
        tempDataLink.appendChild(tempDataImage);
        tempDataLink.appendChild(tempDataTitle);

        tempDataDiv.appendChild(tempDataLink);
        tempDataDiv.appendChild(tempDataScore);
        
        
        /* console.log(individualData.show.image.medium);
        console.log(individualData.show.name);
        console.log(individualData.score); */
    }
});



