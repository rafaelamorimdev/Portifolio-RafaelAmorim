import { ButtonPrimary } from "../Button/Button";


const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    /*{
      label: 'Reviews',
      href: '#reviews'
    },*/
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/rafaelamorimdev'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rafaelamorimdev/'
    },
    /*{
      label: 'Twitter X',
      href: 'https://x.com/codewithsadee_'
    },*/
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/eurafaamorim/'
    },
    /*{
      label: 'CodePen',
      href: 'https://codepen.io/codewithsadee'
    }*/
  ];

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">

                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[30ch] reveal-up">
                        Vamos criar algo incrível
                        </h2>
                        <ButtonPrimary
                        href="mailto:rafael.ceb2010@gmail.com"
                        label="Start project"
                        icon="chevron_right"
                        classes="reveal-up"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                     
                        <div>
                            <p className="mb-2 reveal-up">Mapa do Site</p>

                            <ul>{sitemap.map(({label, href}, key) => ( 
                                <li key={key}>
                                    <a href={href}
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}</ul>
                        </div>


                    <div>
                            <p className="mb-2 reveal-up">Redes Sociais</p>

                            <ul>{socials.map(({label, href}, key) => ( 
                                <li key={key}>
                                    <a href={href}
                                    target="_blank"
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}</ul>
                        </div>
                    </div>


                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a 
                    href="/" 
                    className="logo reveal-up">
                        <img 
                        src="/public/images/logoRafa4.svg" 
                        alt="Logo"
                        width={120}
                        height={120} />
                       </a>

                       <p className="text-zinc-500 text-sm">
                        &copy; 2024 <span className="text-zinc-200 reveal-up">RafaelAmorim.dev</span>
                       </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer