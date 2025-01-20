
import "./globals.css";


export const metadata = {
  title: "Detrator Next App Short assignment",
  description: "Responsive frontend using MUI and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
