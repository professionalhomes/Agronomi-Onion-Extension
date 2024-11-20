import React from 'react';
import NavBar from './NavBar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div id="layoutSidenav_content">
            <NavBar />
            <main>
                <div className="container-fluid px-4">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
