const order = {};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}
if (!order?.customer?.address.city) {  //Avrei anche potuto aggiungere ? dopo address, ma non fa differenza in questo caso o sbaglio?
  console.log('City is required 2');
}