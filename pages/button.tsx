
import type {myType} from './index'



const Button = function(props :myType){
    
    return(
    <div>
        <div className="md:m-10 m-5 flex-1 ">
        <div className="backdrop-blur-[72px] bg-white/[.5] hover:bg-gradient-to-r hover:from-purple-500 hover:to-sky-500 hover:shadow-lg flex-1 border-3  rounded-lg text-center hover:scale-[1.2]">
            <p className="lg:text-3xl sm:text-2xl text-xl  sm:p-8 p-5  font-medium hover:text-white  text-purple-600  ">
              <a href={props.url}>{props.text}</a>
            </p>
        </div>
        </div>
    </div>
    ); 
}
export default Button

