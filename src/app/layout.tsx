import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "File Stash | File Sharing",
	description: "File Stash is File sharing app built with Nextjs",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="file-sharing.png" type="image/x-icon" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto bg-gray-900 text-gray-50 `}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
