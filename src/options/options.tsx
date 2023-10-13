import React from 'react';
import { createRoot } from 'react-dom/client';
import '../assets/css/tailwind.css';
const test = (<div>
    <h1 className="text-2xl text-green-500">Options</h1>
</div>);
const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);