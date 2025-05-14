import CardProduct from "../Card/CardProduct"

const Product = ({ productDescription, productList }) => {
    return (
        <section className="flex flex-col p-20 mx-auto bg-slate-100 gap-20" id="product">
            <div className="flex flex-col gap-2 items-center justify-center">
                <span className="text-sm text-orange-500">
                    {productDescription.subtitle}
                </span>
                <h1 className="text-slate-900 text-3xl text-center font-semibold">
                    {productDescription.title}
                </h1>
                <p className="w-1/2 text-sm text-gray-400 text-center">
                    {productDescription.description}
                </p>
            </div>
            <div className="flex items-center justify-center gap-8 mt-14">
                {productList.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default Product