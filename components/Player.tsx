'use client';
import useGetSongById from '@/hooks/useGetSongById';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
import usePlayer from '@/hooks/usePlayer';
import React from 'react';
import PlayerContent from './PlayerContent';

type Props = {};

function Player({}: Props) {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) return null;

  return (
    <div className='fixed bottom-0 bg-black/70 backdrop-blur-sm w-full py-2 h-[80px] px-4 '>
      <PlayerContent song={song} songUrl={songUrl} key={songUrl} />
    </div>
  );
}

export default Player;
