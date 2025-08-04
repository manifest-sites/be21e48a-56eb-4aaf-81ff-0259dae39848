import React from 'react';

function HappyBirthdayApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-yellow-400 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-bounce">
          Happy Birthday! 🎉
        </h1>
        <div className="text-4xl md:text-6xl mb-8">
          🎂🎈🎁🥳🎊
        </div>
        <p className="text-xl md:text-2xl text-white font-medium">
          Hope your special day is amazing! ✨
        </p>
      </div>
    </div>
  );
}

export default HappyBirthdayApp;