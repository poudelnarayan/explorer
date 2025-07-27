import "../globals.css";

export const metadata = {
  title: "News Explorer",
  description: "Learn whats happenign worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
