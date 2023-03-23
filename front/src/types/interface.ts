interface ItemProps {
  title: string;
  link: string;
  image: string;
  author: string;
  price: string;
  discount: string;
  pubdate: string;
  description: string;
}

interface OrderPriceProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export type { ItemProps, OrderPriceProps };
