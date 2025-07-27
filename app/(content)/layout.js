import MainHeader from "@/components/main-header";
import "../globals.css";

export const metadata = {
  title: "News Explorer",
  description: "Learn whats happenign worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
