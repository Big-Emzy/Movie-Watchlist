const pageNav = document.getElementById('page-navBtn')
const previousBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

//checks if there is local storage with the page reloads
const checklocalStorage = !localStorage ? 
                            localStorage.setItem('movieSaved', JSON.stringify([])) : 
                            JSON.parse(localStorage.getItem('movieSaved'))


//fetch data from the omdb api 
let movieTray = ''
let searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', function() {
    fetchDatafromApi(0)
    document.getElementById('exploring-errorMsg').style.display = 'none'
    pageNav.style.display = 'flex'
    previousBtn.disabled = true

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
                if (!checklocalStorage.some(movies => movies.imdbID === selectedMovieId)) {
                    checklocalStorage.unshift(data)
                    localStorage.setItem('movieSaved', JSON.stringify(checklocalStorage))
                }
            }
        )        
    }
})

//fetch data from api with the previous and next button




let pageNumber = 1
nextBtn.addEventListener('click', function() {
    fetchDatafromApi(pageNumber)
    previousBtn.disabled = false
    pageForPrevious = pageNumber++
    pageForPrevious++
})





function fetchDatafromApi(page) {
    movieTray = ''
    const searchItem = document.getElementById('search-box')
    const cleanSearchItem = searchItem.value.trim()
    page++
    fetch(`https://www.omdbapi.com/?s=${cleanSearchItem}&apikey=21488814&page=${page}`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => data.Search.forEach(movie => {
            renderMovieDetails(movie.imdbID)
        }  
    )
    
    )
    
}




previousBtn.addEventListener('click', function() {
    movieTray = ''
    const searchItem = document.getElementById('search-box')
    const cleanSearchItem = searchItem.value.trim()
    pageForPrevious--
    fetch(`https://www.omdbapi.com/?s=${cleanSearchItem}&apikey=21488814&page=${pageForPrevious}`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => data.Search.forEach(movie => {
            renderMovieDetails(movie.imdbID)
        }  
    )
    
    )
    console.log(pageForPrevious)
    if (pageForPrevious === 1) {
        previousBtn.disabled = true
    }

})

