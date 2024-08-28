import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

const Dashboard = () => {
  const router = useRouter();

  const logOut = () => {
    Cookies.remove("loggedin");
    router.push("/");
  };
  
  useEffect(() => {
    const isLoggedIn = Cookies.get('loggedin');
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [router]);
  return (
    <div className=" text-center text-[1.4rem]">
      <Link href="/">
        <nav>
          <h1>Dashboard</h1>
        </nav>
      </Link>
      <div className="">
        <h1 className=" text-gray-100">You Are Logged In!</h1>
        <button
          className="bg- bg-red-600 text-white rounded-tr-xl rounded-bl-xl px-3 py-2 my-10"
          type="submit"
          onClick={() => logOut()}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
