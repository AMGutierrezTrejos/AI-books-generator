"use client";

import React, { useState } from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import { Button } from "@nextui-org/button";

export interface fieldData {
  fieldName: string;
  fieldValue: string;
}

export interface formDataType {
  storySubject: string;
  storyType: string;
  ageGroup: string;
  imageStyle: string;
}

function CreateStory() {
  const [formData, setFormData] = useState<formDataType>();
  const onHandleUserSelection = (data: fieldData) => {
    console.log(data);
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));

    console.log(formData);
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

        <StoryType userSelection={onHandleUserSelection} />

        {/* Age Group */}
        <AgeGroup userSelection={onHandleUserSelection} />
        {/* Image Style */}
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>

      <div className="flex justify-end mt-10">
        <Button color="primary" className="p-10 text-2xl">
          Generate AI Story
        </Button>
      </div>
    </div>
  );
}

export default CreateStory;
