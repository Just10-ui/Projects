const products = [
        {
            id: 14,
            name: "Coca-cola",
            type: "Drinks",
            price: "25.00",
            amount: "1pc"
        },
        {
            id: 12,
            name: "halo-halo",
            type: "Junk Foods",
            price: "1.00",
            amount: "1pc"
        },
        {
            id: 11,
            name: "Ice",
            type: "Ice",
            price: "5.00",
            amount: "1pc"
        }];

const str = 'Coc';
const search = new RegExp(str, 'gi');
const result = products.filter(value => {
  const p = value.name.toLocaleLowerCase();
  if (p.match(search)) {
    return value;
  };
});
console.log(result);