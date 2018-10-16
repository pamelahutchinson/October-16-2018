function createNode(element){
    return document.createElement(element);//Creates the type of element passed in the parameteres 
}

function append(parent, el){
    return parent.appendChild(el);//Appends the second parameter(element) to the first one
}

const app = document.getElementById("main")
const list = document.getElementById('coffees');
const COFFEE_URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

let request = new XMLHttpRequest()

request.open('GET',COFFEE_URL, true)
request.onload = function(){
    let data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            data.forEach(order => {
                const 
            })

        }
}

// fetch(url)
//     .then((response)=>response.json()) //Transform the date into JSON
//     .then(function(data){
//         let coffees = data.results; //Get the results 
//         return coffees.map(function(coffee){//Map through the results and for each run the code below
//             let li = createNode('li'), //Create the elements we need
//                 span = createNode('span');
//             span.innerHTML = `${}`
//         })
//     }

// fetch(newCoffee, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ // converting object to string
//         emailAddress: '',
//         coffee: '',
//     })
//     });



