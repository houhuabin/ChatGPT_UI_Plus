import React from 'react';

// Add a new interface if you're using TypeScript, otherwise you can skip this part
interface SignOutSVGProps {
    className?: string; // The question mark makes the prop optional
}

// Modify the function signature to accept props
export default function SignOutSVG({ className = 'svg-fill-lighter' }: SignOutSVGProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="1.1rem" viewBox="0 0 576 512" className={className}>
            <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" />
        </svg>
    );
}



