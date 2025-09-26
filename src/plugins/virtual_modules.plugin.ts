import fs from "node:fs";
import { loadEnv, type Plugin } from "vite";

export default function virtualModules(): Plugin {
	const env = loadEnv("", process.cwd(), "");
	const modules = (env.VITE_MODULES || "")
		.split(",")
		.map((m) => m.trim())
		.filter(Boolean);

	return {
		name: "virtual-modules",
		resolveId(id) {
			if (id === "virtual:plugins") return id;
			return null;
		},
		load(id) {
			if (id === "virtual:plugins") {
				return modules
					.filter(
						(m) =>
							fs.existsSync(`src/modules/${m}/${m}.ts`) ||
							fs.existsSync(`src/modules/${m}/${m}.js`),
					)
					.map((m) => `import '/src/modules/${m}/${m}';`)
					.join("\n");
			}
			return null;
		},
	};
}
