import { faker } from "@faker-js/faker";

function mockUsers(length) {
  const createRowData = (rowIndex) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const gender = faker.person.sex();
    const name = faker.person.fullName({ firstName, lastName, sex: gender });
    const avatar = faker.image.avatar();

    const city = faker.location.city();
    const street = faker.location.street();
    const email = faker.internet.email();
    const UID = faker.location.zipCode();
    const phone = faker.phone.number();
    const amount = faker.finance.amount({ min: 1000, max: 90000 });
    const company = faker.company.name();

    const Year = Math.floor(Math.random() * (2025 - 2000) + 2000);
    const age = Math.floor(Math.random() * 30) + 18;
    const stars = Math.floor(Math.random() * 10000);
    const followers = Math.floor(Math.random() * 10000);
    const rating = 2 + Math.floor(Math.random() * 3);
    const progress = Math.floor(Math.random() * 100);

    return {
      id: rowIndex + 1,
      name,
      firstName,
      lastName,
      avatar,
      city,
      street,
      UID,
      Year,
      email,
      phone,
      gender,
      age,
      stars,
      followers,
      rating,
      progress,
      amount,
      company,
    };
  };

  return Array.from({ length }).map((_, index) => {
    return createRowData(index);
  });
}

export function mockTreeData(options) {
  const { limits, labels, getRowData } = options;
  const depth = limits.length;

  const data = [];
  const mock = (list, parentValue, layer = 0) => {
    const length = limits[layer];

    Array.from({ length }).forEach((_, index) => {
      const value = parentValue
        ? parentValue + "-" + (index + 1)
        : index + 1 + "";
      const children = [];
      const label = Array.isArray(labels) ? labels[layer] : labels;

      let row = {
        label:
          typeof label === "function"
            ? label(layer, value, faker)
            : label + " " + value,
        value,
      };

      if (getRowData) {
        row = {
          ...row,
          ...getRowData(layer, value),
        };
      }

      list.push(row);

      if (layer < depth - 1) {
        row.children = children;
        mock(children, value, layer + 1);
      }
    });
  };

  mock(data);

  return data;
}

export { mockUsers };
