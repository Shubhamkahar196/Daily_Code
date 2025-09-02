import React from 'react'
import {
    FaHome,
   FaCalendarAlt,
    FaPlus,
    FaVideo,
    FaDollarSign,
    FaUsers,
    FaCog,
    FaChevronLeft,
    FaChevronRight,
    FaSun,
    FaMoon,
    FaBars,
    FaTimes,
    FaBell,    
    
} from 'react-icons/fa'

export const HomeIcon = () => <FaHome className=" w-5 h-5 text-gray-700 dark:text-gray-300" />

export const WebinarIcon =() => <FaVideo className="w-5 h-5 text-gray-700 dark:text-gray-300"/>

export const BillingIcon = () => <FaDollarSign className="w-5 h-5 text-gray-700 dark:text-gray-300" />

export const UserManagementIcon = () => <FaUsers className= "w-5 h-5 text-gray-700 dark:text-gray-300 "/>

export const SettingsIcon = () => <FaCog className="w-5 h-5 text-gray-700 dark:text-gray-300" />


export const CalendarIcon = () => <FaCalendarAlt className="w-6 h-6 text-blue-500 dark:text-blue-300 "/>

export const PlusIcon = () => <FaPlus className=" w-6 h-6 text-blue-500 dark:text-blue-300" />

export const RecordingIcon = () => <FaVideo className=" w-6 h-6 text-blue-500 dark:text-blue-300" />

export const ArrowLeftIcon = ({isDarkTheme}) => (
       <FaChevronLeft className={`w-4 h-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`} />
)

export const ArrowRightIcon = ({isDarkTheme}) => (
       <FaChevronRight className={`w-4 h-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`} />
)

export const SunIcon = () => <FaSun className="w-6 h-6 text-yellow-500" />

export const MoonIcon = () => <FaMoon  className="w-6 h-6 text-gray-400"/>

export const MenuIcon = () => <FaBars className="w-6 h-6 text-gray-800 dark:text-gray-200" />; 
export const CloseIcon = () => <FaTimes className="w-6 h-6 text-gray-800 dark:text-gray-200" />; 

export const BellIcon = () => <FaBell className="w-6 h-6" />;