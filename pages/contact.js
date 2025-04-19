import Layout from "@/components/Layout";
import { routes } from "@/public/js/constants";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      {/* <!-- Breadcrumb --> */}
      <div
        className="breadcrumbs overlay"
        style={{ backgroundImage: "url('img/breadcrumb.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bread-inner">
                {/* <!-- Bread Menu --> */}
                <div className="bread-menu">
                  <ul>
                    <li>
                      <a href={routes.HOME}>خانه</a>
                    </li>
                    <li>
                      <Link href={routes.CONTACT}>تماس با ما</Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- Bread Title --> */}
                <div className="bread-title">
                  <h2>آدرس ما</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--/ End Breadcrumb --> */}

      {/* <!-- Contact Us --> */}
      <section className="contact-us section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-12  box-map">
              <div className="contact-map">
				نقشه :
                <div id="myMap" className="map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.8156791399265!2d51.55287543050374!3d32.86476773776982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbdc506620094c3%3A0x4f2ef36fbd58aaa5!2sIsfahan%20Province%2C%20Shahin%20Shahr%2C%20Beheshti%2C%20VH83%2B24P%2C%20Iran!5e0!3m2!1sen!2sus!4v1744880461917!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
              </div>
              {/* <!-- Contact Form --> */}
              {/* <div className="contact-form-area m-top-30">
                <h4>در تماس باشید</h4>
                <form className="form" method="post" action="#">
                  <div
                    className="alert alert-success contact_msg"
                    style={{ display: "none" }}
                    role="alert"
                  ></div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <div className="icon">
                          <i className="fa fa-user"></i>
                        </div>
                        <input
                          type="text"
                          name="first_name"
                          placeholder="نام"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <div className="icon">
                          <i className="fa fa-user"></i>
                        </div>
                        <input
                          type="text"
                          name="last_name"
                          placeholder="نام خانوادگی"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <div className="icon">
                          <i className="fa fa-envelope"></i>
                        </div>
                        <input
                          type="email"
                          name="email"
                          placeholder="ایمیل را وارد کنید"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <div className="icon">
                          <i className="fa fa-tag"></i>
                        </div>
                        <input
                          type="text"
                          name="subject"
                          placeholder="موضوع را تایپ کنید"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group textarea">
                        <div className="icon">
                          <i className="fa fa-pencil"></i>
                        </div>
                        <textarea
                          type="textarea"
                          name="message"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group button">
                        <button type="submit" className="bizwheel-btn theme-2">
                          ارسال
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div> */}
              {/* <!--/ End contact Form --> */}
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <div className="contact-box-main m-top-30">
                <div className="contact-title">
                  <h2>با ما تماس بگیرید</h2>
                  <p>
                    آموزشگاه زعفرانیه یک آموزشگاه تخصصی در رشته های زبان های
                    خارجه و کامپیوتر- برنامه نویسی و هنرهای تجسمی و رشته های
                    تخصصی فراوان دیگر میباشد
                    <br />
                    زیر نظر سازمان فنی و حرفه ایی کشور .
                    <br />
                    <br />
                    با خیال راحت آموزش ببین و پیشرفت کن.
                  </p>
                </div>
                {/* <!-- Single Contact --> */}
                <div className="single-contact-box">
                  <div className="c-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="c-text">
                    <h4>ساعت کار</h4>
                    <p>
                    اصفهان - شاهین شهر- خیابان مخابرات - فرعی 4غربی - پلاک 3
                    </p>
                  </div>
                </div>
                {/* <!--/ End Single Contact --> */}
                {/* <!-- Single Contact --> */}
                <div className="single-contact-box">
                  <div className="c-icon">
                    <i className="fa fa-clock-o"></i>
                  </div>
                  <div className="c-text">
                    <h4>ساعت کار</h4>
                    <p>
                      شنبه - پنجشنبه
                
                      صبح 8-13 و بعدازظهر 15 -21{" "}
                    </p>
                  </div>
                </div>
                {/* <!--/ End Single Contact --> */}
                {/* <!-- Single Contact --> */}
                <div className="single-contact-box">
                  <div className="c-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="c-text">
                    <h4>اکنون با ما تماس بگیرید</h4>
                    <p>
                      تلفن:45367544-031
                      {/* <br/> موبایل: 093 */}
                    </p>
                  </div>
                </div>
                {/* <!--/ End Single Contact --> */}
                {/* <!-- Single Contact --> */}
                <div className="single-contact-box">
                  <div className="c-icon">
                    <i className="fa fa-envelope-o"></i>
                  </div>
                  <div className="c-text">
                    <h4>ایمیل</h4>
                    <p>zafaraniyehtvto@info.com</p>
                  </div>
                </div>
                <div className="single-contact-box">
                  <div className="c-icon">
                    <i className="fa fa-instagram"></i>
                  </div>
                  <div className="c-text">
                    <h4>اینستاگرام</h4>
                    <p>zafaraniyehtvto.ir</p>
                  </div>
                </div>
                {/* <!--/ End Single Contact --> */}
                {/* <div className="button">
								<a href="#" className="bizwheel-btn theme-1">آثار ما<i className="fa fa-angle-right"></i></a>
							</div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/ End Contact Us --> */}

      {/* <!-- Google Map --> */}

      {/* <!--/ End Google Map --> */}
    </>
  );
}
