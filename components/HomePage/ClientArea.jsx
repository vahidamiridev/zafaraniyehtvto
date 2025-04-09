import Image from "next/image";
export default function ClientArea() {
  return (
    <div className="clients section-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="partner-slider">
              {/* <!-- Single client --> */}
              <div className="single-slider">
                <div className="single-client">
                  <a href="#" target="_blank">
                    <Image
                      src="/img/client/client-1.png"
                      alt="#"
                      width={200}
                      height={75}
                    />
                  </a>
                </div>
              </div>
              {/* <!--/ End Single client --> */}
              {/* <!-- Single client --> */}
              <div className="single-slider">
                <div className="single-client">
                  <a href="#" target="_blank">
                    <Image
                      src="/img/client/client-2.png"
                      alt="#"
                      width={200}
                      height={75}
                    />
                  </a>
                </div>
              </div>
              {/* <!--/ End Single client --> */}
              {/* <!-- Single client --> */}
              <div className="single-slider">
                <div className="single-client">
                  <a href="#" target="_blank">
                    <Image
                      src="/img/client/client-3.png"
                      alt="#"
                      width={200}
                      height={75}
                    />
                  </a>
                </div>
              </div>
              {/* <!--/ End Single client --> */}
              {/* <!-- Single client --> */}
              <div className="single-slider">
                <div className="single-client">
                  <a href="#" target="_blank">
                    <Image
                      src="/img/client/client-4.png"
                      alt="#"
                      width={200}
                      height={75}
                    />
                  </a>
                </div>
              </div>
              {/* <!--/ End Single client --> */}
              {/* <!-- Single client --> */}
              <div className="single-slider">
                <div className="single-client">
                  <a href="#" target="_blank">
                    <Image
                      src="/img/client/client-5.png"
                      alt="#"
                      width={200}
                      height={75}
                    />
                  </a>
                </div>
              </div>
              {/* <!--/ End Single client --> */}
              {/* <!-- Single client --> */}
              <div className="single-slider">
                <div className="single-client">
                  <a href="#" target="_blank">
                    <Image
                      src="/img/client/client-6.png"
                      alt="#"
                      width={200}
                      height={75}
                    />
                  </a>
                </div>
              </div>
              {/* <!--/ End Single client --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
