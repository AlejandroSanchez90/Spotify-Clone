'use client';

import useLoadImage from '@/hooks/useLoadImage';
import { Song } from '@/types';
import Image from 'next/image';

type Props = {
  song: Song;
  onClick: (id: string) => void;
};

function MediaItem({ song, onClick }: Props) {
  const imageUrl = useLoadImage(song);

  const handleClick = () => {
    if (onClick) {
      return onClick(song.id);
    }
  };
  return (
    <div
      onClick={handleClick}
      className='flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800 w-full rounded-md'>
      <div className='relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden'>
        <Image
          src={(imageUrl as string) || '/images/liked.png'}
          fill
          alt='media item'
          className='object-cover'
        />
      </div>
      <div className='flex flex-col gap-y-1 overflow-hidden'>
        <p className='text-white truncate'>{song.title}</p>
        <p className='text-neutral-400 text-sm truncate'>{song.author}</p>
      </div>
    </div>
  );
}

export default MediaItem;
