import Image from "next/image";
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
                                      
                                      {/* <a href="index.js">
                                        <Image src="/img/logo.png" alt="#"  width={173} height={40}  />
                                      </a> */}
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
                                                <a href="/">خانه</a>
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
                                                <a href="/services">خدمات ما</a>
                                                <ul className="sub-menu">
                                                  <li>
                                                    <a href="services.html">
                                                      همه خدمات
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="service-business.html">
                                                         زبان انگلیسی
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="service-develop.html">
                                                        زبان آلمانی
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="service-market.html">
                                                         دوره های عمومی کامپیوتر
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="service-advertise.html">
                                                        برنامه نویسی  کودک  
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="service-design.html">
                                                         برنامه نویسی پیشرفته
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="service-marketing.html">
                                                       طراحی لباس (دیجیتال  )
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a href="service-marketing.html">
                                                           هنر های تجسمی -نقاشی
                                                    </a>
                                                  </li>
                                                </ul>
                                              </li>
                                     
                                              <li className="icon-active">
                                                <a href="/blogs">وبلاگ</a>
                                            
                                              </li>
                                              <li className="icon-active">
                                                <a href="/about">درباره ما</a>
                                      
                                              </li>
                                              <li>
                                                <a href="/contact">تماس با ما</a>
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
                          <a href="/services" className="bizwheel-btn theme-2 effect">
                              دوره های آموزشی
                          </a>
                        </div>
                      </div>
                      <div className="single-content">
                        <h4>پیوندهای مهم</h4>
                        <ul className="links">
                          <li>
                            <a href="/"> خانه</a>
                          </li>
                          <li>
                            <a href="/services">خدمات ما</a>
                          </li>
                          <li>
                            <a href="/blogs">وبلاگ و مقالات</a>
                          </li>
                          <li>
                            <a href="/about"> درباره ما</a>
                          </li>
                          <li>
                            <a href="/contact">تماس با ما</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!--/ Sidebar Popup -->	 */}
                  </header>
    )
}