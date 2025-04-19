import { routes } from "@/public/js/constants";
import Link from "next/link";
import courses from "@/data/courses.json";
import CardCourse from "@/components/CardCourse"
export default function Services() {
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
                      <Link href={routes.SERVICES}>خدمات</Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- Bread Title --> */}
                <div className="bread-title">
                  <h2>خدمات ما</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--/ End Breadcrumb --> */}

      {/* <!-- Services --> */}
      <section className="services section-bg section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title  style2 text-center">
                <div className="section-top">
                  <h1>
                    <span>خلاقیت</span>
                    <b>دوره هایی که ما ارائه می دهیم</b>
                  </h1>
                  <h4>ما آموزش های با کیفیت ارائه می دهیم ..</h4>
                </div>
                <div className="section-bottom">
                  <div className="text-style-two">
                    <p>
                      تمامی دوره ها به صورت آنلاین و حضوری می باشند و اگر رشته
                      مورد نظر شما در لیست دوره ها نمی باشد ، تماس بگیرید شاید
                      دوره هایی باشد که در حال آماده سازی و زیر ساخت برای شروع
                      هستند و تمامی دوره ها مشاوره رایگان و تعیین سطح به صورت
                      رایگان دارند و در صورت ثبت نام همزمان در دوره های مختلف
                      شما امتیاز دانشجوی فعال را گرفته و از تخفیفات ویژه بهرمند
                      خواهید شد. جهت ثبت نام در دوره ها و دریافت مشاور رایگان با
                      ما تماس بگیرید.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {courses.map((course) => {
              return <CardCourse
			  key={course.id}
			   course={course} 
			  />
            })}
          </div>
        </div>
      </section>
      {/* <!--/ End Services --> */}
    </>
  );
}
