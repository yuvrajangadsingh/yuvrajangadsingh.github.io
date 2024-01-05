import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const instagramLink = 'https://www.instagram.com/yuvrajangadsingh/';
    // Redirect to Instagram
    window.location.href = instagramLink;
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // You can optionally render something here while the redirection is happening
  return;
}
