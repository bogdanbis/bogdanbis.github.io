import type { Metadata } from "next";
import './assets/style.scss';

export const metadata: Metadata = {
    title: "Bogdan Negoita",
    description: "Full Stack Software Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
