import React from 'react';
import Image from 'next/image';

interface ValueProps {
  title: string;
  description: string;
}

const values: ValueProps[] = [
  {
    title: 'Honesty',
    description: 'We are honest with ourselves, even if it means saying ‘no’ to something very lucrative.',
  },
  {
    title: 'Integrity',
    description: 'It is important to have a strong sense of right and wrong. Always stay true to your conscience.',
  },
  {
    title: 'Quality',
    description: 'Quality is what we are known for, and it will always be our yardstick.',
  },
  {
    title: 'Responsibility',
    description: 'Red tape can be cumbersome. We trust you to play your part, and play it well.',
  },
  {
    title: 'Craftsmanship',
    description: 'We respect excellence, and mastery is our aim. Always sweat the small details and be intentional.',
  },
  {
    title: 'Learn and Adapt',
    description: 'We get paid to solve problems. Remain curious, and stay humble enough to learn from anyone.',
  },
];

const CoreValues: React.FC = () => {
  return (
    <section className="w-full h-auto text-white p-14">
      <div className="relative bg-gradient-to-r from-pink-500 to-p-400 p-5 pb-14 border rounded-3xl z-10">
        <h1 className="flex justify-center my-10 heading">We combine teamwork, creativity, and professionalism to deliver exceptional results</h1>
          <div className=" text-white">
      
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
              {values.map((value, index) => (
                  <div key={index} className="space-y-2 border-t border-white pt-4">
                  <h3 className="text-2xl font-semibold">{value.title}</h3>
                  <p className="text-lg">{value.description}</p>
                  </div>
              ))}
              </div>
          </div>
      </div>

      <div className="relative -mt-32 w-full ">
        <Image
          src="/team_bg_1.jpg"
          alt="Team member"
          className="object-cover border rounded-3xl"
          width={1200}
          height={200}
        />
      </div>
        
    </section>

  );
};

export default CoreValues;





