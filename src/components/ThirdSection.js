import React from "react";
import armer from "../assets/armer.png";

export default function ThirdSection() {
  return (
    <div id="ThirdSection" className="">
      <div className="row justify-content-md-center m-5 align-items-center ">
        <h2 className="col-lg-5">الوقاية من المخدرات</h2>

        <div className="col-lg-3 mx-1">
          <img
            src={armer}
            alt="firstImg"
            className="img-fluid rounded float-start firstImg"
            style={{ width: "30%" }}
          />
        </div>
      </div>

      <div className="row d-flex justify-content-md-center m-5 ThirdSectionC">
        <p className="text-end lead col-lg-8 mx-5 my-3">
          التوعية: يجب توفير التوعية المستمرة حول المخاطر المرتبطة بتعاطي
          المخدرات. يمكن ذلك من خلال الحملات الإعلامية والمناهج التعليمية في
          المدارس والأنشطة التوعوية المجتمعية. بناء الثقة: يجب تعزيز الثقة بين
          الأفراد وتوفير بيئة مريحة للحديث عن المخدرات ومشاكل التعاطي. يجب أن
          يشعر الأفراد بأنهم قادرون على البحث عن المساعدة والدعم دون خوف من
          العقاب أو الإدانة. تعزيز المهارات
          <br />
          <br />
          الشخصية: يجب تعزيز المهارات الشخصية لدى الأفراد، مثل تعزيز القدرة على
          اتخاذ القرارات الصحيحة، وتحسين التحصيل الدراسي والمهارات الاجتماعية،
          وتعزيز الثقة بالنفس وبناء الهوية الشخصية.
          <br />
          <br />
          التواصل العائلي: يجب تعزيز التواصل العائلي الصحي وتوفير بيئة داعمة
          للأسرة. يمكن أن يكون الدعم العائلي والمشاركة في الأنشطة العائلية
          والتحدث بصراحة عن المخاطر المحتملة للمخدرات أدوات فعالة للوقاية.
          <br />
          <br />
          تعزيز النشاطات البديلة: يجب تعزيز النشاطات البديلة الإيجابية لدى
          الشباب، مثل المشاركة في الرياضة والفنون والأنشطة الاجتماعية، لتوفير
          مصادر تحفيز وإشغال الوقت الفارغ بطرق صحية. توفير
          <br />
          <br />
          الدعم العاطفي والعلاج: يجب توفير الدعم العاطفي والعلاج للأفراد الذين
          يعانون من مشاكل التعاطي أو الإدمان على المخدرات. يمكن أن يشمل ذلك
          الدعم النفسي والعلاج السلوكي والدوائي وبرامج الإعادة التأهيل.
        </p>
      </div>
    </div>
  );
}
