"use client";

import React from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";

export interface fieldData {
  fieldName: string;
  fieldValue: string;
}

function CreateStory() {
  const onHandleUserSelection = (data: fieldData) => {
    console.log(data);
  };

  return (
    <div className="p-10 md:px-20 lg:px-40">
      <h2 className="font-extrabold text-[70px] text-primary text-center">
        Create AI Story
      </h2>
      <p className="text-2xl text-primary text-center">
        Unleash your child's imagination by creating magical stories with the
        help of AI. A fun and interactive way for moms and kids to bond and
        spark creativity!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        {/* Story Subjetc */}

        <StorySubjectInput userSelection={onHandleUserSelection} />

        {/* Story Type */}

        <StoryType />

        {/* Age Group */}
        <AgeGroup />
        {/* Image Style */}
        <ImageStyle />
      </div>
    </div>
  );
}

export default CreateStory;
