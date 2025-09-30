import type { FC } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "@/modules/common/components";
import { useNews } from "../../hooks/useNews";

const NewsPage: FC = () => {
	const { link } = useParams<{ link: string }>();
	const decodedUrl = link ? decodeURIComponent(link) : "";
	const { data: news, isLoading, error } = useNews(decodedUrl);

	if (isLoading) {
		return <Loader />;
	}

	if (error || !news) {
		return (
			<div className="p-6 text-gray-800 dark:text-gray-200">
				Новину не знайдено
			</div>
		);
	}
	return (
		<article className="p-6 bg-white dark:bg-gray-800 rounded shadow transition">
			<h1 className="text-4xl font-bold my-8 text-gray-900 dark:text-gray-100">
				{news.title}
			</h1>
			<img
				src={news.image}
				alt={news.title}
				loading="lazy"
				className="w-full h-120 object-cover rounded"
			/>
			<div className="mt-4 space-y-4">
				{news.content.map((text, idx) => (
					<p
						key={String(idx)}
						className="text-gray-700 dark:text-gray-300 leading-relaxed"
					>
						{text}
					</p>
				))}
			</div>
		</article>
	);
};

export default NewsPage;
