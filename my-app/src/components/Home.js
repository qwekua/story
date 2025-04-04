import React from 'react';
import './Home.css';

export const Home = ({ setActivePage }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <p>Official Website of</p>
            <h2>Yung Story</h2>
            <div className="hero-buttons">
              <button className="btn" onClick={() => setActivePage('music')}>Latest Music</button>
              <button className="btn btn-outline" onClick={() => setActivePage('support')}>Support</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Track Section */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Track</h2>
          <div className="featured-track">
            <div className="track-artwork">
              <img src="data:image/jpeg;base64,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" alt="Album Cover" />
              <div className="play-button">
                <i className="fas fa-play"></i>
              </div>
            </div>
            <div className="track-info">
              <h3>11:11</h3>
              <p>From the The Starter album </p>
              <div className="track-links">
                <button className="streaming-link" onClick={() => window.open('https://spotify.com', '_blank')}>
                  <i className="fab fa-spotify"></i> Spotify
                </button>
                <button className="streaming-link" onClick={() => window.open('https://music.apple.com/us/album/11-11-single/1716188136', '_blank')}>
                  <i className="fab fa-apple"></i> Apple Music
                </button>
                <button className="streaming-link" onClick={() => window.open('https://www.youtube.com/watch?v=kWVr2bpk890&list=RDXlC8s1DbOB4&index=2', '_blank')}>
                  <i className="fab fa-youtube"></i> YouTube
                </button>
              </div>
              <p className="track-description">
                This is the latest single from Yung Story. Released on April 1, 2025, this track showcases the artist's unique sound and emotional depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Releases */}
<section className="latest-release">
  <div className="container">
    <h2 className="section-title">Latest Releases</h2>
    <div className="releases-grid">
      {[
        {
          title: "Awake ",
          image: "https://source.boomplaymusic.com/group10/M00/02/01/1097a4518c4d4ea689bc73b37afaa5ba_464_464.jpg",
          releaseDate: "March 12, 2024",
        },
        {
          title: "On The Street",
          image: "https://i1.sndcdn.com/artworks-1mgT8kXiVwpF1oPk-1JPcmw-t500x500.jpg",
          releaseDate: "September 10, 2022",
        },
        {
          title: "Money",
          image: "https://assets.audiomack.com/yungstory/6c89b2b129a91b9b9e8e40f9fc47aff3c0163ae3c7b0bf2a80a9db3790d8af42.jpeg",
          releaseDate: "September 10, 2021",
        },
      ].map((release, index) => (
        <div className="release-card card" key={index}>
          <div className="release-artwork">
            <img
              src={release.image}
              alt={`Release ${index + 1} - Artwork`}
            />
            <div className="play-overlay">
              <i className="fas fa-play"></i>
            </div>
          </div>
          <div className="release-info">
            <h3>{release.title}</h3>
            <p>Single • {release.releaseDate}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="view-more">
      <button className="btn" onClick={() => setActivePage('music')}>View All Music</button>
    </div>
  </div>
</section>


      {/* Video Preview */}
<section className="video-preview">
  <div className="container">
    <h2 className="section-title">Latest Video</h2>
    <div className="video-container">
      <div className="video-placeholder">
        {/* Embed YouTube video using iframe */}
        <iframe
          width="700px"
          height="500px"
          src="https://www.youtube.com/embed/Gmm7BrB5eVc?autoplay=1&mute=1" 
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Music Video"
        ></iframe>
       <h3>Awake </h3>
      <p>Official Music Video • 2024</p>
      <button className="btn" onClick={() => setActivePage('videos')}>
        Watch More Videos
      </button>
      </div>
      
    </div>
  </div>
</section>

    </>
  );
};
