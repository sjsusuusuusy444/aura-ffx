import React from 'react';

export default function IframeApp({ src, title }) {
    return (
        <iframe src={src} frameBorder="0" title={title} className="h-full w-full bg-ub-cool-grey" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"></iframe>
    )
}
