'use client';

import { Plus } from 'lucide-react';

import { ActionTooltip } from '@/components/ui/action-tooltip';

export const NavigationAction = () => {
  return(
    <ActionTooltip label='Add a server' align='center' side='right'>
      <button className='group flex items-center pt-4'>
        <div className='flex mx-3 h-[49px] w-[48px] rounded-[24px] group-hover:rounded-[16px]
      transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700
      group-hover:bg-emerald-500 cursor-pointer'>
          <Plus className='group-hover:text-white transition text-emerald-500' size={25} />
        </div>
      </button>
    </ActionTooltip>
  );
};