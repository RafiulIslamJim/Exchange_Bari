import { useState, useEffect } from 'react';

const LatestUpdate = () => {
  const [currentText, setCurrentText] = useState('');
  const [comments, setComments] = useState([]);

  // Fetch the JSON data from the public folder
  useEffect(() => {
    fetch('/comments.json')
      .then(response => response.json())
      .then(data => {
        setComments(data.comments); // Store the comments in state
        setCurrentText(data.comments[0].text); // Set the initial comment
      });
  }, []);

  // Rotate comments every 3 seconds
  useEffect(() => {
    if (comments.length > 0) {
      const interval = setInterval(() => {
        setCurrentText((prevText) => {
          const currentIndex = comments.findIndex(comment => comment.text === prevText);
          const nextIndex = (currentIndex + 1) % comments.length;
          return comments[nextIndex].text;
        });
      }, 3000); // Change comment every 3 seconds

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [comments]);

  return (
    <div className="bg-gray-100 px-9 flex justify-center items-center">
      <div className="bg-white rounded-lg w-full max-w-6xl">
        <div className="bg-white border-2 border-green-500 px-4 py-3 rounded-lg relative" role="alert">
          <h1 className="text-4xl font-semibold text-gray-500 border-b pb-5 mb-4">Latest Update</h1>
          <p className="text-gray-500 text-md">
            <span className="text-gray-500 text-lg font-bold">Date:</span> 08-09-2024- 12:52 AM
          </p>
          <h1 className="text-[rgb(0,0,255)] font-bold text-lg animate-moveX">Regarding Site Re-Start</h1>
          
          {/* Display the rotating comment here */}
          <p className='text-gray-500'>{currentText}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdate;
