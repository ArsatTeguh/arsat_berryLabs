import React from 'react';
import { dataPricing } from '@/lib/dataListPricing';
import CardPricing from '../ui/cardPricing';
import CoreFeature from '../ui/coreFeature';

function Pricing() {
  return (
    <div className="w-full h-full bg-white  flex flex-col gap-4 items-center ">
      <div className="teks-pricing flex flex-col items-center gap-4 w-full py-20">
        <p className="font-bold text-4xl text-zinc-800">Berrylabs Pricing</p>
        <p className="text-xl text-zinc-500 px-4 lg:px-0 w-full lg:w-[48%] text-center leading-8 ">
          Automate Without Breaking the Bank: Affordable Solutions for Every
          Business.
        </p>
      </div>
      <div className="card-pricing flex items-end  gap-8">
        <div className="h-full hidden lg:block">
          <CoreFeature />
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-0 gap-y-12">
          {dataPricing?.map((item, index: number) => (
            <div key={item.price}>
              <CardPricing item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
