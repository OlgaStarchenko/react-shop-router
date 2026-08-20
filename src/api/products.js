export const getProductsList = async () => {
  const response = await fetch("http://localhost:3004/products");

  if (!response.ok) {
    throw new Error("Ошибка запроса, попробуйте еще раз");
  }

  const productsList = await response.json();
  return productsList;
};

export const getProductById = async (id) => {
  const response = await fetch(`http://localhost:3004/products/${id}`);

  if (!response.ok) {
    throw new Error("Ошибка запроса, попробуйте еще раз");
  }

  const productById = await response.json();
  return productById;
};
