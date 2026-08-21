export type ServiceCategory = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  accent: string;
};

export type Guide = {
  badge: string;
  title: string;
  description: string;
};

export type Review = {
  category: string;
  name: string;
  rating: number;
  content: string;
};

export type ConsultTopic = {
  title: string;
  description: string;
  count: number;
};

export type StaffStory = {
  role: string;
  name: string;
  title: string;
  excerpt: string;
};

export type CompanyInfo = {
  name: string;
  bizNumber: string;
  ceo: string;
  address: string;
  email: string;
  irEmail: string;
  phone: string;
  hours: string;
};
