import { ButtonOutline } from "../Button/Button"
import   DownloadButton from "../../Currículo/Document"
//import Downloadpdf from  "../../Currículo/Document"




export function Hero () {

    
    return <section
     id="home"
     className="pt-28 lg:pt-36">

        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rouded-lg">
                        <img src="/images/hero-banner.png" 
                        width={40}
                        height={40}
                        alt="Rafael Amorim Portrait"
                        className="img-cover" />
                    </figure>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide" >
                     <span className=" relative w-2 h-2 rounded-full bg-emerald-500">
                    <span className=" absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                     </span>
                     Disponível.
                    </div>
                </div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 ">Construindo Websites Modernos e Escaláveis.</h2>
                <div className=" flex items-center gap-3">
                    <DownloadButton 
                    label="Download CV"
                    icon="Download"
                    target= "_blank"
                    onClick={DownloadButton}
                    
                    
                    />
                    
                   
                    
                    

                    <ButtonOutline
                    href="about"
                    label="Scroll down"
                    icon="arrow_downward"/>
                    
                </div>
            </div>

            <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-sky-300 to-sky-65% rounded-[60px] overflow-hidden">
                    <img src="/images/1.png" 
                    alt=""
                     width={656}
                     height={800}
                     className="img-cover"
                     />
                </figure>
            </div>
        </div>

    </section>
}