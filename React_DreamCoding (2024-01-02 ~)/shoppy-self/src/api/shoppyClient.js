import axios from "axios";

export default class ShoppyClient {
  async loadproducts() {
    return axios.get("/json/products.json").then((res) => res.data.products);
  }
  async search(productId) {
    return axios.get("/json/products.json").then((res) => {
      return res.data.products.filter((product) => product.id === productId)[0];
    });
  }
  async wishlist(uid) {
    return axios
      .get("/json/wishlists.json")
      .then(
        (res) =>
          res.data.wishlists.filter((wishlist) => wishlist.uid === uid)[0]
            .wishlist
      );
  }
  async addProduct(productInfo) {
    return axios
      .post("/api/products.json", productInfo)
      .then((res) => res.data);
  }
}
