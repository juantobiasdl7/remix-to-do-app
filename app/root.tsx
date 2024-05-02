import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  LiveReload,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import { type LinksFunction } from '@remix-run/node';
import faviconAssetUrl from './assets/favicon.svg';
import fontStyles from "./styles/font.css";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import './styles/global.css'; 


export const links: LinksFunction = () => {
	return [
		{
			rel: 'icon',
      type: 'image/svg+xml',
			// all files in the public directory are served at the root of the site
			href: faviconAssetUrl,
		},
    {
      rel: 'stylesheet',
      href: fontStyles,
    },
    {
      rel: 'stylesheet',
      href: tailwindStylesheetUrl,
    },
    {
      rel: 'stylesheet',
      href: cssBundleHref,
    }
	].filter(Boolean)
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
