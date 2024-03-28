import React from 'react';

type Props = {
  title: string;
  color: 'primary' | 'secondary';
  size: 'large' | 'medium';
};

function Button({ title, color, size }: Props) {
  return (
    <div>
      {size === 'large' ? (
        <button
          type="button"
          className={`lg:py-3 lg:px-7 py-2 px-5 rounded shadow-sm lg:text-md font-medium ${
            color === 'primary'
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-secondary'
          }`}
        >
          {title}
        </button>
      ) : (
        <button
          type="button"
          className={`lg:py-1 py-2 mt-8 px-8 lg:px-10 mx-auto text-white rounded-md ${
            color === 'primary'
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-white border text-zinc-800 border-primary'
          }`}
        >
          {title}
        </button>
      )}
    </div>
  );
}

export default Button;
