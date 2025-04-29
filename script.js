


// document.getElementById('search-btn').addEventListener('click', function() {
//     const searchItem = document.getElementById('search-box').value
//     console.log(searchItem)
//     fetch("http://www.omdbapi.com/?s=kill&apikey=21488814&page=2", {
//         method: 'GET',
//         mode: 'no-cors'
//     })
//         .then(res => res.json())
//         .then(data => console.log(data.Search))
// })

fetch("http://www.omdbapi.com/?s=kill&apikey=21488814&page=50", {
    method: 'GET',
    mode: 'no-cors'
})
    .then(res => res.json())
    .then(data => console.log(data.Search))