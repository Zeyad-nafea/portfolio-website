"use client";

import CountUp from "react-countup";

const stats = [
  { num: 3.5, suffix: "+", title: "Current GPA", decimals: 1 },
  { num: 8, suffix: "+", title: "Projects Completed", decimals: 0 },
  { num: 16, suffix: "+", title: "Technologies Mastered", decimals: 0 },
  { num: 4, suffix: "+", title: "Certifications & Competitions", decimals: 0 },
];

const Stats = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Number */}
              <h3 className="text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-md">
                <CountUp
                  end={item.num}
                  duration={2.5}
                  decimals={item.decimals}
                />
                {item.suffix}
              </h3>
              {/* Title */}
              <p className="mt-2 text-base md:text-lg font-medium text-gray-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
