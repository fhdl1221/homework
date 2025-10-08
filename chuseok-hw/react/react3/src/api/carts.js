import axiosInstance from ".";

export const cartsAPI = {
  getCarts: async () => {
    const res = await axiosInstance.get("/carts");
    return res["carts"];
  },
};
