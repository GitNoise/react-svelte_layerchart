import "../styles/globals.css";

import { StoreProvider } from "../statemanagement/stores";

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
          <StoreProvider>{children}</StoreProvider>
        </div>
      </body>
    </html>
  );
}
