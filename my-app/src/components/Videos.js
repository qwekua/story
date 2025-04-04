import React, { useEffect, useState } from 'react';
import './Videos.css';
import { X } from 'lucide-react';
import { fetchVideos } from '../services/services';



export const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [newVideos, setNewVideos] = useState();

  const fetchNewVideos = async () => {
    try {
      setIsLoading(true);
      const data = await fetchVideos(); // Fetch from PocketBase

      // Extract the correct video ID
      const updatedVideos = data.map(video => ({
        ...video,
        id: video.thumbnail.split("/").pop(), // Extracts video ID from the YouTube URL
      }));
      setNewVideos(updatedVideos);
      setIsLoading(false);
    } catch (error) {
      console.log("Error", error)
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchNewVideos();
  }, []);


  console.log("New videos", newVideos)
  console.log("Length of videos", newVideos?.length)

  // Sample videos data
  const videos = [
    {
      id: "2Ug6-jSbQns",
      title: "Awake Short video",
      type: "Live",
      date: "October 2023",
      thumbnail: "https://img.youtube.com/vi/2Ug6-jSbQns/hqdefault.jpg",
      views: "560K"
    },
    {
      id: "hODzVuC5YKc",
      title: "Behind The Scenes",
      type: "BTS",
      date: "January 2025",
      thumbnail: "https://img.youtube.com/vi/hODzVuC5YKc/hqdefault.jpg",
      views: "420K"
    },
    {
      id: "placeholder",
      title: "Music Video Title 3",
      type: "Official Music Video",
      date: "December 2024",
      thumbnail: "https://via.placeholder.com/1280x720",
      views: "2.1M"
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

  if (isLoading) {
    return <h1>Loading Videos...</h1>;
  }

  return (
    <div className="videos-page">
      <div className="page-header">
        <div className="container">
          <h1>Videos</h1>
        </div>
      </div>

      <div className="container">
        <section className="section">
          <h2 className="section-title">Videos</h2>
          <div className="videos-grid">
            {newVideos?.length > 0 && newVideos.map((video) => (
              <div className="video-card card" key={video.id} onClick={() => openVideo(video)}>
                <div className="video-thumbnail">
                  <img
                    src={
                      video.thumbnail.includes("youtube.com")
                        ? `https://img.youtube.com/vi/${video.thumbnail.split("/").pop()}/hqdefault.jpg`
                        : video.thumbnail
                    }
                    alt={video.title}
                    onError={(e) => e.target.src = "https://via.placeholder.com/1280x720"}
                  />

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
              <X size={30} />
            </button>
            <div className="video-player">
              {selectedVideo.id !== "placeholder" ? (
                <iframe
                  width="100%"
                  height="400px"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ) : (
                <img src={selectedVideo.thumbnail} alt={selectedVideo.title} />
              )}
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
