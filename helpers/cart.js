export const cartGet = async (userId) => {
  const response = await fetch(
    `https://wines-db.herokuapp.com/cart?userid=${userId}&state=activas`
  );
  const data = await response.json();
  return data.products;
};
