import Image from "next/image";
export default function Portfolio() {
  return (
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
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
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
                        width={600}
                        height={417}
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
                        width={600}
                        height={417}
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
                        width={600}
                        height={417}
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
                        width={600}
                        height={417}
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
                        width={600}
                        height={417}
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
                        width={600}
                        height={417}
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
  );
}
