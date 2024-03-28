import { dataFeature } from '@/lib/dataListPricing';
import React from 'react';

function CoreFeature() {
  return (
    <div className="text-[13px] flex flex-col justify-end pb-[5.7rem] h-full font-medium text-zinc-800">
      <p className="font-semibold ">Core Features</p>
      <p className="pt-4 pb-5 ">Files Included</p>
      <div className="flex flex-col gap-4 py-4  ">
        {dataFeature.map((item) => (
          <div key={item}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoreFeature;
