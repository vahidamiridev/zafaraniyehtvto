import { routes } from "@/public/js/constants";
import Image from "next/image";
import Link from "next/link";
export default function Footer (){
    return (
        <footer className="footer" style={{backgroundImage:"url('/img/map.png')"}}>
        {/* <!-- Footer Top --> */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* <!-- Footer About -->		 */}
                <div className="single-widget footer-about widget">
                  <div className="logo">
                    <div className="img-logo">
                      <a className="logo" href={routes.HOME}>
                      آکادمی تخصصی زعفرانیه
                        {/* <Image
                          className="img-responsive"
                          src="/img/logo2.png"
                          alt="logo"
                          width={173} height={40} 
                        /> */}
                      </a>
                    </div>
                  </div>
                  <div className="footer-widget-about-description">
                    <p>
                    آموزشگاه زعفرانیه یک آموزشگاه تخصصی در رشته های زبان های خارجه و کامپیوتر- برنامه نویسی و هنرهای تجسمی و رشته های تخصصی فراوان دیگر میباشد
               <br/>
               زیر نظر سازمان فنی و حرفه ایی کشور
               <br/>
               <br/>
               با خیال راحت آموزش ببین و پیشرفت کن.
               <br/>
                    </p>
                  </div>
                  {/* <div className="social">
                    <ul className="social-icons">
                      <li>
                        <a className="facebook" href="#" target="_blank">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#" target="_blank">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="linkedin" href="#" target="_blank">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a className="pinterest" href="#" target="_blank">
                          <i className="fa fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a className="instagram" href="#" target="_blank">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  {/* <div className="button">
                    <a href="#" className="bizwheel-btn">
                      درباره ما
                    </a>
                  </div> */}
                </div>
                {/* <!--/ End Footer About -->		 */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* <!-- Footer Links -->		 */}
                <div className="single-widget f-link widget">
                  <h3 className="widget-title">پیوندهای مهم</h3>
                  <ul>
                    <li>
                      <a href={routes.HOME}> خانه</a>
                    </li>
                    <li>
                  <Link href={routes.SERVICES}> دوره های آموزشی</Link>
                    </li>
                    <li>
                      <Link href={routes.BLOGS}> وبلاگ و مقالات </Link>
                    </li>
                    <li>
                      <Link href={routes.ABOUT}>درباره ما</Link>
                    </li>
                    <li>
                      <Link href={routes.CONTACT}>تماس با ما</Link>
                    </li>
                  </ul>
                </div>
                {/* <!--/ End Footer Links -->			 */}
              </div>
              <div className="col-lg-1 col-md-6 col-12">
                {/* <!-- Footer News --> */}
                {/* <div className="single-widget footer-news widget">
                  <h3 className="widget-title">صفحه وبلاگ</h3>
                  <div className="single-f-news">
                    <div className="post-thumb">
                      <a href="#">
                        <Image src="/img/blog/blog-3.jpg" alt="#"   width={700} height={530}/> 
                      </a>
                    </div>
                    <div className="content">
                      <p className="post-meta">
                        <time className="post-date">
                          <i className="fa fa-clock-o"></i>15 شهریور 1399
                        </time>
                      </p>
                      <h4 className="title">
                        <a href="blog-sngle.html">
                          ما بهترین خدمات مشاوره و خلاقیت را به شما ارائه می
                          دهیم
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="single-f-news">
                    <div className="post-thumb">
                      <a href="#">
                        <Image src="/img/blog/blog-4.jpg" alt="#"   width={700} height={530}/> 
                      </a>
                    </div>
                    <div className="content">
                      <p className="post-meta">
                        <time className="post-date">
                          <i className="fa fa-clock-o"></i>15 شهریور 1399
                        </time>
                      </p>
                      <h4 className="title">
                        <a href="blog-sngle.html">
                          ما بهترین خدمات مشاوره و خلاقیت را به شما ارائه می
                          دهیم
                        </a>
                      </h4>
                    </div>
                  </div>
                </div> */}
                {/* <!--/ End Footer News -->			 */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* <!-- Footer Contact -->		 */}
                <div className="single-widget footer_contact widget">
                  <h3 className="widget-title">تماس با</h3>
                  <p>
                   بی صبرانه منتظر حضور و تماس  شما عزیزان هستیم.
                  </p>
                  <ul className="address-widget-list">
                    <li className="footer-mobile-number">
                      <i className="fa fa-phone"></i>03145367544
                    </li>
                    <li className="footer-mobile-number">
                      <i className="fa fa-envelope"></i>zafaraniyeh@info.com
                    </li>
                    <li className="footer-mobile-number">
                      <i className="fa fa-map-marker"></i> 
                      شاهین شهر خیابان مخابرات فرعی 4 غربی پلاک 3 
                    </li>
                  </ul>
                </div>
                {/* <!--/ End Footer Contact -->						 */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                {/* <!-- Footer Newsletter --> */}
                {/* <div className="footer-newsletter">
                  <form action="#" method="post" className="newsletter-area">
                    <input type="email" placeholder="آدرس ایمیل شما" />
                    <button type="submit">ثبت نام</button>
                  </form>
                </div> */}
                {/* <!--/ End Footer Newsletter --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Copyright --> */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright-content">
                  {/* <!-- Copyright Text --> */}
                  <p>
                    © طراحی و توسعه توسط{" "}
                    <a target="_blank" href="#">
                         : مهندس وحید امیری     
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/ End Copyright --> */}
      </footer>
    )
}