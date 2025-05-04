//checks if there is local storage with the page reloads
const checksessionStorage = !sessionStorage ? 
                            sessionStorage.setItem('movieSaved', JSON.stringify([])) : 
                            JSON.parse(sessionStorage.getItem('movieSaved'))


//fetch data from the omdb api 
let movieTray = ''
let searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click', function() {
    const searchItem = document.getElementById('search-box')
    fetch(`https://www.omdbapi.com/?s=${searchItem.value}&apikey=21488814&page=1`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => data.Search.forEach(movie => {
            renderMovieDetails(movie.imdbID)
        }  
    )
    
)
    searchItem.value = ''
    document.getElementById('exploring-errorMsg').style.display = 'none'   
})



const masterMovieBox = document.getElementById('masterMovie-box')
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
                                <div class="AddButton" id="${data.imdbID}">
                                    <button class="remove-Btn"><img src="img/add-icon.png" alt="deleteIcon" class="removeBtn">Watchlist</button>
                                </div>
                            </div>
                            <p class="movie-summery">${data.Plot}</p>    
                        </div>
                    </div>
                        `
         return masterMovieBox.innerHTML = movieTray  
        }      
    )
  
}

//handles the movie selection and stores it to local storagg(and it makes sure movies are not added twice)

document.addEventListener('click', function(e) {
    const selectedMovieId = e.target.parentElement.id
    if (e.target.parentElement.classList.contains('AddButton')) {
        fetch(`https://www.omdbapi.com/?i=${selectedMovieId}&apikey=21488814`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                if (!checksessionStorage.some(movies => movies.imdbID === selectedMovieId)) {
                    checksessionStorage.unshift(data)
                    sessionStorage.setItem('movieSaved', JSON.stringify(checksessionStorage))
                }
            }
        )        
    }
})

