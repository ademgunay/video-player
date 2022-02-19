import React from 'react';

const VideoDetail = ({ video }) => {

    if (!video) {
        return <div>Loading...</div>;
    } else {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
            <div>
                <div className='ui embed'>
                    <iframe width="560" height="315"
                        src={videoSrc}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen />
                </div>
                <div className='ui segment'>
                    <h4>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
}

export default VideoDetail;