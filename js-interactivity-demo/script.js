
// make dynamic buttons

let count = 0;

//get html element querySelector
let counter = document.querySelector('#counter')
let plusBtn = document.querySelector('#plus-btn')
let minusBtn = document.querySelector('#minus-btn')
let resetBtn = document.querySelector('#reset-btn')
//create callback
//below

//connect the html element and callback with event listener
plusBtn.addEventListener('click', increment)
minusBtn.addEventListener('click', decrement)
resetBtn.addEventListener('click', '#reset-btn')

//callbacks
let increment = () => {
    count++;
    counter.textContent = count;
    //console.log(count)
}

let decrement = () => {
     // if (count-- >= 0) {}
    count --;
    counter.textContent = count;
    //console.log(count);
   
}

let reset = () => {
    count = 0;
    counter.textContent = count;
    console.log(count)
}

//
//
// create dynamic themes via button

// get html element - body, main, button
let themeBtn = document.querySelectorAll('.theme-buttons')
let body = document.querySelector('body')
let main = document.querySelector('main')
let btns = document.querySelectorAll('button')


// callback
let themeSelector = (eventObject) => {
    let theme = eventObject.target.textContent;
    console.log(eventObject.target)
    body.className = theme;
    main.className = theme
    for (let i = 0; i < btns.length; i++) {
      btns[i].className = theme
}
}


// add event listener

for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener('click', themeSelector)
}

c
