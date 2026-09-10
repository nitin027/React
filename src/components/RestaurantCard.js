import LOGO_URL from "../../utils/constant"
const RestaurantCard = (props)=>{
    const {resData} = props
    return (
        <div className="m-4 p-4 w-[200px] bg-gray-100 hover:bg-green-700" style={{backgroundColor:"#f0f0f0"}}>
            <img className="w-20" alt="biryani" src={LOGO_URL}></img>
            <h3 className="font-bold">{props.resData.name}</h3>
            <h4>{props.resData.cuisine}</h4>
            <h4>{resData.rating}</h4>
            <h4>{resData.deliveryTime}
            </h4>
        </div>
    )
}

export default RestaurantCard;
