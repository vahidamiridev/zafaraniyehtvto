import { routes } from "@/public/js/constants";
import Image from "next/image";
import Link from "next/link";
export default function Portfolio() {
  return (
    <section className="portfolio section-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
            <div className="section-title default text-center">
              <div className="section-top">
                <h1>
                  <span>کاربردی</span>
                  <b> دوره های آموزشی</b>
                </h1>
              </div>
              <div className="section-bottom">
                <div className="text">
                  <p>
آموزش در هر سنی  و با هر  سطح از توانایی یک
 امر واجب و همیشگی است و سعی کن همیشه یک مهارت جدید یادبگیری و یا اگر مهارتی رو 
بلد هستی خودت رو در اون مهارت به روز کنی 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="portfolio-menu">
              <ul
                id="portfolio-nav"
                className="portfolio-nav tr-list list-inline cbp-l-filters-work"
              >
                <li
                //  data-filter="*"
                 className="cbp-filter-item active">
                  زبان انگلیسی
                </li>
                <li 
                // data-filter=".animation"
                 className="cbp-filter-item">
                  زبان آلمانی
                </li>
                <li 
                // data-filter=".branding"
                 className="cbp-filter-item">
                   کامپیوتر
                </li>
                <li 
                // data-filter=".business"
                 className="cbp-filter-item">
                   برنامه نویسی  
                </li>
        
                <li 
                // data-filter=".marketing"
                 className="cbp-filter-item">
                   هنر های تجسمی
                </li>
                <li 
                // data-filter=".seo"
                 className="cbp-filter-item">
                  نرم افزار های تخصصی
                </li>
              </ul>
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
                        src="/img/ai/germaniDoughter.webp"
                        alt="#"
                        width={600}
                        height={417}
                      />
                      <a className="more" href={routes.LANGUAGE_DU}>
                        <i className="fa fa-long-arrow-left"></i>
                      </a>
                    </div>
                    <div className="portfolio-content">
                      <h4>
                    <Link href={routes.LANGUAGE_DU}> زبان آلمانی</Link>
                      </h4>
                      <p>  حضوری - آنلاین </p>
                    </div>
                  </div>
                  {/* <!--/ End Single Portfolio --> */}
                </div>
                <div className="cbp-item seo consulting">
                  {/* <!-- Single Portfolio --> */}
                  <div className="single-portfolio">
                    <div className="portfolio-head overlay">
                      <Image
                        src="/img/ai/english-language.png"
                        alt="#"
                        width={600}
                        height={417}
                      />
                      <a className="more" href={routes.LANGUAGE_EN}>
                        <i className="fa fa-long-arrow-left"></i>
                      </a>
                    </div>
                    <div className="portfolio-content">
                      <h4>
                    <Link href={routes.LANGUAGE_EN}> زبان انگیسی</Link>
                      </h4>
                      <p>  حضوری - آنلاین </p>

                    </div>
                  </div>
                  {/* <!--/ End Single Portfolio --> */}
                </div>
                <div className="cbp-item marketing seo">
                  {/* <!-- Single Portfolio --> */}
                  <div className="single-portfolio">
                    <div className="portfolio-head overlay">
                      <Image
                        src="/img/ai/computer.webp"
                        alt="#"
                        width={600}
                        height={417}
                      />
                      <a className="more" href={routes.COMPUTER_GENERAL}>
                        <i className="fa fa-long-arrow-left"></i>
                      </a>
                    </div>
                    <div className="portfolio-content">
                      <h4>
                    <Link href={routes.COMPUTER_GENERAL}> کامپیوتر (عمومی- تخصصی)</Link>
                      </h4>
                      <p>  حضوری - آنلاین </p>

                    </div>
                  </div>
                  {/* <!--/ End Single Portfolio --> */}
                </div>
                <div className="cbp-item animation branding">
                  {/* <!-- Single Portfolio --> */}
                  <div className="single-portfolio">
                    <div className="portfolio-head overlay">
                      <Image
                        src="/img/ai/developer.webp"
                        alt="#"
                        width={600}
                        height={417}
                      />
                      <a className="more" href={routes.PROGRAMING_junior}>
                        <i className="fa fa-long-arrow-left"></i>
                      </a>
                    </div>
                    <div className="portfolio-content">
                      <h4>
                    <Link href={routes.PROGRAMING_junior}> برنامه نویسی</Link>
                      </h4>
                      <p>  حضوری - آنلاین </p>
                    </div>
                  </div>
                  {/* <!--/ End Single Portfolio --> */}
                </div>
                <div className="cbp-item branding consulting">
                  {/* <!-- Single Portfolio --> */}
                  <div className="single-portfolio">
                    <div className="portfolio-head overlay">
                      <Image
                        src="/img/ai/painting.webp"
                        alt="#"
                        width={600}
                        height={417}
                      />
                      <a className="more" href={routes.ART}>
                        <i className="fa fa-long-arrow-left"></i>
                      </a>
                    </div>
                    <div className="portfolio-content">
                      <h4>
                        <Link href={routes.ART}> هنر های تجسمی</Link>
                      </h4>
                      <p>  حضوری - آنلاین </p>
                    </div>
                  </div>
                  {/* <!--/ End Single Portfolio --> */}
                </div>
                <div className="cbp-item business marketing">
                  {/* <!-- Single Portfolio --> */}
                  <div className="single-portfolio">
                    <div className="portfolio-head overlay">
                      <Image
                        src="/img/ai/workshop.webp"
                        alt="#"
                        width={600}
                        height={417}
                      />
                      <a className="more" href={routes.WORKSHOP}>
                        <i className="fa fa-long-arrow-left"></i>
                      </a>
                    </div>
                    <div className="portfolio-content">
                      <h4>
                        <a  href={routes.WORKSHOP}>کارگاه های آموزشی (رایگان)</a>
                      </h4>
                      <p>  حضوری - آنلاین </p>
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
