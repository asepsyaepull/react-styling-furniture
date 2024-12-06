import CardProduct from "../Card/CardProduct"

const Product = ({ productList }) => {
    return (
        <section className="flex flex-col p-20 mx-auto bg-slate-100 gap-10" id="product">
            <div className="flex items-center justify-center">
                <h1 className="text-slate-900 text-3xl text-center font-semibold">
                    Best Selling Product
                </h1>
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