
import { Link } from "@remix-run/react";
import { imgixSrc, imageSpec } from "~/utils";

interface HeroProps {
    path: string
    imageSpecs: imageSpec[]
}

export default function Hero({ path, imageSpecs }: HeroProps) {
    return (
        <div className="relative">
            <picture>
                {imageSpecs.map(imageSpec => <source key={imageSpec.width} media={`(max-width: ${imageSpec.width}px)`} srcSet={imgixSrc(path, imageSpec)} />)}
                <img className="object-cover w-full h-72 lg:h-96 brightness-75"
                    alt={"Woman paying with a mobile device at a coffee shop"}
                    src={imgixSrc(path, imageSpecs[3])}
                />
            </picture>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center gap-7 items-center">
                <h2 className="font-heading text-4xl md:text-[2.6rem] lg:text-6xl xl:text-7xl text-center text-transparent py-6
                    bg-clip-text bg-gradient-to-r from-bokoupGreen2-400 to-bokoupBlue2-600 font-semibold">Digital Collectibles Where You Shop</h2>
                <Link
                    to="/"
                    className="font-semibold px-10 py-3 bg-bokoupGreen2-400 rounded-full text-center hover:brightness-90"
                >Get Promos</Link>

            </div>
        </div>
    )
}