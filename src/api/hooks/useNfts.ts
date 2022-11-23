import { useQuery } from "react-query";
import { useQueryParam } from "use-query-params";
// services
import axios from "services/axios";
// api
import { fetchReportList } from "api";

interface Props {
  timeframe: string;
}

const fetchNfts = async (timeframe: string = "1w") => {
  try {
    let reportList: any[] = [];
    /* Get report list */
    await fetchReportList()
      .then(res => {
        reportList = res?.data?.NSFWList || [];
      })
      .catch(() => {}); // We don't want to catch anything.

    /* Get nfts based on the timeframe */
    const { data } = await axios.get(`/attention/nft-summaries?period=${timeframe}`);
    const dataWithReportTag = data?.map((nft: any) => ({ ...nft, isReport: [...reportList].includes(nft?.id) }));

    return dataWithReportTag;
  } catch (error) {
    return undefined;
  }
};

export function useNfts({ timeframe = "1w" }: Props) {
  const [isReport] = useQueryParam("report");
  return useQuery(`nfts-${timeframe}`, () => fetchNfts(timeframe), {
    staleTime: 60 * 1000 * 5, // 5min cache
    refetchOnWindowFocus: undefined,
    select: data => {
      return isReport ? data : [...data].filter((nft: any) => !nft.isReport);
    }
  });
}
