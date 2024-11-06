import "./Main.less"
import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";
import { useEffect, useState } from "preact/hooks";
import { chatService, ConversationDto } from "./ClientService";

export function Main() {
	let [selected, setSelected] = useState<ConversationDto>();
	const handleBack = () => {
		setSelected(undefined);
	};

	return (
		<div class={`Main ${selected ? "right" : "left"}`}>
			<LeftPane onSelect={setSelected} />
			<RightPane conversation={selected} onBack={handleBack} />
		</div>
	);
}
