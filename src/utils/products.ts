import { faker } from "@faker-js/faker";

// Product type definition
export type TProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
};

// Generate a single product
const generateProduct = (): TProduct => ({
  id: faker.string.uuid(), // String ID
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price({ min: 10, max: 500, dec: 2, symbol: "$" }),
  category: faker.commerce.department(),
});

// Generate a list of products
const generateProducts = (count: number): TProduct[] =>
  Array.from({ length: count }, () => generateProduct());

export const productsList = generateProducts(75);
