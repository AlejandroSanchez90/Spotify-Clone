'use client';

import AuthModal from '@/components/AuthModal';
import Modal from '@/components/Modal';
import SubscribeModal from '@/components/SubscribeModal';
import UploadModal from '@/components/UploadModal';
import { ProductsWithPrices } from '@/types';
import { useEffect, useState } from 'react';

type Props = {
  products: ProductsWithPrices[];
};

function ModalProvider({ products }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
}

export default ModalProvider;
