import type { FC } from "react";
import { Loader } from "@/modules/common/components";
import { useNewsList } from "../../hooks/useNewsList";
import NewsItem from "../NewsItem";

const NewsList: FC = () => {
	const { data, isLoading, error } = useNewsList();

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <p className="text-center text-red-500 py-6">Новини не знайдено</p>;
	}

	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{data?.items.map((item) => (
				<NewsItem key={item.link} news={item} />
			))}
		</ul>
	);
};

export default NewsList;
