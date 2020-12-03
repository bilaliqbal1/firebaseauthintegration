function saveData(){
    var name = document.getElementById("name");
    var roll = document.getElementById("roll");

    var student = {
        name : name.value,
        roll : roll.value
    }
    console.log(student);
    firebase.database().ref('student').push(student)
}
// retrive data on page refresh
// function getData(){
//     firebase.database().ref('student/-MEmFmIzVqAGZlGQm_S0').once('value',function(data){
//         console.log(data.val())
//     })
// }
// getData()

// retrive data without page refresh
function getData(){
    firebase.database().ref('student/-MEmFmIzVqAGZlGQm_S0').on('child_added',function(data){
        console.log(data.val())
    })
}
getData()


function removeData(){
    firebase.database().ref('student/-MEmFmIzVqAGZlGQm_S0').remove()
}
removeData()

function editData(){
    firebase.database().ref('student/-MEmFmIzVqAGZlGQm_S0').set({
        key : '-MEmFmIzVqAGZlGQm_S0',
        name : 'bilal',
        roll : 12,
    })
}
editData()


