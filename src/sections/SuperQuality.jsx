import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items.center
      max-lg:flex-col max-container"
    >
      <div className="flex flex-1 flex-col">

        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide Your
          <span className="text-coral-red">
            {' '}Super{' '}
          </span>
          <span className="text-coral-red">
            Quality
          </span> Shoes
          <br />
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit error dolorem sunt exercitationem mollitia dolore qui, ad eum quo odio, quos, porro quisquam sequi illo voluptates minima unde. Illo.
        </p>
        <br />
        <p className="mb-4 lg:max-w-lg info-text">Discover stylish Nike arrivals, quality comfort, and inovation for your
          active life.
        </p>

        <div className="mt-2">
          <Button label="View Details " />
        </div>

      </div>

      <div className="flex flex-1 justify-center items-center mt-3">
        <img src={shoe8} alt="Shoe8" width={570} height={522} className="object-contain"/>
      </div>

    </section>
  )
}

export default SuperQuality