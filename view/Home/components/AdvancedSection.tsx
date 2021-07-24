import Image from "next/image";

import RecognitionIcon from "./../../shared/assets/images/icon-brand-recognition.svg";
import RecordsIcon from "./../../shared/assets/images/icon-detailed-records.svg";
import CustomizableIcon from "./../../shared/assets/images/icon-fully-customizable.svg";

export default function AdvancedSection() {
  return (
    <section>
      <div>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>

        <div>
          <div>
            <Image src={RecognitionIcon} alt="icon: chart bars going up" />
            <h3>Brand Recognition</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea
              deserunt soluta laboriosam cupiditate dolorum voluptas vero!
            </p>
          </div>

          <div>
            <Image
              src={RecordsIcon}
              alt="icon: round meter pointing at the middle"
            />
            <h3>Detailed Records</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea
              deserunt soluta laboriosam cupiditate dolorum voluptas vero!
            </p>
          </div>

          <div>
            <Image
              src={CustomizableIcon}
              alt="icon: shows a set of three drawing tools"
            />
            <h3>Fully Customizable</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea
              deserunt soluta laboriosam cupiditate dolorum voluptas vero!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
