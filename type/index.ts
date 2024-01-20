export type CATEGORY_PROPS = {
  name: string;
  image: string;
};

export type ProductParams = {
  _id: string;
  name: string;
  imageUrl: string;
  price: string | number;
  condition: 'New' | 'Used';
  description: string;
  dealer: string;
  phone: string;
  category: string;
  location: string;
  negotiable: false;
};
