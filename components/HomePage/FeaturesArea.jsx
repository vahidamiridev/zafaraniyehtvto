import { routes } from "@/public/js/constants";
import Link from "next/link";

export default function FeaturesArea() {
    return (
      <section className="features-area section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Single Feature --> */}
              <div className="single-feature">
                <div className="icon-head">
                  <i className="fa fa-globe"></i>
                </div>
                <h4>
              <Link href={routes.SERVICES}> زبان های خارجه</Link>
                </h4>
                <p>
                  دوره ها آنلاین وحضوری میباشند
                 به صورت ترمیک و خصوصی  و 

                 مکالمه فشرده 
                 و آمادگی آزمون بین المللی
                  در همه رده های سنی  و با سطوح مختلف 


                </p>
                <div className="button">
              <Link href={routes.SERVICES} className="bizwheel-btn">
                    <i className="fa fa-arrow-circle-o-left"></i>بیشتر بدانید
                  </Link>
                </div>
              </div>
              {/* <!--/ End Single Feature --> */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Single Feature --> */}
              <div className="single-feature">
                <div className="icon-head">
                  <i className="fa fa-desktop"></i>
                </div>
                <h4>
              <Link href={routes.SERVICES}> کامپیوتر و برنامه نویسی </Link>
                </h4>
                <p>
                  دوره ها  آنلاین و حضوری میباشند
               مهارت های عمومی برای ورود به بازار کار
          
                و برنامه نویسی 
         
                    و نرم افزار های تخصصی : طراحی لباس  و معماری
                </p>
                <div className="button">
              <Link href={routes.SERVICES} className="bizwheel-btn">
                    <i className="fa fa-arrow-circle-o-left"></i>بیشتر بدانید
                  </Link>
                </div>
              </div>
              {/* <!--/ End Single Feature --> */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Single Feature --> */}
              <div className="single-feature ">
                <div className="icon-head">
                  <i className="fa fa-paint-brush"></i>
                </div>
                <h4>
              <Link href={routes.SERVICES}> هنر های تجسمی </Link>
                </h4>
                <p>
                  دوره ها  آنلاین و حضوری میباشند
                  از جمله رشته های پر طرفدار این شاخه  : طراحی لباس ، آبرنگ ، رنگ و روغن ، پاستل  ، مربیگری کودک ، سیاه قلم و...
           
            
            
                </p>
                <div className="button">
              <Link href={routes.SERVICES} className="bizwheel-btn">
                    <i className="fa fa-arrow-circle-o-left"></i>بیشتر بدانید
                  </Link>
                </div>
              </div>
              {/* <!--/ End Single Feature --> */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Single Feature --> */}
              <div className="single-feature">
                <div className="icon-head">
                  <i className="fa fa-line-chart"></i>
                </div>
                <h4>
              <Link href={routes.SERVICES}> کارگاه های آموزشی </Link>
                </h4>
                <p>
       یکی از فعالیت های پر طرفدار آکادمی برگزاری کارگاه های آموزشی کوتاه مدت در راستای بالا بردن کیفیت آموزشی  میباشد 
       به صورت آنلاین وحضوری
                </p>
                <div className="button">
              <Link href={routes.SERVICES} className="bizwheel-btn">
                    <i className="fa fa-arrow-circle-o-left"></i>بیشتر بدانید
                  </Link>
                </div>
              </div>
              {/* <!--/ End Single Feature --> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
  