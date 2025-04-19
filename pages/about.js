import CardMember from "@/components/CardMember";
import { members, routes } from "@/public/js/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function About() {
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
                      <Link href={routes.ABOUT}>درباره ما</Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- Bread Title --> */}
                <div className="bread-title">
                  <h2>درباره شرکت</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- / End Breadcrumb --> */}

      {/* <!-- About Us --> */}
      <section className="about-us section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-1 col-md-6 col-12">
              {/* <!-- About Video --> */}
              <div className="modern-img-feature">
                <Image
                  src="/img/about-us.jpg"
                  width={800}
                  height={728}
                  layout="responsive"
                  alt="#"
                />
                <div className="video-play">
                  <a
                    href="https://www.youtube.com/watch?v=RLlPLqrw8Q4"
                    className="video video-popup mfp-iframe"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div>
              {/* <!--/End About Video  --> */}
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div className="about-content section-title default text-left">
                <div className="section-top">
                  <h1>
                    <span>درباره ما</span>
                    <b>اکادمی چند منظوره زعفرانیه</b>
                  </h1>
                </div>
                <div className="section-bottom">
                  <div className="text">
                    <p>
                      اکادمی زعفرانیه از سال 1397 فعالیت خود را در حوزه آموزش
                      شروع کرد. این آموزشگاه زیر نظر مجموعه سازمان فنی و حرفه
                      ایی کشور می باشد و در شاخه های مختلفی مانند زبان های خارجه
                      از جمله انگلیسی وآلمانی، علوم کامپیوتر و برنامه نویسی ، و
                      هنر های تجسمی در تمامی رشته ها و همچنین نرم افزار های
                      تخصصی از جمله طراحی لباس و نقشه کشی و ... ، شاخه طراحی
                      لباس و طراحی دوخت و رشته های فراوان دیگر فعالیت دارد
                    </p>
                    <p>
                      این آکادمی اعتقاد قلبی دارد که همگی افراد صاحب استعداد خاص
                      خود هستند و نکته مهم ، شناسایی این استعداد ها و شکوفا کردن
                      آنها است و این موضوع نیاز به آموزش دارد.از طرفی آموزش باید
                      به نحوی باشد که فرد با خیال راحت با آن همراه شود و مطمئن
                      باشد مسیر و دوره آموزشی و اساتید مربوطه همان مسیر درست و
                      مستقیمی است که او را هر چه سریع تر و با آرامش به مقصد مورد
                      نظر می رساند.
                      <br />
                      <br />
                      شما در این مسیر تنها نیستید ...
                    </p>
                  </div>
                  {/* <div className="button">
									<a href="about.html" className="bizwheel-btn theme-2">آثار ما<i className="fa fa-angle-left"></i></a>
								</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/ End About Us --> */}
      <div className="container py-5">
        <h2 className="text-center mb-5">نفرات تیم ما :</h2>
        <div className="row">
                      {
                        members.map((member)=><CardMember 
                        key={member.id}
                        member={member}
                        />)
                      }
        </div>
      </div>
    </>
  );
}
