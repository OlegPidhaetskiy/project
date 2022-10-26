



// answers[0] = prompt("What is your name?", "");
// answers[1] = prompt("What is your surname?", "");
// answers[2] = prompt("How years old?", "");
// let answers = [];

// let numberOfLilms = prompt("Сколько фильмов Вы уже посмотрели?", "");

// let personalMovieDB = {
//         count: numberOfLilms,
//         movies: {},
//         actors:{},
//         genres: [],
//         privat: false
//     };

//     let a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", ""),
//           c = prompt("Один из последних просмотренных фильмов?", ""),
//           d = prompt("На сколько оцените его?", "");

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;

//     console.log(personalMovieDB);

// if(4 == 9) {
//     console.log("Ok");
// } else {
//     console.log("Error");
// };

// const num = 50;

// if (num<49){

// }
// const btn = document.querySelector('button');

// btn.onclick = function(){
//     alert('Click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });
// btn.addEventListener('click', () => {
//     alert('Second click');
// });
    // btn.addEventListener('click', (event) => {
    //     console.log(event.target);
    //     event.target.remove();
    // });
    const btn = document.querySelector('button');
    overlay = document.querySelector('.overlay');

    let i = 0;
    const deleteElement = (e) => {
        console.log(e.currentTarget);
        console.log(e.type);
        // i++;
        // if(i == 1){
        //     btn.addEventListener('click', deleteElement);
        // }
    };

    btn.addEventListener('click', deleteElement);
    overlay.addEventListener('click', deleteElement);
    

