import React from "react";
import "./global.css";
const MyApp = ({ Component, pageProps }) => {
  return (
    <div
      className=" font-madimi bg-cover bg-center bg-no-repeat h-screen brightness-75"
      style={{
        backgroundImage:
          "url('https://images.hdqwalls.com/download/snowy-house-in-mountains-5k-x7-3840x2160.jpg')",
      }}
    >
      <section className=" flex bg-neutral-900 py-5 text-white">
        <header className=" mx-auto text-[1.5rem]">
          Next-14 Authentication
        </header>
      </section>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
