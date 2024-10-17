import { defineStore } from "pinia";
import type { CatsListItem, FavouriteListItem } from "@/interface/cats";

const HEADER = {
  "Content-Type": "application/json",
  "x-api-key":
    "live_TMXnNkQaULDdQ3lrCyAyNVIyxHYY8hrFCssYRNv3hGSoZYSlBupFRQ0MZckRIYG6",
};

export const useStore = defineStore("storeId", {
  state: () => ({
    cats: [] as CatsListItem[],
    favouriteList: [] as FavouriteListItem[],
    isLoading: false as Boolean,
    isLoadingMoreData: false as Boolean,
    currentPage: 1 as Number,
    itemsPerPage: 20 as Number,
    totalPages: 0 as Number,
    paginationCount: 0 as Number,
    favId: [] as Array<Number>,
  }),

  actions: {
    async fetchCats(page = this.currentPage) {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search/?limit=${this.itemsPerPage}&page=${page}`,
        { method: "GET", headers: HEADER }
      );
      this.paginationCount = Number(response.headers.get("pagination-count"));
      return response.json();
    },

    async loadMoreCatsList() {
      this.currentPage++;
      this.isLoadingMoreData = true;
      try {
        const response = await this.fetchCats();
        this.cats.push(...response);
      } catch (error) {
        alert(error);
      } finally {
        this.isLoadingMoreData = false;
      }
    },

    async getCatsList() {
      this.isLoading = true;
      this.cats = [];
      try {
        const response = await this.fetchCats();
        this.totalPages = Math.ceil(this.paginationCount / this.itemsPerPage);
        this.cats = response.map((item) => ({ ...item, like: false }));
      } catch (error) {
        alert(error);
      } finally {
        this.isLoading = false;
      }
    },

    async createFavouritePicture(imageId: string, like: boolean | undefined) {
      try {
        const indexOf = this.cats.findIndex((item) => item.id === imageId);
        if (!like) {
          const fetchFavourite = await fetch(
            "https://api.thecatapi.com/v1/favourites",
            {
              method: "POST",
              headers: HEADER,
              body: JSON.stringify({ image_id: imageId }),
            }
          );
          const response = await fetchFavourite.json();
          this.cats[indexOf].like = true;
          this.cats[indexOf].favId = response.id;
        } else {
          this.deleteFavouriteItem(imageId, true);
        }
      } catch (error) {
        alert(error);
      }
    },

    async getAllFavouriteItems() {
      this.isLoading = true;
      try {
        const fetchFavourit = await fetch(
          "https://api.thecatapi.com/v1/favourites",
          { method: "GET", headers: HEADER }
        );
        const response = await fetchFavourit.json();
        this.favouriteList = response;
      } catch (error) {
        alert(error);
      } finally {
        this.isLoading = false;
      }
    },

    async deleteFavouriteItem(favouriteId: number | string, useFavId = false) {
      const indexOfCat = this.cats.findIndex((cat) => cat.id === favouriteId);
      const idToDelete =
        useFavId && indexOfCat !== -1
          ? this.cats[indexOfCat].favId
          : favouriteId;

      try {
        await fetch(`https://api.thecatapi.com/v1/favourites/${idToDelete}`, {
          method: "DELETE",
          headers: HEADER,
        });

        this.favouriteList = this.favouriteList.filter(
          (item) => item.id !== idToDelete
        );
        if (useFavId && indexOfCat !== -1) this.cats[indexOfCat].like = false;
      } catch (error) {
        alert(error);
      }
    },
  },
});
