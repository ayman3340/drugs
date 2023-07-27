import React from "react";

export default function Video() {
  return (
    <div className="my-5 embed-responsive embed-responsive-16by9 flexCenter">
      <iframe
        className="embed-responsive-item responsive-iframe"
        src="https://www.youtube.com/embed/utmnWaFN_Xk"
        title="هذه نتائج إدمان المخدرات."
        allowFullScreen
      ></iframe>
    </div>
  );
}
