import axiosInstance from ".";

export const productsAPI = {
  getProducts: async () => {
    const res = await axiosInstance.get("/products");
    return res["products"];
  },
};
