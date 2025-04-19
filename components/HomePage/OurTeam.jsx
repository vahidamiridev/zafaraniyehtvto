import SingleSlider from "../SingleSlider";
import { members } from "@/public/js/constants";
export default function OurTeam() {
  return (
    <section className="team section-bg section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title  style2 text-center">
              <div className="section-top">
                <h1>
                  <span> حرفه ایی</span>
                  <b> اساتید ما</b>
                </h1>
                <h4>اساتید خبره ما منتظر شما هستند.</h4>
              </div>
              <div className="section-bottom">
                <div className="text-style-two">
                  <p>
                  همگی اساتید آکادمی در شاخه ی خود دارای تجربه کاری زیاد  و همچنین 
                 
                  تجربه بسیار در امر آموزش هستند و ما بهترین ها را گرد هم آوردیم 
                  و میدانیم متخصص بودن اساتید لازم است ولی کافی نیست استاد کامل یعنی کسی که می داند ومیتواند
                  آن دانش را به دیگران با بیان  خوب انتقال دهد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-slider">
          {
            members.map((member)=> <SingleSlider key={member.id}   member={member}/>)
          }

        </div>
      </div>
    </section>
  );
}
