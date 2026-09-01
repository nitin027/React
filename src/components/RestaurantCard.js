import LOGO_URL from "../../utils/constant"
const RestaurantCard = (props)=>{
    const {resData} = props
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="dish-image" alt="biryani" src={LOGO_URL}></img>
            <h3>{props.resData.name}</h3>
            <h4>{props.resData.cuisine}</h4>
            <h4>{resData.rating}</h4>
            <h4>{resData.deliveryTime}
            </h4>
        </div>
    )
}

export default RestaurantCard;
