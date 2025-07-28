import Card from "@/components/Card";
import Button from "@/components/Button";

const socials = [
    {
        icon: "twitter",
        href: "https://x.com/mewayz",
    },
    {
        icon: "facebook",
        href: "https://www.facebook.com/mewayz/",
    },
    {
        icon: "instagram",
        href: "https://www.instagram.com/mewayz/",
    },
    {
        icon: "threads",
        href: "https://www.threads.net/@mewayz",
    },
];

const GetMoreCustomers = ({}) => {
    return (
        <Card title="Expand Your Business Reach">
            <div className="mb-6 px-5 text-body-2 text-t-secondary max-lg:px-3">
                Leverage social media marketing to drive customer acquisition and increase revenue. 
                Businesses that actively engage on social platforms see 78% higher customer engagement rates. 
                Start building your digital presence today! 🚀
            </div>
            <div className="flex gap-3">
                {socials.map((social, index) => (
                    <Button
                        className="flex-1 !px-0"
                        icon={social.icon}
                        key={index}
                        isStroke
                        as="a"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                ))}
            </div>
        </Card>
    );
};

export default GetMoreCustomers;
