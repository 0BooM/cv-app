import { useState } from 'react';

export default function toggleSection(defaultState = false) {
    const [isOpen, setIsOpen] = useState(defaultState);
    const toggle = () => setIsOpen(prev => !prev);

    return [isOpen, toggle];
}