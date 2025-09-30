import type { FC } from "react";

type AdSlotProps = {
	id: string;
	width?: number;
	height?: number;
};

const AdSlot: FC<AdSlotProps> = ({ id, width = 320, height = 270 }) => {
	return (
		<iframe
			title={`Advertisement slot ${id}`}
			id={id}
			className={`border border-dashed border-gray-400 overflow-hidden w-[${width}px] h-[${height}px]`}
		/>
	);
};

export default AdSlot;
