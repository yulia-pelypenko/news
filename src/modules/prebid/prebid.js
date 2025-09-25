import prebidUrl from "/prebid10.10.0.js?url";
import { events } from "./const";
import { addLog } from "./utils/addLog";
import { injectPrebidScript } from "./utils/injectPrebidScript";

injectPrebidScript(prebidUrl);

const adUnits = [
	{
		code: "add-frame-left",
		mediaTypes: {
			banner: {
				sizes: [[300, 250]],
			},
		},
		bids: [
			{
				bidder: "adtelligent",
				params: { aid: 350975 },
			},
		],
	},
	{
		code: "add-frame-right",
		mediaTypes: {
			banner: {
				sizes: [[300, 250]],
			},
		},
		bids: [
			{
				bidder: "bidmatic",
				params: { source: 886409 },
			},
		],
	},
];

window.pbjs = window.pbjs || {};
window.pbjs.que = window.pbjs.que || [];

window.pbjs.que.push(() => {
	window.pbjs.addAdUnits(adUnits);

	// bidWon приходит только после факта показа креатива.Использовать его для рендера нельзя -
	// на этом этапе объявление уже отрисовано.Поэтому, если повесить рендер на bidWon,
	// он никогда не сработает.
	window.pbjs.onEvent("bidResponse", (bid) => {
		const iframe = document.getElementById(bid.adUnitCode);
		if (iframe) {
			const doc = iframe.contentWindow.document;
			pbjs.renderAd(doc, bid.adId);
		}
	});

	events.forEach((ev) => {
		window.pbjs.onEvent(ev, (data) => {
			addLog(ev, data);
		});
	});

	window.pbjs.requestBids({ timeout: 1000 });
});
