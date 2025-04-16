import Layout from "@/components/Layout";
import Image from "next/image";


export default function Services() {
  return (
    <>
      {/* <!-- Breadcrumb --> */}
		<div className="breadcrumbs overlay" style={{backgroundImage:"url('img/breadcrumb.jpg')"}}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="bread-inner">
							{/* <!-- Bread Menu --> */}
							<div className="bread-menu">
								<ul>
									<li><a href="index-2.html">خانه</a></li>
									<li><a href="services.html">خدمات</a></li>
								</ul>
							</div>
							{/* <!-- Bread Title --> */}
							<div className="bread-title"><h2>خدمات ما</h2></div>
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
								<h1><span>خلاقیت</span><b>خدماتی که ما ارائه می دهیم</b></h1><h4>ما خدمات و پشتیبانی با کیفیت ارائه می دهیم ..</h4>
							</div>
							<div className="section-bottom">
								<div className="text-style-two">
									<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<div className="service-head">
								<Image src="/img/services/service-01.jpg" alt="#" width={555}  height={408} layout="responsive"  />
							    <div className="icon-bg"><i className="fa fa-desktop"></i></div>
							</div>
							<div className="service-content">
								<h4><a href="service-business.html">استراتژی کسب و کار</a></h4>
								<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
								<a className="btn" href="service-business.html"><i className="fa fa-arrow-circle-o-left"></i>مشاهده سرویس</a>
							</div>
						</div>
						{/* <!--/ End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<div className="service-head">
							    <div className="icon-bg"><i className="fa fa-handshake-o"></i></div>
								<div className="featured">توسعه وب</div>
								<Image src="/img/services/service-02.jpg" alt="#" width={555}  height={408} layout="responsive"  />
							</div>
							<div className="service-content">
								<h4><a href="service-develop.html">توسعه وب</a></h4>
								<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
								<a className="btn" href="service-develop.html"><i className="fa fa-arrow-circle-o-left"></i>مشاهده سرویس</a>
							</div>
						</div>
						{/* <!--/ End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<div className="service-head">
							    <div className="icon-bg"><i className="fa fa-html5"></i></div>
								<Image src="/img/services/service-03.jpg" alt="#" width={555}  height={408} layout="responsive"  />
							</div>
							<div className="service-content">
								<h4><a href="service-market.html">تحقیقات بازار</a></h4>
								<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
								<a className="btn" href="service-market.html"><i className="fa fa-arrow-circle-o-left"></i>مشاهده سرویس</a>
							</div>
						</div>
						{/* <!--/ End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<div className="service-head">
							    <div className="icon-bg"><i className="fa fa-css3"></i></div>
								<Image src="/img/services/service-04.jpg" alt="#" width={555}  height={408} layout="responsive"  />
							</div>
							<div className="service-content">
								<h4><a href="service-design.html">طراحی روند</a></h4>
								<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
								<a className="btn" href="service-design.html"><i className="fa fa-arrow-circle-o-left"></i>مشاهده سرویس</a>
							</div>
						</div>
						{/* <!--/ End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<div className="service-head">
							    <div className="icon-bg"><i className="fa fa-newspaper-o"></i></div>
								<Image src="/img/services/service-05.jpg" alt="#" width={555}  height={408} layout="responsive"  />
							</div>
							<div className="service-content">
								<h4><a href="service-advertise.html">نمونه تبلیغات</a></h4>
								<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
								<a className="btn" href="service-advertise.html"><i className="fa fa-arrow-circle-o-left"></i>مشاهده سرویس</a>
							</div>
						</div>
						{/* <!--/ End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Service --> */}
						<div className="single-service">
							<div className="service-head">
							    <div className="icon-bg"><i className="fa fa-bullhorn"></i></div>
								<Image src="/img/services/service-06.jpg" alt="#" width={555}  height={408} layout="responsive"  />
							</div>
							<div className="service-content">
								<h4><a href="service-marketing.html">بازاریابی دیجیتال</a></h4>
								<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
								<a className="btn" href="service-marketing.html"><i className="fa fa-arrow-circle-o-left"></i>مشاهده سرویس</a>
							</div>
						</div>
						{/* <!--/ End Single Service --> */}
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Services --> */}

    </>
  );
}