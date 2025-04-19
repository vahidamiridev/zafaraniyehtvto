import Image from "next/image"

const SingleSlider =({member}) => {
    return(
        <div className="single-slider">
        {/* <!-- Single Team --> */}
        <div className="single-team">
          <div className="team-head">
            <Image
              src={member.src}
              alt="#"
              width={360}
              height={310}
              style={{ width: '100%', height: 'auto' }}
            />
            {/* <ul className="team-social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook-official"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
            </ul> */}
          </div>
          <div className="t-content">
            <div className="content-inner">
              <h4 className="name">
                <a >  {member.name}</a>
              </h4>
              <span className="designation">  {member.job}    </span>
            </div>
          </div>
        </div>
        {/* <!--/ End Single Team --> */}
      </div>
    )
}

export default SingleSlider