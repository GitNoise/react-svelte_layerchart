import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            margin: "24px auto",
            width: "100%",
            maxWidth: 600,
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
