import { useQuery } from "@tanstack/react-query";
import type { INewsList } from "../interfaces";
import { getNewsList } from "../services/news.services";

export function useNewsList(url?: string, force?: boolean) {
	return useQuery<INewsList, Error>({
		queryKey: ["newsList", url, force],
		queryFn: () => getNewsList(url, force),
	});
}
