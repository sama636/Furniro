import "../style/main.css"
import {Link} from "react-router-dom";

export default function Hero() {
    return(
        <section className="font-poppins box-border h-screen w-full flex justify-center items-center lg:items-end lg:justify-end lg:pr-48 lg:pb-32 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}>
            <div className="bg-creamy flex flex-col max-w-2xl max-h-hero--box rounded-lg px-8 pt-12 pb-8 gap-4">
                <span className="black-like font-semibold tracking-widest">New Arrival</span>
                <h1 className="text-4xl text-brownish-creamy font-bold lg:text-6xl">Discover Our<br />New Collection</h1>
                <p className="text-black-like font-semibold text-l lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br />elit tellus, luctus nec ullamcorper mattis.</p>
                <Link className="inline font-bold bg-brownish-creamy w-56 h-20 text-l text-white rounded-none mt-7 hover:bg-brownish-creamy flex justify-center items-center" to="/shop">BUY NOW</Link>
            </div>
        </section>
    );
}