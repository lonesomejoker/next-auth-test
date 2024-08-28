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
    <div className=" mx-auto container px-5 lg:px-28 font-madimi text-[1.4rem] lg:w-[65%]">
      <Link href="/">
        <h1 className=" text-[1.6rem] text-center my-5 text-gray-200">Home</h1>
      </Link>
      <div className=" flex w-full min-h-[28rem]">
        <div className=" bg-white/30 backdrop-blur-md px-8 flex-1 py-4 rounded-bl-[2rem]">
          <form onSubmit={(e) => loggIn(e)} className=" flex flex-col gap-y-2">
            <h1 className=" text-cente">LOGGING NOW!!</h1>
            <label htmlFor="name">Your Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Username"
              required
              className=" rounded-xl px-3 py-2 hover:animate-pulse"
              style={{ outline: "none", border: "none" }}
            />
            <label htmlFor="pss" className=" pt-2">Pass:</label>

            <input id="pss"
              type="password"
              placeholder="Password"
              required
              className=" rounded-xl px-3 py-2 hover:animate-pulse"
              style={{ outline: "none", border: "none" }}
            />
            <button className=" drop-shadow-lg duration-500 hover:translate-y-2 px-3 py-2 bg-emerald-400 lg:w-[40%] mx-auto rounded-tl-lg rounded-br-lg my-5">
              Log In
            </button>
          </form>
        </div>
        <div className=" px-5 lg:px-12 py-6 lg:py-12 drop-shadow-md flex-1 rounded-tr-[2rem]">
          <div
            className="absolute inset-0 z-[1] bg-center rounded-tr-[2rem] bg-cover bg-no-repeat brightness-50"
            style={{
              backgroundImage: `url("https://images.hdqwalls.com/download/abstract-blue-gradient-lines-3d-9o-3840x2160.jpg")`,
            }}
          />
          <div className="relative z-[4] text-[1rem] flex flex-col justify-between h-full text-gray-400">
            <p>Commodo anim ipsum esse labore minim ipsum labore aliqua sit velit sit voluptate laborum. Deserunt veniam Lorem ipsum quis est non nostrud nulla esse. Excepteur enim reprehenderit esse incididunt commodo enim laborum eu Lorem.</p>
            <section className=" flex justify-between items-center ">
            <p className=" flex flex-col hover:translate-x-2 duration-500">Contact<span className=" text-blue-300">9810113806</span></p>
            <section className="hover:translate-x-2 duration-500">
            <p>Email at:</p>
            <a href="mailto:shakestha@gmail.com" className=" text-blue-300 underline">shakestha@gmail.com</a>
            </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
