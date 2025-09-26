import type { IModule } from "./common/interfaces";

const enabledModules = (import.meta.env.VITE_MODULES || "")
	.split(",")
	.map((moduleName: string) => moduleName.trim())
	.filter(Boolean);

export const modules: IModule[] = [];

for (const name of enabledModules) {
	try {
		const module = await import(`./${name}/index.ts`);
		if (module?.default) {
			modules.push(module.default);
		}
	} catch {
		console.warn(
			`[registry] Module "${name}" not found at ./src/modules/${name}/index.module.ts`,
		);
	}
}

export const mergedModule: IModule = {
	routes: modules.flatMap((m) => m.routes ?? []),
};

export default mergedModule;
