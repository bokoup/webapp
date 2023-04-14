import { json } from "react-router";
import { MetaFunction } from "@remix-run/server-runtime";

export async function loader() {
  return json({});
}

export const meta: MetaFunction = () => ({
  title: "License Agreement",
  description: "End User License Agreement for Clover App",
});

export default function LicenseAgreement() {
  return (
    <div className="container mx-auto mb-auto p-2 lg:py-4">
      <div className="flex justify-between">
        <h2 className="font-heading text-2xl font-medium lg:text-3xl">
          Clover App License Agreement
        </h2>
      </div>
      <div className="w-full max-w-3xl px-4 pt-4">
        <p className="pb-2">Effective Date: April 10, 2023</p>
        <p className="pb-2">
          This End-User License Agreement (Agreement) is between the business or
          individual accepting this Agreement (this business or individual being
          you) and Bokoup, LLC (Developer). This Agreement is solely between you
          and Developer, and governs your use of Developer's software
          application and the corresponding services it provides (together,
          along with the associated documentation, proprietary, or intellectual
          property: the App). Review this Agreement completely. You agree to be
          bound by the terms of this Agreement when you click "Accept" or
          otherwise download, install, copy, or use the App, and must accept
          this Agreement before doing so. If you do not agree to the terms of
          this Agreement, you must click "Decline" and must not download,
          install, copy or use the App.
        </p>
        <h3 className="pb-1 text-lg font-semibold">1. The App</h3>
        <p className="pb-2">
          1.1 The App will provide you with the ability to create promotions in
          the form of semi-fungible tokens on the Solana blockchain and have
          your customers redeem them at your Clover point of sale devices.
        </p>
        <p className="pb-2">
          1.2 Developer grants you a limited, non-exclusive, non-transferable,
          non-sublicensable, revocable license during the Term (defined below)
          of this Agreement to use the App solely for your internal business
          purposes. You will not otherwise distribute, lease, rent, host,
          sublicense, transfer, sell, export, modify, reverse engineer,
          decompile, copy, benchmark, create derivative works from, or attempt
          to derive the source code for the App. This license does not grant you
          any rights to Developer's (or any other third party's) trademarks,
          service marks, logos, trade dress, proprietary, or other intellectual
          property unless provided with the App. Developer reserves to itself
          (or applicable third parties) all right, title, interest, and license
          (express or implied) to the App that are not specifically granted to
          you under this Agreement. You will preserve and display any
          proprietary notices, markings, or branding associated with use of the
          App.
        </p>
        <p className="pb-2">
          1.3 The App may update automatically from time-to-time, and you may be
          required to accept these updates to continue using the App. Developer
          may perform maintenance on the App, which may result in service
          interruptions or delays from time-to-time. Developer may not support
          older versions of the App. You are solely responsible for obtaining
          all equipment and services (for example, Internet connectivity)
          necessary to access and use the App.
        </p>
        <h3 className="pb-1 text-lg font-semibold">2. Fees</h3>
        <p className="pb-2">Use of the App is free of charge.</p>
        <h3 className="pb-1 text-lg font-semibold">3. Term</h3>
        <p className="pb-2">
          This Agreement commences when you accept or otherwise download,
          install, copy, or use the App; and will continue month-to-month until
          terminated (this period of time is the Agreement's Term).
        </p>
        <h3 className="pb-1 text-lg font-semibold">
          4. Suspension and Termination
        </h3>
        <p className="pb-2">
          4.1 Developer may promptly suspend or terminate your use of the App if
          (1) you violate this Agreement's terms; (2) Developer believes your
          use of the App may damage its reputation or intellectual property
          rights; (3) Developer suspends or terminates its agreement(s) with any
          third party involved in providing the App; (4) you exceed normal and
          reasonable usage for the App; (5) you experience a bankruptcy or
          insolvency event; or (6) you are using the App for any fraudulent,
          illegal, or unauthorized purpose, or engage in willful misconduct with
          respect to use of the App.
        </p>
        <p className="pb-2">
          4.2 You may terminate this Agreement at any time and for any reason
          (without cause) by providing notice to Developer. Your termination
          will be effective at the end of the then current month or billing
          period in which you give notice. You will not receive a refund for the
          billing period in which you terminate this Agreement.
        </p>
        <h3 className="pb-1 text-lg font-semibold">
          5. Confidentiality, Data, and Ideas
        </h3>
        <p className="pb-2">
          5.1 Neither of us will disclose non-public information about the
          other's business; including, without limitation, the terms of this
          Agreement, technical specifications (whether related to the App or
          otherwise), customer lists, or information relating to a party's
          operational, strategic, or financial matters (together, Confidential
          Information). Confidential Information does not include information
          that (1) is or subsequently becomes publicly available (through no
          fault of the recipient); (2) the recipient lawfully possesses before
          its disclosure; (3) is independently developed without reliance on the
          discloser's Confidential Information; or (4) is received from a third
          party that is not obligated to keep it confidential. Each of us will
          implement and maintain reasonable safeguards to protect the other's
          Confidential Information.
        </p>
        <p className="pb-2">
          5.2 Neither of us may disclose the other's Confidential Information
          except (1) to our respective directors, officers, employees, or
          representatives that need to know it in order to perform our
          obligations under this Agreement; (2) in response to a subpoena or
          court order; or (3) as required by applicable law, rule, or
          regulation.
        </p>
        <p className="pb-2">
          5.3 Developer may use data or information obtained through the App to
          provide its services, for research and development, or in aggregated
          and anonymized form to provide services generally; all subject to
          applicable Laws (defined below). Information Developer collects about
          you or your consumers is subject to Developer's privacy policy, which
          is accessible at [link to privacy policy].
        </p>
        <p className="pb-2">
          5.4 You may provide, or Developer may invite you to provide, comments
          or ideas about the App (including, without limitation, improvements to
          it) (together, Ideas). By submitting any Ideas, you agree that (1)
          they are not Confidential Information; (2) they are not subject to any
          use or disclosure restrictions (express or implied); (3) you claim no
          rights in them; and (4) Developer has no obligation to notify or
          compensate you in connection with their disclosure or use. You release
          Developer from all liability or obligations that may arise from the
          receipt, review, disclosure, or use of any Idea that you submit.
        </p>
        <h3 className="pb-1 text-lg font-semibold">6. Account</h3>
        <p className="pb-2">
          You will be required to register for an account with Developer to use
          the App. You will provide us with accurate information when setting-up
          your account, and will maintain your account with current information.
          You will be responsible for establishing safeguards designed to
          prevent unauthorized access to, disclosure, use, or alteration of your
          account (safeguards may include, without limitation, user names,
          passwords, security questions and answers, or other credentials). You
          must notify Developer if you discover a security breach involving your
          account or the App. You are responsible for any unauthorized access
          to, disclosure, use, or alteration of your account, the App, or other
          transaction information that arises through your systems or account.
          It is your responsibility to back-up and maintain the accuracy and
          completeness of any content created, derived from, stored, or accessed
          through your account or your use of the App (content may include,
          without limitation, transaction information, text, images, graphics,
          or photos).{" "}
        </p>
        <h3 className="pb-1 text-lg font-semibold">7. Risk Allocation</h3>
        <p className="pb-2">
          7.1 The App is provided to you "as-is" and "as-available." You are
          solely responsible for determining if the App meets your needs.
          Developer disclaims all warranties (express or implied) related to
          your account or the App; including, without limitation, warranties of
          security, merchantability, fitness for a particular purpose,
          non-infringement, accuracy, and uninterrupted or error-free operation.
          Developer is not responsible for any disclosures, modifications,
          deletions, or other errors that arise in connection with your use of
          the App due to its interaction with other applications or their
          content.
        </p>
        <p className="pb-2">
          7.2 You will indemnify Developer, its directors, officers, employees,
          agents, subsidiaries, and affiliates against any third party claims
          for losses, damages, costs, or expenses (including reasonable
          attorneys' fees) (together, Losses) that result from your use or
          misuse of the App, or your breach of this Agreement. Developer may
          assume the defense of any third party claims that you must indemnify
          it for (at your expense), and you will cooperate with the defense of
          these claims. You will not settle any third party claims involving
          more than the payment of money without Developer's written consent.
        </p>
        <p className="pb-2">
          7.3 To the extent permitted by applicable law, Developer will not be
          liable to you for any lost profits, revenues, or business
          opportunities, nor any exemplary, punitive, special, indirect,
          incidental, or consequential damages; regardless of whether these
          damages were foreseeable or either of us was advised they were
          possible.
        </p>
        <p className="pb-2">
          7.4 Developer's total, aggregate liability to you for all Losses
          arising from any cause (regardless of the form of action or legal
          theory) in connection with this Agreement will not exceed the amount
          of fees you've paid to Developer during the 3 months prior to a Loss.
        </p>
        <h3 className="pb-1 text-lg font-semibold">8. Communications</h3>
        <p className="pb-2">
          You authorized Developer to communicate with you electronically or
          otherwise using the contact information you provide to it (e.g.,
          without limitation, via your account, the Internet, email, text, or
          live agent or automated calls to your mobile or other phone, even if
          these numbers appear on a Do Not Call or other non-solicitation
          registry). You are responsible for any fees charged by you
          communications provider for phone, text, or email communications that
          Developer sends to you.
        </p>
        <h3 className="pb-1 text-lg font-semibold">
          9. Compliance with privacy laws
        </h3>
        <p className="pb-2">
          The App Provider makes the following additional commitments,
          representations, and warranties to Customer:
        </p>
        <p className="pb-2">
          9.1 The App Provider will only process Customer Data and Personal
          Information on behalf of, and as Service Provider of, the Customer,
          and not collect, retain, use, or disclose that data for any purpose
          other than to perform the App Provider’s obligations under this
          Agreement, as permitted under CCPA and other applicable privacy and
          data protection laws (collectively, “Privacy Laws”). In no event will
          the App Provider “sell” (as defined by Privacy Laws) any such personal
          information.
        </p>
        <p className="pb-2">
          9.2 The App Provider will not collect, use, retain, disclose, sell, or
          otherwise make Customer Data or Personal Information available for App
          Provider’s own commercial purposes or in a way that does not comply
          with the CCPA or other Privacy Laws.
        </p>
        <p className="pb-2">
          9.3 App Provider will limit personal information collection, use,
          retention, and disclosure to activities reasonably necessary and
          proportionate to provide the Services set forth in the Agreement or
          another compatible operational purpose.
        </p>
        <h3 className="pb-1 text-lg font-semibold">
          10. Data subject rights - assistance with requests
        </h3>
        <p className="pb-2">
          10.1 App Provider will reasonably cooperate and assist Customer with
          meeting Customer's CCPA and Privacy Law compliance obligations and
          respond to CCPA-related inquiries, including responding to verifiable
          consumer requests, taking into account, the nature of App Provider's
          processing, and the information available to App Provider. App
          Provider will make available to Customer, in a manner consistent with
          the functionality of the Service and App Provider’s role as a Service
          Provider of Personal Information of data subjects, the ability to
          fulfill data subject requests to exercise their rights under Privacy
          Laws.
        </p>
        <p className="pb-2">
          10.2 If App Provider receives a request from Customer’s data subject
          to exercise one or more of its rights under Privacy Laws in connection
          with the Services, App Provider will redirect the data subject to make
          its request directly to Customer. Customer will be responsible for
          responding to any such request including, where possible, by using the
          functionality of the Services. App Provider shall comply with
          reasonable requests by Customer to assist with Customer’s response to
          such a data subject request.
        </p>
        <p className="pb-2">
          10.3 App Provider must notify the Customer immediately if it receives
          any complaint, notice, or communication that directly or indirectly
          relates either party's compliance with Privacy Laws relating to
          provisioning of the Services.
        </p>
        <h3 className="pb-1 text-lg font-semibold">11. General</h3>
        <p className="pb-2">
          11.1 You represent and warrant that you have authority to enter into
          this Agreement, creating performance obligations that are legally
          enforceable against you.
        </p>
        11.2 Developer may modify this Agreement from time-to-time and will
        provide you with notice when these modifications occur (notification may
        be through the App, email, a website, changes to the date shown at the
        top of this Agreement, or other electronic means). Your continued use of
        the App indicates your acceptance of any modifications to this
        Agreement. You must stop using and uninstall the App if you do not agree
        to any modifications that are made to this Agreement.
        <p className="pb-2">
          11.3 Each of us will comply with the laws, rules, and regulations
          (together, Laws) that apply to our respective performance under this
          Agreement; including, without limitation, laws related to the
          collection and use of consumer information obtained via the App. You
          will follow the requirements of all user documentation provided for
          the App. You will not use your App to access, store, or transmit
          materials that are tortious, libelous, or offensive; contain malicious
          code, viruses, time bombs, Trojan horses, bots, scrips or other
          programs; or infringe third parties' intellectual property rights.
        </p>
        <p className="pb-2">
          11.4 This Agreement is governed by California law, without regard to
          its conflicts or choice of law statutes. The courts in or for San
          Francisco, California are proper venue for any proceedings in
          connection with this Agreement. Both of us waive our rights to a trial
          by jury in connection with this Agreement.
        </p>
        <p className="pb-2">
          11.5 This is the entire agreement between us, and supersedes any prior
          agreements related to its subject matter. Any sections or terms of
          this Agreement that are, or become, invalid or unenforceable will be
          severed; and the remaining terms will continue in effect. Developer is
          not waiving any of its rights under this Agreement if it delays their
          exercise or fails to exercise them. We are independent contractors.
          This Agreement does not create an agency, partnership, or joint
          venture of any kind.
        </p>
        <p className="pb-2">
          11.6 You may not assign this Agreement without Developer's written
          consent, which assignment is voidable by the Developer; however,
          Developer may assign this Agreement without notice to you or your
          consent.
        </p>
        <p className="pb-2">11.7 You may contact Developer at:</p>
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
