var faker = require('faker');

var database = { products: [] };

for (var i=1; i<=10; i++) {
  database.products.push({
    id: i,
    name: faker.random.words(),
    price: Math.random()*100,
    quantity: Math.random()*1000+'g'
  });
}

console.log(JSON.stringify(database.products));
