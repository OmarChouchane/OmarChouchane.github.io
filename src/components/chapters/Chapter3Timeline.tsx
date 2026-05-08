import React from "react";
import FadeInSection from "../FadeInSection";
import { Heart } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Love at first sight",
    title: "Seeing you for the first time",
    description:
      "Saw you walking by and felt something very strange and intense.",
    icon: "💘",
  },
  {
    date: "Our First Interactions",
    title: "Laughing Together",
    description:
      "Our first moments were always in a group, sharing laughs and easy conversation.",
    icon: "😊",
  },
  {
    date: "Getting Closer",
    title: "Sharing Thoughts",
    description:
      "We grew closer by sharing our thoughts, talking about our lives, and enjoying more moments together.",
    icon: "💬",
  },
  {
    date: "Starting as Friends",
    title: "Exploring Together",
    description:
      "We began as friends, and every run, beach walk, museum visit, sunset in the fields, padel match, and shared adventure slowly wrote our story closer together.",
    icon: "🌅",
  },
  {
    date: "The Confession",
    title: "I Love You",
    description:
      "The moment I told you I loved you and wanted you to be mine, everything became real in the sweetest way.",
    icon: "❤️",
  },
  {
    date: "The Present",
    title: "Still Becoming",
    description:
      "Now we move through this season side by side, steady and tender, still writing our story with every shared glance, every quiet comfort, and every day we choose each other again.",
    icon: "✨",
  },
  {
    date: "The Future",
    title: "Always You",
    description:
      "May our days stretch into many beautiful years, filled with more love, more light, and the kind of forever that always feels like you.",
    icon: "🌙",
  },
];

const Chapter3Timeline: React.FC = () => {
  return (
    <div className="chapter-section bg-gradient-to-b from-[#1a181d] to-love-dark">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-playfair mb-16 text-center glow-effect">
          Our Love Timeline
        </h2>
      </FadeInSection>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-love opacity-50"></div>

          {timelineEvents.map((event, index) => (
            <FadeInSection key={index} delay={index * 200} className="mb-20">
              <div
                className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                >
                  <div className="mb-2">
                    <span className="inline-block bg-love/20 text-love-soft px-3 py-1 rounded-full text-sm">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-playfair mb-2">
                    {event.title}
                  </h3>
                  <p className="text-white/70">{event.description}</p>
                </div>

                {/* Center icon */}
                <div className="w-2/12 flex justify-center items-center relative">
                  <div className="w-12 h-12 flex items-center justify-center bg-love rounded-full z-10">
                    <span className="text-lg">{event.icon}</span>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </div>
            </FadeInSection>
          ))}

          {/* Final heart at the bottom of the timeline */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="rounded-full p-2 bg-love flex items-center justify-center">
              <Heart fill="white" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter3Timeline;
