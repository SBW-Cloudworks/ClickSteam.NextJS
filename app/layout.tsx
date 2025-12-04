import "./globals.css";
import "@aws-amplify/ui-react/styles.css";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/AuthContext";
import { ClickstreamProvider } from "@/contexts/ClickstreamProvider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <AuthProvider>
          <Suspense fallback={null}>
            <ClickstreamProvider>
              {children}
            </ClickstreamProvider>
          </Suspense>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#000000",
                color: "#fff",
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
