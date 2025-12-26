"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      className="min-h-screen text-slate-100 flex flex-col items-center pt-32 px-6
    "
    >
      {/* Heading */}
      <h1
        className="text-3xl md:text-4xl font-bold mb-12
        animate-fade-in-down"
      >
        <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
          Generate
        </span>{" "}
        Your Short URL
      </h1>

      {/* Card */}
      <div
        className="w-full max-w-xl flex flex-col gap-6
        bg-slate-900/80 backdrop-blur-md
        p-8 rounded-2xl
        border border-cyan-500/20
        shadow-xl shadow-cyan-500/10
        transition-all duration-300
        hover:shadow-cyan-500/20 hover:border-cyan-400/40"
      >
        {/* URL Input */}
        <input
          className="w-full px-4 py-3 rounded-lg
          bg-slate-950 border border-cyan-500/20
          text-slate-200 placeholder-slate-500
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-cyan-400/50
          focus:border-cyan-400"
          value={url}
          type="text"
          placeholder="Enter your long URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />

        {/* Short URL Input */}
        <input
          className="w-full px-4 py-3 rounded-lg
          bg-slate-950 border border-cyan-500/20
          text-slate-200 placeholder-slate-500
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-cyan-400/50
          focus:border-cyan-400"
          value={shorturl}
          type="text"
          placeholder="Enter preferred keyword"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />

        {/* Button */}
        <button
          className="mt-4 px-6 py-3 rounded-lg font-semibold
          bg-cyan-500 text-slate-900
          transition-all duration-200
          hover:bg-cyan-400 hover:scale-[1.02]
          active:scale-[0.98]
          shadow-md shadow-cyan-500/30
          hover:shadow-cyan-500/50"
          onClick={generate}
        >
          Generate
        </button>
      </div>

      {/* Result */}
      {generated && (
        <code
          className="mt-10 px-5 py-3 rounded-lg
          bg-slate-900 border border-cyan-500/30
          text-cyan-400
          animate-fade-in-up
          shadow-md shadow-cyan-500/20"
        >
          <span className="text-slate-300 mr-2">Shortened URL:</span>
          <Link
            href={generated}
            target="_blank"
            className="underline hover:text-cyan-300 transition"
          >
            {generated}
          </Link>
        </code>
      )}
    </div>
  );
};

export default Page;
