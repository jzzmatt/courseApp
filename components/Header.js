import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className='p-5 bg-red-500 text-white flex justify-between'>
      <Link href='/'>Home</Link>
      <Link href='/newjob'>new job</Link>
      <Link href='/login'>login</Link>
      <Link href='/logout'>logout</Link>
    </nav>
  );
};

export default Header;
