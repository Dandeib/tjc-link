'use client'

import { useEffect, useState } from "react";

export default function Home() {

  const [links, setLinks] = useState([])

  const getLinks = async () => {
    const response = await fetch('/api/links');
    const linksData = await response.json();
    return linksData;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const linksData = await getLinks();
        setLinks(linksData.links);
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="overflow-hidden">

      <div>
        <div className="bg-redstone h-[400px] w-[100%] blur-[2px]">
          <div className="absolute bg-[#1BE0ED] h-[400px] w-screen bg-opacity-25"></div>
        </div>
        <p className="absolute top-[130px] left-1/2 transform -translate-x-1/2 font-[900] text-[40px] text-center w-[1200px]">DAS SIND ALLE LINKS DIE DU AUF DEM <a className="text-[red] hover:text-red-900" href="https://discord.gg/thejocraft">TJC-DISCORD</a> BENUTZEN KANNST</p>
      </div>

      <div className="w-screen h-[1000px] bg-[#1C2525]">
        
        <div className="relative w-[1400px] grid grid-cols-2 gap-8 top-[70px] left-1/2 transform -translate-x-1/2 ml-[140px]">
          {links.map((link, index) => (
            <div key={index} className="w-[450px] h-[50px] border-l-2 border-t-none border-[red] text-left pl-[20px]">
              <p className="font-[600] text-[30px] mt-[4px]">{link}</p>
            </div>
          ))}
        </div>


      </div>
    </main>
  );
}
