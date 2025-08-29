import { faker } from '@faker-js/faker';

export const dynamicUser = () => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    price: faker.commerce.price({ min: 10, max: 500, dec: 2, symbol: 'R$' }),
  };
};