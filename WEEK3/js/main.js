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
const attendees = ["älice", "bob", "carol"];
//console.log(attendees[0]);


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