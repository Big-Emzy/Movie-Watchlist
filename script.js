
const masterMovieBox = document.getElementById('masterMovie-box')
let movieTray = ''

document.getElementById('search-btn').addEventListener('click', function() {
    
    const searchItem = document.getElementById('search-box')
    fetch(`https://www.omdbapi.com/?s=${searchItem.value}&apikey=21488814&page=50`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => data.Search.forEach(movie => {
            renderMovieDetails(movie.imdbID)
        }  
    )
    
)
searchItem.value = ''
})






// let movieTray = ''
// fetch("https://www.omdbapi.com/?s=kill&apikey=21488814&page=1", {
//     method: 'GET'
// })
//     .then(res => res.json())
//     .then(data => {data.Search.forEach(movie => {
//         renderMovieDetails(movie.imdbID)
//     }
    
// )}

// )


function renderMovieDetails(movieId) {
    
    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=21488814`, {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            movieTray +=  `
                    <div class="each-movies">
                        <div class="movieBanner-box">
                            <img src="${data.Poster}" alt="movie banner" class="movieBanner">
                        </div>
                        <div class="eachMovie-rightSegment">
                            <div class="movie-NameBox">  
                                <h2>${data.Title}</h2>
                                <img src="img/rateIcon.png" alt="rateIcon" class="ratingImage">
                                <p>${data.imdbRating}</p>
                            </div>
                            <div class="movie-property">
                                <div class="movie-minutes">
                                    <p>${data.Runtime}</p>
                                    <p>${data.Genre}</p>
                                </div>
                                <div>
                                    <button class="remove-Btn"><img src="img/removeIcon.png" alt="deleteIcon" class="removeBtn">Watchlist</button>
                                </div>
                            </div>
                            <p class="movie-summery">${data.Plot}</p>    
                        </div>
                    </div>
                        `
           return masterMovieBox.innerHtml = movieTray             
        })
}
