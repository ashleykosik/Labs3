console.log(`hello world`) 

let form = document.querySelector('form')
let message = document.querySelector('#message')

function addMovie (event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')    
    

    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    
    movieTitle.addEventListener('click', crossOffMovie)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    let list = document.querySelector('ul')
    list.appendChild(movie)
    inputField = ''

}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

form.addEventListener('submit', addMovie)


function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
       message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
}
}

