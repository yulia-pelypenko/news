import type { FC, ReactNode } from "react";
import { Footer, Header } from "@/modules/layout/components";

type Props = {
	children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col">
			<div className="mx-auto flex w-full max-w-[1280px] bg-gray-100 dark:bg-gray-950 flex-1 flex-col">
				<Header />
				<div className="flex justify-center gap-4 py-4">
					<iframe
						title="Advertisement slot left"
						id="add-frame-left"
						className="flex justify-center items-center border border-dashed border-gray-400 w-[320px] h-[270px] overflow-hidden"
					/>
					<iframe
						title="Advertisement slot right"
						id="add-frame-right"
						className="flex justify-center items-center border border-dashed border-gray-400 w-[320px] h-[270px] overflow-hidden"
					/>
				</div>
				<main className="flex-1">{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default MainLayout;
