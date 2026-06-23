import { createFileRoute } from "@tanstack/react-router";

import meowletHtml from "../assets/meowlet-landing.html?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meowlet — Magic Kitties Club" },
      {
        name: "description",
        content:
          "Official Telegram Mini App of the Magic Kitties Club ecosystem. Tap, earn, compete.",
      },
      { property: "og:title", content: "Meowlet — Magic Kitties Club" },
      {
        property: "og:description",
        content:
          "Tap, earn and compete with a community that shows up every day.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      srcDoc={meowletHtml}
      title="Meowlet"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
        margin: 0,
        padding: 0,
        display: "block",
      }}
    />
  );
}
