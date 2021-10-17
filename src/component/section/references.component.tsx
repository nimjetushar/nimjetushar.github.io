import { FC } from "react";
import Carousel from "nuka-carousel";
import { IReferencesEntity } from "../../interface/resume.interface";

const Reference: FC<{ reference: IReferencesEntity }> = (props) => {
  return (
    <div>
      <blockquote>
        <p>{props.reference.reference}</p>
        {props.reference.name ? <cite>{props.reference.name}</cite> : ""}
      </blockquote>
    </div>
  );
};

export const References: FC<{ content: IReferencesEntity[] }> = (props) => {
  const carouselConfig = {
    autoplay: true,
    withoutControls: true,
    wrapAround: true,
  };

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <i className="fas fa-quote-left"></i>
            </h1>
          </div>
          <div className="columns flex-container">
            <div className="flexslider">
              <Carousel
                autoplay={carouselConfig.autoplay}
                wrapAround={carouselConfig.wrapAround}
                withoutControls={carouselConfig.withoutControls}
              >
                {props.content.map((item, index) => {
                  return <Reference key={index} reference={item} />;
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
