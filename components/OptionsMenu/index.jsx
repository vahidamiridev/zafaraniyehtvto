import Image from "next/image";
export default function OptionsMenu () {
    return (
        <div className="elena-options">
        <div className="icon inOut">
          <i className="fa fa-cog fa-spin"></i>
        </div>
        <div className="single-option">
          <h4>طرح بندی را انتخاب کنید</h4>
          <div className="select-layout">
            <a className="full-width" value="full-width" >
              تمام صفحه
            </a>
            <a className="boxed" value="boxed" >
              جعبه دار
            </a>
          </div>
        </div>
        <div className="single-option">
          <h4>طرح پس زمینه</h4>
          <ul className="bg-pattern">
            <li className="bg-one">
              <a href="#">
                <Image src="/img/bg-1.png" alt="#" width={400} height={400}  />
              </a>
            </li>
            <li className="bg-two">
              <a href="#">
                <Image src="/img/bg-2.png" alt="#"  width={200} height={200}  />
              </a>
            </li>
            <li className="bg-three">
              <a href="#">
                <Image src="/img/bg-3.png" alt="#"  width={412} height={412}  />
              </a>
            </li>
            <li className="bg-four">
              <a href="#">
                <Image src="/img/bg-4.png" alt="#"  width={410} height={410}  />
              </a>
            </li>
            <li className="bg-five">
              <a href="#">
                <Image src="/img/bg-5.png" alt="#"  width={200} height={200}  />
              </a>
            </li>
            <li className="bg-six">
              <a href="#">
                <Image src="/img/bg-6.png" alt="#"  width={350} height={259}  />
              </a>
            </li>
            <li className="bg-seven">
              <a href="#">
                <Image src="/img/bg-7.png" alt="#"  width={512} height={512}  />
              </a>
            </li>
            <li className="bg-eight">
              <a href="#">
                <Image src="/img/bg-8.png" alt="#"  width={400} height={400}  />
              </a>
            </li>
          </ul>
        </div>
        <div className="single-option">
          <h4>انتخاب رنگ</h4>
          <span className="skin1"></span>
          <span className="skin2"></span>
          <span className="skin3"></span>
          <span className="skin4"></span>
        </div>
      </div>
    )
}