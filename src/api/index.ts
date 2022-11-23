import axios from "services/axios";

export const voteAsReport = async (nftId: string) => {
  return await axios.post(
    `/voteNSFWContent`,
    {
      NFTId: nftId
    },
    {
      baseURL: process.env.REACT_APP_API_URL
    }
  );
};

export const fetchReportList = async () => {
  return await axios.get(`/getNSFWList`, {
    baseURL: process.env.REACT_APP_API_URL
  });
};
