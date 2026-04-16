const products = [
  { name: "Wireless Mouse", price: 450, category: "electronics", inStock: true },
  { name: "Desk Lamp", price: 320, category: "furniture", inStock: false },
  { name: "Keyboard", price: 890, category: "electronics", inStock: true },
  { name: "Office Chair", price: 2500, category: "furniture", inStock: true },
  { name: "USB Cable", price: 120, category: "electronics", inStock: true },
  { name: "Monitor Stand", price: 670, category: "furniture", inStock: false }
];

/**function filterByCategory(category)
{
    for (const categ in category)
    {
        console.log(categ);
    }
}
**/
// Task 1: Filter by category
function filterByCategory(category) 
{
    const filtered = [];
    for (let i = 0; i < products.length; i++) 
    {
        if (products[i].category === category)
        {
            filtered.push(products[i]);
        }
    }
    return filtered;
}


function getInStockProducts()
{
    const inStock = [];
    for(let i = 0 ; i < products.length; i++)
    {
        if (products[i].inStock === true)
        {
            inStock.push(products[i]);
        }
    }
    return inStock;
}

function calculateTotal(productArray)
{
    let sum = 0;
    for(let i = 0 ; i < productArray.length; i++)
    {
        sum = sum + productArray[i].price;
    }
    return sum;
}

const electronics = filterByCategory("electronics");
const inStockElectronics = [];

for (let i = 0; i < electronics.length; i++) 
{
    if (electronics[i].inStock === true) 
    {
        inStockElectronics.push(electronics[i]);
    }
}

console.log("In-stock electronics:", inStockElectronics);

// Total value of all in-stock furniture

const furniture = filterByCategory("furniture");
const inStockFurniture = [];

for (let i = 0; i < furniture.length; i++) 
{
    if (furniture[i].inStock === true) 
    {
        inStockFurniture.push(furniture[i]);
    }
}
const furnitureTotal = calculateTotal(inStockFurniture);
console.log(`Total value of in-stock furniture: R${furnitureTotal}`);
// Count message for in-stock electronics
console.log(`Found ${inStockElectronics.length} in-stock electronics`);