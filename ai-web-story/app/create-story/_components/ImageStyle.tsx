import Image from "next/image";
import React, { useState } from "react";
import { OptionField } from "./StoryType";

function ImageStyle({ userSelection }: any) {
  const OptionList = [
    {
      label: "Pixel Art",
      imageUrl: "/pixelStyle.jpg",
      isFree: true,
    },
    {
      label: "Comic Art",
      imageUrl: "/comicStyle.jpg",
      isFree: true,
    },
    {
      label: "3D Art",
      imageUrl: "/3dArt.jpg",
      isFree: true,
    },
    {
        label: "Water Story",
        imageUrl: "/waterStyle.jpg",
        isFree: true,
      },
      {
        label: "Paper Style",
        imageUrl: "/paperStyle.jpg",
        isFree: true,
      },
  ];

  const [selectedOption, setSelectedOption] = useState<string>();

  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({ fieldValue: item?.label, fieldName: "imageStyle" });
  };

  return (
    <div>
      <label className="font-bold text-4xl text-primary">
        4. Background style of your story.
      </label>

      <div className="grid grid-cols-3  gap-5 mt-3">
        {OptionList.map((item, index) => (
          <div
            className={`relative grayscale hover:grayscale-0 cursor-pointer p-1 ${
              selectedOption == item.label
                ? "grayscale-0 border rounded-3xl border-primary"
                : "grayscale"
            }`}
            onClick={() => onUserSelect(item)}
          >
            <h2 className="absolute bottom-3 text-2xl text-black text-center w-full font-bold">
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

export default ImageStyle;
