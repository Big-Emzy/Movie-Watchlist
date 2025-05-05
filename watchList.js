//Rending the selected save moves on localStorage
let savedData = []
const masterWatchListBox = document.getElementById('masterWatchList-box')

const retrievedData = JSON.parse(localStorage.getItem('movieSaved'))
    savedData = retrievedData.map((savedMovie, index) => {
        return  `
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
                        <div class="AddButton" id=${index}>
                            <button class="remove-Btn"><img src="img/removeIcon.png" alt="deleteIcon" class="removeBtn">Remove</button>
                        </div>
                    </div>
                    <p class="movie-summery">${savedMovie.Plot}</p>    
                </div>
            </div>
    ` 
}).join(' ')

masterWatchListBox.innerHTML = savedData


//MOVIE DELETION
masterWatchListBox.addEventListener('click',function(e) {
        if (e.target.classList.contains('remove-Btn')) {
            retrievedData.splice(e.target.parentElement.id, 1)
            localStorage.setItem('movieSaved', JSON.stringify(retrievedData))
            window.location.reload()
        }
    
})