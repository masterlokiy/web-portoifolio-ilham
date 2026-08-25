import gmailIcon from "@assets/images/logo/Gmail_idrA5FDGTH_0.svg";
import githubIcon from "@assets/images/logo/github-142-svgrepo-com.svg";
import linkedinIcon from "@assets/images/logo/linkedin-svgrepo-com.svg";
import instagramIcon from "@assets/images/logo/instagram-1-svgrepo-com.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Gmail",
      url: "mailto:icahyosw@gmail.com",
      icon: gmailIcon,
    },
    {
      name: "GitHub",
      url: "https://github.com/masterlokiy",
      icon: githubIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ilhammnw-e",
      icon: linkedinIcon,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ilhamnw.e/",
      icon: instagramIcon,
    },
  ];

  return (
    <footer className="relative z-10 w-full bg-[#f5f4f1] border-t border-[#e5e1d7] py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="text-center sm:text-left">
          <p className="text-xs md:text-sm text-[#777777] font-medium">
            ©{currentYear}
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-2">
          <span className="text-xs sm:text-sm font-medium text-[#777777]">
            Let's get in touch
          </span>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="cursor-pointer flex h-8.5 w-8.5 items-center justify-center rounded-full bg-white border border-[#dedbd4] p-2 shadow-xs transition-all duration-200 hover:border-[#fc731f] hover:scale-110"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-full h-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
