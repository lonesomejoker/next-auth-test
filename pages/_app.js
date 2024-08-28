import React from "react";
import "./global.css";
const MyApp = ({ Component, pageProps }) => {
  return (
    <div
      className=" font-madimi bg-cover bg-center bg-no-repeat h-screen"
      style={{
        backgroundImage:
          "url('https://www.baltana.com/files/wallpapers-16/Digital-Art-Best-4K-Wallpaper-41710.jpg')",
      }}
    >
      <section className=" flex bg-neutral-800 py-5 text-white">
        <header className=" mx-auto text-[1.5rem]">
          Next-14 Authentication
        </header>
      </section>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
