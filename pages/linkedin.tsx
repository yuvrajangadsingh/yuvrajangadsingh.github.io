import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const linkedinLink = 'https://www.linkedin.com/in/yuvrajangadsingh/';
    // Redirect to Instagram
    window.location.href = linkedinLink;
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // You can optionally render something here while the redirection is happening
  return;
}
