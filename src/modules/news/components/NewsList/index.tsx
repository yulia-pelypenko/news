import type { FC } from "react";
import NewsItem from "../NewsItem";
import { mockedNews } from "./mockedNews";

const NewsList: FC = () => {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{mockedNews.map((item) => (
				<NewsItem key={item.id} news={item} />
			))}
		</ul>
	);
};

export default NewsList;
