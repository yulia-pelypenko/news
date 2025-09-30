import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/modules/layout/components";
import AdSlot from "@/modules/prebid/components/AdSlot";

const MainLayout = () => {
	return (
		<div className="flex min-h-screen flex-col">
			<div className="mx-auto flex w-full max-w-[1280px] bg-gray-100 dark:bg-gray-950 flex-1 flex-col">
				<Header />
				<div className="flex justify-center gap-4 py-4">
					<AdSlot id="add-frame-left" />
					<AdSlot id="add-frame-right" />
				</div>
				<main className="flex-1">{<Outlet />}</main>
				<Footer />
			</div>
		</div>
	);
};

export default MainLayout;
