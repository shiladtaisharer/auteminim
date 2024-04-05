interface Address {
  suite: string;
}

const address: Address = {
  suite: "Apt. 556"
};

function displaySuite(address: Address): void {
  console.log(`The suite number is: ${address.suite}`);
}

displaySuite(address);
