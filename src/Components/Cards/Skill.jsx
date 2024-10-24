import  SkillCard  from "./SkillCard";


const skillItem = [
    {
      imgSrc: 'images/figma.svg',
      label: 'figma',
      desc: 'Design tool'
    },
    {
      imgSrc: 'images/css3.svg',
      label: 'CSS',
      desc: 'user Interface'
    },
    {
      imgSrc: 'images/javascript.svg',
      label: 'javaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: 'images/nodejs.svg',
      label: 'nodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: 'images/expressjs.svg',
      label: 'expressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: 'images/mongodb.svg',
      label: 'mongoDB',
      desc: 'Database'
    },
    {
      imgSrc: 'images/react.svg',
      label: 'react',
      desc: 'Framework'
    },
    {
      imgSrc: 'images/tailwindcss.svg',
      label: 'tailwindCSS',
      desc: 'User Interface'
    },
  ];

export function Skill () {
    return (<section className="section">
        <div className="container">
            <h2 
            className="headline-2 reveal-up">
                    Ferramentas de desenvolvimento.
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[60ch] reveal-up">
            Descubra poderosas ferramentas e tecnologias que utilizo para criar sites excepcionais e aplicativos de alto desempenho.

            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) =>( 
                        <SkillCard 
                        key={key}
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}
                        classes="reveal-up" />
                        
                ))
            }
            </div>


        </div>
    </section>)
}