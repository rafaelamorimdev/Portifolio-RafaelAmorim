
export function About () {
    return (
    <section id="about"
    className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 mb:text-xl md:max-w-[120ch]"> Olá! Sou Rafael Amorim, desenvolvedor front-end apaixonado por criar experiências digitais atraentes e de alto desempenho. Transformo visões em obras digitais elegantes e funcionais, focando em interfaces responsivas e interativas que superem expectativas, sempre com usabilidade e acessibilidade. Atualizado com tendências do mercado, sigo as melhores práticas no desenvolvimento front-end. Confira meu portfólio e entre em contato para discutir seu próximo projeto web.</p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
                    
                <img 
                src="/images/logo-rafa.svg" 
                alt="Logo"
                width={110}
                height={110}
                className="ml-auto md:w-[110px] md:h-[110px]">

                
                 </img>
                </div>
            </div>


        </div>
    </section>)
}