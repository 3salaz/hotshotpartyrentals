import * as React from "react";

const LightboxButton = ({ onClick }) => (
  <div sx={{ mb: 2 }}>
    <button variant="contained" onClick={onClick}>
      Open Lightbox
    </button>
  </div>
);

export default LightboxButton;