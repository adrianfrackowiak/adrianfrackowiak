import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import tailwind from "./styles/app.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: tailwind },
    {
      rel: "stylesheet",
      href: "https://api.fontshare.com/css?f[]=satoshi@1,2&display=swap",
    },
  ];
}

export const meta: MetaFunction = () => {
  return {
    title:
      "Adrian Frąckowiak - Software Engineer. Frontend Developer. | adrianfrackowiak.com",
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          href="https://api.fontshare.com/css?f[]=satoshi@1,2&display=swap"
          rel="stylesheet"
        ></link>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}
