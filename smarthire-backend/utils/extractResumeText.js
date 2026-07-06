import fs from "fs";
import mammoth from "mammoth";

import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";


export async function extractResumeText(filePath, extension) {
  let extractedText = "";

  // ============================
  // PDF
  // ============================

  if (extension === "pdf") {
    const data = new Uint8Array(fs.readFileSync(filePath));

    const pdf = await pdfjsLib.getDocument({
      data,
    }).promise;

    let text = "";

    for (let page = 1; page <= pdf.numPages; page++) {
      const currentPage = await pdf.getPage(page);

      const content = await currentPage.getTextContent();

      text +=
        content.items
          .map((item) => item.str)
          .join(" ") + "\n";
    }

    extractedText = text;
  }

  // ============================
  // DOCX
  // ============================

  else if (extension === "docx") {
    const result = await mammoth.extractRawText({
      path: filePath,
    });

    extractedText = result.value;
  }

  else {
    throw new Error("Unsupported resume format.");
  }

  // ============================
  // Cleanup
  // ============================

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  return extractedText
    .replace(/\r/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\t/g, " ")
    .trim();
}