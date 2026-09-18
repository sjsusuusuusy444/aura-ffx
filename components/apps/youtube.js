import React, { Component } from 'react';

export class YouTube extends Component {
    constructor() {
        super();
        this.state = {
            url: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1",
            input_url: ""
        }
    }

    handleInput = (e) => {
        this.setState({ input_url: e.target.value });
    }

    loadVideo = (e) => {
        e.preventDefault();
        let url = this.state.input_url;
        let video_id = "";
        
        if (url.includes("v=")) {
            video_id = url.split("v=")[1].substring(0, 11);
        } else if (url.includes("youtu.be/")) {
            video_id = url.split("youtu.be/")[1].substring(0, 11);
        }

        if (video_id) {
            this.setState({ url: "https://www.youtube.com/embed/" + video_id + "?autoplay=1" });
        }
    }

    render() {
        return (
            <div className="h-full w-full flex flex-col bg-ub-cool-grey">
                <div className="w-full pt-2 pb-2 flex justify-center items-center text-white text-sm border-b border-gray-900 bg-ub-grey">
                    <form onSubmit={this.loadVideo} className="flex w-11/12 md:w-3/4">
                        <input value={this.state.input_url} onChange={this.handleInput} className="outline-none bg-gray-700 rounded-l-md pl-3 py-1.5 w-full text-gray-200 focus:bg-gray-600 transition" type="text" placeholder="Paste YouTube Video Link here (e.g. https://www.youtube.com/watch?v=...)" spellCheck={false} autoComplete="off" />
                        <button type="submit" className="bg-red-600 hover:bg-red-700 px-4 rounded-r-md font-bold transition focus:outline-none">Play</button>
                    </form>
                </div>
                <iframe src={this.state.url} className="flex-grow" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="YouTube Video Player"></iframe>
            </div>
        )
    }
}

export default YouTube;

export const displayYouTube = () => {
    return <YouTube> </YouTube>;
}
