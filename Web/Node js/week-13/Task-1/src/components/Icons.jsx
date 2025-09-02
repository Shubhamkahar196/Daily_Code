import React from 'react';
import { 
    FaStar, //for star
    FaLock, // for private
    FaFilter, // for filter 
    FaPlay,  // for practise icons

} from 'react-icons/fa';

import {FiSidebar} from 'react-icons/fi'
import {IoIosGitNetwork} from 'react-icons/io'

export const FavoriteIcons = () => <FaStar  className='w-6 h-6 text-yellow-500'/>
export const PrivateIcons = () => <FaLock  className='w-5 h-5 text-gray-700 dark:text-gray-300'/>
export const FilterIcons = () => <FaFilter  className='w-5 h-5 text-gray-700 dark:text-gray-300'/>
export const PractiseIcons = () => <FaPlay className='w-5 h-5 text-gray-700 dark:text-gray-300' />
export const SidebarIcons = () => <FiSidebar className='w-6 h-6 text-gray-700 dark:text-gray-300' />
export const ShareIcons = () => <IoIosGitNetwork className='w-6 h-6 text-gray-700 dark:text-gray-300' />