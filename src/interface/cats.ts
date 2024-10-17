export interface CatsListItem {
  breeds: Array<string | number | boolean>;
  height: Number;
  id: string;
  url: string;
  width: number;
  like?: boolean;
  favId?: number;
}
export interface FavouriteListItem {
  created_at: string;
  id: number;
  image: { id: string; url: string };
  image_id: string;
  sub_id: null | string;
  user_id: string;
}
