import React, { useState } from 'react';
import Logo from "./Logo.tsx";
import InstagramIcon from "./../assets/icons/InstagramIcon.svg";
import TwitterIcon from "./../assets/icons/TwitterIcon.svg";
import YouTubeIcon from "./../assets/icons/YouTubeIcon.svg";

const Footer: React.FC = () => {
    const [companyLinks] = useState([
        { name: "Home", url: "#" },
        { name: "Order", url: "#" },
        { name: "FAQ", url: "#" },
        { name: "Contact", url: "#" }
    ]);

    const [templateLinks] = useState([
        { name: "Style Guide", url: "#" },
        { name: "Changelog", url: "#" },
        { name: "Licence", url: "#" },
        { name: "Webflow University", url: "#" }
    ]);

    const [flowbaseLinks] = useState([
        { name: "More Cloneables", url: "#" }
    ]);

    const [credits] = useState([
        { text: "Built by", name: "Flowbase", url: "#" },
        { text: "· Powered by", name: "Webflow", url: "#" }
    ]);

    return (
        <footer className="w-full bg-slate-50 py-10 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="flex flex-col gap-6 mb-8 md:mb-0">
                        <Logo width={40} height={44} />
                        <p className="w-60 text-slate-500 text-sm leading-relaxed">
                            Takeaway & Delivery template for small - medium businesses.
                        </p>
                    </div>

                    <div className="mb-8 md:mb-0">
                        <h3 className="text-zinc-950 text-xs font-semibold uppercase tracking-wider mb-5">Company</h3>
                        <ul className="flex flex-col gap-5 text-slate-500 text-sm space-y-2">
                            {companyLinks.map((link, index) => (
                                <li key={index}><a href={link.url}>{link.name}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-8 md:mb-0">
                        <h3 className="text-zinc-950 text-xs font-semibold uppercase tracking-wider mb-5">Template</h3>
                        <ul className="flex flex-col gap-5 text-slate-500 text-sm space-y-2">
                            {templateLinks.map((link, index) => (
                                <li key={index}><a href={link.url}>{link.name}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-zinc-950 text-xs font-semibold uppercase tracking-wider mb-5">Flowbase</h3>
                        <ul className="flex flex-col gap-5 text-slate-500 text-sm space-y-2">
                            {flowbaseLinks.map((link, index) => (
                                <li key={index}><a href={link.url}>{link.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-300 mt-24 mb-16"></div>

                <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
                    <div className="flex space-x-1">
                        {credits.map((credit, index) => (
                            <React.Fragment key={index}>
                                <span>{credit.text}</span>
                                <a href={credit.url} className="text-teal-500">{credit.name}</a>
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <img src={InstagramIcon} alt="Instagram" width={18} height={18}/>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <img src={TwitterIcon} alt="Twitter" width={18} height={15}/>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <img src={YouTubeIcon} alt="Twitter" width={18} height={13}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;