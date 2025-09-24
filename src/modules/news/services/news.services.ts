import { api } from "@/modules/common/api/client";
import type { INews, INewsList } from "../interfaces";

export async function getNewsList(
	url?: string,
	force?: boolean,
): Promise<INewsList> {
	const res = await api.get<INewsList>("/feed", {
		params: { url, force: force ? "1" : undefined },
	});
	return res.data;
}

export async function getNews(url: string): Promise<INews> {
	const res = await api.get<INews>("/article", { params: { url } });
	return res.data;
}
