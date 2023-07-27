import React from "react";
import firstImg from "../assets/firstImg.png";
export default function FirstSection() {
  return (
    <div id="FirstSection">
      <div className="row justify-content-md-center m-5">
        <div className="col-lg-4">
          <h1 className=" text-end"> المخدرات</h1>
          <p className="lead text-end">
            المخدرات هي مواد كيميائية تستخدم لتأثير عمل الجهاز العصبي المركزي
            وتسبب تغييرات في وظائف الجسم والعقل. تعمل المخدرات على تعديل التوازن
            الكيميائي في الدماغ، مما يؤدي إلى تأثيرات نفسية وفسيولوجية مختلفة.
          </p>
        </div>
        <div className="col-lg-4">
          <img src={firstImg} alt="firstImg" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}
