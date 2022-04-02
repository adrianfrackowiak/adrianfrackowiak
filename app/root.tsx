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
import satoshi from "./styles/satoshi.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: tailwind },
    { rel: "stylesheet", href: satoshi },
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
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col w-full overflow-x-hidden">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
