///////////////////////////////////////
// Lecture: Hoisting

// function calcultateAge(year) {
//     console.log(2019 - year);
// }

// calcultateAge(1993);

// // retirment (1956);
// var retirment = function(year) {
//     console.log(65 - (2019 -year));
// }

// // Variables
// console.log(age);
// var age = 26;

// function foo () {
//     var age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         thrid();
//         console.log(a + b + c);
//     }
// }
// function thrid() {
//     var d ='Jhon';
//     // console.log(c); err not accessible 
//     console.log(a + b);
// }



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

// calcultateAge(1993);
// function calcultateAge(year) {
//     console.log(2019 - year);
//     console.log(this);
// }

var hamza = {
    name: 'Hamza',
    yearOfBirth: 1994,
    calcultateAge: function() {
        console.log(this);
        console.log(2019 - this.yearOfBirth);
        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();
    }
}

hamza.calcultateAge();

var mehdi = {
    name: 'Mehdi',
    yearOfBirth: 1992,
};

mehdi.calcultateAge = hamza.calcultateAge;
mehdi.calcultateAge(); 





