import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';

function App() {
    const [ darkMode, setDarkMode ] = useState(false);

    return (
        <div id='app-root' className={darkMode ? 'dark' : ''} onClick={() => setDarkMode(!darkMode)}>
            <Dashboard />
        </div>
    );
}

export default App;