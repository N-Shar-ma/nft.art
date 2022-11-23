import { useQuery } from "react-query";
import axios from "services/axios";

const fetchReport = async () => {
  try {
    const { data } = await axios.get(`/getNSFWList`, {
      baseURL: process.env.REACT_APP_API_URL
    });
    const reportList = data?.NSFWList || [];
    return reportList;
  } catch (error) {
    return undefined;
  }
};

export function useReport() {
  return useQuery(`report-list`, fetchReport, {
    staleTime: 60 * 1000 * 60, // 1hr cache, since the nft details does not change.
    refetchOnWindowFocus: undefined
  });
}
