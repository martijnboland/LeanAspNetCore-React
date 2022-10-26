import React from 'react';
import { createRoot } from 'react-dom/client';

import Notes from './react-notes/Notes';

const container = document.getElementById('react-notes-app');
const root = createRoot(container!);
root.render(<Notes />);