export interface INewsItem {
	title: string;
	summary: string;
	link: string;
	image: string;
}

export interface INewsList {
	id: string;
	url: string;
	title: string | null;
	items: INewsItem[];
}

export interface INews {
	url: string;
	title: string;
	content: string[];
	image: string;
}
