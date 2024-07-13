import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const Video3 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
			<section className="video-section">
				<div className="auto-container">
					<div className="content-box">
						<figure className="image"><img src="images/resource/video.jpg" alt=""/></figure>
						<a onClick={() => setOpen(true)} className="play-btn"><i className="icon fa fa-play" aria-hidden="true"></i></a>
					</div>
				</div>
			</section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default Video3
