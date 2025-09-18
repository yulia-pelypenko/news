import type { FC } from "react";
import { MainLayout } from "@/modules/layout/components";
import NewsList from "../../components/NewsList";

const NewsListPage: FC = () => {
	return (
		<MainLayout>
			<section className="p-6">
				<h1 className="text-2xl font-bold mb-4">Новини</h1>
				<NewsList />
			</section>
		</MainLayout>
	);
};

export default NewsListPage;
