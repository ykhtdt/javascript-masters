console.log("Hello World");

const fruit = prompt('Which fruit would you like to buy?', 'apple');

const market = {
  [fruit]: 500,
};

alert(market.apple);