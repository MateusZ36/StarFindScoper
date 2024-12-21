import * as a1lib from "alt1";
import "./index.html";
import "./appconfig.json";
import "./icon.png";
import DialogReader from "alt1/dialog";

var output = document.getElementById("output");


export function readCapture() {
	const diagboxcapture = a1lib.captureHoldFullRs();
	const diagReader = new DialogReader();
	diagReader.find(diagboxcapture);
	const checked = diagReader.checkDialog(diagboxcapture);
	const dialog = diagReader.readDialog(diagboxcapture, checked);

	// TODO: read the dialog, process it, send it to the server

	console.log(dialog);
	// To fetch current world
	// alt1.currentworld

}

if (window.alt1) {
	alt1.identifyAppUrl("./appconfig.json");
} else {
	let addappurl = `alt1://addapp/${new URL("./appconfig.json", document.location.href).href}`;
	output.insertAdjacentHTML("beforeend", `
		Alt1 not detected, click <a href='${addappurl}'>here</a> to add this app to Alt1
	`);
}

output.insertAdjacentHTML("beforeend", `
	<div onclick='StarFindScoper.readCapture()'>Click to capture if on alt1</div>`
);
