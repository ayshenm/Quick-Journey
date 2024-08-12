import { footerData } from '@/data/index';

const Footer = () => {
  return (
    <footer className="section md:rounded-b-none  bg-foreground py-20">
      <div className="container flex flex-col justify-center lg:flex-row lg:gap-x-3 md:justify-between">
        <div className="mb-8 lg:mb-0 flex flex-col items-center  md:justify-center md:text-lg lg:justify-start lg:items-start">
          <img
            src={footerData.logo.src}
            alt={footerData.logo.alt}
            className="mb-4 md:mb-2"
            width="168"
            height="41"
          />
          <p className="text-muted-foreground">{footerData.logo.description}</p>
        </div>
        {footerData.sections.map((section, index) => (
          <div key={index} className="mb-8 text-center md:text-center md:text-lg lg:mb-0 lg:mx-4  lg:text-left">
            <h3 className="font-bold mb-4 text-white ">{section.title}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx} className="mb-2">
                  {item.path ? (
                   <a
                   href={item.path}
                   className="text-muted-foreground hover:text-white transition-colors duration-300"
                 >
                   {item.text}
                 </a>
                  ) : (
                    <span className="text-muted-foreground">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-8  pt-4 text-center text-muted-foreground md:text-lg">
        {footerData.copyright}
      </div>
    </footer>
  );
};

export default Footer;
