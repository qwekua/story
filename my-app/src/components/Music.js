// components/Videos.js
import React, { useState } from 'react';
import './Videos.css';

export const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Sample videos data
  const videos = [
    { 
      id: 1, 
      title: "Music Video Title 1", 
      type: "Official Music Video", 
      date: "April 2025",
      thumbnail: "/api/placeholder/1280/720",
      views: "1.2M"
    },
    { 
      id: 2, 
      title: "Music Video Title 2", 
      type: "Official Music Video", 
      date: "March 2025",
      thumbnail: "/api/placeholder/1280/720", 
      views: "890K"
    },
    { 
      id: 3, 
      title: "Awake Short video", 
      type: "Live", 
      date: "October 2023",
      thumbnail: "https://www.youtube.com/shorts/2Ug6-jSbQns", 
      views: "560K"
    },
    { 
      id: 4, 
      title: "Behind The Scenes", 
      type: "BTS", 
      date: "January 2025",
      thumbnail: "https://www.youtube.com/shorts/hODzVuC5YKc", 
      views: "420K"
    },
    { 
      id: 5, 
      title: "Music Video Title 3", 
      type: "Official Music Video", 
      date: "December 2024",
      thumbnail: "/api/placeholder/1280/720", 
      views: "2.1M"
    },
    { 
      id: 6, 
      title: "Interview", 
      type: "Interview", 
      date: "November 2024",
      thumbnail: "/api/placeholder/1280/720", 
      views: "310K"
    }
  ];
  
  const openVideo = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };
  
  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="videos-page">
      <div className="page-header">
        <div className="container">
          <h1>Videos</h1>
        </div>
      </div>
      
      <div className="container">
        <section className="section">
          <h2 className="section-title">Official Music Videos</h2>
          <div className="videos-grid">
            {videos.filter(v => v.type === "Official Music Video").map((video) => (
              <div className="video-card card" key={video.id} onClick={() => openVideo(video)}>
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-play-overlay">
                    <i className="fas fa-play"></i>
                  </div>
                  <div className="video-views">{video.views} views</div>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.type} • {video.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="section">
          <h2 className="section-title">Live Performances</h2>
          <div className="videos-grid">
            {videos.filter(v => v.type === "Live").map((video) => (
              <div className="video-card card" key={video.id} onClick={() => openVideo(video)}>
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-play-overlay">
                    <i className="fas fa-play"></i>
                  </div>
                  <div className="video-views">{video.views} views</div>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.type} • {video.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="section">
          <h2 className="section-title">Interviews & Behind The Scenes</h2>
          <div className="videos-grid">
            {videos.filter(v => v.type === "BTS" || v.type === "Interview").map((video) => (
              <div className="video-card card" key={video.id} onClick={() => openVideo(video)}>
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-play-overlay">
                    <i className="fas fa-play"></i>
                  </div>
                  <div className="video-views">{video.views} views</div>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.type} • {video.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      {selectedVideo && (
        <div className="video-modal">
          <div className="video-modal-content">
            <button className="close-modal" onClick={closeVideo}>
              <i className="fas fa-times"></i>
            </button>
            <div className="video-player">
              <div className="video-placeholder">
                <img src={selectedVideo.thumbnail} alt={selectedVideo.title} />
                <div className="video-play-button">
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </div>
            <div className="video-modal-info">
              <h2>{selectedVideo.title}</h2>
              <p>{selectedVideo.type} • {selectedVideo.date} • {selectedVideo.views} views</p>
              <div className="video-modal-actions">
                <button className="video-action-btn">
                  <i className="fas fa-thumbs-up"></i> Like
                </button>
                <button className="video-action-btn">
                  <i className="fas fa-share"></i> Share
                </button>
                <button className="video-action-btn">
                  <i className="fas fa-plus"></i> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

