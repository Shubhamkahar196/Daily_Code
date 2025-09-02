import React, {useState,useRef,useEffect} from 'react'
import {
    FavoriteIcons,
  PrivateIcons,
 FilterIcons,
PractiseIcons,
 SidebarIcons,
 ShareIcons,
} from './Icons'

const Home = () =>{
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [myLists, setMyList] = useState([
        { id: 'list-1', name: 'Create by me ', type: 'created'},
        {id: 'list-2', name: 'Favorite', type: 'favorite', isLocked: true},
    ]);

    const [selectedList, setSelectedList] = useState(myLists[1]);

    const [favoriteListData, setFavoriteListData] =  useState({
        name: 'Favorite',
        creator: "Shubham",
        questionCount: 19,
        isPrivate : true,
        progress: {
            solved: 19,
            attempting: 0,
            easy: {solved:11, total: 11},
            medium: {solved: 7, total: 7},
            hard: {solved: 1, total:1},
        },
         
            problems: [
                {id: 'prob-1', name: 'Longest Common Prefix', difficulty: 'Easy', status: 'Solved'},
                {id: 'prob-2', name: 'Contains Duplicate', difficulty: 'Easy', status: 'Solved'},
                {id: 'prob-3', name: 'valid palindrome', difficulty: 'Easy', status: 'Solved'},
                {id: 'prob-4', name: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', status: 'Solved'},
                {id: 'prob-5', name: 'Plus One', difficulty: 'Easy', status: 'Solved'},
                {id: 'prob-6', name: 'Single Number', difficulty: 'Easy', status: 'Solved'},
            { id: 'prob-7', name: '121. Best Time to Buy and Sell Stock', difficulty: 'Easy', status: 'Solved' },
            { id: 'prob-8', name: '88. Merge Sorted Array', difficulty: 'Easy', status: 'Solved' },
            { id: 'prob-9', name: '69. Sqrt(x)', difficulty: 'Easy', status: 'Solved' },
            { id: 'prob-10', name: '206. Reverse Linked List', difficulty: 'Easy', status: 'Solved' },
            { id: 'prob-11', name: '141. Linked List Cycle', difficulty: 'Easy', status: 'Solved' },
            // Add more problems as per your full list in the image
            // Example of an 'Attempted' problem (though none shown in the image for the current filter)
            // { id: 'prob-6', name: 'Some Hard Problem', difficulty: 'Hard', status: 'Attempted' },
        ],
        
    })


    return (

        <div className={`flex h-screen ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} `}>
            {/* Sidear */}
            
<div className={`w-64 p-4 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                  <h2 className='text-xl font-bold mb-6'>My Lists</h2>
                  <ul>
                       
                  </ul>
            </div>


        </div>
    )
}

export default Home