import axiosInstance from ".";

export const cartsAPI = {
  getCarts: async (userId) => {
    const res = await axiosInstance.get(`/carts/user/${userId}`);
    return res["carts"];
  },
};
