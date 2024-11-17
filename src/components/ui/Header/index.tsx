"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const isActiveLink = (path: string) => {
        return pathname === path ? 'text-white' : '';
    };

    const navItems = [
        { name: 'COMPONENTS', path: '/' },
        { name: 'SSR', path: '/ssr' },
        { name: 'CSR', path: '/csr' },
    ];

    return (
        <Navbar className={"bg-gray-800"} maxWidth={"2xl"}>
            <NavbarBrand className={"max-sm:hidden"}>
                <Link className={"font-bold text-inherit "} href={"/"}>
                    NEXT
                </Link>
            </NavbarBrand>
            <NavbarContent className="text-white/80 sm:flex gap-4 max-sm:w-full max-sm:items-center" justify="center">
                {navItems.map(({ name, path }) => (
                    <NavbarItem key={path} className={isActiveLink(path)}>
                        <Link className={"hover:text-white duration-300"} href={path}>
                            {name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    );
};

export default Header;
