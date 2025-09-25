import type { FC, ReactNode } from "react";
import { Footer, Header } from "@/modules/layout/components";
import AdSlot from "@/modules/prebid/components/AdSlot";

type Props = {
	children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col">
			<div className="mx-auto flex w-full max-w-[1280px] bg-gray-100 dark:bg-gray-950 flex-1 flex-col">
				<Header />
				<div className="flex justify-center gap-4 py-4">
					<AdSlot id="add-frame-left" />
					<AdSlot id="add-frame-right" />
				</div>
				<main className="flex-1">{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default MainLayout;
