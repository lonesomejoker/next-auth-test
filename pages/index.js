import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

const Home = () => {
  const router = useRouter();

  const loggIn = (e) => {
    e.preventDefault();
    Cookies.set("loggedin", "true");
    router.push("/dashboard");
  };

  return (
    <div className=" mx-auto container px-5 lg:px-28 font-madimi text-[1.4rem] lg:w-[40%]">
      <Link href="/">
          <h1 className=" text-[1.6rem] text-center my-5">Home</h1>
      </Link>
      <div className=" bg-white/30 backdrop-blur-md px-5 py-4 rounded-tr-xl rounded-bl-xl">
        <form onSubmit={(e) => loggIn(e)} className=" flex flex-col gap-y-8">
          <h1 className=" text-center text-violet-500">LOGGING NOW!!</h1>
          <input
            type="text"
            placeholder="Username"
            required
            className=" bg-gray-200 bg-opacity-50 backdrop-blur-lg rounded-lg px-3 py-2"
            style={{ outline: "none", border: "none" }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className=" bg-gray-200 backdrop-blur-lg bg-opacity-50 rounded-lg px-3 py-2"
            style={{ outline: "none", border: "none" }}
          />
          <button className=" px-3 py-2 bg-emerald-400 lg:w-[40%] mx-auto rounded-tl-lg rounded-br-lg my-5">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
