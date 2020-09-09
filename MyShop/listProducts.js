var faker = require('faker');
console.log("=========================================");
console.log("Welcome to " + faker.company.companyName());
console.log("=========================================");
for (let i = 0; i < 10; i++) {
    console.log(faker.commerce.product() + " - $" + faker.commerce.price());
}