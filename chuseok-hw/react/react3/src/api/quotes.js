import axiosInstance from ".";

export const quotesAPI = {
  getQuotes: async () => {
    const res = await axiosInstance.get("/quotes");
    return res["quotes"];
  },
};
