export interface Ratings {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
}

export interface RequestRating {
  userId: string;
  productId: string;
  rating: number;
  comment: string;
}
