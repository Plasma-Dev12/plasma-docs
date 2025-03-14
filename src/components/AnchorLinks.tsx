"use client";
import React, { useEffect, useState } from 'react';

export default function AnchorLinks() {
    const [headings, setHeadings] = useState<{ id: string, text: string }[]>([]);

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('h2, h3'));
        const headingData = elements.map((element) => ({
            id: element.id,
            text: element.textContent || ''
        }));
        setHeadings(headingData);
    }, []);

    return (
        <nav>
            <ul>
                {headings.map((heading) => (
                    <li key={heading.id} className='text-white'>
                        <a href={`#${heading.id}`}>{heading.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}