import React from 'react';
import { PAGELIST } from '../config/pageList';

export const usePageConfig = () => {
  const temp = PAGELIST.find(page => page.path == location.pathname);
  let config = {
    title: '',
    name: '',
    component: <></>,
    icon: <></>,
    largeIcon: <></>,
    key: 0,
    permission: '',
    path: '',
    section: '',
  };
  if (temp) {
    config = temp;
  }
  return config;
};