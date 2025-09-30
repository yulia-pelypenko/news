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
			className={`flex justify-center items-center border border-dashed border-gray-400 w-[${width}px] h-[${height}px] overflow-hidden`}
		/>
	);
};

export default AdSlot;
