import { storyblokEditable } from '@storyblok/react';

const Quote = ({ blok }) => {
  return (
    <div className="py-8 mb-6 bg-slate-400 rounded-bl-3xl rounded-br-full drop-shadow-none hover:drop-shadow-sm hover:bg-slate-200" {...storyblokEditable(blok)} key={blok._uid}>
      <h2 className="text-5xl font-bold text-center text-slate-500">" {blok.headline} "</h2>
      <h2 className="text-2xl font-bold text-center ">-{blok.quoteme}</h2>
    </div>
  );
};

export default Quote;
