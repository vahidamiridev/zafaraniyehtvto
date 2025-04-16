import Layout from "@/components/Layout";


export default function Home() {
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
									<li><a href="blog-standard.html">وبلاگ استاندارد</a></li>
								</ul>
							</div>
							{/* <!-- Bread Title --> */}
							<div className="bread-title"><h2>اخبار و مقالات</h2></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- / End Breadcrumb --> */}
		
		{/* <!-- Blog Layout --> */}
		<section className="blog-layout blog-latest section-space">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-12">
						{/* <!-- Single Blog --> */}
						<div className="single-news">
							<div className="news-head overlay">
								<span className="news-img" style={{backgroundImage:"url('img/blog/blog-1.jpg')"}}></span>
								<a href="#" className="bizwheel-btn theme-2">ادامه مطلب</a>
							</div>
							<div className="news-body">
								<div className="news-content">
									<h3 className="news-title"><a href="blog-single.html">ما بهترین خدمات مشاوره و خلاقیت را به شما ارائه می دهیم</a></h3>
									<ul className="news-meta">
										<li className="date"><i className="fa fa-calendar"></i>شهریور 1399</li>
										<li className="view"><i className="fa fa-comments"></i>89</li>
										<li className="heart"><i className="fa fa-heart"></i>20</li>
									</ul>
									<div className="news-text"><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد  </p></div>
								</div>
							</div>
						</div>
						{/* <!--/ End Single Blog --> */}
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						{/* <!-- Single Blog --> */}
						<div className="single-news">
							<div className="news-head overlay">
								<span className="news-img" style={{backgroundImage:"url('img/blog/blog-2.jpg')"}}></span>
								<a href="#" className="bizwheel-btn theme-2">ادامه مطلب</a>
							</div>
							<div className="news-body">
								<div className="news-content">
									<h3 className="news-title"><a href="blog-single.html">با این مقالات عالی کسب و کار آنلاین خود را رشد دهید</a></h3>
									<ul className="news-meta">
										<li className="date"><i className="fa fa-calendar"></i>شهریور 1399</li>
										<li className="view"><i className="fa fa-comments"></i>89</li>
										<li className="heart"><i className="fa fa-heart"></i>20</li>
									</ul>
									<div className="news-text"><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد  </p></div>
								</div>
							</div>
						</div>
						{/* <!--/ End Single Blog --> */}
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						{/* <!-- Single Blog --> */}
						<div className="single-news">
							<div className="news-head overlay">
								<span className="news-img" style={{backgroundImage:"url('img/blog/blog-3.jpg')"}}></span>
								<a href="#" className="bizwheel-btn theme-2">ادامه مطلب</a>
							</div>
							<div className="news-body">
								<div className="news-content">
									<h3 className="news-title"><a href="blog-single.html">با این مقالات عالی کسب و کار آنلاین خود را رشد دهید</a></h3>
									<ul className="news-meta">
										<li className="date"><i className="fa fa-calendar"></i>شهریور 1399</li>
										<li className="view"><i className="fa fa-comments"></i>89</li>
										<li className="heart"><i className="fa fa-heart"></i>20</li>
									</ul>
									<div className="news-text"><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد  </p></div>
								</div>
							</div>
						</div>
						{/* <!--/ End Single Blog --> */}
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						{/* <!-- Single Blog --> */}
						<div className="single-news">
							<div className="news-head overlay">
								<span className="news-img" style={{backgroundImage:"url('img/blog/blog-4.jpg')"}}></span>
								<a href="#" className="bizwheel-btn theme-2">ادامه مطلب</a>
							</div>
							<div className="news-body">
								<div className="news-content">
									<h3 className="news-title"><a href="blog-single.html">با این مقالات عالی کسب و کار آنلاین خود را رشد دهید</a></h3>
									<ul className="news-meta">
										<li className="date"><i className="fa fa-calendar"></i>شهریور 1399</li>
										<li className="view"><i className="fa fa-comments"></i>89</li>
										<li className="heart"><i className="fa fa-heart"></i>20</li>
									</ul>
									<div className="news-text"><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد  </p></div>
								</div>
							</div>
						</div>
						{/* <!--/ End Single Blog --> */}
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						{/* <!-- Single Blog --> */}
						<div className="single-news">
							<div className="news-head overlay">
								<span className="news-img" style={{backgroundImage:"url('img/blog/blog-5.jpg')"}}></span>
								<a href="#" className="bizwheel-btn theme-2">ادامه مطلب</a>
							</div>
							<div className="news-body">
								<div className="news-content">
									<h3 className="news-title"><a href="blog-single.html">با این مقالات عالی کسب و کار آنلاین خود را رشد دهید</a></h3>
									<ul className="news-meta">
										<li className="date"><i className="fa fa-calendar"></i>شهریور 1399</li>
										<li className="view"><i className="fa fa-comments"></i>89</li>
										<li className="heart"><i className="fa fa-heart"></i>20</li>
									</ul>
									<div className="news-text"><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد  </p></div>
								</div>
							</div>
						</div>
						{/* <!--/ End Single Blog --> */}
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						{/* <!-- Single Blog --> */}
						<div className="single-news">
							<div className="news-head overlay">
								<span className="news-img" style={{backgroundImage:"url('img/blog/blog-6.jpg')"}}></span>
								<a href="#" className="bizwheel-btn theme-2">ادامه مطلب</a>
							</div>
							<div className="news-body">
								<div className="news-content">
									<h3 className="news-title"><a href="blog-single.html">با این مقالات عالی کسب و کار آنلاین خود را رشد دهید</a></h3>
									<ul className="news-meta">
										<li className="date"><i className="fa fa-calendar"></i>شهریور 1399</li>
										<li className="view"><i className="fa fa-comments"></i>89</li>
										<li className="heart"><i className="fa fa-heart"></i>20</li>
									</ul>
									<div className="news-text"><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد  </p></div>
								</div>
							</div>
						</div>
						{/* <!--/ End Single Blog --> */}
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						{/* <!-- Pagination --> */}
						<div className="pagination-plugin">
							<ul className="pagination-list">
								<li className="prev"><a href="#">قبلی</a></li>
								<li className="page-numbers"><a href="#">1</a></li>
								<li className="page-numbers current"><a href="#">2</a></li>
								<li className="page-numbers"><a href="#">3</a></li>
								<li className="next"><a href="#">بعدی</a></li>
							</ul>
						</div>
						{/* <!--/ End Pagination --> */}
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Blog Layout --> */}

    </>
  )
}