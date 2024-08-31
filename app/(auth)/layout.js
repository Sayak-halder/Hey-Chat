import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "@components/Provider";
import ToasterContext from "@components/ToasterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Auth Hey Chat",
    description: "Build a nextjs chat app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-purple-1 `}>
                <Provider>
                    <ToasterContext/>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
