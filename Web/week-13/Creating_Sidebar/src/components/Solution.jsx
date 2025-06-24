


import React, { useState, useEffect } from 'react';
import {
  HomeIcon,
  WebinarIcon,
  BillingIcon,
  UserManagementIcon,
  SettingsIcon,
  CalendarIcon,
  PlusIcon,
  RecordingIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  SunIcon,
  MoonIcon,
  MenuIcon,
  CloseIcon,
  BellIcon, // Imported from Icons.jsx
} from './Icons'; 

const Solution = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    // Initialize with the current date and time
    const [currentDate, setCurrentDate] = useState(new Date());
    const [webinars, setWebinars] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  
    const allWebinars = [
        { id: 1, date: '2025-06-24', time: '10:00 AM', title: 'Daily Stand-up Meeting', status: 'Live' },
        { id: 2, date: '2025-06-24', time: '02:30 PM', title: 'Project X Review', status: 'Upcoming' },
        { id: 3, date: '2025-06-24', time: '04:00 PM', title: 'Client Demo Prep', status: 'Upcoming' },
        { id: 4, date: '2025-06-25', time: '09:00 AM', title: 'Marketing Strategy Session', status: 'Upcoming' },
        { id: 5, date: '2025-06-23', time: '11:00 AM', title: 'Weekly Sync Past', status: 'Completed' },
        { id: 6, date: '2025-06-26', time: '03:00 PM', title: 'Team Building Workshop', status: 'Upcoming' },
        
        { id: 7, date: '2024-10-14', time: '11:30 AM', title: 'Old: UX Webinar', status: 'Live' },
        { id: 8, date: '2024-10-14', time: '11:30 AM', title: 'Old: My first Webinar', status: 'Upcoming' },
    ];

    
    useEffect(() => {
        // Format the date to 'YYYY-MM-DD' for comparison with your webinar data
        const formattedCurrentDate = currentDate.toISOString().split('T')[0];
        const filtered = allWebinars.filter(webinar => webinar.date === formattedCurrentDate);
        setWebinars(filtered);
    }, [currentDate]); 

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const handlePrevDay = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setDate(newDate.getDate() - 1); // Go back one day
            return newDate;
        });
    };

    const handleNextDay = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setDate(newDate.getDate() + 1); // Go forward one day
            return newDate;
        });
    };

    const formatDateForDisplay = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    
    const formatShortDateForDisplay = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className={`min-h-screen ${isDarkTheme ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'} flex flex-col md:flex-row`}>

            {/* Mobile Header (visible only on small screens) */}
            <header className={`md:hidden p-4 flex items-center justify-between shadow-md ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                <span className="text-xl font-bold text-blue-500">Webinar.gg</span>
                <button onClick={toggleSidebar} className="p-2">
                    {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </header>

            {/* Left Sidebar */}
            {/* Conditional classes for responsive sidebar behavior */}
            <aside className={`fixed inset-y-0 left-0 w-64 p-5 shadow-md transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                               md:relative md:translate-x-0 md:flex-shrink-0 transition-transform duration-300 ease-in-out
                               ${isDarkTheme ? 'bg-gray-800' : 'bg-white'} z-40`}>
                {/* Close button for mobile sidebar (optional, often part of the main toggle in header) */}
                <div className="md:hidden flex justify-end mb-4">
                    <button onClick={toggleSidebar} className="p-2">
                        <CloseIcon />
                    </button>
                </div>

                {/* Top section: Webinar.gg and User profile icon (hidden on mobile when sidebar is hidden) */}
                <div className="hidden md:flex items-center justify-between mb-8">
                    <span className="text-xl font-bold text-blue-500">Webinar.gg</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${isDarkTheme ? 'bg-gray-600 text-gray-200' : 'bg-gray-300'}`}>
                        
                                                <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" alt="Shubham" className="w-10 h-10 rounded-full object-cover" />
                    </div>
                </div>

                {/* Theme Toggle Button */}
                <div className="mb-8 p-2">
                    <button
                        onClick={toggleTheme}
                        className={`flex items-center space-x-2 p-2 rounded-lg w-full justify-center
                                ${isDarkTheme ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    >
                        {isDarkTheme ? <SunIcon /> : <MoonIcon />}
                        <span>{isDarkTheme ? 'Light Theme' : 'Dark Theme'}</span>
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-4">
                    <div className={`flex items-center justify-between p-2 rounded-lg font-semibold
                                ${isDarkTheme ? 'bg-blue-800 text-blue-100' : 'bg-blue-100 text-blue-800'}`}>
                        <div className="flex items-center space-x-3">
                            <HomeIcon />
                            <span>Home</span>
                        </div>
                        {/* Empty div for the right-side circle, assuming it's just a visual indicator */}
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
                                    ${isDarkTheme ? 'bg-blue-700' : 'bg-blue-200'}`}></div>
                    </div>
                    {['Webinars', 'Billing', 'User Management', 'Settings'].map((item) => (
                        <div key={item} className={`flex items-center justify-between p-2 rounded-lg
                                    ${isDarkTheme ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                            <div className="flex items-center space-x-3">
                                {/* Conditional rendering for specific icons */}
                                {item === 'Webinars' && <WebinarIcon />}
                                {item === 'Billing' && <BillingIcon />}
                                {item === 'User Management' && <UserManagementIcon />}
                                {item === 'Settings' && <SettingsIcon />}
                                <span>{item}</span>
                            </div>
                            {/* Empty div for the right-side circle, assuming it's just a visual indicator */}
                            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs"></div>
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Overlay for mobile sidebar (closes sidebar when clicked) */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Right Main Content Area */}
            <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                {/* Top bar with user info and global actions (hidden on small screens) */}
                <header className="hidden md:flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">{formatDateForDisplay(currentDate)}</h1>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            {/* Updated user avatar */}
                                                     <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" alt="Shubham" className="w-10 h-10 rounded-full object-cover" />
                            <div className={`text-sm ${isDarkTheme ? 'text-gray-200' : 'text-gray-800'}`}>
                                <p className="font-semibold">Shubham</p>
                                <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>shubham@example.com</p> {/* Changed email to a generic one */}
                            </div>
                        </div>
                        {/* Bell Icon from react-icons */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkTheme ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                            <BellIcon />
                        </div>
                    </div>
                </header>

               
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-4">Good morning, Shubham! 👋</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {/* Left Column: User Profile Card & Webinar Schedule */}
                    <div className="md:col-span-2"> {/* On medium screens, takes 2 columns */}
                        {/* Webinar Schedule Card */}
                        <div className={`p-4 md:p-6 rounded-lg shadow-md ${isDarkTheme ? 'bg-gray-700' : 'bg-white'}`}>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold">{formatShortDateForDisplay(currentDate)}</h3>
                                <div className="flex space-x-2">
                                    <button onClick={handlePrevDay} className={`p-2 rounded-md ${isDarkTheme ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'}`}>
                                        <ArrowLeftIcon isDarkTheme={isDarkTheme} />
                                    </button>
                                    <button onClick={handleNextDay} className={`p-2 rounded-md ${isDarkTheme ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'}`}>
                                        <ArrowRightIcon isDarkTheme={isDarkTheme} />
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {webinars.length > 0 ? (
                                    webinars.map((webinar) => (
                                        <div
                                            key={webinar.id}
                                            className={`flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 rounded-lg
                                                ${webinar.status === 'Live'
                                                    ? (isDarkTheme ? 'border border-red-600 bg-red-900' : 'border border-red-300 bg-red-50')
                                                    : (isDarkTheme ? 'border border-gray-600 bg-gray-800' : 'border border-gray-200')
                                                }`}
                                        >
                                            <span className={`text-sm font-semibold sm:w-24 flex-shrink-0
                                                ${webinar.status === 'Live' ? (isDarkTheme ? 'text-red-300' : 'text-red-500') : (isDarkTheme ? 'text-gray-300' : 'text-gray-600')}
                                            `}>
                                                {webinar.time}
                                            </span>
                                            <div className="flex-1">
                                                <p className="font-medium">{webinar.title}</p>
                                                <span className={`text-xs px-2 py-1 rounded-full
                                                    ${webinar.status === 'Live'
                                                        ? (isDarkTheme ? 'text-red-200 bg-red-700' : 'text-red-600 bg-red-200')
                                                        : (isDarkTheme ? 'text-blue-200 bg-blue-700' : 'text-blue-600 bg-blue-100')
                                                    }`}
                                                >
                                                    {webinar.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} text-center py-4`}>No webinars scheduled for this date.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Actions (Schedule, Join, Open Recordings) */}
                    <div className="col-span-1 space-y-4 md:order-last">
                        <div className={`p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                            <CalendarIcon />
                            <p className="mt-2 font-medium">Schedule a Webinar</p>
                        </div>
                        <div className={`p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                            <PlusIcon />
                            <p className="mt-2 font-medium">Join a Webinar</p>
                        </div>
                        <div className={`p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
                            <RecordingIcon />
                            <p className="mt-2 font-medium">Open Recordings</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Solution;