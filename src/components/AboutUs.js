import User from "./User";
import { UserClass } from "./UserClass";

const AboutUs = ()=>{
    return (
        <div>
            <h2>About Us</h2>
            <User/>
            <UserClass name={"Nitin"} email={"madhaninitin27@gmail.com"}/>
        </div>
    )
}
export default AboutUs;