import { defineStore } from "pinia";
import type { CatsListItem, FavouriteListItem } from "@/interface/cats";

const HEADER = {
  "Content-Type": "application/json",
  "x-api-key":
    "live_TMXnNkQaULDdQ3lrCyAyNVIyxHYY8hrFCssYRNv3hGSoZYSlBupFRQ0MZckRIYG6",
};

export const useStore = defineStore("storeId", {
  state: () => {
    return {
      cats: [] as CatsListItem[],
      favouriteList: [] as FavouriteListItem[],
      isActive: false as Boolean,
      isLoading: false as Boolean,
      paginationCount: 0 as Number,
      limit: 15 as Number,
      page: 0 as Number,
    };
  },
  actions: {
    async getCatsList(pageNumber = 1) {
      try {
        this.isLoading = true;
        this.cats = [];
        const fetchCats = await fetch(
          `https://api.thecatapi.com/v1/images/search/?limit=15&page=${pageNumber}`,
          {
            method: "GET",
            headers: HEADER,
            redirect: "follow",
          }
        );
        this.page = pageNumber;
        this.paginationCount = Number(
          fetchCats.headers.get("pagination-count")
        );
        const response = await fetchCats.json();
        this.cats = response;
      } catch (error) {
        alert(error);
      } finally {
        this.isLoading = false;
      }
    },
    async createFavouritePicture(id: string) {
      try {
        this.isLoading = true;

        return await fetch("https://api.thecatapi.com/v1/favourites", {
          method: "POST",
          headers: HEADER,
          body: JSON.stringify({
            image_id: id,
          }),
        });
      } catch (error) {
        alert(error);
      } finally {
        this.isLoading = false;
      }
    },
    async getAllFavouriteItem() {
      try {
        this.isLoading = true;
        this.favouriteList = [];
        const fetchCats = await fetch(
          "https://api.thecatapi.com/v1/favourites",
          {
            method: "GET",
            headers: HEADER,
            redirect: "follow",
          }
        );
        const response = await fetchCats.json();
        this.favouriteList = response;
      } catch (error) {
        alert(error);
      } finally {
        this.isLoading = false;
      }
    },
    async deleteFavouriteItem(favouriteId: number) {
      try {
        this.isLoading = true;
        const fetchCats = await fetch(
          `https://api.thecatapi.com/v1/favourites/${favouriteId}`,
          {
            method: "DELETE",
            headers: HEADER,
          }
        );
        this.favouriteList = this.favouriteList.filter(
          (item: FavouriteListItem) => item.id !== favouriteId
        );
      } catch (error) {
        alert(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
