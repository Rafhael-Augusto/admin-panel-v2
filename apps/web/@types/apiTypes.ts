export type User = {
  name: string;
  email: string;
  role: string;
  status: string;
};

export type Product = {
  name: string;
  category: string;
  stock: string;
  price: string;
  status: string;
};

export type Order = {
  order: string;
  client: { name: string; email: string };
  date: {
    date: string;
    time: string;
  };
  total: number;
  status: string;
};
