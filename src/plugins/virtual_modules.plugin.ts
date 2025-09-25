import { loadEnv, type Plugin } from "vite";

export default function virtualModules(): Plugin {
	const env = loadEnv("", process.cwd(), "");
	const modules = (env.VITE_MODULES || "").split(",");

	return {
		name: "virtual-modules",
		resolveId(id) {
			if (id === "virtual:plugins") return id;
			return null;
		},
		load(id) {
			if (id === "virtual:plugins") {
				return modules
					.map((m) => `import '/src/modules/${m}/${m}';`)
					.join("\n");
			}
			return null;
		},
	};
}
