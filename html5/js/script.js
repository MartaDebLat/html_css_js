let number =10;
let number2 = number;

console.log(number,number2);
number2 = 20;
console.log(number,number2);

// typy referencyjne obiekt {}, tablica [] i funkcja ()

let person = {
firstName:'Jan',
lastName:'Kowalski'
};

let newPerson=person; //kopiujemy adres
console.log(person,newPerson);

newPerson.firstName = 'Jakub';
console.log(person,newPerson);

const numbersArray = [1, 2, 3, 4, 5, 6];
console.log(numbersArray[numbersArray.length + 5]);
let myData=null;
console.log(myData);

// Hoisting - zabezpieczanie wartości przed nadpisywaniem 
// console.log(myName)
// var myName = 'Marta';

// console.log(myOtherName)
// //Temporary Dead Zone
// let myOtherName = "Ola";

myFunction();
function myFunction () {
    console.log('Hello world');
}

const myNumber = 10;
// my number = 11;

const peopleArray = [];
peopleArray.push('Marta');
console.log(peopleArray);


console.log(typeof peopleArray);
console.log(typeof{});
console.log(Array.isArray([]));

//zmienne referencyjne
console.log(1==='1');
console.log(1=='1');
console.log({}==={}); //nie poruwnujemy wartości ale adress 
console.log(_.isEqual({},{}));

//sprawdzenie instancji 
console.log([]instanceof Object);

console.log(!!0); // rzutowanie number na boolean
console.log(Boolean(1)); 
console.log(typeof+'1'); //rzutownie string na number

// metoda wywołana na obiekcie, która jest instancją number 
console.log(0.1 + 0.2 === 0.3.toFixed(1));


const loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facere sit impedit laboriosam modi aut, blanditiis dolore, quibusdam corporis odit natus consequatur accusamus placeat laborum id aperiam obcaecati eaque qui';


console.log(loremIpsum.match(/[A-Za-z]+/g).join(' '));

console.log(parseInt('FFFF', 16));
//1111 -> F
//1110 => E
//1101 -> D
//1100 -> C
//.
//.
//0000 -> 0



class Rowerzysta {
    construktor (rower, kask, vMax) {
        this.rower = rower;
        this.kask = kask; 
        this.vMax;
    }

    czyRowerzystaMaKask (){
        console.log(
        //Elvis operator  
        //turnary operator  
        this.kask === true
        ?'Rowerzysta ma kask :)'
        :'rowerzysta nie ma kasku ;(');
    }

    czyRowerzystaJestSzybki () {
        console.log(
        this.vMax > 40?'':'');
        }
    
}

    const rowerzyści = [];
    const rowerzysta1 = new Rowerzysta ('wigry3', true, 35);
    const rowerzysta2 = new Rowerzysta ('wigry4', false, 25);
    const rowerzysta3 = new Rowerzysta ('wigry5', true, 52);
    const rowerzysta4 = new Rowerzysta ('wigry6', false, 41);
    const rowerzysta5 = new Rowerzysta ('wigry7', true, 30);
    const rowerzysta6 = new Rowerzysta ('wigry8', true, 15);
    const rowerzysta7 = new Rowerzysta ('wigry9', true, 22);
    rowerzyści.push(new Rowerzysta ('wigry3', true, 35));
    rowerzyści.push(new Rowerzysta ('wigry4', false, 25));
    rowerzyści.push(new Rowerzysta ('wigry5', true, 52));
    rowerzyści.push(new Rowerzysta ('wigry6', false, 41));
    rowerzyści.push(new Rowerzysta ('wigry7', true, 30));
    rowerzyści.push(new Rowerzysta ('wigry8', true, 15));
    rowerzyści.push(new Rowerzysta ('wigry9', true, 22));


// function test() {} => test = () = {}

rowerzysta1.czyRowerzystaMaKask(); 

console.log(rowerzyści.filter((el, index) => el.kask === true));

const rowerzyściNaZawody = rowerzyści.map((el, index) => {
const rowerzysta = el;
rowerzysta.numerStartowy = index+1
    return rowerzysta;
});
console.log(rowerzyściNaZawody);

const data = new Promise((resolve, reject) => {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(response => resolve(response.json()))
    .catch(error => reject(error))

});

data // data to Promise, który posiada dwie wbudowane metody => then, catch
// .then(dataFromAPI => console.log(dataFromAPI))
.then(dataFromAPI => {     // dane pobrane z API wykorzystujemy do wyświetlenia na stronie 
    const userTask = dataFromAPI.filter((el) => el.userId ===2);  // tworztymy nową tablice, poprzez filtrowanie danych z API. Filtrujemy po polu 'userId' i wartości '2'
    const documentContainer = document.querySelector('#todolist'); // wskazujemy kontener w drzewie HTML (DOM)
    userTask.forEach((el) => {   //pętla foreach wywołana na tablicy z zadaniami dla użytkownika o id==2
        const htmlEL = document.createElement('p');   //tworzymy elementy drzewa HTML (paragraf)
        htmlEL.innerText = el.title; // do naszego paragrafu "wpisujemy" tytuł zadania 
        documentContainer.appendChild(htmlEL);  //dopisujemy nowy node do naszego wcześniej wskazanego kontenera
    })
})
.catch(err => console.log(err))

//wskazujemy kontener
//
