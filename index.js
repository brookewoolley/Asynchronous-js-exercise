

// // Exercise 1 - simple callback
//
// function greet(callback) {
//   console.log('1')
//   console.log('Hello!');
//   callback();
//   console.log()
// }
//
// greet(function() {
//   console.log('2')
//   console.log('Goodbye!')
// });
//

// // Exercise 2 - callback executed on DOM event

// function alert() {
//   console.log('1')
//   document.getElementById('click-here').addEventListener('click', function() {
//     console.log('3')
//     console.log('This is an alert!')
//   });
//   console.log('2');
// }
//
// alert()


// // Exercise 3 - callback executed on DOM event, with a setTimeout

// function alert() {
//   console.log('1')
//   document.getElementById('click-here').addEventListener('click', function() {
//     console.log('3')
//     setTimeout(function() {
//       console.log('5')
//       console.log('This is an alert!')
//     }, 2000)
//     console.log('4')
//   });
//   console.log('2');
// }
//
// alert()

// // Exercise 4 - callback executed after an API call

function getPeople() {
  console.log('1');
  $.get("https://async-workshops-api.herokuapp.com/people", function(response) {
    console.log('3');
    response.forEach(function(person) {
      console.log(person.name)
    });
    console.log('4');
  });
  console.log('2');
}

getPeople()
