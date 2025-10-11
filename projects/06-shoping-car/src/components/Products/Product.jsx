const Product = ({ image, title, price, children }) => {
    return (
        <article className='flex flex-col max-w-[300px]'>
            <div className="aspect-square w-full overflow-hidden">
                <img
                    className="w-full object-cover"
                    src={image}
                    alt={title}
                />
            </div>
            <h3>
                {title}
            </h3>
            <p>
                {price}
            </p>
            <div>
                {children}
            </div>
        </article>
    )
}

export default Product