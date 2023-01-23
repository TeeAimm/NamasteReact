import { IMG_CDN_URL } from "../constants"

const MenuItem = ({ name, price, description, cloudinaryImageId }) => {
    return (
        <div className="menu-item">
            <div>
                <h3>{name}</h3>
                <div className="price">{price / 100}</div>
                <div className="description">{description}</div>
            </div>
            <div className="img">
                <img src={IMG_CDN_URL + cloudinaryImageId} />
            </div>
        </div>
    )
}

export default MenuItem;