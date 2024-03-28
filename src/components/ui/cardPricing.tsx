import { TypePricing } from '@/lib/dataListPricing';
import React from 'react';
import Button from './button';
import VectorIcon from './vectorIcon';

type Props = {
  item: TypePricing;
  index: number;
};

function CardPricing({ item, index }: Props) {
  return (
    <div
      className={`font-medium relative shadow-lg shadow-primary/20 lg:shadow-none text-zinc-800 text-center  flex flex-col text-lg lg:text-[13px] rounded-md ${
        item.best_seler && 'border-2 border-primary/60'
      }`}
    >
      <div
        className={`rounded-t-md flex flex-col gap-4 items-center lg:py-5 py-10 px-8 ${
          index % 2 === 0 ? 'bg-secondary' : 'bg-white'
        }`}
      >
        <p className="text-xl">{item?.status}</p>
        <p className=" text-zinc-500">{item?.priority}</p>
        <p className="text-3xl font-semibold text-zinc-800">
          IDR {item?.price},000
        </p>
      </div>
      <div
        className={` flex items-center gap-1 w-full justify-center py-4 ${
          index % 2 !== 0 ? 'bg-secondary' : 'bg-white'
        }`}
      >
        <p>{item?.Included} Files</p>
        <VectorIcon />
      </div>
      <div
        className={` flex flex-col gap-3 lg:py-4 py-8 rounded-b-md ${
          index % 2 === 0 ? 'bg-secondary' : 'bg-white'
        }`}
      >
        <div className="flex items-center gap-1  justify-center h-8 ">
          <p>{item?.Generations}</p>
          <VectorIcon />
        </div>
        <p className="h-8 ">{item?.perUpload} </p>
        <div className="flex items-center gap-1 justify-center h-8 ">
          <p>{item?.perFile}</p>
          <VectorIcon />
        </div>
        <div className="flex items-center gap-1 justify-center h-8 ">
          <p>{item?.size}</p>
          <VectorIcon />
        </div>
        {Array.from({ length: 3 }).map(() => (
          <div key={index} className=" h-8 flex justify-center items-center">
            <svg
              tabIndex={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="green"
              className="w-4 h-4 mx-auto"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ))}

        <Button
          size="medium"
          title={item.status === 'Free' ? 'Get Started Free' : 'Select'}
          color={item.status === 'Free' ? 'primary' : 'secondary'}
        />
      </div>
      {item.status === 'Pro' && (
        <div className="absolute  -top-[1.6rem]  left-1/2 transform -translate-x-1/2">
          <p className="bg-primary rounded-full px-6 py-2 text-white ">
            Best Seller
          </p>
        </div>
      )}
    </div>
  );
}

export default CardPricing;
