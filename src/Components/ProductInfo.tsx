
interface ProductInfoProps {
    name: string;
    description: string;
    price: number;
    discount: number;
    category: string;

}
const ProductInfo = (props : ProductInfoProps) => {
  return (
    <div className="p-1 mr-20 my-10">
        <h2 className="text-xl font-bold">{props.category}</h2>
        <h1 className="text-3xl font-bold my-1">{props.name}</h1>
        <p className="pb-5">{props.description}</p>
        <span className="text-5xl font-bold">{props.price}$</span>
    </div>
  )
}

export default ProductInfo