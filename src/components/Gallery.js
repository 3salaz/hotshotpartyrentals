import React from "react";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { LightboxBtn } from "../components";
import { advancedSlides } from "../data/slides";

const Gallery = () => {
  const [advancedExampleOpen, setAdvancedExampleOpen] = React.useState(false);

  return (
    <>
      <Lightbox
        className="absolute"
        open={advancedExampleOpen}
        close={() => setAdvancedExampleOpen(false)}
        slides={advancedSlides}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />

      <LightboxBtn onClick={() => setAdvancedExampleOpen(true)} />

    </>
  );
};

export default Gallery;
