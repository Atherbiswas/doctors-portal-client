import React from "react";

const Loading = () => {
  return (
    <div class="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-20 h-20 border-8 rounded-full border-pink-900"
        role="status"
      >
        <span class="visually-hidden">...</span>
      </div>
    </div>
  );
};

export default Loading;
