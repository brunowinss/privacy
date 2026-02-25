import React from 'react';
import './MediaGrid.css';

const MediaGrid = ({ posts }) => {
    return (
        <div className="media-grid">
            {posts.map(post => (
                <div key={post.id} className="media-item">
                    <div className="media-ratio-box">
                        <div className="media-content-wrapper">
                            {post.imageUrl ? (
                                <img
                                    src={post.imageUrl}
                                    alt=""
                                    className={post.locked ? 'blurred' : ''}
                                />
                            ) : (
                                <div className="media-placeholder" />
                            )}

                            {post.locked && (
                                <div className="media-lock-overlay">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 17V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.5 10H16.5C18.1569 10 19.5 11.3431 19.5 13V18C19.5 19.6569 18.1569 21 16.5 21H7.5C5.84315 21 4.5 19.6569 4.5 18V13C4.5 11.3431 5.84315 10 7.5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.5 10V7C7.5 4.51472 9.51472 2.5 12 2.5V2.5C14.4853 2.5 16.5 4.51472 16.5 7V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MediaGrid;
