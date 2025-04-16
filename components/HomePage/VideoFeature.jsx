import { routes } from "@/public/js/constants";
import Image from "next/image";
import Link from "next/link";
export default function VideoFeature() {
  return (
    <section className="video-feature side overlay section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="img-feature ">
              <Image
                src="/img/ai/videoPic.jpg"
                alt="Video Thumbnail"
                width={800}
                height={685}
              />
              <div className="video-play">
                <a
                  href="/"
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
               انتظار هر فردی برای آموزش میتونه متفاوت و متنوع باشه 
و آکادمی  و مربی باید افراد را در کنار هم با روش های آموزشی استاندارد 
رشد و  ارتقاء دهد.
این اصل نیاز مند تخصص و تجربه است و شما در این مسیر تها نیستید...
                </p>
              </div>
              <div className="b-features">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    {/* <!-- Single List Feature --> */}
                    <div className="single-list-feature">
                      <i className="fa fa-thumbs-o-up"></i>
                      <h4>    اساتید مجرب و حرفه   </h4>
                      <p>
                 قطعاً ستون اصلی آموزش اساتید هستند  ما اینجا با بهترین های هر  رشته در ایران کنار شما هستیم.
                      </p>
                    </div>
                    {/* <!--/ End Single List Feature --> */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    {/* <!-- Single List Feature --> */}
                    <div className="single-list-feature">
                      <i className="fa fa-check-square-o"></i>
                      <h4>آموزش خلاقانه</h4>
                      <p>
                      هدف  ما آموزش کاربردی  و خلاقانه جهت ییشرفت سریع تر  و باکیفیت تر دانشجویان میباشد.
                      </p>
                    </div>
                    {/* <!--/ End Single List Feature --> */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    {/* <!-- Single List Feature --> */}
                    <div className="single-list-feature">
                      <i className="fa fa-plus"></i>
                      <h4> رشته های  جدید و متنوع  </h4>
                      <p>
                   ما همیشه به دنبال رشته های جدید و متناسب با  نیاز های روز دنیا هستیم.
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
                    شما میتوانید تمامی رشته های آکادمی را به صورت حضوری وآنلاین و با خیال  راحت بگذرانید.
                      </p>
                    </div>
                    {/* <!--/ End Single List Feature --> */}
                  </div>
                </div>
              </div>
              <div className="feature-btn">
                <Link href={routes.ABOUT} className="bizwheel-btn theme-2">
                   درباره ما
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
