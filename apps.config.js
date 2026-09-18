import displaySpotify from './components/apps/spotify';
import displayVsCode from './components/apps/vscode';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutAura } from './components/apps/vivek';
import { displayTerminalCalc } from './components/apps/calc';
import { displaySoftwareCenter } from './components/apps/software_center';
import IframeApp from './components/apps/iframe_app';
import React from 'react';

const apps = [
    {
        id: "about-AURA FFX",
        title: "About AURA FFX",
        icon: './themes/Yaru/system/user-home.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayAboutAura,
        description: "Learn more about AURA FFX and this OS.",
        is_default: true
    },
    {
        id: "software-center",
        title: "App Store",
        icon: './themes/Yaru/apps/software-center.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displaySoftwareCenter,
        description: "Discover and install new applications.",
        is_default: true
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
        description: "A powerful code editor for web development.",
        is_default: true
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
        description: "Command line interface for the OS.",
        is_default: true
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: './themes/Yaru/apps/spotify.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify,
        description: "Listen to music and podcasts.",
        is_default: true
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
        description: "System settings and configuration.",
        is_default: true
    },
    {
        id: "calc",
        title: "Calculator",
        icon: './themes/Yaru/apps/calc.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
        description: "Perform basic mathematical calculations.",
        is_default: true
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
        description: "Deleted files and documents.",
        is_default: true
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
        description: "Send a message or get in touch.",
        is_default: true
    },
    {
        id: "github",
        title: "GitHub",
        icon: './themes/Yaru/apps/github.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        isExternalApp: true,
        url: "https://ffx36.onrender.com",
        screen: () => {},
        description: "My GitHub profile and repositories.",
        is_default: true
    },
    {
        id: "tars",
        title: "Ask Tars",
        icon: './themes/Yaru/apps/tars.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        isExternalApp: true,
        url: "https://ffx36.onrender.com",
        description: "AI Assistant bot.",
        is_default: true
    },
    // New Installable Apps
    {
        id: "weather",
        title: "Weather",
        icon: './themes/Yaru/apps/weather.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: () => <IframeApp src="https://weather.com/" title="Weather App" />,
        description: "Check the local weather forecast and conditions.",
        is_default: false
    },
    {
        id: "maps",
        title: "Maps",
        icon: './themes/Yaru/apps/maps.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: () => <IframeApp src="https://www.google.com/maps/embed" title="Google Maps" />,
        description: "Explore the world with Google Maps.",
        is_default: false
    },
    {
        id: "games",
        title: "Mini Games",
        icon: './themes/Yaru/apps/games.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: () => <IframeApp src="https://play2048.co/" title="2048 Game" />,
        description: "Play classic web-based mini games.",
        is_default: false
    }
]

export default apps;