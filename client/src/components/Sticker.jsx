import CartFunction from "./CartFunction";

function Sticker({ name, price, image, category }) {
    return (
        <article className="sticker">
             <h4>🍭 This is A Sticker Item</h4>
            <div className="sticker-img">
                <img src={image} alt={name} />
            </div>
            <div className="sticker-footer">
                <h3>{name}</h3>
            </div>
            <div className="sticker-footer">
                <h4>{price}</h4>
            </div>
            <div className="sticker-footer">
                <h4 className="category">{category}</h4>
            </div>

            <CartFunction />
        </article>
    );
}

export default Sticker