import React from "react";

function StoryPages({ storyChapter }: any) {
  return (
    <div>
      <h2 className="font-bold text-2xl text-primary">
        {storyChapter?.chapter_title}
      </h2>
      <p className="text-xl p-10 mt-3 rounded-lg bg-slate-100">
        {storyChapter?.chapter_text}
      </p>
    </div>
  );
}

export default StoryPages;
