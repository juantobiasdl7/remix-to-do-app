import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  LiveReload,
} from "@remix-run/react";
import { type LinksFunction } from '@remix-run/node'

export const links: LinksFunction = () => {
	return [
		{
			rel: 'icon',
      type: 'image/svg+xml',
			// all files in the public directory are served at the root of the site
			href: '/favicon.svg',
		},
	]
}

export default function App() {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body>
      <p>Hello, world!</p>
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
  );
}
