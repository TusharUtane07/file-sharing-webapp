"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";

const Header = () => {
	const [nav, setNav] = useState<boolean>(false);
	const pathname = usePathname();

	const isActiveLink = (path: string) => pathname === path;

	return (
		<>
			<div className="mx-auto max-w-7xl bg-gray-900 flex justify-between py-6 px-5 sticky left-auto z-20 w-full  top-0">
				<div className="font-semibold text-xl md:text-2xl">
					<Link href={"/"} className="text-indigo-500">
						File Stash
					</Link>
				</div>
				<div className="hidden lg:flex items-center gap-8 font-medium">
					<div>
						<Link
							href={"/"}
							className={isActiveLink("/") ? "text-indigo-600 font-bold" : ""}>
							Home
						</Link>
					</div>
					<div>
						<Link
							href={"/files"}
							className={
								isActiveLink("/files") ? "text-indigo-600 font-bold" : ""
							}>
							Files
						</Link>
					</div>
					<div>
						<Link
							href={"/about"}
							className={
								isActiveLink("/about") ? "text-indigo-600 font-bold" : ""
							}>
							About
						</Link>
					</div>
					<div>
						<Link
							href={"/contact"}
							className={
								isActiveLink("/contact") ? "text-indigo-600 font-bold" : ""
							}>
							Contact
						</Link>
					</div>

					<div>
						<Link
							className="bg-indigo-600 px-5 py-3 rounded-md text-white"
							href={"/login"}>
							Get Started
						</Link>
					</div>
				</div>
				<div
					className="text-xl md:text-2xl cursor-pointer lg:hidden"
					onClick={() => setNav(!nav)}>
					<GiHamburgerMenu />
				</div>
			</div>
			<div
				className={
					nav
						? "fixed top-0 left-0 w-screen h-full bg-white text-black z-30 duration-700"
						: "fixed top-0 left-[-100%] w-[300px] h-full bg-white text-black z-30 duration-700"
				}>
				<div className="flex justify-between mx-6 my-3 md:my-5 md:mx-10">
					<div className="font-semibold text-xl md:text-2xl">File Stash</div>
					<div
						className="text-xl md:text-2xl cursor-pointer mt-1.5"
						onClick={() => setNav(!nav)}>
						<RxCross1 />
					</div>
				</div>

				<div className="flex items-center justify-evenly flex-col gap-8 text-xl font-semibold mt-10 md:text-2xl">
					<div>
						<Link href={"/"} onClick={() => setNav(!nav)}>
							Home
						</Link>
					</div>
					<div>
						<Link href={"/files"} onClick={() => setNav(!nav)}>
							Files
						</Link>
					</div>
					<div>
						<Link href={"/about"} onClick={() => setNav(!nav)}>
							About
						</Link>
					</div>
					<div>
						<Link href={"/contact"} onClick={() => setNav(!nav)}>
							Contact
						</Link>
					</div>

					<div>
						<Link href={"/login"}>Get Started</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
