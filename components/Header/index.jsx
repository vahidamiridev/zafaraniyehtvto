import { routes } from "@/public/js/constants";
import Image from "next/image";
import Link from "next/link";
export default function Header (){
    return (
             <header className="header">
                    {/* <!-- Topbar --> */}
                    <div className="topbar">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-8 col-12">
                            {/* <!-- Top Contact --> */}
                            <div className="top-contact">
                              <div className="single-contact">
                                <i className="fa fa-phone"></i> تلفن : 03145367544
                              </div>
                              <div className="single-contact">
                                <i className="fa fa-envelope-open"></i>ایمیل :
                                zafaraniyehtvto@info.com{" "}
                              </div>
                              <div className="single-contact">
                                <i className="fa fa-clock-o"></i>
                                  صبح : 8 تا 13 - بعازظهر : 15 تا 21
                              </div>
                            </div>
                            {/* <!-- End Top Contact --> */}
                          </div>
                          <div className="col-lg-4 col-12">
                            <div className="topbar-right">
                              {/* <!-- Social Icons --> */}
                              <ul className="social-icons">
                                {/* <li>
                                  <a href="#">
                                    <i className="fa fa-facebook"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-linkedin"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-dribbble"></i>
                                  </a>
                                </li> */}
                              </ul>
                              {/* <!-- Right Bar --> */}
                              <div className="right-bar">
                                {/* <!-- Search Bar --> */}
                                <ul className="right-nav">
                                  <li className="top-search">
                                    <a href="#0">
                                      <i className="fa fa-search"></i>
                                    </a>
                                  </li>
                                  <li className="bar">
                                    <a className="fa fa-bars"></a>
                                  </li>
                                </ul>
                                {/* <!--/ End Search Bar --> */}
                                {/* <!-- Search Form --> */}
                                <div className="search-top">
                                  <form action="#" className="search-form" method="get">
                                    <input
                                      type="text"
                                      name="s"
                       
                                      placeholder="جستجو کنید"
                                    />
                                    <button type="submit" id="searchsubmit">
                                      <i className="fa fa-search"></i>
                                    </button>
                                  </form>
                                </div>
                                {/* <!--/ End Search Form --> */}
                              </div>
                              {/* <!--/ End Right Bar -->	 */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--/ End Topbar --> */}
                    {/* <!-- Middle Header --> */}
                    <div className="middle-header">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <div className="middle-inner">
                              <div className="row">
                                <div className="col-lg-2 col-md-3 col-12">
                                  {/* <!-- Logo --> */}
                                  <div className="logo">
                                    {/* <!-- Image Logo --> */}
                                    <div className="img-logo">
                                       <a href={routes.HOME}>
                                      آکادمی تخصصی زعفرانیه
                                        {/* <Image src="/img/logo11.png" alt="#"  width={173} height={40}  /> */}
                                      </a> 
                                    </div>
                                  </div>
                                  <div className="mobile-nav"></div>
                                </div>
                                <div className="col-lg-10 col-md-9 col-12">
                                  <div className="menu-area">
                                    {/* <!-- Main Menu --> */}
                                    <nav className="navbar navbar-expand-lg">
                                      <div className="navbar-collapse">
                                        <div className="nav-inner">
                                          <div className="menu-home-menu-container">
                                            {/* <!-- Naviagiton --> */}
                                            <ul
                                              id="nav"
                                              className="nav main-menu menu navbar-nav"
                                            >
                                              <li className="icon-active">
                                                <a href={routes.HOME}>خانه</a>
                                                {/* <ul className="sub-menu">
                                                  <li>
                                                    <a href="index-2.html">
                                                      صفحه اصلی 1
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="index2.html">
                                                      صفحه اصلی 2
                                                    </a>
                                                  </li>
                                                </ul> */}
                                              </li>
                                              <li className="icon-active">
                                                <a >خدمات ما</a>
                                                <ul className="sub-menu">
                                                  <li>
                                                    <Link href={routes.SERVICES}>
                                                      همه خدمات
                                                    </Link>
                                                  </li>
                                                  <li>
                                                <Link href={routes.LANGUAGE_EN}>
                                                         زبان انگلیسی
                                                    </Link>
                                                  </li>
                                                  <li>
                                                <Link href={routes.LANGUAGE_DU}>
                                                        زبان آلمانی
                                                    </Link>
                                                  </li>
                                                  <li>
                                                <Link href={routes.COMPUTER_GENERAL}>
                                                           کامپیوتر ( تخصصی و عمومی )
                                                    </Link>
                                                  </li>
                                                  <li>
                                                <Link href={routes.PROGRAMING_junior}>
                                                        برنامه نویسی  کودک  
                                                    </Link>
                                                  </li>
                                                  <li>
                                                <Link href={routes.PROGRAMING_PROFESSIONAL}>
                                                         برنامه نویسی پیشرفته
                                                    </Link>
                                                  </li>
                                        
                                                  <li>
                                                <Link href={routes.ART}>
                                                           هنر های تجسمی -نقاشی
                                                    </Link>
                                                  </li>
                                                  <li>
                                                <Link href={routes.WORKSHOP}>
                                                      کارگاه های آموزشی
                                                    </Link>
                                                  </li>
                                                </ul>
                                              </li>
{/*                                      
                                              <li className="icon-active">
                                                <Link href={routes.BLOGS}>وبلاگ</Link>
                                            
                                              </li> */}
                                              <li className="icon-active">
                                                <Link href={routes.ABOUT}>درباره ما</Link>
                                      
                                              </li>
                                              <li>
                                            <Link href={routes.CONTACT}>تماس با ما</Link>
                                              </li>
                                            </ul>
                                            {/* <!--/ End Naviagiton --> */}
                                          </div>
                                        </div>
                                      </div>
                                    </nav>
                                    {/* <!--/ End Main Menu -->					 */}
                                    {/* <div className="right-button">
                                      <a href="contact.html" className="bizwheel-btn">
                                        دریافت قیمت
                                      </a>
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--/ End Middle Header --> */}
                    {/* <!-- Sidebar Popup --> */}
                    <div className="sidebar-popup">
                      <div className="cross">
                        <a className="btn">
                          <i className="fa fa-close"></i>
                        </a>
                      </div>
                      <div className="single-content">
                        <h4> آکادمی تخصصی زعفرانیه</h4>
                        <p>
                        آموزشگاه زعفرانیه یک آموزشگاه تخصصی در رشته های زبان های خارجه و کامپیوتر- برنامه نویسی و هنرهای تجسمی و رشته های تخصصی فراوان دیگر میباشد
                        <br/>
                        <br/>
                            زیر  نظر سازمان فنی و حرفه ایی کشور .
                        <br/>
                        <br/>
                         با خیال راحت آموزش ببین و پیشرفت کن.
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
                            اصفهان شاهین شهر خیابان مخابرات فرعی 4 غربی  پلاک 3
                          </li>
                        </ul>
                        <div className="side-button">
                      <Link href={routes.SERVICES} className="bizwheel-btn theme-2 effect">
                              دوره های آموزشی
                          </Link>
                        </div>
                      </div>
                      <div className="single-content">
                        <h4>پیوندهای مهم</h4>
                        <ul className="links">
                          <li>
                            <a href={routes.HOME}> خانه</a>
                          </li>
                          <li>
                        <Link href={routes.SERVICES}>خدمات ما</Link>
                          </li>
                          {/* <li>
                            <Link href={routes.BLOGS}>وبلاگ و مقالات</Link>
                          </li> */}
                          <li>
                        <Link href={routes.ABOUT}> درباره ما</Link>
                          </li>
                          <li>
                        <Link href={routes.CONTACT}>تماس با ما</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!--/ Sidebar Popup -->	 */}
                  </header>
    )
}