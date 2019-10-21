const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
  ];

  const getTotalAmountForProducts = (products) => {
      let totalPrice = 0;
      products.forEach(p => totalPrice += p.price);
      console.log(totalPrice);
      return totalPrice;
 }

 getTotalAmountForProducts(products)


//Test
const batteryBatches = [1, 2, 3, 4, 5, 16];

const countBatteries = (totalAmt, batteryBatch) => totalAmt + batteryBatch;

const totalBatteries = batteryBatches.reduce(countBatteries, 0)
console.log(totalBatteries)

