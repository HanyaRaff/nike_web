import RevieCard from "../components/RevieCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text max-w-lg text-center m-auto mt-4">
        Here genuine stories from our satisfied Customers about their exceptional experience.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center
      max-lg:flex-col gap-14 "> 
        {reviews.map((review)=>(
          <RevieCard key={review.customerName}
          {...review}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews