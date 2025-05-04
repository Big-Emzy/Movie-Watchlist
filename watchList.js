let renderPlaylist = ''
const masterWatchListBox = document.getElementById('masterWatchList-box')

const retrievedData = JSON.parse(localStorage.getItem('movieSaved'))
retrievedData.forEach(savedMovie => {
    renderPlaylist += `
            <div class="each-movies">
                <div class="movieBanner-box">
                    <img src="${savedMovie.Poster}" alt="movie banner" class="movieBanner">
                </div>
                <div class="eachMovie-rightSegment">
                    <div class="movie-NameBox">  
                        <h2>${savedMovie.Title}</h2>
                        <img src="img/rateIcon.png" alt="rateIcon" class="ratingImage">
                        <p>${savedMovie.imdbRating}</p>
                    </div>
                    <div class="movie-property">
                        <div class="movie-minutes">
                            <p>${savedMovie.Runtime}</p>
                            <p>${savedMovie.Genre}</p>
                        </div>
                        <div class="AddButton" id="${savedMovie.imdbID}">
                            <button class="remove-Btn"><img src="img/removeIcon.png" alt="deleteIcon" class="removeBtn">Watchlist</button>
                        </div>
                    </div>
                    <p class="movie-summery">${savedMovie.Plot}</p>    
                </div>
            </div>
    ` 
return masterWatchListBox.innerHTML = renderPlaylist
})