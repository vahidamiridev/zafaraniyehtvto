import Layout from "@/components/Layout";
import Image from "next/image";

export default function Team() {
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
									<li><a href="team.html">تیم ما</a></li>
								</ul>
							</div>
							{/* <!-- Bread Title --> */}
							<div className="bread-title"><h2>رهبران ما</h2></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- / End Breadcrumb --> */}
		
		{/* <!-- Our Team --> */}
		<section className="team team-archive section-bg section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title  style2 text-center">
							<div className="section-top">
								<h1><span>رهبران</span><b>تیم خلاق</b></h1><h4>رهبران خبره ما منتظر شما هستند.</h4>
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
						{/* <!-- Single Team --> */}
						<div className="single-team">
							<div className="team-head">
								<Image src="/img/team/team-1.jpg" alt="#" width={360} height={310} layout="responsive"/>
								<ul className="team-social">
									<li><a href="#"><i className="fa fa-facebook-official"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-dribbble"></i></a></li>	
								</ul>	
							</div>
							<div className="t-content">
								<div className="content-inner">
									<h4 className="name"><a href="#">برامون دامانا</a></h4>
									<span className="designation">رئیس بازاریابی</span>
								</div>
							</div>
						</div>
						{/* <!--/ End Single Team --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Team --> */}
						<div className="single-team">
							<div className="team-head">
								<Image src="/img/team/team-2.jpg" alt="#" width={360} height={310} layout="responsive"/>
								<ul className="team-social">
									<li><a href="#"><i className="fa fa-facebook-official"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-dribbble"></i></a></li>	
								</ul>	
							</div>
							<div className="t-content">
								<div className="content-inner">
									<h4 className="name"><a href="#">برامون دامانا</a></h4>
									<span className="designation">رئیس بازاریابی</span>
								</div>
							</div>
						</div>
						{/* <!--/ End Single Team --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Team --> */}
						<div className="single-team">
							<div className="team-head">
								<Image src="/img/team/team-3.jpg" alt="#" width={360} height={310} layout="responsive"/>
								<ul className="team-social">
									<li><a href="#"><i className="fa fa-facebook-official"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-dribbble"></i></a></li>	
								</ul>	
							</div>
							<div className="t-content">
								<div className="content-inner">
									<h4 className="name"><a href="#">برامون دامانا</a></h4>
									<span className="designation">رئیس بازاریابی</span>
								</div>
							</div>
						</div>
						{/* <!--/ End Single Team --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Team --> */}
						<div className="single-team">
							<div className="team-head">
								<Image src="/img/team/team-4.jpg" alt="#" width={360} height={310} layout="responsive"/>
								<ul className="team-social">
									<li><a href="#"><i className="fa fa-facebook-official"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-dribbble"></i></a></li>	
								</ul>	
							</div>
							<div className="t-content">
								<div className="content-inner">
									<h4 className="name"><a href="#">برامون دامانا</a></h4>
									<span className="designation">رئیس بازاریابی</span>
								</div>
							</div>
						</div>
						{/* <!--/ End Single Team --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Team --> */}
						<div className="single-team">
							<div className="team-head">
								<Image src="/img/team/team-5.jpg" alt="#" width={360} height={310} layout="responsive"/>
								<ul className="team-social">
									<li><a href="#"><i className="fa fa-facebook-official"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-dribbble"></i></a></li>	
								</ul>	
							</div>
							<div className="t-content">
								<div className="team-arrow">
									<a><i className="fa fa-angle-up"></i></a>
								</div>
								<div className="content-inner">
									<h4 className="name"><a href="#">برامون دامانا</a></h4>
									<span className="designation">رئیس بازاریابی</span>
								</div>
							</div>
						</div>
						{/* <!--/ End Single Team --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Team --> */}
						<div className="single-team">
							<div className="team-head">
								<Image src="/img/team/team-6.jpg" alt="#" width={360} height={310} layout="responsive"/>
								<ul className="team-social">
									<li><a href="#"><i className="fa fa-facebook-official"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-dribbble"></i></a></li>	
								</ul>	
							</div>
							<div className="t-content">
								<div className="content-inner">
									<h4 className="name"><a href="#">برامون دامانا</a></h4>
									<span className="designation">رئیس بازاریابی</span>
								</div>
							</div>
						</div>
						{/* <!--/ End Single Team --> */}
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Team --> */}
      </Layout>
    </>
  );
}