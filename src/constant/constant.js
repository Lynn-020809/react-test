import React from 'react';
import {BsPerson} from "react-icons/fa";
import {BsPersonFill} from "react-icons/fa";
import {RiFileList3Line} from "react-icons/fa";
import {RiFileList3Fill} from "react-icons/fa";
import {AiOutlineIdcard} from "react-icons/fa";
import {AiFillIdcard} from "react-icons/fa";
import {FiMap} from "react-icons/fa";
import {FaMap} from "react-icons/fa";
import {RiInboxArchiveLine} from "react-icons/fa";
import {RiInboxArchiveFill} from "react-icons/fa";


export const MENU = () => {
  
    return [
      {
        key: 'profile',
        path: '/',
        icon: <BsPerson/>,
        iconSelected: <BsPersonFill/>,
        title: 'Profile',
        notify: 0
      },
      {
        key: 'home',
        path: '/',
        icon: <RiFileList3Line />,
        iconSelected: <RiFileList3Fill />,
        title: 'Home',
        notify: 0
      },
      {
        key: 'deceased',
        path: '/deceased',
        icon: <AiOutlineIdcard />,
        iconSelected: <AiFillIdcard />,
        title: 'Deceased Information',
        notify: 0
      },
      {
        key: 'map',
        path: '/',
        icon: <FiMap />,
        iconSelected: <FaMap />,
        title: 'Map',
        notify: 0
      },
      {
        key: 'inbox',
        path: '/',
        icon: <RiInboxArchiveLine />,
        iconSelected: <RiInboxArchiveFill />,
        title: 'Inbox',
        notify: 0
      }
    ]
  }