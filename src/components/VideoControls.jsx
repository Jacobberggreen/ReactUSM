import {useRef, useState} from 'react';

const VideoControls = () => {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);
    const [paused, setPaused] = useState(false);

    const toggleMute = () => {
        if (videoRef.current) {
            const video = videoRef.current;
            video.muted = !video.muted;
            setMuted(video.muted);
        }
    };

    const togglePause = () => {
        if (videoRef.current) {
            const video = videoRef.current;
            if (video.paused) {
                video.play();
                setPaused(false);
            } else {
                video.pause();
                setPaused(true);
            }
        }
    };

    return (
        <>
            <video ref={videoRef} id="background-video" autoPlay loop muted playsInline>
                <source id="hero-video" src="/media/gym_video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <div id="audio-controls">
                <button id="pause-button" onClick={togglePause}>
                    {paused ? '▶' : '⏸'}
                </button>
                <button id="mute-button" onClick={toggleMute}>
                    {muted ? '🔇' : '🔊'}
                </button>
            </div>
        </>
    );
};

export default VideoControls;