import { pricing } from "@/mocks/pricing";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const Pricing = ({}) => (
    <div className="mb-22 max-md:mb-14">
        <div className="mb-16 text-center max-lg:mb-12 max-md:mb-10 max-md:text-left">
            <div className="max-w-160 mx-auto mb-4 text-h3 max-lg:max-w-120 max-lg:text-h4">
                Choose the perfect plan for your business
            </div>
            <div className="max-w-142 mx-auto mb-4 text-[1.125rem] font-medium tracking-[-0.01em] text-t-secondary">
                All plans include the same core features. Choose based on your pricing preference and business needs.
            </div>
        </div>
        <div className="flex max-md:overflow-x-auto max-md:scrollbar-none max-md:-mx-6 max-md:before:shrink-0 max-md:before:w-2 max-md:after:shrink-0 max-md:after:w-6">
            {pricing.map((item) => (
                <div
                    className={`flex-1 pt-15 px-4 pb-10 max-lg:pt-8 max-lg:pb-7 max-md:flex-auto max-md:shrink-0 max-md:w-80 ${
                        item.isRecommended
                            ? "relative border border-s-stroke2 rounded-[2.5rem]"
                            : ""
                    }`}
                    key={item.id}
                >
                    {item.isRecommended && (
                        <div className="absolute top-6 right-6 flex items-center justify-center size-16 pb-0.5 border border-s-stroke2 rounded-full max-lg:top-4 max-lg:right-4 max-lg:size-11">
                            <Icon
                                className="fill-t-secondary"
                                name="star-stroke-think"
                            />
                        </div>
                    )}
                    <div className="mb-8 pl-10 text-h4 max-lg:mb-5 max-lg:pl-5">
                        {item.title}
                    </div>
                    <div
                        className={`mb-8 px-10 py-6 border rounded-3xl max-lg:mb-5 max-lg:p-5 ${
                            item.isRecommended
                                ? "border-s-stroke2 shadow-depth"
                                : "border-s-subtle"
                        }`}
                    >
                        <div className="flex items-center mb-5">
                            <div className="shrink-0 text-h2">
                                {item.title === "Pro" ? "$" : ""}{item.percentage}{item.title === "Pro" ? "" : "%"}
                            </div>
                            <div className="grow pl-3 text-body-2 text-t-secondary">
                                {item.description}
                            </div>
                        </div>
                        {item.isRecommended ? (
                            <Button isBlack>Get Started</Button>
                        ) : item.title === "Free" ? (
                            <Button isStroke>Current Plan</Button>
                        ) : (
                            <Button isStroke>Upgrade to {item.title}</Button>
                        )}
                    </div>
                    <div className="flex flex-col gap-4 px-10 max-lg:pl-5 max-lg:pr-0">
                        {item.features.map((feature, index) => (
                            <div
                                className="flex items-center gap-4 max-lg:gap-2 max-lg:text-body-2"
                                key={index}
                            >
                                <Icon
                                    className={`${
                                        item.isRecommended
                                            ? "fill-t-primary"
                                            : "fill-t-secondary/50"
                                    }`}
                                    name="check-circle-fill"
                                />
                                <div className="">{feature}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Pricing;
