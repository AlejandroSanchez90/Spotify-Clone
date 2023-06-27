'use client';

import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import useAuthModal from '@/hooks/useAuthModal';
import { use, useEffect } from 'react';

type Props = {};

function AuthModal({}: Props) {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [onClose, router, session]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Modal
      title='Welcome back'
      description='Login to your account'
      onChange={onChange}
      isOpen={isOpen}>
      <Auth
        supabaseClient={supabaseClient}
        providers={['github']}
        magicLink
        theme='dark'
        appearance={{
          theme: ThemeSupa,
          variables: { default: { colors: { brand: '#404040', brandAccent: '#22c55e' } } },
        }}
      />
    </Modal>
  );
}

export default AuthModal;
