import  SkillCard  from "./SkillCard";


const skillItem = [
    {
      imgSrc: 'public/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: 'public/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: 'public/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: 'public/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: 'public/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: 'public/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: 'public/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: 'public/images/tailwindcss.svg',
      label: 'TailwindCSS',
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
            Descubra as poderosas ferramentas e tecnologias que utilizo para criar sites excepcionais e aplicativos de alto desempenho.

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