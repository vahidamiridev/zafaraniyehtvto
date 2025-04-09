import Layout from "@/components/Layout";


export default function Contact() {
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
									<li><a href="index-2.html">خانه</a></li>
									<li><a href="contact.html">تماس با ما</a></li>
								</ul>
							</div>
							{/* <!-- Bread Title --> */}
							<div className="bread-title"><h2>آدرس ما</h2></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!--/ End Breadcrumb --> */}
		
		{/* <!-- Contact Us --> */}
		<section className="contact-us section-space">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-7 col-12">
						{/* <!-- Contact Form --> */}
						<div className="contact-form-area m-top-30">
							<h4>در تماس باشید</h4>
							<form className="form" method="post" action="#">
							 <div className="alert alert-success contact_msg" style={{display: "none"}} role="alert">
                           
                        </div>
								<div className="row">
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<div className="icon"><i className="fa fa-user"></i></div>
											<input type="text" name="first_name" placeholder="نام"/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<div className="icon"><i className="fa fa-user"></i></div>
											<input type="text" name="last_name" placeholder="نام خانوادگی"/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<div className="icon"><i className="fa fa-envelope"></i></div>
											<input type="email" name="email" placeholder="ایمیل را وارد کنید"/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<div className="icon"><i className="fa fa-tag"></i></div>
											<input type="text" name="subject" placeholder="موضوع را تایپ کنید"/>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group textarea">
											<div className="icon"><i className="fa fa-pencil"></i></div>
											<textarea type="textarea" name="message" rows="5"></textarea>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group button">
											<button type="submit" className="bizwheel-btn theme-2">ارسال</button>
										</div>
									</div>
								</div>
							</form>
						</div>
						{/* <!--/ End contact Form --> */}
					</div>
					<div className="col-lg-5 col-md-5 col-12">
						<div className="contact-box-main m-top-30">
							<div className="contact-title">
								<h2>با ما تماس بگیرید</h2>
								<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
							</div>
							{/* <!-- Single Contact --> */}
							<div className="single-contact-box">
								<div className="c-icon"><i className="fa fa-clock-o"></i></div>
								<div className="c-text">
									<h4>ساعت کار</h4>
									<p>جمعه - شنبه<br/>08 صبح - 10 شب (هر روز)</p>
								</div>
							</div>
							{/* <!--/ End Single Contact --> */}
							{/* <!-- Single Contact --> */}
							<div className="single-contact-box">
								<div className="c-icon"><i className="fa fa-phone"></i></div>
								<div className="c-text">
									<h4>اکنون با ما تماس بگیرید</h4>
									<p>تلفن:888 765 4321<br/> موبایل: 09162352632</p>
								</div>
							</div>
							{/* <!--/ End Single Contact --> */}
							{/* <!-- Single Contact --> */}
							<div className="single-contact-box">
								<div className="c-icon"><i className="fa fa-envelope-o"></i></div>
								<div className="c-text">
									<h4>ایمیل</h4>
									<p>setinco@gmail.com<br/>setinco@gmail.com</p>
								</div>
							</div>
							{/* <!--/ End Single Contact --> */}
							<div className="button">
								<a href="#" className="bizwheel-btn theme-1">آثار ما<i className="fa fa-angle-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>	
		{/* <!--/ End Contact Us --> */}
		
		{/* <!-- Google Map --> */}
		<div className="contact-map">
			<div id="myMap" className="map"></div>
		</div>
		{/* <!--/ End Google Map --> */}
        
      </Layout>
    </>
  );
}