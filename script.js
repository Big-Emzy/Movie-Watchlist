
const masterMovieBox = document.getElementById('masterMovie-box')
let movieTray = ''

document.getElementById('search-btn').addEventListener('click', function() {
    const searchItem = document.getElementById('search-box').value
    fetch(`http://www.omdbapi.com/?s=${searchItem}&apikey=21488814&page=1`, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => data.Search.forEach(movie => {
                movieTray +=  `
                            <div class="each-movies">
                                <div class="movieBanner-box">
                                    <img src="${movie.Poster}" alt="movie banner" class="movieBanner">
                                </div>
                                <div class="eachMovie-rightSegment">
                                    <div class="movie-NameBox">  
                                        <h2>${movie.Title}</h2>
                                        <img src="img/rateIcon.png" alt="rateIcon" class="ratingImage">
                                        <p>8.0</p>
                                    </div>
                                    <div class="movie-property">
                                        <div class="movie-minutes">
                                            <p>164 min</p>
                                            <p>Action, Drama, Mystery</p>
                                        </div>
                                        <div>
                                            <button class="remove-Btn"><img src="img/removeIcon.png" alt="deleteIcon" class="removeBtn">Watchlist</button>
                                        </div>
                                    </div>
                                    <p class="movie-summery">Young Blade Runner K's discovery of a long-buried 
                                        <span> secret leads him to track down former Blade </span>
                                        <span> Runner Rick Deckard, who's been missin...</span>
                                    </p>    
                                </div>
                            </div>
                `
            return masterMovieBox.innerHTML = movieTray
            
            })
        )
})






// let movieTray = ''
// fetch("http://www.omdbapi.com/?s=kill&apikey=21488814&page=50", {
//     method: 'GET'
// })
//     .then(res => res.json())
//     .then(data => data.Search.forEach(movie => {
//         movieTray +=  `
//     <div class="each-movies">
//         <div class="movieBanner-box">
//             <img src="${movie.Poster}" alt="movie banner" class="movieBanner">
//         </div>
//         <div class="eachMovie-rightSegment">
//             <div class="movie-NameBox">  
//                 <h2>${movie.Title}</h2>
//                 <img src="img/rateIcon.png" alt="rateIcon" class="ratingImage">
//                 <p>8.0</p>
//             </div>
//             <div class="movie-property">
//                 <div class="movie-minutes">
//                     <p>164 min</p>
//                     <p>Action, Drama, Mystery</p>
//                 </div>
//                 <div>
//                     <button class="remove-Btn"><img src="img/removeIcon.png" alt="deleteIcon" class="removeBtn">Watchlist</button>
//                 </div>
//             </div>
//             <p class="movie-summery">Young Blade Runner K's discovery of a long-buried 
//                 <span> secret leads him to track down former Blade </span>
//                 <span> Runner Rick Deckard, who's been missin...</span>
//             </p>    
//         </div>
//     </div>
//         `
//     return console.log(movieTray)
//     }

// )
    
// )

