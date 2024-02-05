import ProductGallery from "@/Components/ProductGallary"
import ProductInfo from "@/Components/ProductInfo"

const page = () => {
    const images = [
        "https://images.pexels.com/photos/6962206/pexels-photo-6962206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/11591876/pexels-photo-11591876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/14642111/pexels-photo-14642111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/16070479/pexels-photo-16070479/free-photo-of-close-up-of-a-playstation-joystick.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  return (
    <div className="container flex flex-col justify-center align-center gap-10 m-20 md:flex-row h-[80vh]">
        <ProductGallery images={images} />
        <ProductInfo 
          name="XBOX One"
          description="XBOX one the most popular gaming console platform in the world + Game pass from Micrsoft"
          category="Gaming"
          price={299}
          discount={15}
        />

    </div>
  )
}

export default page