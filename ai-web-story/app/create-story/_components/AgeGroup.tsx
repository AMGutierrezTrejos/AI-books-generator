"use client";
import Image from 'next/image';
import React, { useState } from 'react'

function AgeGroup() {
  
    const OptionList = [
        {
          label: "0-2",
          imageUrl: "/02years.jpg",
          isFree: true,
        },
        {
          label: "3-5",
          imageUrl: "/35years.jpg",
          isFree: true,
        },
        {
          label: "5-8",
          imageUrl: "/68years.jpg",
          isFree: true,
        },
      ];
    
      const [selectedOption, setSelectedOption] = useState<string>();
      return (
        <div>
          <label className="font-bold text-4xl text-primary">
            3. Age Group.
          </label>
         
          <div className="grid grid-cols-3  gap-5 mt-3">
            {OptionList.map((item, index) => (
              <div
                className={`relative grayscale hover:grayscale-0 cursor-pointer p-1 ${selectedOption==item.label ? "grayscale-0 border rounded-3xl border-primary" : "grayscale"}`}
                onClick={() => setSelectedOption(item.label)}
              >
                <h2 className="absolute bottom-5 text-2xl text-black text-center w-full font-bold">
                  {item.label}
                </h2>
                <Image
                  src={item.imageUrl}
                  alt={item.label}
                  width={300}
                  height={260}
                  className="object-cover h-[260px] rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      );
}

export default AgeGroup