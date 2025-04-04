import React, { useState } from 'react';
import './Music.css';

export const Music = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  // Sample songs data
  const songs = [
    { 
      id: 1, 
      title: "Song Title 1", 
      type: "Album", 
      album: "Album Name", 
      date: "April 2025",
      thumbnail: "https://via.placeholder.com/1280x720", 
      views: "1.2M",
      url: "https://www.youtube.com/embed/hODzVuC5YKc"
    },
    { 
      id: 2, 
      title: "Song Title 2", 
      type: "EP", 
      album: "EP Name", 
      date: "March 2025",
      thumbnail: "https://via.placeholder.com/1280x720", 
      views: "890K",
      url: "https://www.youtube.com/embed/hODzVuC5YKc"
    },
    { 
      id: 3, 
      title: "Single Song Title", 
      type: "Single", 
      album: "Single Release", 
      date: "October 2023",
      thumbnail: "https://via.placeholder.com/1280x720", 
      views: "560K",
      url: "https://www.youtube.com/embed/2Ug6-jSbQns"
    },
    { 
      id: 4, 
      title: "Song Title 4", 
      type: "Album", 
      album: "Album Name", 
      date: "January 2025",
      thumbnail: "https://via.placeholder.com/1280x720", 
      views: "420K",
      url: "https://www.youtube.com/embed/hODzVuC5YKc"
    },
    { 
      id: 5, 
      title: "Song Title 5", 
      type: "EP", 
      album: "EP Name", 
      date: "December 2022",
      thumbnail: "https://via.placeholder.com/1280x720", 
      views: "2.1M",
      url: "https://www.youtube.com/embed/4pn9ZFTqhyY"
    }
  ];

  const openSong = (song) => {
    setSelectedSong(song);
    document.body.style.overflow = 'hidden';  // Disable body scroll when modal is open
  };

  const closeSong = () => {
    setSelectedSong(null);
    document.body.style.overflow = 'auto';  // Enable body scroll again when modal is closed
  };

  return (
    <div className="music-page">
      <div className="page-header">
        <div className="container">
          <h1>Music</h1>
        </div>
      </div>

      <div className="container">
        <section className="section">
          <h2 className="section-title">EPs</h2>
          <div className="songs-grid">
            {songs.filter(song => song.type === "EP").map((song) => (
              <div className="song-card card" key={song.id} onClick={() => openSong(song)}>
                <div className="song-thumbnail">
                  <img src={song.thumbnail} alt={song.title} />
                  <div className="song-play-overlay">
                    <i className="fas fa-play"></i>
                  </div>
                  <div className="song-views">{song.views} views</div>
                </div>
                <div className="song-info">
                  <h3>{song.title}</h3>
                  <p>{song.album} • {song.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Singles</h2>
          <div className="songs-grid">
            {songs.filter(song => song.type === "Single").map((song) => (
              <div className="song-card card" key={song.id} onClick={() => openSong(song)}>
                <div className="song-thumbnail">
                  <img src={song.thumbnail} alt={song.title} />
                  <div className="song-play-overlay">
                    <i className="fas fa-play"></i>
                  </div>
                  <div className="song-views">{song.views} views</div>
                </div>
                <div className="song-info">
                  <h3>{song.title}</h3>
                  <p>{song.album} • {song.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Albums</h2>
          <div className="songs-grid">
            {songs.filter(song => song.type === "Album").map((song) => (
              <div className="song-card card" key={song.id} onClick={() => openSong(song)}>
                <div className="song-thumbnail">
                  <img src={song.thumbnail} alt={song.title} />
                  <div className="song-play-overlay">
                    <i className="fas fa-play"></i>
                  </div>
                  <div className="song-views">{song.views} views</div>
                </div>
                <div className="song-info">
                  <h3>{song.title}</h3>
                  <p>{song.album} • {song.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {selectedSong && (
        <div className="song-modal" onClick={closeSong}>
          <div className="song-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeSong}>
              <i className="fas fa-times"></i>
            </button>
            <div className="song-player">
              <iframe 
                src={selectedSong.url} 
                frameBorder="0" 
                title={`${selectedSong.title} Video`}
                allowFullScreen
                width="100%" 
                height="400px"
              ></iframe>
            </div>
            <div className="song-modal-info">
              <h2>{selectedSong.title}</h2>
              <p>{selectedSong.album} • {selectedSong.date} • {selectedSong.views} views</p>
              <div className="song-modal-actions">
                <button className="song-action-btn">
                  <i className="fas fa-thumbs-up"></i> Like
                </button>
                <button className="song-action-btn">
                  <i className="fas fa-share"></i> Share
                </button>
                <button className="song-action-btn">
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

