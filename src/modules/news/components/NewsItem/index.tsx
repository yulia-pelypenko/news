import type { FC } from "react";
import { Link } from "react-router-dom";
import { Routes } from "@/config/routes";
import type { INews } from "../../interfaces";

interface Props {
	news: INews;
}

const NewsItem: FC<Props> = ({ news }) => {
	return (
		<li className="border rounded-lg p-4 shadow-sm">
			<img
				src={news.image}
				alt={news.title}
				className="w-full h-40 object-cover rounded"
			/>
			<h2 className="text-lg font-bold mt-2">{news.title}</h2>
			<p className="text-gray-600 text-sm">{news.shortText}</p>
			<Link
				to={`${Routes.News}/${news.id}`}
				className="text-blue-600 hover:underline"
			>
				Детальніше →
			</Link>
		</li>
	);
};

export default NewsItem;
