import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import XHRUpload from "@uppy/xhr-upload";

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

const uppy = new Uppy()
  .use(Dashboard, {
    inline: true,
    target: "#drag-drop-area",
    // trigger: "#open-uppy",
  })
  .use(XHRUpload, {
    endpoint: "http://localhost:3000/files",
  });

console.log(uppy);

uppy.on("complete", (result) => {
  console.log(
    "Upload complete! We’ve uploaded these files:",
    result.successful
  );
});
