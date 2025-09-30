import { CustomProvider } from "@/store/customProvider";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Libre_Baskerville, Rethink_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/globals.css";

const libre = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const reThink = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "My Landlord Logic Admin Panel",
  description: `Admin panel for My Landlord Logic`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${libre.variable} ${reThink.variable}`}
        suppressHydrationWarning
      >
        <ToastContainer />
        <CustomProvider>
          {/* <SocketProvider> */}
          {children}
          {/* </SocketProvider> */}
        </CustomProvider>
      </body>
    </html>
  );
}
