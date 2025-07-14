
import TwitterIcons from '../../icons/TwitterIcons';
import MediaIcons from '../../icons/MediaIcons';
import DeleteIcons from '../../icons/DeleteIcons';
import ShareIcon from '../../icons/ShareIcons';
import BookIcons from '../../icons/BookIcons';

export function Card() {
  return (
    
    <div className="flex space-x-4 items-stretch"> {/* IMPORTANT CHANGE HERE */}

      {/* 1st card: Project Ideas */}
      {/* w-96 ensures consistent width */}
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 w-96 flex flex-col"> {/* Added flex flex-col to allow content to push to bottom */}
        {/* Header Section */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-5 h-5">
              <BookIcons />
            </span>
            <h3 className="text-gray-600 text-sm font-medium">Project Ideas</h3>
          </div>
          <div className="flex space-x-2">
            <span className="text-gray-400 hover:text-gray-600 w-4 h-4 cursor-pointer">
              <ShareIcon />
            </span>
            <span className="text-gray-400 hover:text-gray-600 w-4 h-4 cursor-pointer">
              <DeleteIcons />
            </span>
          </div>
        </div>

        {/* Content Section - flex-grow ensures this section takes up available space */}
        <div className="mb-4 flex-grow">
          <h1 className="text-lg font-semibold text-gray-800 mb-2">Future Projects</h1>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Build a personal knowledge base</li>
            <li>Create a habit tracker</li>
            <li>Design a minimalist todo app</li>
          </ul>
        </div>

        {/* Tags and Date Section - Pushed to the bottom if content is shorter */}
        <div className="flex flex-wrap gap-2 mb-2 mt-auto"> {/* mt-auto pushes it down */}
          <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
            #productivity
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
            #ideas
          </span>
        </div>

        <p className="text-gray-500 text-xs">Added on 10/03/2024</p>
      </div>

      {/* 2nd card: How to Build a Second Brain (with YouTube iframe) */}
      {/* w-96 ensures consistent width */}
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 w-96 flex flex-col"> {/* Added flex flex-col */}
        {/* Header Section */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-5 h-5">
              <MediaIcons />
            </span>
            <h3 className="text-gray-600 text-sm font-medium">How to Build a Second Brain</h3>
          </div>
          <div className="flex space-x-2">
            <span className="text-gray-400 hover:text-gray-600 w-4 h-4 cursor-pointer">
              <ShareIcon />
            </span>
            <span className="text-gray-400 hover:text-gray-600 w-4 h-4 cursor-pointer">
              <DeleteIcons />
            </span>
          </div>
        </div>

        {/* Content Section: YouTube Video Embed - flex-grow allows it to take space */}
        <div className="mb-4 flex-grow">
            <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID" // IMPORTANT: Replace with actual YouTube embed URL
                    title="Complete Redis, Websockets, Pub Subs and Message queues Bootcamp"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>

        {/* Tags and Date Section - Pushed to the bottom */}
        <div className="flex flex-wrap gap-2 mb-2 mt-auto">
          <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
            #productivity
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
            #learning
          </span>
        </div>

        <p className="text-gray-500 text-xs">Added on 09/03/2024</p>
      </div>

      {/* 3rd card: Productivity Tips */}
      {/* w-96 ensures consistent width */}
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 w-96 flex flex-col"> {/* Added flex flex-col */}
        {/* Header Section */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 ">
              <TwitterIcons />
            </span>
            <h3 className="text-gray-600 text-sm font-medium">Productivity Tips</h3>
          </div>
          <div className="flex space-x-2">
            <span className="text-gray-400 hover:text-gray-600 w-4 h-4 cursor-pointer">
              <ShareIcon />
            </span>
            <span className="text-gray-400 hover:text-gray-600 w-4 h-4 cursor-pointer">
              <DeleteIcons />
            </span>
          </div>
        </div>

        {/* Content Section - flex-grow ensures this section takes up available space */}
        <div className="mb-4 flex-grow">
          <p className="text-gray-700 text-sm">
            The best way to learn is to build in public. Share your progress, get feedback and help other along the way.
          </p>
        </div>

        {/* Tags and Date Section - Pushed to the bottom */}
        <div className="flex flex-wrap gap-2 mb-2 mt-auto">
          <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
            #productivity
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
            #learning
          </span>
        </div>

        <p className="text-gray-500 text-xs">Added on 08/03/2024</p>
      </div>

    </div>
  );
}