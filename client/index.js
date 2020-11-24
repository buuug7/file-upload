import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import XHRUpload from "@uppy/xhr-upload";
import zh_CN from '@uppy/locales/lib/zh_CN'

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

const endpoint = "http://localhost:3000/files";

const uppy = new Uppy({
    locale: zh_CN
})
  .use(Dashboard, {
    inline: true,
    target: "#drag-drop-area",
    // trigger: "#open-uppy",
  })
  .use(XHRUpload, {
    endpoint: endpoint,
  });

uppy.on("complete", (result) => {
  console.log(
    "Upload complete! We’ve uploaded these files:",
    result.successful
  );
});
