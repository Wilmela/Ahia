export type CATEGORY_PROPS = {
  name: string;
  image: string;
};

export type ProductParams = {
  userId: string;
  item: {
    name: string;
    imageUrl: string;
    price: string | number;
    condition: string;
    availability: string;
    description: string;
    dealer: string;
    phone: string;
    category: string;
    location: string;
    negotiable: boolean;
  };
  path: string;
};

export type ProductType = {
    _id: string;
    name: string;
    imageUrl: string;
    price: string;
    condition: string;
    description: string;
    dealer: string;
    phone: string;
    category: string;
    location: string;
    negotiable?: boolean;
}

export type CategoryParams = {
  name: string;
  imageUrl: string;
};

export type UserParams = {
  clerkId: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  imgUrl: string;
};
export type UpdateUserParams = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  imgUrl: string;
};
