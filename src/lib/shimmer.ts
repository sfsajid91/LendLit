import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#64748b" offset="20%" />
      <stop stop-color="#465161" offset="50%" />
      <stop stop-color="#64748b" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#64748b" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str);

const shimmerPlaceholder = (w: number, h: number) => {
    const imgData = `svg+xml;base64,${toBase64(shimmer(w, h))}`;
    return `data:image/${imgData}` as PlaceholderValue;
};

export default shimmerPlaceholder;
