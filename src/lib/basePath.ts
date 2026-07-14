/**
 * Next's `unoptimized` image mode renders a plain <img src>, which does NOT
 * get the `basePath` prefix Next.js otherwise applies automatically (unlike
 * JS/CSS chunks and internal <Link> hrefs). Static assets referenced by a
 * literal path (public/images, public/videos) need it prepended by hand when
 * the site is deployed under a subpath (e.g. GitHub Pages project sites).
 */
export function withBasePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
}
