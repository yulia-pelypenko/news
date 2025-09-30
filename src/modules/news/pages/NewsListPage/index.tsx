import type { FC } from "react";
import NewsList from "../../components/NewsList";

const NewsListPage: FC = () => {
	return (
		<div>
			<section className="p-6">
				<h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
					Новини
				</h1>
				<NewsList />
			</section>
		</div>
	);
};

export default NewsListPage;
