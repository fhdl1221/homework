import axiosInstance from ".";

export const postsAPI = {
  getPosts: async () => {
    const res = await axiosInstance.get("/posts");
    return res["posts"];
  },
};
