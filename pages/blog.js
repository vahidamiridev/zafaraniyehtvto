import Layout from "@/components/Layout";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Layout>
      {/* <!-- Breadcrumb --> */}
		<div className="breadcrumbs bread-blog">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="bread-inner">
							{/* <!-- Bread Menu --> */}
							<div className="bread-menu">
								<ul>
									<li><a href="index-2.html">setinco</a></li>
									<li><a href="blog-single-left.html">مشاوره</a></li>
									<li><a href="#">با این مقالات عالی کسب و کار آنلاین خود را رشد دهید</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- / End Breadcrumb --> */}
		
		{/* <!-- Blog Single --> */}
		<section className="news-area archive blog-single section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-12">
						<div className="row">
							<div className="col-12">
								<div className="blog-single-main">
									<div className="main-image">
										<Image src="/img/blog/blog-single.jpg" alt="#"  width={1100} height={550} layout="responsive" />
									</div>
									<div className="blog-detail">
										{/* <!-- News meta --> */}
										<ul className="news-meta">
											<li><i className="fa fa-user"></i>بیز‌ویل کو</li>
											<li><i className="fa fa-pencil"></i>15 شهریور 1399</li>
											<li><i className="fa fa-comments"></i>0 نظر</li>
										</ul>
										<h2 className="blog-title">با مقالات عالی کسب و کار آنلاین خود را رشد دهید</h2>
										<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
										<div className="row blog-space">
											<div className="col-lg-6">
												<Image src="/img/blog/blog-side.jpg" alt="#"  width={600} height={677} layout="responsive" />
											</div>
											<div className="col-lg-6">
												<h5>کاری که ما در حال حاضر انجام می دهیم!</h5>
												<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
												<h5>برخی از پروژه های آینده ما</h5>
												<ul>
													<li>ما متفکر خلاق هستیم</li>
													<li>ما به شما خدمات مشاوره رایگان می دهیم</li>
													<li>شامل هر سطح دامنه سطح بالا</li>
													<li>شامل هر سطح دامنه سطح بالا</li>
													<li>99٪ تضمین به موقع سرور</li>
													<li>24/7 سرویس مادام العمر</li>
													<li>ما به شما خدمات مشاوره رایگان می دهیم</li>
													<li>شامل هر سطح دامنه سطح بالا</li>
												</ul>
											</div>
										</div>
										<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
										{/* <!-- Blockquote --> */}
										<blockquote className="wp-block-quote">
											<p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </p>
											<cite>بیشتر</cite>
										</blockquote>
										<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
										{/* <!-- Post Nav --> */}
										<div className="posts_nav">
											<div className="post-left"><a href="asdf.html">پست قبلی</a></div>
											<div className="post-right"><a href="asdf.html">پست بعدی</a></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<div className="blog-comments-form">
									<div className="bottom-title">
										<h2>پیام بگذارید</h2>
										<p>تمام قسمتهای مشخص شده با ستاره (*) الزامی هستند </p>
									</div>
									{/* <!-- Comment Form --> */}
									<form className="form" method="post" action="#">
										 <div className="alert alert-success contact_msg" style={{display: "none"}} role="alert">
               
                        </div>
						
										<div className="row">
											<div className="col-lg-4 col-md-4 col-12">
												<div className="form-group">
													<label>نام شما<span>*</span></label>
													<input type="text" name="name" required="required" />
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-12">
												<div className="form-group">
													<label>ایمیل شما<span>*</span></label>
													<input type="email" name="email" required="required" />
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-12">
												<div className="form-group">
													<label>وب سایت شما<span>*</span></label>
													<input type="url" name="website" required="required"  />
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<label>نظر شما<span>*</span></label>
													<textarea name="message" rows="6"></textarea>
												</div>
											</div>
											<div className="col-12">
												<div className="form-group button">	
													<button type="submit" className="bizwheel-btn primary effect">ثبت کردن نظر<i className="fa fa-paper-plane"></i></button>
												</div>
											</div>
										</div>
									</form>
									{/* <!--/ End Comment Form --> */}
								</div>
							</div>							
						</div>							
					</div>		
				</div>
			</div>
		</section>	
		{/* <!--/ End Services --> */}
      </Layout>
    </>
  )}