"use client";

import React, { useState } from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import { Button } from "@nextui-org/button";
import { chatSession } from "@/config/GeminiAi";
import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
import { useRouter } from "next/navigation";
// @ts-ignore
import uuid4 from "uuid4";
import CustomLoader from "./_components/CustomLoader";
import axios from "axios";
import { url } from "inspector";

const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  /**
   *  used to add data to form
   * @param output AI OUTPUT
   * @returns
   */

  const onHandleUserSelection = (data: fieldData) => {
    console.log(data);
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));

    console.log(formData);
  };

  const GenerateStory = async () => {
    setLoading(true);
    const FINAL_PROMPT = CREATE_STORY_PROMPT?.replace(
      "{ageGroup}",
      formData?.ageGroup ?? ""
    )
      .replace("{storyType}", formData?.storyType ?? "")
      .replace("{storySubject}", formData?.storySubject ?? "")
      .replace("{imageStyle}", formData?.imageStyle ?? "");
    //Generate AI story
    try {
      console.log(FINAL_PROMPT);
      const result = await chatSession.sendMessage(FINAL_PROMPT);

      const story = JSON.parse(result?.response.text());
      const imageResp = await axios.post("/api/generate-image", {
        prompt:
          "Add text with title:" +
          story?.story_cover?.title +
          " in bold text for book cover, " +
          story?.story_cover?.image_prompt,
      });
      const AiImageUrl = imageResp?.data?.imageUrl;

      const imageResult = await axios.post("/api/save-image", {
        url: AiImageUrl,
      });
      const FirebaseStorageImageUrl = imageResult.data.imageUrl;

      const resp: any = await SaveInDB(
        result?.response.text(),
        FirebaseStorageImageUrl
      );

      console.log(resp);
      router?.replace('view-story/'+resp[0].storyId)


      // console.log(imageResp?.data);
      // console.log(result?.response.text());

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }

    //Save AI story in DB

    //Generate Image
  };

  const SaveInDB = async (output: string, imageUrl: string) => {
    const recordId = uuid4();
    setLoading(true);
    try {
      const result = await db
        .insert(StoryData)
        .values({
          storyId: recordId,
          storySubject: formData?.storySubject,
          storyType: formData?.storyType,
          ageGroup: formData?.ageGroup,
          imageStyle: formData?.imageStyle,
          output: JSON.parse(output),
          coverImage: imageUrl
        })
        .returning({ storyId: StoryData?.storyId });
      setLoading(false);
      return result;
    } catch (e) {
      setLoading(false);
    }
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
        <Button
          color="primary"
          disabled={loading}
          className="p-10 text-2xl"
          onClick={GenerateStory}
        >
          Generate AI Story
        </Button>
      </div>
      <CustomLoader isLoading={loading} />
    </div>
  );
}

export default CreateStory;
