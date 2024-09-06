type PDFoptions = {
  width?: number;
  height?: number;
  top?: number;
  left?: number;
};

/**
 * Export html or string to pdf
 */
export default function exportToPdf(
  name: string,
  content = "content",
  options?: PDFoptions
): boolean {
  const width = options?.width || 800;
  const height = options?.height || 650;
  const top = options?.top || 100;
  const left = options?.left || 150;
  const mywin = globalThis.open(
    "",
    "PRINT",
    `height=${height},width=${width},top=,${top}left=${left}`
  );
  mywin?.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${name}</title>
    </head>
    <body>
        ${content}
    </body>
    </html>`);
  mywin?.focus(); // necessary for IE >= 10*/
  mywin?.print();
  // mywin.close();
  mywin?.document.close(); // necessary for IE >= 10
  return true;
}

export function exportToDocs(name: string, content = "content"): boolean {
  const header =
    "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
    "xmlns:w='urn:schemas-microsoft-com:office:word' " +
    "xmlns='http://www.w3.org/TR/REC-html40'>" +
    "<head><meta charset='utf-8'><title>" +
    name +
    "</title></head><body>";
  const footer = "</body></html>";
  const sourceHTML = header + content + footer;

  const source =
    "data:application/vnd.ms-word;charset=utf-8," +
    encodeURIComponent(sourceHTML);
  const fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = name + ".doc";
  fileDownload.click();
  document.body.removeChild(fileDownload);
  return true;
}
