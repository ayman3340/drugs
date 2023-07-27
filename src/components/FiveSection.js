import React from "react";
import hand from "../assets/hand.png"

export default function FiveSection() {
  return (
    <div className="flexCenter flex-column my-5 " id="FiveSection">
<h2 className="my-5 text-center ">كيف تبلغ عن من يقوم بالاتجار بالمخدرات في المملكة العربية السعودية</h2>

<img
        src={hand}
        alt="firstImg"
        className="img-fluid rounded float-start m-3"
        style={{width:"50%"}}
      />



<div>
<div className="flexCenter justify-content-around align-items-center my-5">


      <p className='text-center lead' style={{width:"62%"}}>
        الاتصال بالشرطة: يُمكنك الاتصال بالشرطة المحلية عن طريق الرقم الهاتفي
        العام 999، وتقديم معلوماتك وتفاصيلك حول الشخص المشتبه به ونشاطه في توزيع
        المخدرات.
        <br />
        <br />
         قد يكون من الأفضل توضيح الموقف بشكل دقيق وتوفير أي أدلة أو
        معلومات إضافية قد تساعد الشرطة في التحقيق. الاتصال بالهيئة العامة
        لمكافحة المخدرات: يمكنك الاتصال بالهيئة العامة لمكافحة المخدرات في
        المملكة العربية السعودية على الرقم المجاني 995 وتوفير المعلومات
        والتفاصيل اللازمة حول الشخص المشتبه به ونشاطه.
        <br />
        <br />
         الإبلاغ عبر البريد
        الإلكتروني: توفر الهيئة العامة لمكافحة المخدرات خيارًا للإبلاغ عبر
        البريد الإلكتروني، حيث يمكنك إرسال التفاصيل والمعلومات إليهم عبر البريد
        الإلكتروني المخصص لذلك.
        <br />
        995@gdnc.gov.sa
      </p>
      
</div>
</div>

    </div>
  );
}
