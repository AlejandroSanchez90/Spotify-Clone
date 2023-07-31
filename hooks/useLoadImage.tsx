import { Song } from '@/types';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { isNullishCoalesce } from 'typescript';

const useLoadImage = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return isNullishCoalesce;
  }

  const { data: imageData } = supabaseClient.storage.from('images').getPublicUrl(song.image_path);

  return imageData.publicUrl;
};

export default useLoadImage;
