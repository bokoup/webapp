import { json } from "react-router";
import { MetaFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const personalInformation: {
    category: string;
    collect: string;
    share: string;
  }[] = [
    { category: "Identifiers", collect: "Yes", share: "No" },
    {
      category: "Online Identifiers",
      collect: "Yes",
      share: "No",
    },
    {
      category: "Protected Classification Characteristics",
      collect: "No",
      share: "No",
    },
    {
      category: "Commercial Information",
      collect: "Yes",
      share: "No",
    },
    {
      category: "Biometric Information",
      collect: "Yes",
      share: "No",
    },
    {
      category: "Internet or Network Information",
      collect: "Yes",
      share: "No",
    },
    {
      category: "Geolocation Data",
      collect: "Yes",
      share: "No",
    },
    {
      category: "Sensor Information",
      collect: "Yes",
      share: "No",
    },
    {
      category: "Professional or Employment Information",
      collect: "No",
      share: "No",
    },
    {
      category: "Education Information",
      collect: "No",
      share: "No",
    },
    {
      category: "Inferences",
      collect: "No",
      share: "No",
    },
    {
      category: "Financial Information",
      collect: "No",
      share: "No",
    },
    {
      category: "Medical Information",
      collect: "No",
      share: "No",
    },
  ];

  const glossary: {
    category: string;
    definition: string;
  }[] = [
    {
      category: "Categories of Personal Information",
      definition: "Date Elements within the Category",
    },
    {
      category: "Biometric Information",
      definition:
        "An individual’s physiological, biological or behavioral characteristics, including DNA, that can be used, singly or in combination with each other or with other identifying data, to establish an individual’s identity. Biometric information includes, but is not limited to, imagery of the iris, retina, fingerprint, face, hand, palm, vein patterns, and voice recordings, from which an identifier template, such as a face print, a minutiae template, or a voiceprint, can be extracted, and keystroke patterns or rhythms, gait patterns or rhythms, and sleep, health, or exercise data that contain identifying information.",
    },
    {
      category: "Transaction History",
      definition:
        "Products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.",
    },
    {
      category: "Financial Information",
      definition:
        "Bank account number, debit or credit card numbers, insurance policy number, and other financial information.",
    },
    {
      category: "Geolocation Data",
      definition:
        "Precise location, e.g., derived from GPS coordinates or telemetry data.",
    },
    {
      category: "Identifiers",
      definition:
        "Real name, alias, postal address, unique personal identifier, customer number, email address, account name other similar identifiers.",
    },
    {
      category: "Government-issued ID",
      definition:
        "Social security number, driver’s license, passport, or other government-issued ID, including an ID number or image.",
    },
    {
      category: "Medical Information",
      definition:
        "Personal information about an individual’s health or healthcare, including health insurance information.",
    },
    {
      category: "Internet or Network Information",
      definition:
        "Browsing history, search history, and information regarding a consumer’s interaction with an Internet website, application, or advertisement.",
    },
    {
      category: "Online Identifiers",
      definition:
        "An online identifier or other persistent identifier that can be used to recognize a person, family or device, over time and across different services, including but not limited to, a device identifier; an Internet Protocol address; cookies, beacons, pixel tags, mobile ad identifiers, or similar technology; customer number, unique pseudonym, or user alias; telephone numbers, or other forms of persistent or probabilistic identifiers (i.e., the identification of a person or a device to a degree of certainty of more probable than not) that can be used to identify a particular person or device.",
    },
    {
      category: "Physical Description",
      definition:
        "An individual’s physical characteristics or description (e.g., hair color, eye color, height, weight).",
    },
    {
      category: "Professional or Employment Information",
      definition:
        "Information relating to a person's current, past or prospective employment or professional experience (e.g., job history, performance evaluations), and educational background.",
    },
    {
      category: "Protected Classification Characteristics",
      definition:
        "Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information).",
    },
    {
      category: "Sensory Information",
      definition:
        "Audio, electronic, visual, thermal, olfactory, or similar information.",
    },
  ];

  return json({ personalInformation, glossary });
}

export const meta: MetaFunction = () => ({
  title: "Privacy Policy",
  description: "Clover App Privacy Policy",
});

export default function PrivacyPolicy() {
  const { personalInformation, glossary } = useLoaderData();
  return (
    <div className="container mx-auto p-2 lg:py-4">
      <div className="flex justify-between">
        <h2 className="font-heading text-2xl font-medium lg:text-3xl">
          Clover App Privacy Policy
        </h2>
      </div>
      <div className="w-full max-w-3xl px-4 pt-4">
        <p className="pb-2">Effective Date: April 10, 2023</p>
        <p className="pb-2">
          This “Privacy Policy” explains how Bokoup, LLC (“Company” or “we”)
          collects, uses, discloses, and otherwise processes personal data on
          behalf of our customers – typically, merchants (any, a “Merchant”) –
          in connection with our application, bokoup, which runs on the Clover
          Point of Sale system (“Clover POS”). This Privacy Policy does not
          apply to Company’s privacy practices in any other context.
        </p>
        <p className="pb-2">
          Company’s processing of personal data in connection with our
          application is governed by this Privacy Policy and our agreements with
          Merchants. In the event of any conflict between this Privacy Policy
          and a customer agreement, the customer agreement will control to the
          extent permitted by applicable law.
        </p>
        <p className="pb-2">
          This Privacy Policy is not a substitute for any privacy policy that a
          Merchant may be required to provide to their customers, personnel, or
          other individuals.
        </p>
        <h3 className="pb-1 text-lg font-semibold">
          Information Clover collects
        </h3>
        <p className="pb-2">
          We may collect personal data from or on behalf of Merchants. Merchants
          determine the scope of the personal data transferred to us or that we
          collect, and the information we receive may vary by Merchant.
        </p>
        <h3 className="text-md pb-1 font-semibold">
          Information that we collect when a customer for a Merchant makes a
          payment
        </h3>
        <p className="pb-2">
          When a customer makes a payment via a Clover POS, we collect
          information about the transaction, which may include personal data.
          Information about transactions includes the payment card used, name
          associated with the payment card, the location of the merchant’s
          store, date and time of the transaction, transaction amount, and
          information about the goods or services purchased in the transaction.
        </p>
        <h4 className="text-md pb-1 font-medium italic">
          Additional information that customers of the Merchant provide through
          the Clover POS ancillary to a payment
        </h4>
        <p className="pb-2">
          We may collect additional information ancillary to the payment. This
          information may include:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Customers’ email address or phone number, such as when the customer
            chooses to receive an electronic receipt
          </li>
          <li>
            Customers’ marketing preferences, such as whether the customer
            wishes to receive marketing communications or newsletters
          </li>
          <li>
            Information about participating customers’ activity in a merchant
            loyalty program
          </li>
          <li>
            Customers’ physical address, where needed for delivery of goods or
            services
          </li>
          <li>
            Other information the customer provides, such as birthdate,
            interests or preferences, reviews, and feedback
          </li>
        </ul>
        <h3 className="text-md pb-1 font-semibold">
          Information that we collect about personnel of a Merchant
        </h3>
        <h4 className="text-md pb-1 font-medium italic">
          Additional information that Merchants provide to us about their
          customers or personnel
        </h4>
        <p className="pb-2">
          Merchants may provide us with additional information directly, via
          access they grant to us, or otherwise. The types of information that
          merchants may provide to us about their customers include email
          addresses, phone numbers, and purchase history. The types of
          information that merchants may provide to us about their personnel
          include email addresses, phone numbers, shifts, and sales history.
        </p>
        <h3 className="pb-1 text-lg font-semibold">
          How we use the information we collect
        </h3>
        <p className="pb-2">
          We use the personal data we collect for or on behalf of Merchants, to
          provide our services and the functionality of our application.
        </p>
        <p className="pb-2">
          We may also use personal data for related internal purposes,
          including:
        </p>
        <ul className="list-disc pl-6">
          <li>
            To provide information about the application, such as important
            updates or changes to the application and security alerts
          </li>
          <li>
            Customers’ marketing preferences, such as whether the customer
            wishes to receive marketing communications or newsletters
          </li>
          <li>
            Information about participating customers’ activity in a merchant
          </li>
        </ul>
        <p className="pb-2">
          In addition, Company may use personal data as we believe necessary or
          appropriate to (a) comply with applicable laws and lawful requests and
          legal processes, such as to respond to subpoenas or requests from
          government authorities; (b) enforce the terms and conditions that
          govern our application; (c) protect our rights, privacy, safety or
          property, and/or that of you or others; and (d) protect, investigate
          and deter against fraudulent, harmful, unauthorized, unethical or
          illegal activity.
        </p>
        <h3 className="pb-1 text-lg font-semibold">How we share information</h3>
        <p className="pb-2">We may share personal data that we collect with:</p>
        <ul className="list-disc pl-6">
          <li>
            The Merchant from whom or on whose behalf we collected the personal
            data
          </li>
          <li>
            <span>
              The platform on which our application runs, the Clover POS. You
              may view Clover’s Privacy Notice{" "}
            </span>
            <a
              className="text-bokoupBlue2-700 hover:underline"
              href="https://www.clover.com/privacy-policy"
            >
              here
            </a>
            .
          </li>
          <li>
            Information about participating customers’ activity in a merchant
          </li>
        </ul>
        <p className="pb-2">
          Company may disclose personal data to government or law enforcement
          officials or private parties as required by law, and disclose and use
          such information as we believe necessary or appropriate to (a) comply
          with applicable laws and lawful requests and legal processes, such as
          to respond to subpoenas or requests from government authorities; (b)
          enforce the terms and conditions that govern our application; (c)
          protect our rights, privacy, safety or property, and/or that of you or
          others; and (d) protect, investigate and deter against fraudulent,
          harmful, unauthorized, unethical or illegal activity.
        </p>
        <p className="pb-2">
          Company may sell or transfer some or all of its business or assets,
          including your personal data, in connection with a business
          transaction (or potential business transaction) such as a merger,
          consolidation, acquisition, reorganization or sale of assets or in the
          event of bankruptcy, in which case we will make reasonable efforts to
          require the recipient to honor this Privacy Policy.
        </p>
        <h3 className="pb-1 text-lg font-semibold">Your rights and choices</h3>
        <h3 className="text-md pb-1 font-semibold">Data subject rights</h3>
        <p className="pb-2">
          To the extent that applicable law provides individuals with rights
          pertaining to their personal information, such as to review and
          request changes to their personal information, individuals should
          contact the Merchant with any requests pertaining to the Merchant’s
          use of our application. To the extent that Clover is responsible for
          responding to data subject rights requests under applicable law,
          individuals may contact Clover with applicable requests as explained
          in{" "}
          <a
            className="text-bokoupBlue2-700 hover:underline"
            href="https://www.clover.com/privacy-policy"
          >
            Clover's Privacy Policy
          </a>
          . Company will assist a Merchant, or Clover, as applicable, in
          responding to such requests subject to our contract with a Merchant or
          Clover.
        </p>
        <h3 className="text-md pb-1 font-semibold">Complaints</h3>
        <p className="pb-2">
          If you have a complaint about our handling of personal data, you may
          contact us via the contact information provided below.
        </p>
        <p className="pb-2">
          We reserve the right to modify this Privacy Policy at any time. We
          will notify you of updates by updating the date of this Privacy
          Policy.
        </p>
        <h3 className="text-md pb-1 font-semibold">Updates</h3>
        <p className="pb-2">
          We reserve the right to modify this Privacy Policy at any time. We
          will notify you of updates by updating the date of this Privacy
          Policy.
        </p>
        <h3 className="pb-1 text-lg font-semibold">Contact us</h3>
        <p className="pb-2">
          <span>
            You may contact us with any questions, comments, or complaints,
            about this Privacy Policy or our privacy practices via email:
          </span>{" "}
          <a
            className="text-bokoupBlue2-700 hover:underline"
            href="mailto:info@bokoup.com"
          >
            info@bokoup.com
          </a>
          .
        </p>
        <h3 className="pb-1 text-lg font-semibold">
          Additional Information for Merchants Located in Europe
        </h3>
        <h3 className="text-md pb-1 font-semibold">Controller</h3>
        <p className="pb-2">
          <span>
            Company is a data processor acting for and on behalf of the Merchant
            that has installed our application on their Clover POS. That
            Merchant is the controller of personal data that we process on its
            behalf. Clover is also a controller of personal data in some
            circumstances. Clover’s Privacy Notice is available at{" "}
          </span>
          <a
            className="text-bokoupBlue2-700 hover:underline"
            href="https://www.clover.com/privacy-policy"
          >
            https://www.clover.com/privacy-policy
          </a>
          .
        </p>
        <h3 className="text-md pb-1 font-semibold">
          Legal basis for processing
        </h3>
        <p className="pb-2">
          Company processes personal data as directed or permitted by the
          Merchant that uses our application. The Merchant is responsible for
          establishing a legal basis for our processing of personal data for or
          on behalf of the Merchant.
        </p>
        <h3 className="text-md pb-1 font-semibold">
          Cross border data transafer
        </h3>
        <p className="pb-2">
          When we transfer personal data outside of Europe (or the UK) to
          countries not deemed by the European Commission to provide an adequate
          level of protection for personal data, we make the transfer pursuant
          to one of the following transfer mechanisms:
        </p>
        <ul className="list-disc pl-6">
          <li>
            A contract approved by the European Commission (sometimes called
            “Model Clauses” or “Standard Contractual Clauses”);
          </li>
          <li>The recipient’s Binding Corporate Rules;</li>
          <li>
            The consent of the individual to whom the personal data relates; or
          </li>
          <li>
            Other mechanisms or legal grounds as may be permitted under
            applicable European law.
          </li>
        </ul>
        <p className="pb-2">
          You may contact us with questions about our transfer mechanism.
        </p>
        <h3 className="text-md pb-1 font-semibold">Data retention</h3>
        <p className="pb-2">
          Subject to our agreement with a Merchant, Company retains personal
          data for as long as necessary to (a) provide our products and
          services; (b) comply with legal obligations; (c) resolve disputes; and
          (d) enforce the terms of any agreement we may have with a Merchant.
          You may contact us for additional information about our data retention
          practices in connection with the application.
        </p>
        <h3 className="text-md pb-1 font-semibold">Data subject rights</h3>
        <p className="pb-2">
          <span>
            Under certain circumstances, data subjects in Europe and the UK have
            certain rights relating to their personal data, which include the
            rights to request from the Controller (a) access to the data
            subject’s personal data; (b) correction of incomplete or inaccurate
            personal data; (c) erasure of personal data; (d) restriction of
            processing concerning the data subject; and (e) that the controller
            provide a copy of the data subject’s personal data that the data
            subject provided to the controller in a structured, commonly used
            and machine-readable format. Data subjects may also object to a
            controller’s processing of personal data under certain
            circumstances. Where processing is based on a data subject’s
            consent, the data subject has the right to withdraw consent at any
            time; however, the withdrawal of consent will not affect the
            lawfulness of processing based on consent before its withdrawal.
            Data subjects may also file a complaint with a supervisory
            authority. You may view contact information for supervisory
            authorities at{" "}
          </span>
          <a
            className="text-bokoupBlue2-700 hover:underline"
            href="https://edpb.europa.eu/about-edpb/board/members_en"
          >
            https://edpb.europa.eu/about-edpb/board/members_en
          </a>
          <span>
            . Data subjects in Europe or the UK should direct any rights request
            to the appropriate Controller.
          </span>
        </p>
        <h3 className="pb-1 text-lg font-semibold">
          Your California privacy rights
        </h3>
        <p className="pb-2">
          As a California resident, you have the rights listed below. However,
          these rights are not absolute, and we may decline your request as
          permitted by the CCPA.
        </p>
        <ul className="list-disc pl-6">
          <li>
            Information. You can request the following information about how we
            have collected and used your Personal Information during the past 12
            months:
            <ul className="list-disc pl-6">
              <li>
                The categories of Personal Information that we have collected.
              </li>
              <li>
                The categories of sources from which we collected Personal
                Information.
              </li>
              <li>
                The business or commercial purpose for collecting and/or selling
                Personal Information.
              </li>
              <li>
                The categories of third parties with whom we share Personal
                Information.
              </li>
              <li>
                Whether we have disclosed your Personal Information for a
                business purpose, and if so, the categories of Personal
                Information received by each category of recipient.
              </li>
              <li>
                Whether we’ve sold your Personal Information; and, if so, the
                categories of Personal Information received by each category of
                recipient.
              </li>
            </ul>
          </li>
          <li>
            Access. You can request a copy of the Personal Information that we
            maintain about you.
          </li>
          <li>
            Deletion. You can ask us to delete the Personal Information that we
            maintain about you.
          </li>
          <li>
            Nondiscrimination. You are entitled to exercise the rights described
            above free from discrimination. This means that we will not penalize
            you for exercising your rights by taking actions such as by denying
            you goods or services, increasing the price/rate of goods or
            services, decreasing the service quality, or suggesting that we may
            penalize you as described above for exercising your rights. However,
            the CCPA allows us to charge you a different price or provide a
            different service quality if that difference is reasonably related
            to the value of the Personal Information we are unable to use.
          </li>
        </ul>
        <h3 className="text-md pb-1 font-semibold">
          How to exercise your rights
        </h3>
        <p className="pb-2">
          You may exercise your California privacy rights as follows:
        </p>
        <h3 className="text-md pb-1 font-semibold">
          Right to information, access and deletion
        </h3>
        <p className="pb-2">
          You can request to exercise your information, access and deletion
          rights in the following ways:
        </p>
        <ul className="list-disc pl-6">
          <li>Call 1-800</li>
          <li>
            Identity verification. The CCPA requires us to verify the identity
            of the individual submitting the request before providing a
            substantive response to the request. A request must be provided with
            sufficient detail to allow us to understand, evaluate and respond.
            The requester must provide sufficient information to allow us to
            reasonably verify that the individual is the person about whom we
            collected information. A request may also be made on behalf of your
            child under 13.
          </li>
          <li>
            Authorized agents. California residents can empower an “authorized
            agent” to submit requests on their behalf. We may require the
            authorized agent to have a written authorization confirming that
            authority.
          </li>
        </ul>
        <h3 className="pb-1 text-lg font-semibold">
          Sale of personal information
        </h3>
        <p className="pb-2">
          We do not sell, as defined under CCPA, your Personal Information to
          third parties. In the preceding twelve (12) months, we have not sold
          any personal information.
        </p>
        <h3 className="pb-1 text-lg font-semibold">
          Personal information that we collect, use and share
        </h3>
        <p className="pb-2">
          The chart below summarizes our collection, use and sharing of Personal
          Information during the last 12 months before the effective date of
          this Privacy Policy. We describe the sources through which we collect
          your Personal Information in section above titled The Personal Data We
          Collect, and describe the purposes for which we collect, use, sell and
          share this information in section above titled How We Use Your
          Personal Data and The Parties With Whom We Share Your Personal Data.
        </p>
        <table className="mb-6 w-full table-auto">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">
                Category (see the glossary below for definitions)
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Do we collect this information?
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Do we share this information for business purposes?
              </th>
            </tr>
          </thead>
          <tbody>
            {personalInformation.map(
              ({
                category,
                collect,
                share,
              }: {
                category: string;
                collect: string;
                share: string;
              }) => (
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    {category}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {collect}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">{share}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <h3 className="pb-1 text-lg font-semibold">Glossary</h3>
        <table className="mb-6 w-full table-auto">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Category</th>
              <th className="border border-gray-400 px-4 py-2">Definition</th>
            </tr>
          </thead>
          <tbody>
            {glossary.map(
              ({
                category,
                definition,
              }: {
                category: string;
                definition: string;
              }) => (
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    {category}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {definition}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <h3 className="pb-1 text-lg font-semibold">Contact Information:</h3>
        <p>Bokoup, LLC</p>
        <p>870 Market Street</p>
        <p>Suite 861</p>
        <p>San Francisco, 94102</p>
        <a
          className="text-bokoupBlue2-700 hover:underline"
          href="tel:4157600000"
        >
          (415) 760-0000
        </a>
        <br />
        <a
          className="text-bokoupBlue2-700 hover:underline"
          href="mailto:info@bokoup.com"
        >
          info@bokoup.com
        </a>
      </div>
    </div>
  );
}
