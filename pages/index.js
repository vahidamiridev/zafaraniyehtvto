
import Image from "next/image";

export default function Home() {
  return (
    <>

      <main id="bg" style={{}}>
        {/* <!-- Boxed Layout --> */}
        <div id="page" className="site">
          {/* <!-- Preloader --> */}
          {/* <div className="preeloader">
            <div className="preloader-spinner"></div>
          </div> */}
          {/* <!--/ End Preloader --> */}

          {/* <!-- Bizwheel Options --> */}
          <div className="elena-options">
            <div className="icon inOut">
              <i className="fa fa-cog fa-spin"></i>
            </div>
            <div className="single-option">
              <h4>طرح بندی را انتخاب کنید</h4>
              <div className="select-layout">
                <a className="full-width" value="full-width" >
                  تمام صفحه
                </a>
                <a className="boxed" value="boxed" >
                  جعبه دار
                </a>
              </div>
            </div>
            <div className="single-option">
              <h4>طرح پس زمینه</h4>
              <ul className="bg-pattern">
                <li className="bg-one">
                  <a href="#">
                    <Image src="/img/bg-1.png" alt="#" width={400} height={400}  />
                  </a>
                </li>
                <li className="bg-two">
                  <a href="#">
                    <Image src="/img/bg-2.png" alt="#"  width={200} height={200}  />
                  </a>
                </li>
                <li className="bg-three">
                  <a href="#">
                    <Image src="/img/bg-3.png" alt="#"  width={412} height={412}  />
                  </a>
                </li>
                <li className="bg-four">
                  <a href="#">
                    <Image src="/img/bg-4.png" alt="#"  width={410} height={410}  />
                  </a>
                </li>
                <li className="bg-five">
                  <a href="#">
                    <Image src="/img/bg-5.png" alt="#"  width={200} height={200}  />
                  </a>
                </li>
                <li className="bg-six">
                  <a href="#">
                    <Image src="/img/bg-6.png" alt="#"  width={350} height={259}  />
                  </a>
                </li>
                <li className="bg-seven">
                  <a href="#">
                    <Image src="/img/bg-7.png" alt="#"  width={512} height={512}  />
                  </a>
                </li>
                <li className="bg-eight">
                  <a href="#">
                    <Image src="/img/bg-8.png" alt="#"  width={400} height={400}  />
                  </a>
                </li>
              </ul>
            </div>
            <div className="single-option">
              <h4>انتخاب رنگ</h4>
              <span className="skin1"></span>
              <span className="skin2"></span>
              <span className="skin3"></span>
              <span className="skin4"></span>
            </div>
          </div>
          {/* <!--/ End Bizwheel Options --> */}

          {/* <!-- Header --> */}
          <header className="header">
            {/* <!-- Topbar --> */}
            <div className="topbar">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-12">
                    {/* <!-- Top Contact --> */}
                    <div className="top-contact">
                      <div className="single-contact">
                        <i className="fa fa-phone"></i> تلفن : 03532270057
                      </div>
                      <div className="single-contact">
                        <i className="fa fa-envelope-open"></i>ایمیل :
                        setinco@gmail.com{" "}
                      </div>
                      <div className="single-contact">
                        <i className="fa fa-clock-o"></i>شروع : 8 تا 9 شب
                      </div>
                    </div>
                    {/* <!-- End Top Contact --> */}
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="topbar-right">
                      {/* <!-- Social Icons --> */}
                      <ul className="social-icons">
                        <li>
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
                        </li>
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
                              <a href="index-2.html">
                                <Image src="/img/logo.png" alt="#"  width={173} height={40}  />
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
                                        <a href="#">خانه</a>
                                        <ul className="sub-menu">
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
                                        </ul>
                                      </li>
                                      <li className="icon-active">
                                        <a href="#">خدمات ما</a>
                                        <ul className="sub-menu">
                                          <li>
                                            <a href="services.html">
                                              همه خدمات
                                            </a>
                                          </li>
                                          <li>
                                            <a href="service-business.html">
                                              استراتژی کسب و کار
                                            </a>
                                          </li>
                                          <li>
                                            <a href="service-develop.html">
                                              توسعه وب
                                            </a>
                                          </li>
                                          <li>
                                            <a href="service-market.html">
                                              تحقیقات بازار
                                            </a>
                                          </li>
                                          <li>
                                            <a href="service-advertise.html">
                                              نمونه تبلیغات
                                            </a>
                                          </li>
                                          <li>
                                            <a href="service-design.html">
                                              طراحی روند
                                            </a>
                                          </li>
                                          <li>
                                            <a href="service-marketing.html">
                                              بازاریابی دیجیتال
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li className="icon-active">
                                        <a href="#">نمونه کارها</a>
                                        <ul className="sub-menu">
                                          <li>
                                            <a href="portfolio.html">
                                              نمونه کارها
                                            </a>
                                          </li>
                                          <li>
                                            <a href="portfolio-single.html">
                                              جزئیات نمونه کار
                                            </a>
                                          </li>
                                          <li>
                                            <a href="portfolio-single-slider.html">
                                              نمونه کشویی نمونه کارها
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li className="icon-active">
                                        <a href="#">وبلاگ</a>
                                        <ul className="sub-menu">
                                          <li className="icon-active">
                                            <a href="#">طرح وبلاگ</a>
                                            <ul className="sub-menu">
                                              <li>
                                                <a href="blog-standard.html">
                                                  وبلاگ استاندارد
                                                </a>
                                              </li>
                                              <li>
                                                <a href="blog-standard-sidebar.html">
                                                  وبلاگ استاندارد کشوی
                                                </a>
                                              </li>
                                              <li>
                                                <a href="blog-grid.html">
                                                  طرح شبکه بلاگ
                                                </a>
                                              </li>
                                              <li>
                                                <a href="blog-grid-sidebar.html">
                                                  طرح شبکه بلاگ کشوی
                                                </a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li className="icon-active">
                                            <a href="#">جزئیات وبلاگ</a>
                                            <ul className="sub-menu">
                                              <li>
                                                <a href="blog-single.html">
                                                  جزئیات وبلاگ
                                                </a>
                                              </li>
                                              <li>
                                                <a href="blog-single-left.html">
                                                  نوار کناری سمت چپ
                                                </a>
                                              </li>
                                              <li>
                                                <a href="blog-single-right.html">
                                                  نوار کناری سمت راست
                                                </a>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                      <li className="icon-active">
                                        <a href="#">صفحات</a>
                                        <ul className="sub-menu">
                                          <li>
                                            <a href="about.html">درباره ما</a>
                                          </li>
                                          <li>
                                            <a href="team.html">تیم ما</a>
                                          </li>
                                          <li>
                                            <a href="pricing.html">
                                              برنامه قیمت گذاری
                                            </a>
                                          </li>
                                          <li>
                                            <a href="faqs.html">سوالات</a>
                                          </li>
                                          <li>
                                            <a href="404.html">404</a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="contact.html">تماس با ما</a>
                                      </li>
                                    </ul>
                                    {/* <!--/ End Naviagiton --> */}
                                  </div>
                                </div>
                              </div>
                            </nav>
                            {/* <!--/ End Main Menu -->					 */}
                            <div className="right-button">
                              <a href="contact.html" className="bizwheel-btn">
                                دریافت قیمت
                              </a>
                            </div>
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
                <h4>درباره ما</h4>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستوون و سطرآنچنان که لازم است
                </p>
                <ul className="address-widget-list">
                  <li className="footer-mobile-number">
                    <i className="fa fa-phone"></i>03532270057
                  </li>
                  <li className="footer-mobile-number">
                    <i className="fa fa-envelope"></i>setinco@gmail.com
                  </li>
                  <li className="footer-mobile-number">
                    <i className="fa fa-map-marker"></i>ساختمان خانه اوتارا
                  </li>
                </ul>
                <div className="side-button">
                  <a href="portfolio.html" className="bizwheel-btn theme-2 effect">
                    نمایش نمونه کارها
                  </a>
                </div>
              </div>
              <div className="single-content">
                <h4>پیوندهای مهم</h4>
                <ul className="links">
                  <li>
                    <a href="#">درباره ما</a>
                  </li>
                  <li>
                    <a href="#">خدمات ما</a>
                  </li>
                  <li>
                    <a href="#">نمونه کارها</a>
                  </li>
                  <li>
                    <a href="#">برنامه قیمت گذاری</a>
                  </li>
                  <li>
                    <a href="#">وبلاگ و اخبار</a>
                  </li>
                  <li>
                    <a href="#">تماس با ما</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--/ Sidebar Popup -->	 */}
          </header>
          {/* <!--/ End Header --> */}

          {/* <!-- Hero Slider --> */}
          <section className="hero-slider style1">
            <div className="home-slider">
              {/* <!-- Single Slider --> */}
              <div
                className="single-slider"
                style={{backgroundImage:"url('img/slider-image/slider-image1.jpg' )"}}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 col-md-8 col-12">
                      <div className="welcome-text">
                        <div className="hero-text">
                          <h4>ما همیشه آماده کمک به شما هستیم</h4>
                          <h1>طراح خلاق ما در انتظار پروژه ها</h1>
                          <div className="p-text">
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ و با استفاده از طراحان گرافیک است
                            </p>
                          </div>
                          <div className="button">
                            <a
                              href="contact.html"
                              className="bizwheel-btn theme-1 effect"
                            >
                              با ما همکاری کنید
                            </a>
                            <a
                              href="portfolio.html"
                              className="bizwheel-btn theme-2 effect"
                            >
                              نمایش نمونه کارها
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ End Single Slider --> */}
              {/* <!-- Single Slider --> */}
              <div
                className="single-slider"
                style={{backgroundImage:"url('img/slider-image/slider-image2.jpg')"}}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 col-md-8 col-12">
                      <div className="welcome-text">
                        <div className="hero-text">
                          <h4>وقت شما برای ما بسیار مهم است</h4>
                          <h1>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ
                          </h1>
                          <div className="p-text">
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ و با استفاده از طراحان گرافیک است
                            </p>
                          </div>
                          <div className="button">
                            <a
                              href="blog.html"
                              className="bizwheel-btn theme-1 effect"
                            >
                              نمایش وبلاگ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ End Single Slider --> */}
              {/* <!-- Single Slider --> */}
              <div
                className="single-slider"
                style={{ backgroundImage: "url('/img/slider-image/slider-image3.jpg')" }}

              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 col-md-8 col-12">
                      <div className="welcome-text">
                        <div className="hero-text">
                          <h4>تخصص ما در انتظار شما است</h4>
                          <h1>بهترین راه برای نمایندگی کسب و کار بعدی خود </h1>
                          <div className="p-text">
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ و با استفاده از طراحان گرافیک است
                            </p>
                          </div>
                          <div className="button">
                            <a
                              href="team.html"
                              className="bizwheel-btn theme-2 effect"
                            >
                              رهبران ما
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ End Single Slider --> */}
            </div>
          </section>
          {/* <!--/ End Hero Slider --> */}

          {/* <!-- Features Area --> */}
          <section className="features-area section-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  {/* <!-- Single Feature --> */}
                  <div className="single-feature">
                    <div className="icon-head">
                      <i className="fa fa-podcast"></i>
                    </div>
                    <h4>
                      <a href="service-single.html">طراحی خلاقانه</a>
                    </h4>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است
                    </p>
                    <div className="button">
                      <a href="service-single.html" className="bizwheel-btn">
                        <i className="fa fa-arrow-circle-o-left"></i>بیشتر بدانید
                      </a>
                    </div>
                  </div>
                  {/* <!--/ End Single Feature --> */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* <!-- Single Feature --> */}
                  <div className="single-feature">
                    <div className="icon-head">
                      <i className="fa fa-podcast"></i>
                    </div>
                    <h4>
                      <a href="service-single.html">خدمات با کیفیت</a>
                    </h4>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است
                    </p>
                    <div className="button">
                      <a href="service-single.html" className="bizwheel-btn">
                        <i className="fa fa-arrow-circle-o-left"></i>بیشتر بدانید
                      </a>
                    </div>
                  </div>
                  {/* <!--/ End Single Feature --> */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* <!-- Single Feature --> */}
                  <div className="single-feature active">
                    <div className="icon-head">
                      <i className="fa fa-podcast"></i>
                    </div>
                    <h4>
                      <a href="service-single.html">تحویل به موقع</a>
                    </h4>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است
                    </p>
                    <div className="button">
                      <a href="service-single.html" className="bizwheel-btn">
                        <i className="fa fa-arrow-circle-o-left"></i>بیشتر بدانید
                      </a>
                    </div>
                  </div>
                  {/* <!--/ End Single Feature --> */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* <!-- Single Feature --> */}
                  <div className="single-feature">
                    <div className="icon-head">
                      <i className="fa fa-podcast"></i>
                    </div>
                    <h4>
                      <a href="service-single.html">پشتیبانی 24 ساعت</a>
                    </h4>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است
                    </p>
                    <div className="button">
                      <a href="service-single.html" className="bizwheel-btn">
                        <i className="fa fa-arrow-circle-o-left"></i>بیشتر بدانید
                      </a>
                    </div>
                  </div>
                  {/* <!--/ End Single Feature --> */}
                </div>
              </div>
            </div>
          </section>
          {/* <!--/ End Features Area --> */}

          {/* <!-- Video Feature --> */}
          <section className="video-feature side overlay section-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="img-feature ">
                    <Image src="/img/why-choose.jpg" alt="Video Thumbnail"  width={800} height={685}  />
                    <div className="video-play">
                      <a
                        href="https://www.youtube.com/watch?v=RLlPLqrw8Q4"
                        className="video video-popup mfp-iframe"
                      >
                        <i className="fa fa-play"></i>
                      </a>
                      <div className="waves-block">
                        <div className="waves wave-1"></div>
                        <div className="waves wave-2"></div>
                        <div className="waves wave-3"></div>
                      </div>
                    </div>
                    <span>مشاهده در 2 دقیقه</span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="features-main ">
                    <div className="title">
                      <h2>بهترین ویژگی های ما</h2>
                      <p>
                        استودیوی ما فقط در مورد طراحی گرافیک نیست. بیشتر از این
                        است ما خدمات ارتباطی ارائه می دهیم و مسئولیت آن نیز بر
                        عهده ما است
                      </p>
                    </div>
                    <div className="b-features">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          {/* <!-- Single List Feature --> */}
                          <div className="single-list-feature">
                            <i className="fa fa-code"></i>
                            <h4>توسعه وب</h4>
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ
                            </p>
                          </div>
                          {/* <!--/ End Single List Feature --> */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          {/* <!-- Single List Feature --> */}
                          <div className="single-list-feature">
                            <i className="fa fa-html5"></i>
                            <h4>طراحی خلاقانه</h4>
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ
                            </p>
                          </div>
                          {/* <!--/ End Single List Feature --> */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          {/* <!-- Single List Feature --> */}
                          <div className="single-list-feature">
                            <i className="fa fa-newspaper-o"></i>
                            <h4>خدمات با کیفیت</h4>
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ
                            </p>
                          </div>
                          {/* <!--/ End Single List Feature --> */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          {/* <!-- Single List Feature --> */}
                          <div className="single-list-feature">
                            <i className="fa fa-coffee"></i>
                            <h4>بدون دردسر</h4>
                            <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ
                            </p>
                          </div>
                          {/* <!--/ End Single List Feature --> */}
                        </div>
                      </div>
                    </div>
                    <div className="feature-btn">
                      <a href="contact.html" className="bizwheel-btn theme-2">
                        بیشتر دانستن
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--/ End Video Feature --> */}

          {/* <!-- Services --> */}
          <section className="services section-bg section-space">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-title style2 text-center">
                    <div className="section-top">
                      <h1>
                        <span>خلاقیت</span>
                        <b>خدماتی که ما ارائه می دهیم</b>
                      </h1>
                      <h4>ما خدمات و پشتیبانی با کیفیت ارائه می دهیم ..</h4>
                    </div>
                    <div className="section-bottom">
                      <div className="text-style-two">
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  {/* <!-- Single Service --> */}
                  <div className="single-service">
                    <div className="service-head">
                      <div className="icon-bg">
                        <i className="fa fa-handshake-o"></i>
                      </div>
                      <Image src="/img/services/service-01.jpg" alt="#"  width={555} height={408}   />
                    </div>
                    <div className="service-content">
                      <h4>
                        <a href="service-business.html">استراتژی کسب و کار</a>
                      </h4>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است
                      </p>
                      <a className="btn" href="service-business.html">
                        <i className="fa fa-arrow-circle-o-left"></i>مشاهده سرویس
                      </a>
                    </div>
                  </div>
                  {/* <!--/ End Single Service --> */}
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  {/* <!-- Single Service --> */}
                  <div className="single-service">
                    <div className="service-head">
                      <div className="icon-bg">
                        <i className="fa fa-html5"></i>
                      </div>
                      <div className="featured">توسعه وب</div>
                      <Image src="/img/services/service-02.jpg" alt="#"  width={555} height={408}   />
                    </div>
                    <div className="service-content">
                      <h4>
                        <a href="service-develop.html">توسعه وب</a>
                      </h4>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است
                      </p>
                      <a className="btn" href="service-develop.html">
                        <i className="fa fa-arrow-circle-o-left"></i>مشاهده سرویس
                      </a>
                    </div>
                  </div>
                  {/* <!--/ End Single Service --> */}
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  {/* <!-- Single Service --> */}
                  <div className="single-service">
                    <div className="service-head">
                      <div className="icon-bg">
                        <i className="fa fa-cube"></i>
                      </div>
                      <Image src="/img/services/service-03.jpg" alt="#"  width={555} height={408}   />
                    </div>
                    <div className="service-content">
                      <h4>
                        <a href="service-market.html">تحقیقات بازار</a>
                      </h4>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است
                      </p>
                      <a className="btn" href="service-market.html">
                        <i className="fa fa-arrow-circle-o-left"></i>مشاهده سرویس
                      </a>
                    </div>
                  </div>
                  {/* <!--/ End Single Service --> */}
                </div>
              </div>
            </div>
          </section>
          {/* <!--/ End Services --> */}

          {/* <!-- Call To Action --> */}
          <section
            className="call-action overlay"
            style={{backgroundImage:"url('img/cta-bg.jpg')"}}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-12">
                  <div className="call-inner">
                    <h2>محصولات و خلاقیت مارک مد ماست</h2>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-12">
                  <div className="button">
                    <a href="portfolio.html" className="bizwheel-btn">
                      نمونه کارها
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--/ End Call to action --> */}

          {/* <!-- Portfolio --> */}
          <section className="portfolio section-space">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                  <div className="section-title default text-center">
                    <div className="section-top">
                      <h1>
                        <span>پروژه</span>
                        <b>آثار ما</b>
                      </h1>
                    </div>
                    <div className="section-bottom">
                      <div className="text">
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="portfolio-menu">
                    {/* <!-- Portfolio Nav --> */}
                    <ul
                      id="portfolio-nav"
                      className="portfolio-nav tr-list list-inline cbp-l-filters-work"
                    >
                      <li data-filter="*" className="cbp-filter-item active">
                        همه
                      </li>
                      <li data-filter=".animation" className="cbp-filter-item">
                        انیمیشن
                      </li>
                      <li data-filter=".branding" className="cbp-filter-item">
                        نام تجاری
                      </li>
                      <li data-filter=".business" className="cbp-filter-item">
                        کسب و کار
                      </li>
                      <li data-filter=".consulting" className="cbp-filter-item">
                        مشاوره
                      </li>
                      <li data-filter=".marketing" className="cbp-filter-item">
                        بازار یابی
                      </li>
                      <li data-filter=".seo" className="cbp-filter-item">
                        سئو
                      </li>
                    </ul>
                    {/* <!--/ End Portfolio Nav --> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="portfolio-main">
                    <div id="portfolio-item" className="portfolio-item-active">
                      <div className="cbp-item business animation">
                        {/* <!-- Single Portfolio --> */}
                        <div className="single-portfolio">
                          <div className="portfolio-head overlay">
                            <Image
                              src="/img/portfolio/portfolio-1.jpg"
                              alt="#"
                               width={600} height={417}  
                            />
                            <a className="more" href="portfolio-single.html">
                              <i className="fa fa-long-arrow-left"></i>
                            </a>
                          </div>
                          <div className="portfolio-content">
                            <h4>
                              <a href="portfolio-single.html">بازاریابی خلاق</a>
                            </h4>
                            <p>مارک ، مشاوره</p>
                          </div>
                        </div>
                        {/* <!--/ End Single Portfolio --> */}
                      </div>
                      <div className="cbp-item seo consulting">
                        {/* <!-- Single Portfolio --> */}
                        <div className="single-portfolio">
                          <div className="portfolio-head overlay">
                            <Image
                              src="/img/portfolio/portfolio-2.jpg"
                              alt="#"
                               width={600} height={417}  
                            />
                            <a className="more" href="portfolio-single.html">
                              <i className="fa fa-long-arrow-left"></i>
                            </a>
                          </div>
                          <div className="portfolio-content">
                            <h4>
                              <a href="portfolio-single.html">بازاریابی خلاق</a>
                            </h4>
                            <p>مارک ، مشاوره</p>
                          </div>
                        </div>
                        {/* <!--/ End Single Portfolio --> */}
                      </div>
                      <div className="cbp-item marketing seo">
                        {/* <!-- Single Portfolio --> */}
                        <div className="single-portfolio">
                          <div className="portfolio-head overlay">
                            <Image
                              src="/img/portfolio/portfolio-3.jpg"
                              alt="#"
                               width={600} height={417}  
                            />
                            <a className="more" href="portfolio-single.html">
                              <i className="fa fa-long-arrow-left"></i>
                            </a>
                          </div>
                          <div className="portfolio-content">
                            <h4>
                              <a href="portfolio-single.html">بازاریابی خلاق</a>
                            </h4>
                            <p>مارک ، مشاوره</p>
                          </div>
                        </div>
                        {/* <!--/ End Single Portfolio --> */}
                      </div>
                      <div className="cbp-item animation branding">
                        {/* <!-- Single Portfolio --> */}
                        <div className="single-portfolio">
                          <div className="portfolio-head overlay">
                            <Image
                              src="/img/portfolio/portfolio-4.jpg"
                              alt="#"
                               width={600} height={417}  
                            />
                            <a className="more" href="portfolio-single.html">
                              <i className="fa fa-long-arrow-left"></i>
                            </a>
                          </div>
                          <div className="portfolio-content">
                            <h4>
                              <a href="portfolio-single.html">بازاریابی خلاق</a>
                            </h4>
                            <p>مارک ، مشاوره</p>
                          </div>
                        </div>
                        {/* <!--/ End Single Portfolio --> */}
                      </div>
                      <div className="cbp-item branding consulting">
                        {/* <!-- Single Portfolio --> */}
                        <div className="single-portfolio">
                          <div className="portfolio-head overlay">
                            <Image
                              src="/img/portfolio/portfolio-5.jpg"
                              alt="#"
                               width={600} height={417}  
                            />
                            <a className="more" href="portfolio-single.html">
                              <i className="fa fa-long-arrow-left"></i>
                            </a>
                          </div>
                          <div className="portfolio-content">
                            <h4>
                              <a href="portfolio-single.html">بازاریابی خلاق</a>
                            </h4>
                            <p>مارک ، مشاوره</p>
                          </div>
                        </div>
                        {/* <!--/ End Single Portfolio --> */}
                      </div>
                      <div className="cbp-item business marketing">
                        {/* <!-- Single Portfolio --> */}
                        <div className="single-portfolio">
                          <div className="portfolio-head overlay">
                            <Image
                              src="/img/portfolio/portfolio-6.jpg"
                              alt="#"
                               width={600} height={417}  
                            />
                            <a className="more" href="portfolio-single.html">
                              <i className="fa fa-long-arrow-left"></i>
                            </a>
                          </div>
                          <div className="portfolio-content">
                            <h4>
                              <a href="portfolio-single.html">بازاریابی خلاق</a>
                            </h4>
                            <p>مارک ، مشاوره</p>
                          </div>
                        </div>
                        {/* <!--/ End Single Portfolio --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--/ End Portfolio --> */}

          {/* <!-- Testimonials --> */}
          <section
            className="testimonials section-space"
            style={{backgroundImage:"url('img/testimonial-bg.jpg')"}}
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
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است{" "}
                          <strong>لورم ایپسوم متن</strong> لورم ایپسوم متن
                          ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                          از طراحان گرافیک است
                        </p>
                        {/* <!-- Client Info --> */}
                        <div className="t-info">
                          <div className="t-left">
                            <div className="client-head">
                              <Image src="/img/testi1.png" alt="#"  width={150} height={150}  />
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
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است{" "}
                          <strong>لورم ایپسوم متن</strong> لورم ایپسوم متن
                          ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                          از طراحان گرافیک است
                        </p>
                        {/* <!-- Client Info --> */}
                        <div className="t-info">
                          <div className="t-left">
                            <div className="client-head">
                              <Image src="/img/testi2.png" alt="#"  width={150} height={150}  />
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
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است{" "}
                          <strong>لورم ایپسوم متن</strong> لورم ایپسوم متن
                          ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                          از طراحان گرافیک است
                        </p>
                        {/* <!-- Client Info --> */}
                        <div className="t-info">
                          <div className="t-left">
                            <div className="client-head">
                              <Image src="/img/testi1.png" alt="#"   width={150} height={150}/> 
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
          {/* <!--/ End Testimonials --> */}

          {/* <!-- Counterup --> */}
          <section className="counterup">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  {/* <!-- Single Counterup --> */}
                  <div className="single-counter">
                    <div className="icon">
                      <i className="fa fa-book"></i>
                    </div>
                    <div className="conter-content">
                      <div className="counter-head">
                        <h3>
                          <b className="number">105</b>
                          <span>+</span>
                        </h3>
                      </div>
                      <p>آثار کامل</p>
                    </div>
                  </div>
                  {/* <!--/ End Single Counterup --> */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* <!-- Single Counterup --> */}
                  <div className="single-counter">
                    <div className="icon">
                      <i className="fa fa-users"></i>
                    </div>
                    <div className="conter-content">
                      <div className="counter-head">
                        <h3>
                          <b className="number">5999</b>
                          <span>+</span>
                        </h3>
                      </div>
                      <p>مشتری های خوشحال</p>
                    </div>
                  </div>
                  {/* <!--/ End Single Counterup --> */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* <!-- Single Counterup --> */}
                  <div className="single-counter">
                    <div className="icon">
                      <i className="fa fa-life-ring"></i>
                    </div>
                    <div className="conter-content">
                      <div className="counter-head">
                        <h3>
                          <b className="number">5988</b>
                          <span>+</span>
                        </h3>
                      </div>
                      <p>بلیط پشتیبانی</p>
                    </div>
                  </div>
                  {/* <!--/ End Single Counterup --> */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* <!-- Single Counterup --> */}
                  <div className="single-counter">
                    <div className="icon">
                      <i className="fa fa-fire"></i>
                    </div>
                    <div className="conter-content">
                      <div className="counter-head">
                        <h3>
                          <b className="number">8569</b>
                          <span>+</span>
                        </h3>
                      </div>
                      <p>کار شرکت</p>
                    </div>
                  </div>
                  {/* <!--/ End Single Counterup --> */}
                </div>
              </div>
            </div>
          </section>
          {/* <!--/ End Counterup --> */}

          {/* <!-- Our Team --> */}
          <section className="team section-bg section-space">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-title  style2 text-center">
                    <div className="section-top">
                      <h1>
                        <span>رهبران</span>
                        <b>تیم خلاق</b>
                      </h1>
                      <h4>رهبران خبره ما منتظر شما هستند.</h4>
                    </div>
                    <div className="section-bottom">
                      <div className="text-style-two">
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-slider">
                <div className="single-slider">
                  {/* <!-- Single Team --> */}
                  <div className="single-team">
                    <div className="team-head">
                      <Image src="/img/team/team-1.jpg" alt="#"  width={360} height={310}  />
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook-official"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter-square"></i>
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
                        </li>
                      </ul>
                    </div>
                    <div className="t-content">
                      <div className="content-inner">
                        <h4 className="name">
                          <a href="#">برامون دامانا</a>
                        </h4>
                        <span className="designation">رئیس بازاریابی</span>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ End Single Team --> */}
                </div>
                <div className="single-slider">
                  {/* <!-- Single Team --> */}
                  <div className="single-team">
                    <div className="team-head">
                      <Image src="/img/team/team-2.jpg" alt="#"  width={360} height={310} priority  />
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook-official"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter-square"></i>
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
                        </li>
                      </ul>
                    </div>
                    <div className="t-content">
                      <div className="content-inner">
                        <h4 className="name">
                          <a href="#">برامون دامانا</a>
                        </h4>
                        <span className="designation">رئیس بازاریابی</span>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ End Single Team --> */}
                </div>
                <div className="single-slider">
                  {/* <!-- Single Team --> */}
                  <div className="single-team">
                    <div className="team-head">
                      <Image src="/img/team/team-3.jpg" alt="#"  width={360} height={310}  />
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook-official"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter-square"></i>
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
                        </li>
                      </ul>
                    </div>
                    <div className="t-content">
                      <div className="content-inner">
                        <h4 className="name">
                          <a href="#">برامون دامانا</a>
                        </h4>
                        <span className="designation">رئیس بازاریابی</span>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ End Single Team --> */}
                </div>
                <div className="single-slider">
                  {/* <!-- Single Team --> */}
                  <div className="single-team">
                    <div className="team-head">
                      <Image src="/img/team/team-4.jpg" alt="#"  width={360} height={310}  />
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook-official"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter-square"></i>
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
                        </li>
                      </ul>
                    </div>
                    <div className="t-content">
                      <div className="content-inner">
                        <h4 className="name">
                          <a href="#">برامون دامانا</a>
                        </h4>
                        <span className="designation">رئیس بازاریابی</span>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ End Single Team --> */}
                </div>
                <div className="single-slider">
                  {/* <!-- Single Team --> */}
                  <div className="single-team">
                    <div className="team-head">
                      <Image src="/img/team/team-5.jpg" alt="#"  width={360} height={310}  />
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook-official"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter-square"></i>
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
                        </li>
                      </ul>
                    </div>
                    <div className="t-content">
                      <div className="content-inner">
                        <h4 className="name">
                          <a href="#">برامون دامانا</a>
                        </h4>
                        <span className="designation">رئیس بازاریابی</span>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ End Single Team --> */}
                </div>
              </div>
            </div>
          </section>
          {/* <!--/ End Team --> */}

          {/* <!-- Latest Blog --> */}
          <section className="latest-blog section-space">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                  <div className="section-title default text-center">
                    <div className="section-top">
                      <h1>
                        <span>آخرین</span>
                        <b> منتشر شده</b>
                      </h1>
                    </div>
                    <div className="section-bottom">
                      <div className="text">
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="blog-latest blog-latest-slider">
                    <div className="single-slider">
                      {/* <!-- Single Blog --> */}
                      <div className="single-news ">
                        <div className="news-head overlay">
                          <span
                            className="news-img"
                            style={{backgroundImage:"url('img/blog/blog-1.jpg')"}}
                          ></span>
                          <div className="cat">
                            <a href="#" className="bizwheel-btn theme-2">
                              کسب و کار
                            </a>
                          </div>
                        </div>
                        <div className="news-body">
                          <div className="news-content">
                            <h3 className="news-title">
                              <a href="blog-single.html">
                                ما بهترین خدمات مشاوره و خلاقیت را به شما ارائه
                                می دهیم
                              </a>
                            </h3>
                            <ul className="news-meta">
                              <li className="date">
                                <i className="fa fa-calendar"></i>شهریور 1399
                              </li>
                              <li className="view">
                                <i className="fa fa-comments"></i>15
                              </li>
                              <li className="heart">
                                <i className="fa fa-heart"></i>35
                              </li>
                            </ul>
                            <div className="news-text">
                              <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                                مورد نیاز
                              </p>
                              <a href="blog-single.html" className="bizwheel-btn">
                                <i className="fa fa-angle-left"></i>ادامه مطلب
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!--/ End Single Blog --> */}
                    </div>
                    <div className="single-slider">
                      {/* <!-- Single Blog --> */}
                      <div className="single-news ">
                        <div className="news-head overlay">
                          <span
                            className="news-img"
                            style={{backgroundImage:"url('img/blog/blog-2.jpg')"}}
                          ></span>
                          <div className="cat">
                            <a href="#" className="bizwheel-btn theme-2">
                              مشاوره
                            </a>
                          </div>
                        </div>
                        <div className="news-body">
                          <div className="news-content">
                            <h3 className="news-title">
                              <a href="blog-single.html">
                                ما بهترین خدمات مشاوره و خلاقیت را به شما ارائه
                                می دهیم
                              </a>
                            </h3>
                            <ul className="news-meta">
                              <li className="date">
                                <i className="fa fa-calendar"></i>شهریور 1399
                              </li>
                              <li className="view">
                                <i className="fa fa-comments"></i>10
                              </li>
                              <li className="heart">
                                <i className="fa fa-heart"></i>55
                              </li>
                            </ul>
                            <div className="news-text">
                              <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                                مورد نیاز
                              </p>
                              <a href="blog-single.html" className="bizwheel-btn">
                                <i className="fa fa-angle-left"></i>ادامه مطلب
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!--/ End Single Blog --> */}
                    </div>
                    <div className="single-slider">
                      {/* <!-- Single Blog --> */}
                      <div className="single-news ">
                        <div className="news-head overlay">
                          <span
                            className="news-img"
                            style={{backgroundImage:"url('img/blog/blog-3.jpg')"}}
                          ></span>
                          <a href="#" className="bizwheel-btn theme-2">
                            ادامه مطلب
                          </a>
                        </div>
                        <div className="news-body">
                          <div className="news-content">
                            <h3 className="news-title">
                              <a href="blog-single.html">
                                ما بهترین خدمات مشاوره و خلاقیت را به شما ارائه
                                می دهیم
                              </a>
                            </h3>
                            <ul className="news-meta">
                              <li className="date">
                                <i className="fa fa-calendar"></i>شهریور 1399
                              </li>
                              <li className="view">
                                <i className="fa fa-comments"></i>18
                              </li>
                              <li className="heart">
                                <i className="fa fa-heart"></i>69
                              </li>
                            </ul>
                            <div className="news-text">
                              <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                                مورد نیاز
                              </p>
                              <a href="blog-single.html" className="bizwheel-btn">
                                <i className="fa fa-angle-left"></i>ادامه مطلب
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!--/ End Single Blog --> */}
                    </div>
                    <div className="single-slider">
                      {/* <!-- Single Blog --> */}
                      <div className="single-news ">
                        <div className="news-head overlay">
                          <span
                            className="news-img"
                            style={{backgroundImage:"url('img/blog/blog-4.jpg')"}}
                          ></span>
                          <a href="#" className="bizwheel-btn theme-2">
                            ادامه مطلب
                          </a>
                        </div>
                        <div className="news-body">
                          <div className="news-content">
                            <h3 className="news-title">
                              <a href="blog-single.html">
                                ما بهترین خدمات مشاوره و خلاقیت را به شما ارائه
                                می دهیم
                              </a>
                            </h3>
                            <ul className="news-meta">
                              <li className="date">
                                <i className="fa fa-calendar"></i>شهریور 1399
                              </li>
                              <li className="view">
                                <i className="fa fa-comments"></i>89
                              </li>
                              <li className="heart">
                                <i className="fa fa-heart"></i>20
                              </li>
                            </ul>
                            <div className="news-text">
                              <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                                مورد نیاز
                              </p>
                              <a href="blog-single.html" className="bizwheel-btn">
                                <i className="fa fa-angle-left"></i>ادامه مطلب
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!--/ End Single Blog --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--/ End Latest Blog --> */}

          {/* <!-- Client Area --> */}
          <div className="clients section-bg">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="partner-slider">
                    {/* <!-- Single client --> */}
                    <div className="single-slider">
                      <div className="single-client">
                        <a href="#" target="_blank">
                          <Image src="/img/client/client-1.png" alt="#"  width={200} height={75}  />
                        </a>
                      </div>
                    </div>
                    {/* <!--/ End Single client --> */}
                    {/* <!-- Single client --> */}
                    <div className="single-slider">
                      <div className="single-client">
                        <a href="#" target="_blank">
                          <Image src="/img/client/client-2.png" alt="#"  width={200} height={75}  />
                        </a>
                      </div>
                    </div>
                    {/* <!--/ End Single client --> */}
                    {/* <!-- Single client --> */}
                    <div className="single-slider">
                      <div className="single-client">
                        <a href="#" target="_blank">
                          <Image src="/img/client/client-3.png" alt="#"  width={200} height={75}  />
                        </a>
                      </div>
                    </div>
                    {/* <!--/ End Single client --> */}
                    {/* <!-- Single client --> */}
                    <div className="single-slider">
                      <div className="single-client">
                        <a href="#" target="_blank">
                          <Image src="/img/client/client-4.png" alt="#"  width={200} height={75}  />
                        </a>
                      </div>
                    </div>
                    {/* <!--/ End Single client --> */}
                    {/* <!-- Single client --> */}
                    <div className="single-slider">
                      <div className="single-client">
                        <a href="#" target="_blank">
                          <Image src="/img/client/client-5.png" alt="#"  width={200} height={75}  />
                        </a>
                      </div>
                    </div>
                    {/* <!--/ End Single client --> */}
                    {/* <!-- Single client --> */}
                    <div className="single-slider">
                      <div className="single-client">
                        <a href="#" target="_blank">
                          <Image src="/img/client/client-6.png" alt="#"  width={200} height={75}  />
                        </a>
                      </div>
                    </div>
                    {/* <!--/ End Single client --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ End Client Area --> */}

          {/* <!-- Footer --> */}
          <footer className="footer" style={{backgroundImage:"url('img/map.png')"}}>
            {/* <!-- Footer Top --> */}
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-12">
                    {/* <!-- Footer About -->		 */}
                    <div className="single-widget footer-about widget">
                      <div className="logo">
                        <div className="img-logo">
                          <a className="logo" href="index-2.html">
                            <Image
                              className="img-responsive"
                              src="/img/logo2.png"
                              alt="logo"
                              width={173} height={40} 
                            />
                          </a>
                        </div>
                      </div>
                      <div className="footer-widget-about-description">
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                      </div>
                      <div className="social">
                        {/* <!-- Social Icons --> */}
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
                      </div>
                      <div className="button">
                        <a href="#" className="bizwheel-btn">
                          درباره ما
                        </a>
                      </div>
                    </div>
                    {/* <!--/ End Footer About -->		 */}
                  </div>
                  <div className="col-lg-2 col-md-6 col-12">
                    {/* <!-- Footer Links -->		 */}
                    <div className="single-widget f-link widget">
                      <h3 className="widget-title">شرکت</h3>
                      <ul>
                        <li>
                          <a href="#">درباره ما</a>
                        </li>
                        <li>
                          <a href="#">خدمات ما</a>
                        </li>
                        <li>
                          <a href="#">نمونه کارها</a>
                        </li>
                        <li>
                          <a href="#">برنامه قیمت گذاری</a>
                        </li>
                        <li>
                          <a href="#">تماس با ما</a>
                        </li>
                      </ul>
                    </div>
                    {/* <!--/ End Footer Links -->			 */}
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    {/* <!-- Footer News --> */}
                    <div className="single-widget footer-news widget">
                      <h3 className="widget-title">صفحه وبلاگ</h3>
                      {/* <!-- Single News --> */}
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
                      {/* <!--/ End Single News --> */}
                      {/* <!-- Single News --> */}
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
                      {/* <!--/ End Single News --> */}
                    </div>
                    {/* <!--/ End Footer News -->			 */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    {/* <!-- Footer Contact -->		 */}
                    <div className="single-widget footer_contact widget">
                      <h3 className="widget-title">مخاطب</h3>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ
                      </p>
                      <ul className="address-widget-list">
                        <li className="footer-mobile-number">
                          <i className="fa fa-phone"></i>03532270057
                        </li>
                        <li className="footer-mobile-number">
                          <i className="fa fa-envelope"></i>setinco@gmail.com
                        </li>
                        <li className="footer-mobile-number">
                          <i className="fa fa-map-marker"></i>ساختمان خانه اوتارا
                        </li>
                      </ul>
                    </div>
                    {/* <!--/ End Footer Contact -->						 */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                    {/* <!-- Footer Newsletter --> */}
                    <div className="footer-newsletter">
                      <form action="#" method="post" className="newsletter-area">
                        <input type="email" placeholder="آدرس ایمیل شما" />
                        <button type="submit">ثبت نام</button>
                      </form>
                    </div>
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
                          گروه ستین
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--/ End Copyright --> */}
          </footer>
          {/* <!--/  End Footer --> */}
        </div>
        {/* <!-- End Boxed Layout --> */}
      </main>
    </>
  );
}
