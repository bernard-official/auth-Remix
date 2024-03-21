import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Tunes Auth" },
    { name: "description", content: "Welcome to Remix!, My first Remix Authentication" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl font-bold underline border border-red-600">Welcome to my Debut Remix Authentication</h1>
    </div>
  );
}
