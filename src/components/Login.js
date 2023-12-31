import React, { useState } from 'react';
import { Button, InstUISettingsProvider, TextInput } from "@instructure/ui";
import './Login.css'; // Import a CSS file for styling
import PrintVsGrade from './PrintVsGrade';

function Login() {
    const [currentPage, setCurrentPage] = useState(null);
    const [api_key, setApi_Key] = useState('');
    const [canvas_url, setcanvas_Url] = useState('');

    const changePage = (page) => {
        setCurrentPage(page);
    };

    const login = {
        api_key: api_key,
        canvas_url: canvas_url
    };

    return (
        <InstUISettingsProvider theme={{ fontFamily: 'Arial', fontSize: '16px' }}>
            <div className="login-container">
                {currentPage === null && (
                    <div className="login-form">
                        <h2>Welcome to VAC.JS</h2>
                        <TextInput
                            renderLabel="API key"
                            placeholder="abc1234ABC5678"
                            onChange={(event, value) => setApi_Key(value)}
                        />
                        <TextInput
                            renderLabel="URL"
                            placeholder="www.ufl.edu"
                            onChange={(event, value) => setcanvas_Url(value)}
                        />
                        <Button onClick={() => changePage('printvsgrade')}>Login</Button>
                    </div>
                )}
                {currentPage === 'printvsgrade' && <PrintVsGrade login={login}/>}
            </div>
        </InstUISettingsProvider>
    );
}

export default Login;
