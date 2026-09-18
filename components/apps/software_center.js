import React, { Component } from 'react';
import apps from '../../apps.config';

export class SoftwareCenter extends Component {
    constructor() {
        super();
        this.state = {
            installed_apps: [],
            searchQuery: ""
        }
    }

    componentDidMount() {
        this.fetchInstalledApps();
        window.addEventListener('app_store_update', this.fetchInstalledApps);
    }

    componentWillUnmount() {
        window.removeEventListener('app_store_update', this.fetchInstalledApps);
    }

    fetchInstalledApps = () => {
        let stored = null;
        if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
            stored = localStorage.getItem('installed_apps');
        }
        if (stored) {
            this.setState({ installed_apps: JSON.parse(stored) });
        } else {
            // Default installed apps if no localStorage exists
            let defaults = apps.filter(app => app.is_default !== false).map(app => app.id);
            this.setState({ installed_apps: defaults });
        }
    }

    toggleInstall = (appId) => {
        let installed = [...this.state.installed_apps];
        if (installed.includes(appId)) {
            installed = installed.filter(id => id !== appId);
        } else {
            installed.push(appId);
        }
        localStorage.setItem('installed_apps', JSON.stringify(installed));
        this.setState({ installed_apps: installed });
        
        // Notify desktop to re-render
        const event = new Event('app_store_update');
        window.dispatchEvent(event);
    }

    handleSearch = (e) => {
        this.setState({ searchQuery: e.target.value });
    }

    renderAppCard = (app, index) => {
        const isInstalled = this.state.installed_apps.includes(app.id);
        // Don't allow uninstalling essential apps like Settings or Software Center itself
        const isEssential = app.id === "settings" || app.id === "software-center";

        return (
            <div key={index} className="flex flex-col items-center bg-ub-grey hover:bg-ub-cool-grey rounded-lg p-4 transition border border-gray-700 w-full">
                <img className="w-16 h-16 mb-2" src={app.icon} alt={app.title} />
                <h3 className="text-white font-bold text-lg mb-1">{app.title}</h3>
                <p className="text-gray-400 text-xs text-center mb-4 h-10 overflow-hidden">{app.description || "A great app for your AURA FFX OS."}</p>
                {isEssential ? (
                    <button disabled className="px-4 py-1.5 rounded-md bg-gray-600 text-gray-300 cursor-not-allowed w-full font-semibold">Essential</button>
                ) : isInstalled ? (
                    <button onClick={() => this.toggleInstall(app.id)} className="px-4 py-1.5 rounded-md bg-red-600 hover:bg-red-700 text-white w-full font-semibold transition">Remove</button>
                ) : (
                    <button onClick={() => this.toggleInstall(app.id)} className="px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white w-full font-semibold transition">Install</button>
                )}
            </div>
        )
    }

    render() {
        const filteredApps = apps.filter(app => 
            app.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()) || 
            (app.description && app.description.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
        );

        return (
            <div className="h-full w-full flex flex-col bg-ub-cool-grey overflow-hidden">
                <div className="w-full pt-4 pb-4 flex justify-between items-center text-white px-8 bg-ub-grey border-b border-gray-900 shadow-md">
                    <div className="flex items-center">
                        <img src="./themes/Yaru/apps/software-center.svg" alt="App Store" className="w-8 h-8 mr-3"/>
                        <h2 className="text-xl font-bold">App Store</h2>
                    </div>
                    <div className="w-1/3">
                        <input 
                            value={this.state.searchQuery} 
                            onChange={this.handleSearch} 
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-full outline-none focus:bg-gray-600 transition shadow-inner" 
                            type="text" 
                            placeholder="Search applications..." 
                            spellCheck={false}
                        />
                    </div>
                </div>
                
                <div className="flex-grow overflow-y-auto p-8">
                    <h2 className="text-white text-2xl font-bold mb-6">Explore Apps</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredApps.map(this.renderAppCard)}
                    </div>
                    {filteredApps.length === 0 && (
                        <div className="flex justify-center items-center h-48">
                            <p className="text-gray-400 text-lg">No applications found.</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default SoftwareCenter;

export const displaySoftwareCenter = () => {
    return <SoftwareCenter> </SoftwareCenter>;
}
