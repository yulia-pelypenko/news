import { useQuery } from "@tanstack/react-query";
import type { INews } from "../interfaces";
import { getNews } from "../services/news.services";

export function useNews(url: string) {
	return useQuery<INews, Error>({
		queryKey: ["news", url],
		queryFn: () => getNews(url),
	});
}
