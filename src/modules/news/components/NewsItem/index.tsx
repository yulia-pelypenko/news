import type { FC } from "react";
import { Link } from "react-router-dom";
import { Routes } from "@/config/routes";
import type { INews } from "../../interfaces";

interface Props {
	news: INews;
}

const NewsItem: FC<Props> = ({ news }) => {
	return (
		<li className="border rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 transition">
			<img
				src={news.image}
				alt={news.title}
				className="w-full h-40 object-cover rounded"
			/>
			<h2 className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
				{news.title}
			</h2>
			<p className="text-gray-600 dark:text-gray-400 text-sm">
				{news.shortText}
			</p>
			<Link
				to={`${Routes.News}/${news.id}`}
				className="text-blue-600 dark:text-blue-400 hover:underline"
			>
				Детальніше →
			</Link>
		</li>
	);
};

export default NewsItem;
