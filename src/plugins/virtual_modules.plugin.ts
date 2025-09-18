import type { Plugin } from "vite";

export default function virtualModules(): Plugin {
	const modules = ["auth", "news", "common"];

	return {
		name: "virtual-modules",
		resolveId(id) {
			if (id === "virtual:plugins") return id;
			return null;
		},
		load(id) {
			if (id === "virtual:plugins") {
				return modules.map((m) => `import "@/modules/${m}";`).join("\n");
			}
			return null;
		},
	};
}
