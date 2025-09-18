import type { FC } from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "@/modules/layout/components";
import { mockedNews } from "../../components/NewsList/mockedNews";

const NewsPage: FC = () => {
	const { id } = useParams<{ id: string }>();
	const newsItem = mockedNews.find((news) => news.id === id);

	if (!newsItem) {
		return (
			<div className="p-6 text-gray-800 dark:text-gray-200">
				Новину не знайдено
			</div>
		);
	}

	return (
		<MainLayout>
			<article className="p-6 bg-white dark:bg-gray-800 rounded shadow transition">
				<img
					src={newsItem.image}
					alt={newsItem.title}
					className="w-full h-60 object-cover rounded"
				/>
				<h1 className="text-2xl font-bold mt-4 text-gray-900 dark:text-gray-100">
					{newsItem.title}
				</h1>
				<p className="mt-2 text-gray-700 dark:text-gray-300">{newsItem.text}</p>
			</article>
		</MainLayout>
	);
};

export default NewsPage;
