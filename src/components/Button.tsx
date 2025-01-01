import React from 'react';
import { Icon } from '@phosphor-icons/react';

export default function Button({
  title,
  Img,
  link,
  color = 'black',
}: {
  title: string;
  Img: Icon;
  link: string;
  color?: string;
}) {
  return (
    <a
      className={`flex items-center justify-center gap-2 rounded-md border-[1px] border-zinc-400 bg-zinc-100 px-3 py-1.5 text-sm font-light text-zinc-900 transition-all active:scale-[99%]`}
      href={link}
    >
      <Img weight="fill" />
      <div>{title}</div>
    </a>
  );
}
