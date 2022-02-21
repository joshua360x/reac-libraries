


export function averCreditCardNum(arr) {
  //average credit card number per country

  const keys = Object.keys(arr[0]);

  const columns = keys.map((key) => {
    return {
      key: key,
      card: key.map((num) => num),
    };
  });
  return columns;
}
