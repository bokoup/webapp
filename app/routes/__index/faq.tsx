import { json } from "react-router";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export async function loader() {
  return json({});
}

const disclosures = [
  {
    question: "What is bokoup?",
    answer:
      "Bokoup is a new way for merchants to reach and engage customers using promotions and loyalty programs as non-fungible tokens. The tokens can be redeemed in stores with a mobile phone using existing point of sale systems. Bokoup uses the power and speed of the Solana blockchain to allow merchants to create promotions and loyalty programs in the form of non-fungible tokens that customers can receive on their mobile devices and present for redemption at merchants’ existing point of sale systems.",
  },
  {
    question: "What are the benefits to merchants?",
    answer:
      "The number of customers using crypto currencies is growing rapidly and represents a new way to acquire customers and engage with them. Many large brands, including Starbucks and Nike, have begun using non-fungible tokens to acquire and engage with customers. These bigger companies are earning better returns on investment with non-fungible tokens than they are from traditional media because advertising and promotions using non-fungible tokens are much less competitive than traditional media markets. Bokoup aims to allow even small and medium sized merchants to earn better return on their promotion and loyalty investments without needing the big budgets and IT staff of the leading brands and retailers.",
  },
  {
    question: "What are the benefits to customers?",
    answer:
      "Customers get a superior loyalty and promotions experience. They use their phones to scan QR codes to receive promotions and then have them automatically applied at checkout. No need to clip coupons or search emails and online for discount codes. They just present their address with their phones at checkout and have their eligible promos automatically applied to their purchases. Crypto savvy customers can use their existing mobile crypto wallets to receive non-fungible tokens from merchants.",
  },
  {
    question: "How can I create a merchant account?",
    answer:
      "Merchants can go to the website and sign in with the bokoup mobile application or Phantom or Solflare mobile wallet. Once signed in to the website, they can navigate to the merchants page and create a merchant.",
  },
  {
    question: "How do merchants create promos?",
    answer:
      "Bokoup is set up to be able to accommodate merchants with multiple locations and multiple point of sale devices at each location. After creating a merchant account, merchants can add their locations and devices. Promos are associated with a campaign, which is a collection of locations.<br><br>If you are interested in becoming a merchant, please contact us and we can help you set your account up and create your first promo.<br><br>Bokoup is currently able to create two types of promotions. The first is a percentage discount off of a total purchase of a minimum amount, 10% off of a purchase of more than $10.00, e.g. The second is a number of free products if a minimum number are purchased, buy one get one free, e.g.",
  },
  {
    question: "How can customers get promos?",
    answer:
      "Customers can get promos from merchants by scanning QR codes with their mobile devices. Merchants can make QR codes for promos available on the bokoup website, on their own websites, in stores or in other print and online media.",
  },
  {
    question: "How do customers use their promos when checking out?",
    answer:
      "Customers present their wallet addresses for scanning at merchants’ point of sale devices. If they have any eligible promo tokens in their wallet, they will be applied automatically to their purchase before completing payment.",
  },
  {
    question: "How do merchants reconcile promo transactions?",
    answer:
      "Promo transactions are reflected as discounts in merchants' existing point of sale systems so reconciling transactions is as easy as running the same reports they are used to in their point of sale systems. The transactions are also recorded on the Solana blockchain. Bokoup maintains an API that merchants can access through the bokoup web application or directly to run additional reports.",
  },
  {
    question: "How much does it cost for customers?",
    answer:
      "Bokoup is free for customers to use. All transaction fees are paid by the platform.",
  },
  {
    question: "How much does it cost for merchants?",
    answer:
      "It is free for merchants to create a merchant account, add their locations and devices and create campaigns. Bokoup charges a flat fee to create a promo - a series of tokens to be issued to customers - and another flat fee when a customer redeems a token at the point of purchase. Bokoup is currently in development mode and free for merchants to trial. Exact fee levels will be set prior to official launch.",
  },
];

function DisclosureImpl({
  key,
  question,
  answer,
}: {
  key: number;
  question: string;
  answer: string;
}) {
  return (
    <Disclosure key={key} as="div" className="mt-2">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-bokoupBlue2-100 px-4 py-2 text-left font-semibold hover:bg-bokoupBlue2-100 focus:outline-none focus-visible:ring focus-visible:ring-bokoupBlue2-500 focus-visible:ring-opacity-75">
            <span>{question}</span>
            <ChevronUpIcon
              className={`${
                open ? "" : "rotate-180 transform"
              } h-5 w-5 text-bokoupGreen2-500`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-4 pt-4 pb-2">
              <p dangerouslySetInnerHTML={{ __html: answer }} />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

export default function FAQ() {
  return (
    <div className="container mx-auto mb-auto p-2 lg:py-4">
      <div className="flex justify-between">
        <h2 className="font-heading text-2xl font-medium lg:text-3xl">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-2">
          {disclosures.map((disclosure, index) => (
            <DisclosureImpl
              key={index}
              question={disclosure.question}
              answer={disclosure.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
