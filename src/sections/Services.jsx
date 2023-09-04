import ServicesCard from "../components/ServicesCard"
import { services } from "../constants"


const Services = () => {
  return (
    <div className="max-container flex flex-wrap justify-center gap-9">
      {
        services.map((service)=>(
          <ServicesCard key={service.label} {...service} />
        ))
      }
    </div>
  )
}

export default Services