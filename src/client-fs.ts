/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FileMinetype } from "./types/files";
import { isClient } from "./utilies";

export type FileOptions = {
	name: string;
	data?: string;
	type?: FileMinetype;
};

type Callback = (error: any) => void;

/**
 * @param {FileOpenInfo} options
 * @param {Callback | undefined} callback
 */
export function downloadFile(options: FileOptions, callback?: Callback): void {
	try {
		const filename = options?.name || "download.txt";
		const filetype = options?.type || "text/plain";
		const filedata = options?.data || "";

		const blob = new Blob([filedata], { type: filetype });
		const link = URL.createObjectURL(blob);
		const anchor = document.createElement("a");
		anchor.href = link;
		anchor.download = filename;
		document.body.appendChild(anchor);
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		isClient &&
			window.requestAnimationFrame(function () {
				URL.revokeObjectURL(link);
				const event = new MouseEvent("click");
				anchor.dispatchEvent(event);
				document.body.removeChild(anchor);
			});

		if (callback) callback(null);
	} catch (error) {
		if (callback) callback(error);
	}
}
