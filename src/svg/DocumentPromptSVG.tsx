import React from 'react'
import './document-prompt-svg.scss'

export default function DocumentSVG() {
    var defaultFont = window.getComputedStyle(document.body).getPropertyValue('font-family');
    //console.log("\n========" + defaultFont + "   defaultFont=========\n");
    return (
        <svg viewBox="0 0 16 16" className="document-svg">
            <path d="M3.920805 15.4678H10.47303C11.78964 15.4678 12.47256 14.6953 12.47256 13.2256V5.03613L8.596584 1.38574C8.079786 0.804688 7.655274 0.667969 6.886233 0.667969H3.920805C2.604195 0.667969 1.921275 1.44043 1.921275 2.91016V13.2256C1.921275 14.7021 2.604195 15.4678 3.920805 15.4678Z"></path>
            <path d="M11.07256,5.03613 H7.97256 V1.38574 L11.07256,5.03613 Z"></path>

            <text x="7" y="11" className='document-prompt-text'>P</text>
        </svg>


    )
}
