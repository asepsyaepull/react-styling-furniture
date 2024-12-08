import { BiPlus } from "react-icons/bi";

const CardProduct = props => {
    const { product } = props;

    return (
        <div className="flex items-center justify-center">
            <div key={product.id} className="items-center w-64 h-80 bg-white rounded-2xl pb-4 border hover:drop-shadow-lg hover:cursor-pointer hover:scale-105 transition duration-150 ">
                <div className="relative w-64 h-48">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="relative -top-14 left-1/2 -translate-x-1/2 w-64 h-52 object-cover overflow-visible"
                    />
                </div>
                <div className="flex flex-col justify-between px-4">
                    <p className="text-sm text-gray-400">{product.type}</p>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <button className="text-black bg-gray-200 rounded-full border border-gray-300 p-2 hover:bg-orange-400 hover:text-white hover:border-white"><BiPlus /></button>
                    </div>
                </div>
                <div className="flex items-center justify-between px-4">
                    <p className="text-md font-semibold text-gray-700">${product.price}</p>
                    <div className="flex items-center justify-center bg-slate-100 bg-opacity-35 py-1 px-2 border rounded-full w-fit text-sm text-gray-400 gap-2">
                        {/* looping warna product dengan map */}
                        {product.colors.map((color, index) => (
                            <div
                                key={index}
                                className={`w-4 h-4 rounded-full ${color}`}>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct