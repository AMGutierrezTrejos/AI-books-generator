/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "create kids story on description for 5-8 years kids, educational story, and all images in paper cut style: story of boy and magic school, give me 5 chapters, with detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "story_cover": {\n    "image_prompt": "A paper cut style illustration of a boy with wide, curious eyes standing in front of a grand, colorful castle that seems to float in the clouds. The castle is made of paper cut shapes, and its windows are glowing with warm light. The boy is holding a book in one hand, and a wand in the other. The background is a starry night sky.",\n    "title": "The Boy Who Found Magic School"\n  },\n  "chapters": [\n    {\n      "chapter_title": "A Curious Boy",\n      "chapter_text": "Toby was a curious boy. He loved exploring the woods behind his house, collecting shiny pebbles and talking to the birds. One day, while wandering deeper than usual, he stumbled upon a clearing. In the center of the clearing stood a magnificent, but oddly familiar, castle made entirely of colorful paper.",\n      "image_prompt": "A paper cut image of Toby, a small boy with brown hair and blue eyes, standing in a sunny clearing surrounded by trees. In the center of the clearing is a large, brightly colored paper castle with windows that are glowing with warm light. The castle is surrounded by a swirling, paper-cut cloud."\n    },\n    {\n      "chapter_title": "The Magic Door",\n      "chapter_text": "Toby approached the castle cautiously. As he got closer, he noticed a small door made of paper cut butterflies. The butterflies seemed to flutter and whisper as if inviting him in. He pushed the door open, and found himself in a hallway full of sparkling paper cut stars and twinkling paper cut fireflies.",\n      "image_prompt": "A paper cut image of Toby reaching out to open a paper cut door made of butterflies. The door leads into a hallway lined with sparkling paper cut stars and twinkling paper cut fireflies. The hallway is brightly lit, and the air is filled with a sense of magic."\n    },\n    {\n      "chapter_title": "Welcome to Magic School",\n      "chapter_text": "Toby found himself in a huge hall filled with paper cut students, each more fantastical than the last. Some had wings, some had fur, and some even had scales! A kind paper cut owl with a wise smile greeted him. \\"Welcome to Magic School, young Toby. You have been chosen for a very special reason.\\" ",\n      "image_prompt": "A paper cut image of Toby standing in a large, bustling hall. The hall is full of students from all different backgrounds, all unique and magical, including a dragon with shimmering scales, a unicorn with a sparkling horn, and a mermaid with shimmering hair.  A wise-looking paper cut owl stands beside Toby, welcoming him to the school."\n    },\n    {\n      "chapter_title": "Learning the Magic",\n      "chapter_text": "Toby spent his days learning amazing things. He learned to make paper cut flowers bloom, to make paper cut animals talk, and to fly on paper cut clouds. He made new friends, a fluffy paper cut rabbit named Cotton and a mischievous paper cut squirrel named Nutsy, who always got into trouble.",\n      "image_prompt": "A paper cut image of Toby learning magic in the school. He is surrounded by colorful paper cut objects: flowers blooming, animals talking, and clouds flying. He is smiling as he practices his magic with his friends, Cotton the paper cut rabbit and Nutsy the paper cut squirrel."\n    },\n    {\n      "chapter_title": "The Magic Within",\n      "chapter_text": "As Toby learned more, he discovered that the real magic wasn\'t in the spells or the paper cut objects, but in the kindness, courage, and imagination that resided within himself. He learned that magic is everywhere, in the rustling leaves, the singing birds, and the wonder in his own heart. ",\n      "image_prompt": "A paper cut image of Toby standing in the middle of a sunny clearing, looking out at the world with a sense of wonder. He is surrounded by paper cut birds, flowers, and trees. His eyes are filled with light, symbolizing the magic he has discovered within himself. "\n    }\n  ]\n}\n```\n\nI\'ve now included the `chapter_text` field within each chapter object to hold the story\'s text. \n\nI\'m still under development, but I\'m getting better at understanding your requests. Please feel free to provide more examples and I\'ll do my best to learn and adapt!\n',
        },
      ],
    },
  ],
});
