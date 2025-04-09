import Layout from "@/components/Layout";
import Image from "next/image";

export default function Service() {
  return (
    <>
      <Layout>
      {/* <!-- Breadcrumb --> */}
		<div className="breadcrumbs overlay" style={{backgroundImage:"url('img/breadcrumb.jpg')"}}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="bread-inner">
							{/* <!-- Bread Menu --> */}
							<div className="bread-menu">
								<ul>
									<li><a href="#">خانه</a></li>
									<li><a href="services.html">خدمات</a></li>
									<li><a href="service-marketing.html">بازاریابی دیجیتال</a></li>
								</ul>
							</div>
							{/* <!-- Bread Title --> */}
							<div className="bread-title"><h2>خدمات ما</h2></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- / End Breadcrumb --> */}
		
		{/* <!-- Service Single --> */}
		<section className="service-single section-space">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-12">
						{/* <!-- Service Image --> */}
						<div className="service-img">
							<Image src="/img/services/service-single.jpg" alt="#" width={1000} height={533} layout="responsive"/>
						</div>
						{/* <!-- Service Content --> */}
						<div className="service-content">
							<h2>راه حل بازاریابی دیجیتال</h2>
							<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
							<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
							<div className="row service-space">
								<div className="col-lg-6 col-md-6 col-12">
									{/* <!-- Service Feature --> */}
									<div className="small-list-feature">
										<h3>ما نوآوری شما را فراهم می کنیم</h3>
										<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
										<ul>
											<li><i className="fa fa-check"></i>ما خدمات خلاقانه ای را به شما ارائه می دهیم</li>
											<li><i className="fa fa-check"></i>فقط روش پرطرفدار بسیار جذاب</li>
											<li><i className="fa fa-check"></i>فقط روش پرطرفدار بسیار جذاب</li>
											<li><i className="fa fa-check"></i>خدمات خلاقانه مهمترین است</li>
											<li><i className="fa fa-check"></i>99٪ ضمانت به موقع سرور</li>
											<li><i className="fa fa-check"></i>پشتیبانی زنده 24/7</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-12">
									{/* <!-- Service Img --> */}
									<div className="modern-img-feature">
										<Image src="/img/services/service-small.jpg" alt="#" width={600} height={533} layout="responsive"/>
										<div className="video-play">
											<a href="https://www.youtube.com/watch?v=RLlPLqrw8Q4" className="video video-popup mfp-iframe"><i className="fa fa-play"></i></a>
										</div>
									</div>
								</div>
							</div>
							<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
						</div>
					</div>
					<div className="col-lg-4 col-12">
						{/* <!-- Service Sidebar --> */}
						<div className="service-sidebar">	
							{/* <!-- Single Sidebar --> */}
							<div className="service-single-sidebar widget">
								<h2 className="widget-title">منوی سرویس</h2>
								<div className="menu-service-menu-container">
									{/* <!-- Service Menu --> */}
									<ul id="menu-service-menu" className="menu">
										<li className="active"><a href="service-single.html">استراتژی کسب و کار</a></li>
										<li><a href="service-develop.html">توسعه وب</a></li>
										<li><a href="service-market.html">تحقیقات بازار</a></li>
										<li><a href="service-advertise.html">نمونه تبلیغات</a></li>
										<li><a href="service-design.html">طراحی روند</a></li>
										<li><a href="service-marketing.html">بازاریابی دیجیتال</a></li>
									</ul>
								</div>
							</div>
							{/* <!-- Single Sidebar --> */}
							<div className="service-single-sidebar widget">
								<h2 className="widget-title">فرم را پر کنید</h2>
								<div className="contact-form-area service">
									{/* <!-- Service Form --> */}
									<form className="form">
										<div className="row">
											<div className="col-12">
												<div className="form-group">
													<div className="icon"><i className="fa fa-user"></i></div>
													<input type="text" name="user-name" placeholder="نام و نام خانوادگی"/>
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<div className="icon"><i className="fa fa-envelope"></i></div>
													<input type="email" name="email" placeholder="ایمیل شما"/>
												</div>
											</div>
										   <div className="col-12">
											   <div className="form-group">
													<div className="icon"><i className="fa fa-tag"></i></div>
													<input type="text" name="subject" placeholder="موضوع را تایپ کنید"/>
											   </div>
										   </div>
										   <div className="col-12">
												<div className="form-group">
													<div className="icon"><i className="fa fa-pencil"></i></div>
													<textarea type="textarea" rows="5"></textarea>
												</div>
										   </div>
										   <div className="col-12">
												<div className="form-group button">
													<button type="submit" className="bizwheel-btn theme-2">ارسال</button>
												</div>
										   </div>
										</div>
									</form>
									{/* <!--/ End Service Form --> */}
								</div>
							</div>
						</div>
						{/* <!--/ End Service Sidebar --> */}
					</div>
				</div>
			</div>
		</section>	

      </Layout>
    </>
  );
}