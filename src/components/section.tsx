import { ComponentPropsWithRef } from 'react';

type SectionProps = ComponentPropsWithRef<'section'> & {
  img: number;
};

export default function Section({ img = 1, ...props }: SectionProps) {
  return (
    <section
      className="w-screen h-screen relative flex items-center justify-center"
      {...props}
    >
      <div
        className="bg absolute -z-10 inset-0 w-full h-full object-cover"
        style={{
          backgroundImage: `url(https://picsum.photos/1600/800?random=${img})`,
        }}
      />
      <h2 className="text-white drop-shadow-lg text-2xl">じんるい しゃかい</h2>
    </section>
  );
}
