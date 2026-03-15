const KODCHASAN_WOFF2_URL =
    "https://fonts.gstatic.com/s/kodchasan/v20/1cX0aUPOAJv9sG4I-DJeM1SQhuCp.woff2";

let cachedFontStyles: string | null = null;

async function fetchFontAsBase64(url: string): Promise<string> {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch font: ${url}`);
    const buffer = await res.arrayBuffer();
    return Buffer.from(buffer).toString("base64");
}

export async function getEmbeddedFontStyles(): Promise<string> {
    if (cachedFontStyles) return cachedFontStyles;

    const kodchasanBase64 = await fetchFontAsBase64(KODCHASAN_WOFF2_URL);

    cachedFontStyles = `
@font-face {
  font-family: 'Kodchasan';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(data:font/woff2;base64,${kodchasanBase64}) format('woff2');
}
`;
    return cachedFontStyles;
}
