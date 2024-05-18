import React, { useState } from 'react';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const calculateTimeAgo = (time) => {
    const currentTime = new Date();
    const commentTime = new Date(time);
    const timeDifference = Math.abs(currentTime - commentTime);
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    if (seconds < 60) {
      return seconds === 1 ? '1 sec ago' : `${seconds} secs ago`;
    } else if (minutes < 60) {
      return minutes === 1 ? '1 min ago' : `${minutes} mins ago`;
    } else if (hours < 24) {
      return hours === 1 ? '1 hr ago' : `${hours} hrs ago`;
    } else {
      return commentTime.toLocaleTimeString();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      name: 'John Doe', // You can change this to the actual name of the user
      text: commentText,
      time: new Date().toISOString(), // Get the current time in ISO string format
    };

    setComments([newComment, ...comments]);
    setCommentText('');
  };

  return (
    <div className='mt-5 h-[300px] w-[53%] text-center bg-purple ml-[20%] rounded-[20px] '>
      <form onSubmit={handleSubmit} className='pt-12'>
        <input
          className='pt-8 border-none rounded-lg'
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write your comment..."
        />
        <br/>
        <button type="submit" className='mr-2 mt-2 p-[9px] px-[18px] bg-white text-purple rounded-md font-bold'>Submit</button>
       </form>
      <div className='commentWrapper'>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.name} - {calculateTimeAgo(comment.time)}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default CommentSection;
