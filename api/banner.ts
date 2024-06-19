export function GET(request: Request) {
  const links = [
    'https://www.bisecthosting.com/partners/custom-banners/cd02548b-be01-4a01-b707-ffcb913f5299.webp',
    'https://www.bisecthosting.com/partners/custom-banners/2b0dc33b-327e-4ae5-8a13-818876f72d8e.webp',
  ];
  const link = links[Math.floor(Math.random() * links.length)];
  return new Response(null, {
    status: 307,
    headers: {
      Location: link,
      'Cache-Control': 'no-cache',
    },
  });
}

export const config = {
  runtime: 'edge',
};
