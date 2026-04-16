//of course its a comment

/**
 * this is a comment
 * that spans multiple lines
 */

//good comment - Ticket prices are halved for under 16 per venue policy
//code

//console.log("Hello from main.js");

//alert("hello");

//1. Variables and assignment
//declaring = const, let 

let availableTickets = 200;

//2. Data Types
//numbers
const ticketPrice = 850;
const serviceFee = 500;
//strings
const eventName = "bloom music festival";
//booleans
const isSoldOut = false;
//null
let selectedSeat = null; //intentionally empty

//object
const event =
{
    name: "Bloom Music Festival",
    venue: "MSG",
    ticketPrice: 850,
    isSoldOut: false,
};

//arrays
//const attendees = ["älice", "bob", "carol"];
//


//3. Strings and interpolation
//template literals
const newMessage = `Welcome to ${eventName}. Ticket cost ${ticketPrice}`;

//4. Operators and Expression

const totalCost = (ticketPrice + serviceFee); //addition
const discount = ticketPrice - 50; //subtraction
const groupPrice = ticketPrice * 4; //multiplication
const pricePerHead = groupPrice / 4; //division
const remainder = 200 % 3; //modulo. remainder after division

//comparison operators
ticketPrice > 500; //true
ticketPrice < 500; //false
availableTickets >= 200; //true
availableTickets <= 100; //false

ticketPrice === 850; //true
//"5" === 5; //false
//5 === 5; //true

//logical operators
//const canEnter = !isSoldOut && isallAgesEvent;


//5. Control Flow

//conditionals

if(availableTickets > 50)
{
    console.log("Good avalibility");
}
else if (availableTickets > 0)
{
    console.log("Hurry");
}
else
{
    console.log("sold out");
}

const userBudget = 500;

if(userBudget >= ticketPrice && !isSoldOut)
{
    console.log("purchase");
}
else
{
    console.log("afford or sold out");
}


//6. loops

//for loop

for (let i = 0; i < 5; i++)
{
    console.log(`Processing tickeg number ${i + 1}`);
}

//while loop

let ticketLeft = 5;

while (ticketLeft > 0)
{
    console.log(`selling a ticket. ${ticketLeft - 1} remaining`);
    ticketLeft--; 
}

//for... of loop

const genres = ["Electronic", "jazz", "hip hop", "indie"];

for(const genre of genres)
{
    console.log(genre);
}

//7. Functions

//
function greetAttendee(name)
{
    console.log(`Welcome to ${event.name}, ${name}`);
}

greetAttendee("Alice");

//return a value

function calcTotal(price, quantity)
{
    const subtotal = price * quantity;
    const fee = subtotal * 0.05;
    return subtotal + fee;
}

const orderTotal = calcTotal(event.ticketPrice, 3 );
console.log(orderTotal);


//returning multiple values

function getEventSummary()
{
     return {
        name: event.name,
        available: availableTickets,
        total: calcTotal(event.ticketPrice, 1),
     };
}

const summary = getEventSummary();
console.log(summary);

//functions are values

const describe = function (eventObj)
{
    return `${eventObj.name} at ${eventObj.venue}`;

};

console.log(describe(event));

//arrow syntax


const described = eventObj =>
{
    return `${eventObj.name} at ${eventObj.venue}`;

};

console.log(describe(event));


//Funtions

//1.functional declaration
//function calculateTotal(price, quantity){}

//2.function expressions
//const calculateTotal = function(price , quantity)

//3.arrow syntax
const calculateTotal = (price, quantity) =>
{
    const subtotal = price * quantity;
    const fee = subtotal * 0.05;
    return subtotal + fee;
};


//Parameters, arguments,  return
const calculateDiscount = (price, percentage) =>
{
    //price and percentage are parameters
    return price * (1 - percentage);
};

calculateDiscount(850, 10); //these are arguments


const logWelcome = (name) =>
{
    console.log(`Welcome ${name}`);
    //no return statement
};

console.log(logWelcome("Andre"));

const disc = calculateDiscount(850, 10);
const totalValue = calculateTotal(disc, 10);



//Arrays as Ordered/structured Data

const attendees = ["Alice", "carol", "bob"];
console.log(attendees[0]); //alice
console.log(attendees.length); //3

attendees.push("David"); //push is a method, a funtion that belongs to an object
console.log(attendees.length);//4

attendees.pop();



//Objects as structured data
const ticket =
{
    holderName: "Alice",
    seatNumber: "A12",
    price: 850,
    isVIP: true,
};

console.log(ticket.holderName);//dot notation
console.log(ticket.eventName);//undefined, does not exist in the object

//Array of object (critical)
// const tickets = 
// [
//     {},
//     {},
//     {},
// ]

//naming and readability


//Array Methods
const tickets = 
[
    {holderName: "Alice", seatNumber: "A12", price: 850, isVIP: true},
    {holderName: "bob", seatNumber: "B4", price: 850, isVIP: false},
    {holderName: "carol", seatNumber: "A13", price: 850, isVIP: true},
    {holderName: "david", seatNumber: "C7", price: 850, isVIP: false},
    {holderName: "eve", seatNumber: "A14", price: 850, isVIP: true},    
];

//.map() - does something and get back a result

//give me ticket holder names
// const names = [];
// for(const ticket of tickets)
// {
//     names.push(ticket.holderName);
// }
// console.log(names);

// const names = ticket.map(function (ticket)
// {
//     return ticket.holderName;
// });

const names = ticket.map((ticket) => ticket.holderName);

//add a service fee to every ticket price
const totals = ticket.map((ticket) =>
{
    const fee = ticket.price * 0.05;
    return ticket.price + fee; 
});


// array method 2 -  .filter()

//only vip tickets
// const vipTickets = [];
// for(const ticket of tickets)
// {
//     if (ticket.isVIP)
//     {
//         vipTickets.push(ticket);
//     }
// }

const vipTickets = tickets.filter((ticket) => ticket.isVIP);

//GET all non vip tickets that are in section A

const sectionARegular = tickets.filter((ticket) => 
{
    return !ticket.isVIP && ticket.seatNumber.startsWith("A");
});

//Exercise: combine map and filter
//get names of all vip ticket holder


const vipNames = tickets
    .filter((ticket) => ticket.isVIP)
    .map((ticket) => ticket.holderName);


// const vipNames = [];

// for (const ticket of tickets)
// {
//     if(ticket.isVIP)
//     {
//         vipNames.push(ticket.holderName);
//     }
// }

//Array method 3 -  reduce()

//get total revenue for all ticket sales 

// let total = 0;
// for (const ticket of tickets)
// {
//     total += ticket.price;
// }

// const total = tickets.reduce((sum, ticket) => 
// {
//     return sum + ticket.price;
// },0 );

// tickets.reduce(somethng, 0)

const total = tickets.reduce((sum, ticket) => sum + ticket.price, 0);


//Task: get count of vip and non vip tickets

const counts = tickets.reduce((acc, ticket) => 
    {
        if(ticket.isVIP)
        {
            acc.vip = acc.vip + 1;
        }
        else
        {
            acc.regular += 1;
        }
        return acc;
    }, {vip:0 , regular: 0});


//Practice Example

//get an array of all the seat numbers

const seatNumbers = tickets.map((ticket) => ticket.seatNumber);

//get all tickets not vip

const notVip = tickets.filter((ticket) =>  !ticket.isVIP);

//GET seat numbers of all vip tickets

const vipSeatNumber = tickets
    .filter((ticket) => ticket.isVIP)
    .map((ticket) => ticket.seatNumber);

//count the total number of tickets 

const ticketcount = tickets.reduce((total, ticket) =>
{
    total++;
}, 0);

