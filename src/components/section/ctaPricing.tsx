import React from 'react';
import Button from '../ui/button';

function CtaPricing() {
  return (
    <div className="flex gap-10 flex-col w-full  items-center justify-center py-28 text-zinc-800">
      <h1 className="lg:text-5xl text-4xl px-4 lg:px-0 font-semibold leading-relaxed text-center w-full lg:w-[58%]">Haven&apos;t found which package is right for you?</h1>
      <p className="text-xl text-zinc-500 px-4 lg:px-0 text-center lg:text-start ">
        We &apos;ve got you covered! Talk to our experts to find the best solution for
        you, anytime for free!
      </p>
      <Button title="Talk to expert" color="primary" size="large" />
    </div>
  );
}

export default CtaPricing;
