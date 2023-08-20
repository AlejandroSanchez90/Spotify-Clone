import Header from '@/components/Header';
import React from 'react';
import AccountContent from './components/AccountContent';

type Props = {};

function Account({}: Props) {
  return (
    <div className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
      <Header
        className='frombgneu900
      '
      >
        <div className='mb-2 flex-col flex gap-y-6'>
          <h1 className='text-white text-3xl font-semibold'>Account settings</h1>
        </div>
      </Header>
      <AccountContent />
    </div>
  );
}

export default Account;
