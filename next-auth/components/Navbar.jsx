"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <nav className="bg-black fixed  p-4">
            <div className="container mx-auto">
                <ul className="flex justify-between h-screen flex-col">
                    <div className="one">
                        <li className="mx-4 mt-5">
                            <Link href="/" className="text-white font-bold">
                                Home
                            </Link>
                        </li>
                        <li className="mx-4 mt-5">
                            <Link href="/dashboard" className="text-white font-bold">
                                Dashboard
                            </Link>
                        </li>
                    </div>
                    <div className="auth">
                        <>
                            <li className="mx-4 mt-5">
                                <Link href="/login" className="text-white font-bold">
                                    Login
                                </Link>
                            </li>
                            <li className="mx-4 mb-[2rem]">
                                <Link href="/register" className="text-white font-bold">
                                    Register
                                </Link>
                            </li>
                        </>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;