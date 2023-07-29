import React from "react";
import doctor from "../assets/doctor.png";

export default function FourSection() {
  return (
    <div className="flexCenter flex-column" id="FourSection">
      <div
        className="flexCenter justify-content-around my-5 FourSectionC"
        style={{ width: "62%" }}
      >
        <img
          src={doctor}
          alt="firstImg"
          className="img-fluid rounded float-start"
          style={{ width: "20%" }}
        />

        <h2 className="my-5 text-center">علاج ادمان المخدرات</h2>

        <img
          src={doctor}
          alt="firstImg"
          className="img-fluid rounded float-start"
          style={{ width: "20%" }}
        />
      </div>
      <p className="text-center lead" style={{ width: "62%" }}>
        علاج ادمان المخدرات يشمل عدة مراحل وأنماط من العناية الصحية والدعم
        النفسي والاجتماعي. يختلف نهج العلاج باختلاف نوع المخدرات ومدى التعاطي
        واحتياجات الفرد. إليك بعض الطرق الشائعة لعلاج ادمان المخدرات:
        <br />
        <br />
        العلاج السلوكي المعرفي (Cognitive Behavioral Therapy - CBT): يهدف إلى
        مساعدة الفرد في التعرف على السلوكيات السلبية والأفكار المضرة المرتبطة
        بالتعاطي وتعلم استبدالها بسلوكيات صحية وإيجابية.
        <br />
        <br />
        الدعم النفسي والعاطفي: يشمل الاستشارة النفسية والجلسات الاستشارية
        الفردية والجماعية لمساعدة الشخص على التغلب على التحديات النفسية
        والعاطفية المرتبطة بالإدمان.
        <br />
        <br />
        الأدوية: قد يتم استخدام أدوية خاصة للمساعدة في تخفيف أعراض الانسحاب
        والحد من الرغبة في التعاطي.
        <br />
        <br />
        المجموعات الدعم: الانضمام إلى مجموعات دعم محلية يمكن أن يكون له تأثير
        إيجابي، حيث يشارك الأفراد الذين يعانون من التحديات ذاتها تجاربهم ويدعمون
        بعضهم البعض.
        <br />
        <br />
        العلاج الوقائي: يهدف إلى تقديم المعلومات والتوعية حول المخاطر المرتبطة
        بالمخدرات وكيفية تجنبها.
        <br />
        <br />
         البرامج العلاجية السكنية (Inpatient
        Rehabilitation): في بعض الحالات الشديدة، يمكن أن تكون البرامج العلاجية
        السكنية ذات فائدة، حيث يقضي المريض فترة زمنية في بيئة داعمة وخالية من
        المخدرات.
      </p>
    </div>
  );
}
