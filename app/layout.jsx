import "@/styles/_global.scss";
import SmoothScroll from "@/components/animations/SmoothScroll";

export const metadata = {
  title: "One Home",
  description: "Furniture Showroom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
