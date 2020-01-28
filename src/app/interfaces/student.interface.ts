export interface Student {
  id: string | number;
  name: string;
  lastName: string;
  age: number;
  adress?: {
    country: string;
    city: string;
    street?: string;
    home?: string;
  };
}
