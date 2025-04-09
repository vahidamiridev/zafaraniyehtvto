import Image from "next/image";
export default function TestImonials() {
    return (
      <section
         className="testimonials section-space"
         style={{ backgroundImage: "url('img/testimonial-bg.jpg')" }}
       >
         <div className="container">
           <div className="row">
             <div className="col-lg-6 col-md-9 col-12">
               <div className="section-title default text-left">
                 <div className="section-top">
                   <h1>
                     <b>مشتریان راضی ما</b>
                   </h1>
                 </div>
                 <div className="section-bottom">
                   <div className="text">
                     <p>برخی از مشتریان عالی و بررسی آنها</p>
                   </div>
                 </div>
               </div>
               <div className="testimonial-inner">
                 <div className="testimonial-slider">
                   {/* <!-- Single Testimonial --> */}
                   <div className="single-slider">
                     <ul className="star-list">
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                     </ul>
                     <p>
                       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                       و با استفاده از طراحان گرافیک است{" "}
                       <strong>لورم ایپسوم متن</strong> لورم ایپسوم متن ساختگی با
                       تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                       گرافیک است
                     </p>
                     {/* <!-- Client Info --> */}
                     <div className="t-info">
                       <div className="t-left">
                         <div className="client-head">
                           <Image
                             src="/img/testi1.png"
                             alt="#"
                             width={150}
                             height={150}
                           />
                         </div>
                         <h2>
                           جولیاس دین{" "}
                           <span>مدیر عامل / فناوری اطلاعات خلاق</span>
                         </h2>
                       </div>
                       <div className="t-right">
                         <div className="quote">
                           <i className="fa fa-quote-right"></i>
                         </div>
                       </div>
                     </div>
                   </div>
                   {/* <!-- / End Single Testimonial --> */}
                   {/* <!-- Single Testimonial --> */}
                   <div className="single-slider">
                     <ul className="star-list">
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                     </ul>
                     <p>
                       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                       و با استفاده از طراحان گرافیک است{" "}
                       <strong>لورم ایپسوم متن</strong> لورم ایپسوم متن ساختگی با
                       تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                       گرافیک است
                     </p>
                     {/* <!-- Client Info --> */}
                     <div className="t-info">
                       <div className="t-left">
                         <div className="client-head">
                           <Image
                             src="/img/testi2.png"
                             alt="#"
                             width={150}
                             height={150}
                           />
                         </div>
                         <h2>
                           جولیاس دین{" "}
                           <span>مدیر عامل / فناوری اطلاعات خلاق</span>
                         </h2>
                       </div>
                       <div className="t-right">
                         <div className="quote">
                           <i className="fa fa-quote-right"></i>
                         </div>
                       </div>
                     </div>
                   </div>
                   {/* <!-- / End Single Testimonial --> */}
                   {/* <!-- Single Testimonial --> */}
                   <div className="single-slider">
                     <ul className="star-list">
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                       <li>
                         <i className="fa fa-star"></i>
                       </li>
                     </ul>
                     <p>
                       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                       و با استفاده از طراحان گرافیک است{" "}
                       <strong>لورم ایپسوم متن</strong> لورم ایپسوم متن ساختگی با
                       تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                       گرافیک است
                     </p>
                     {/* <!-- Client Info --> */}
                     <div className="t-info">
                       <div className="t-left">
                         <div className="client-head">
                           <Image
                             src="/img/testi1.png"
                             alt="#"
                             width={150}
                             height={150}
                           />
                         </div>
                         <h2>
                           جولیاس دین{" "}
                           <span>مدیر عامل / فناوری اطلاعات خلاق</span>
                         </h2>
                       </div>
                       <div className="t-right">
                         <div className="quote">
                           <i className="fa fa-quote-right"></i>
                         </div>
                       </div>
                     </div>
                   </div>
                   {/* <!-- / End Single Testimonial --> */}
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
    );
  }
  