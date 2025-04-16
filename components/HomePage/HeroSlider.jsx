import { routes } from "@/public/js/constants";

export default function HeroSlider() {
  return (
        <section className="hero-slider style1">
        <div className="home-slider">
            {/* <!-- Single Slider --> */}
            <div
              className="single-slider"
              style={{
                backgroundImage: "url('img/ai/heroEnglish.png' )",
              }}
            >
              <div className="container" >
                <div className="row">
                  <div className="col-lg-7 col-md-8 col-12">
                    <div className="welcome-text">
                      <div className="hero-text">
                        <h4>با خیال راحت آموزش ببین و یشرفت کن</h4>
                        <h1>  
                           آموزش زبان انگلیسی    
                           <br/>
                           ( آنلاین و حضوری )
                           </h1>
                        <div className="p-text">
                          <p>
                                  آموزش دوره های تخصصی زبان های خارجه و کامپیوتر-برنامه نویس و هنرهای تجسمی و کلی دوره های جدید وپیشرفته دیگر ....
                                  <br/>
                                  <br/>
                                   به صورت آنلاین وحضوری
                          </p>
                        </div>
                        <div className="button">
                          <a
                            href={routes.CONTACT}
                            className="bizwheel-btn theme-1 effect"
                          >
                            تماس با ما
                          </a>
                          <a
                            href={routes.SERVICES}
                            className="bizwheel-btn theme-2 effect"
                          >
                              دوره های اموزشی
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
            style={{
              backgroundImage: "url('img/ai/heroGermany.png')",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-8 col-12">
                  <div className="welcome-text">
                    <div className="hero-text">
                      <h4>وقت شما برای ما بسیار مهم است</h4>
                      <h1>
                    آموزش زبان آلمانی 
                    <br/>
                        ( آنلاین وحضوری ) 
                      </h1>
                      <div className="p-text">
                        <p>
                          تمامی دوره های زبان خارجه به صورت ترمیک - مکالمه - آمادگی آزمون  بین المللی به صورت خصوصی وعمومی میباشند.
                        </p>
                      </div>
                      <div className="button">
                        <a
                          href={routes.CONTACT}
                          className="bizwheel-btn theme-1 effect"
                        >
                          تماس با ما
                        </a>
                        <a
                          href={routes.SERVICES}
                          className="bizwheel-btn theme-2 effect"
                        >
                            دوره های اموزشی
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
            style={{
              backgroundImage: "url('/img/ai/heroPrograming.png')",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-8 col-12">
                  <div className="welcome-text">
                    <div className="hero-text">
                      <h4>تخصص ما در انتظار شما است</h4>
                      <h1> 
                      برنامه نویسی
                      و بازی سازی
                      <br/>
                       کودک و 
                       بزرگسال
                       <br/>
                       ( آنلاین و حضوری )

                      </h1>
                      <div className="p-text">
                        <p>
                          اینار نوبت اینه که بازی خودت را بسازی ...آماده ایی ؟!!
                          <br/>
                          اگر به دنبال ورود به بازار کار بین المللی هستی باید  یک مسیر استاندارد را  شروع کنی آماده ایی ؟!!
                        </p>
                      </div>
                      <div className="button">
                        <a
                          href={routes.CONTACT}
                          className="bizwheel-btn theme-1 effect"
                        >
                          تماس با ما
                        </a>
                        <a
                          href={routes.SERVICES}
                          className="bizwheel-btn theme-2 effect"
                        >
                            دوره های اموزشی
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
    );
  }
  