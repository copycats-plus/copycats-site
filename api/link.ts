export function GET(request: Request) {
  const links = ['https://bisecthosting.com/lysine?r=copycats', 'https://bisecthosting.com/Bennyboy1695?r=copycats'];
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
