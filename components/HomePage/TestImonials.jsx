import Image from "next/image";
export default function TestImonials() {
    return (
      <section
         className="testimonials section-space"
         style={{ backgroundImage: "url('img/ai/testimonial.jpg')" }}
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
                   هر پدری همیشه بهترین را برای فرزندش میخواهد از طرفی آینده 
                   در پیش روی ماست و من  دوست دارم فرزندم جدا از اینکه مدرک یک دوره آموزشی را میگیرد 
                    در آن مهارت حرف زیادی برای  گفتن داشته باشه و بتونه در جامعه موفق باشه.
                   من از آموزشگاه زعفرانیه بسیار راضی هستم. 
                     </p>
                     {/* <!-- Client Info --> */}
                     <div className="t-info">
                       <div className="t-left">
                         <div className="client-head">
                           {/* <Image
                             src="/img/testi1.png"
                             alt="#"
                             width={150}
                             height={150}
                           /> */}
                         </div>
                         <h2>
                          محمد صالحی
                           <span> پدر - کارمند    </span>
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
               همیشه با یادگیری زبان های خارجه مشکل داشتم و برام عذاب آور بود و خیلی
               ناامید شورع کردم ولی بعد از گذشت مدتی باور م نمیشه که در حال  یادگیری 2  زبان هستم و دوست دارم هر چه بیشتر و بیشتر یاد بگیرم
               آموزش درست هر غیر ممکنی را ممکن میکند.ممنونم از آکادمی زعفرانیه.
                     </p>
                     {/* <!-- Client Info --> */}
                     <div className="t-info">
                       <div className="t-left">
                         <div className="client-head">
                           {/* <Image
                             src="/img/testi2.png"
                             alt="#"
                             width={150}
                             height={150}
                           /> */}
                         </div>
                         <h2>
                         مهندس سارا افشاری
                           <span>مدیر عامل / شرکت   برنا هستی  ماه نوین</span>
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
                      من بیش از سه سال است با نرم افزار های بازی سازی  مثل اسکرچ کار میکنم
                      و بسیار عاشق بازی سازی هستم از موقعی که به کلاس های برنامه نویسی اومدم
                      توانستم خیلی اصولی تر  مسیر خودم را ادامه بدم.ممنون از آموزشگاه زعفرانیه
                     </p>
                     {/* <!-- Client Info --> */}
                     <div className="t-info">
                       <div className="t-left">
                         <div className="client-head">
                           {/* <Image
                             src="/img/testi1.png"
                             alt="#"
                             width={150}
                             height={150}
                           /> */}
                         </div>
                         <h2>
                          امیر علی اکبری
                           <span>  دانش آموز /کلاس 6  </span>
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
  