import Image from "next/image";

export default function About(){
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
									<li><a href="about.html">درباره ما</a></li>
								</ul>
							</div>
							{/* <!-- Bread Title --> */}
							<div className="bread-title"><h2>درباره شرکت</h2></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- / End Breadcrumb --> */}
		
		{/* <!-- About Us --> */}
		<section className="about-us section-space">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 offset-lg-1 col-md-6 col-12">
						{/* <!-- About Video --> */}
						<div className="modern-img-feature">
							<Image src="/img/about-us.jpg" width={800} height={728} layout="responsive" alt="#"/>
							<div className="video-play">
								<a href="https://www.youtube.com/watch?v=RLlPLqrw8Q4" className="video video-popup mfp-iframe">
									<i className="fa fa-play"></i>
								</a>
							</div>
						</div>
						{/* <!--/End About Video  --> */}
					</div>
					<div className="col-lg-5 col-md-6 col-12">
						<div className="about-content section-title default text-left">
							<div className="section-top">
								<h1><span>درباره ما</span><b>ما راه حل تجاری و تجاری با کیفیت ارائه می دهیم</b></h1>
							</div>
							<div className="section-bottom">
								<div className="text">
									<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
									<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
								</div>
								<div className="button">
									<a href="about.html" className="bizwheel-btn theme-2">آثار ما<i className="fa fa-angle-left"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>	
		{/* <!--/ End About Us --> */}
        
        </>
    )
}