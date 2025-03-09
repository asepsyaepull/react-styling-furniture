import CardProduct from "../Card/CardProduct"

const Product = ({ productDescription, productList }) => {
    return (
        <section className="flex flex-col p-6 md:p-20 mx-auto bg-slate-100 gap-10 md:gap-20" id="product">
            <div className="flex flex-col gap-2 items-center justify-center">
                <span className="text-sm text-orange-500">
                    {productDescription.subtitle}
                </span>
                <h1 className="text-slate-900 text-2xl md:text-3xl text-center font-semibold">
                    {productDescription.title}
                </h1>
                <p className="w-full md:w-1/2 text-sm text-gray-400 text-center">
                    {productDescription.description}
                </p>
            </div>
            <div className="flex overflow-x-scroll md:overflow-visible md:justify-center items-center justify-start gap-4 md:gap-8 mt-8 md:mt-14">
                {productList.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default Product