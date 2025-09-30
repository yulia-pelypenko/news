export function addLog(event, data) {
	const container = document.getElementById("auction-logs");
	if (!container) return;

	const wrapper = document.createElement("div");
	wrapper.className =
		"mb-4 p-3 border rounded bg-white dark:bg-gray-800 shadow";

	const title = document.createElement("div");
	title.className = "font-semibold text-blue-600 dark:text-blue-400 mb-1";
	title.textContent = event;

	const body = document.createElement("div");
	body.className =
		"text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-all";
	body.textContent = JSON.stringify(data, null, 2);

	wrapper.appendChild(title);
	wrapper.appendChild(body);
	container.appendChild(wrapper);
}
