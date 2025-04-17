import Image from "next/image";
import Link from "next/link";


const CardMember = ({ course }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
    <div className="single-service">
      <div className="service-head">
        <Image
          src={course.src}
          alt="#"
          width={555}
          height={408}
          layout="responsive"
        />
        <div className="icon-bg">
          <i className={course.icon}></i>
        </div>
      </div>
      <div className="service-content">
        <h5>
          <Link href={course.route}> {course.title}</Link>
        </h5>
        <p style={{fontSize:".8rem"}}>{course.title}</p>
        <Link className="btn" href={course.route}>
          <i className="fa fa-arrow-circle-o-left"></i>مشاهده جزئیات
        </Link>
      </div>
    </div>
  </div>
  )
};
export default CardMember;
