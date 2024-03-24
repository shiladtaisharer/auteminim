
const bcs = new BCS();

const encodedValue = bcs.encode({
  address: '0x0000000000000000000000000000000000000000',
  value: 100,
});

const decodedValue = bcs.decode(encodedValue);

console.log(decodedValue);

