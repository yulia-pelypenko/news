import { authModule } from "./auth";
import type { IModule, IRoute } from "./common/interfaces";
import { newsModule } from "./news";

const modules = [authModule, newsModule];

const mergedModules: IModule = {
	routes: modules.reduce((acc: IRoute[], { routes }) => {
		return routes ? [...acc, ...routes] : acc;
	}, []),
};

export default mergedModules;
