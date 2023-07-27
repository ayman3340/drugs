import React from 'react'
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";

export default function Book() {
  return (
    <div>
      <h1 className='text-center font-bold m-5'>افضل الكتب للمساعدة في علاج ادمان المخدرات</h1>
      <div className='row  m-5 justify-content-center align-items-center'>

  
<div className="card m-5" style={{width: '18rem' , background:"rgba(255, 0, 0, 0)" , border:"solid rgba(255, 0, 0, 0)"}} >
  <img className="card-img-top" src={book1} alt="profile"  />
  <div className="card-body"style={{background:"rgba(255, 0, 0, 0)" , border:"solid rgba(255, 0, 0, 0)"}} >
  </div>
</div>
<div className="card m-5" style={{width: '18rem' , background:"rgba(255, 0, 0, 0)" , border:"solid rgba(255, 0, 0, 0)"}} >
  <img className="card-img-top" src={book2} alt="profile"  />
  <div className="card-body"style={{background:"rgba(255, 0, 0, 0)" , border:"solid rgba(255, 0, 0, 0)"}} >
  </div>
</div>
<div className="card m-5" style={{width: '18rem' , background:"rgba(255, 0, 0, 0)" , border:"solid rgba(255, 0, 0, 0)"}} >
  <img className="card-img-top" src={book3} alt="profile"  />
  <div className="card-body"style={{background:"rgba(255, 0, 0, 0)" , border:"solid rgba(255, 0, 0, 0)"}} >
  </div>
</div>


           </div>
        
    </div>
  )
}
