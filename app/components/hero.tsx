import { Link } from "@remix-run/react";
import { imgixSrc, type imageSpec } from "~/utils/imgx";

interface HeroProps {
  path: string;
  imageSpecs: imageSpec[];
}

export default function Hero({ path, imageSpecs }: HeroProps) {
  return (
    <div className="relative">
      <picture>
        {imageSpecs.map((imageSpec) => (
          <source
            key={imageSpec.width}
            media={`(max-width: ${imageSpec.width}px)`}
            srcSet={imgixSrc(path, imageSpec)}
          />
        ))}
        <img
          className="h-72 w-full object-cover brightness-75 lg:h-96"
          alt={"Woman paying with a mobile device at a coffee shop"}
          src={imgixSrc(path, imageSpecs[3])}
        />
      </picture>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-7">
        <h2
          className="bg-gradient-to-r from-bokoupGreen2-400 to-bokoupBlue2-600 bg-clip-text py-6 text-center font-heading text-4xl
                    font-semibold text-transparent md:text-[2.6rem] lg:text-6xl xl:text-7xl"
        >
          Digital Collectibles Wherever You Shop
        </h2>
        <Link
          to="/promos"
          className="rounded-full bg-bokoupGreen2-400 px-10 py-3 text-center font-semibold hover:brightness-90"
        >
          Get Promos
        </Link>
      </div>
    </div>
  );
}
