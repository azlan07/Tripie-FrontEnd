import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Daftar Penerbangan',
    path: '/dashboard/penerbangan',
    icon: <FaIcons.FaPlane />,
    cName: 'nav-text'
  },
  {
    title: 'Daftar Pesanan',
    path: '/dashboard/daftar-pesanan',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  }
];
