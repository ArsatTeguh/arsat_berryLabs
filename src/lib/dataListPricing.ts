export type TypePricing = {
  best_seler?: boolean;
  status: string;
  priority: string;
  price: number;
  Included: number;
  Generations: number;
  perUpload: string;
  perFile: string;
  size: string;
  High_accuracy: boolean;
  Mobile_friendly: boolean;
  Suport: boolean;
};

export const dataFeature = [
  ' Free Generations',
  'Files per Upload',
  'Pages per File',
  'File size limit',
  'High-accuracy responses',
  'Mobile-friendly interface',
  'Priority support',
];

export const dataPricing:Array<TypePricing> = [
  {
    status: 'Free',
    priority: 'Suitable for Starter',
    price: 0,
    Included: 100,
    Generations: 100,
    perUpload: 'Up to 25 Files',
    perFile: '2 pages per File ',
    size: '4MB ',
    High_accuracy: true,
    Mobile_friendly: true,
    Suport: true,
  },
  {
    status: 'Basic',
    priority: 'Suitable for Generalist',
    price: 299,
    Included: 250,
    Generations: 100,
    perUpload: 'Up to 50 Files',
    perFile: '5 pages per File',
    size: '4MB ',
    High_accuracy: true,
    Mobile_friendly: true,
    Suport: true,
  },
  {
    best_seler: true,
    status: 'Pro',
    priority: 'Suitable for Specialist',
    price: 590,
    Included: 500,
    Generations: 100,
    perUpload: 'Up to 100 Files',
    perFile: '10 pages per File',
    size: '4MB ',
    High_accuracy: true,
    Mobile_friendly: true,
    Suport: true,
  },
  {
    status: 'Premium',
    priority: 'Suitable for Agressive Specialist',
    price: 999,
    Included: 1000,
    Generations: 100,
    perUpload: 'Up to 150 Files',
    perFile: '15 pages per File',
    size: '16MB ',
    High_accuracy: true,
    Mobile_friendly: true,
    Suport: true,
  },
];
