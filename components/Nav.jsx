"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  return (
    <nav className="w-full flex-between mb-16">
      <Link 
        href="/"
        className="flex gap-2 flex-center"
      >
        <Image
        width={30}
        height={30}
        alt="logo"
        src="/assets/images/logo.svg"
        />
      </Link>
    </nav>
  );
};

export default Nav;
