export function injectPrebidScript(prebidUrl) {
	const script = document.createElement("script");
	script.src = prebidUrl;
	script.async = true;
	document.head.appendChild(script);
}
