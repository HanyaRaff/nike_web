import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffers = () => {
  return (
    <section className="flex flex-wrap justify-center items-center max-xl:flex-col-reverse
    gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">

        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">
            {' '}Special{' '}
          </span> Offers
          <br />
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit error dolorem sunt exercitationem mollitia dolore qui, ad eum quo odio, quos, porro quisquam sequi illo voluptates minima unde. Illo.
        </p>
        <br />
        <p className="lg:max-w-lg info-text">Discover stylish Nike arrivals, quality comfort, and inovation for your
          active life.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View Details " IconUrl={arrowRight} />
          <Button label="Shop Now" customStyle="bg-white border-slate-gray text-black" />
        </div>

      </div>
    </section>
  )
}

export default SpecialOffers