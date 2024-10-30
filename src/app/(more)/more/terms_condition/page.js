import React from 'react';
import TermsPolicyTextCard from './../../../../components/TermsPolicyTextCard/TermsPolicyTextCard';



const page = () => {
  return (
    <section className="w-full py-10">
      <h2 className="roboto text-[28px] font-medium text-[#333]"> TERMS AND CONDITIONS</h2>
      <p className="roboto text-[16px] leading-6 text-light-gray pe-3 mt-5" >
        Please read these Terms and Conditions carefully before using the <a href="https://www.techforing.com"> https://www.techforing.com</a> website operated by <strong>TechForing Ltd. </strong>
        We condition your access to and use of the Service on your acceptance of and compliance with these terms. These Terms apply to all visitors, users, and others who access or use the Service.
      </p>

      <TermsPolicyTextCard
        title="Acceptance of Terms"
        paragraph1="By accessing or using the TechForing website or services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you may not access the Service."
      />

      <TermsPolicyTextCard
        title="Purchases"
        paragraph1="When making purchases through our Service, you may be required to provide certain information relevant to your Purchase, including but not limited to your name, email, phone number, address, credit card information, or bank details."
        paragraph2="We prioritize the security and confidentiality of your personal information. All transactions are processed securely using industry-standard encryption protocols.
    "
      />

      <TermsPolicyTextCard
        title="Subscriptions"
        paragraph1="Certain parts of our Service may be offered on a subscription basis. By subscribing, you agree to recurring billing on a weekly, monthly, half-yearly, or yearly basis, depending on the subscription plan chosen."
        paragraph2="You may cancel your subscription at any time, and cancellation will take effect at the end of the current billing cycle."
      />

      <TermsPolicyTextCard
        title="User-Generated Content"
        paragraph1="Our Service may allow you to post, link, store, share, or otherwise make available information, text, graphics, videos, or other materials (Content).You are solely responsible for the Content you post and must ensure that it complies with applicable laws and regulations."
        paragraph2="We reserve the right to remove any Content that violates these Terms or is deemed inappropriate."
      />
      <TermsPolicyTextCard
        title="Links to Third-Party Websites"
        paragraph1="The TechForing website may contain links to third-party websites or services that are not owned or controlled by TechForing Ltd. We are not responsible for the content, privacy policies, or practices of any third-party websites or services."
        paragraph2="We encourage you to review the terms and privacy policies of any third-party websites you visit."
      />
      <TermsPolicyTextCard
        title="Links to Third-Party Websites"
        paragraph1="The TechForing website may contain links to third-party websites or services that are not owned or controlled by TechForing Ltd. We are not responsible for the content, privacy policies, or practices of any third-party websites or services."
        paragraph2="We encourage you to review the terms and privacy policies of any third-party websites you visit."
      />
      <TermsPolicyTextCard
        title="Changes to Terms"
        paragraph1="We reserve the right to modify or replace these Terms of Use at any time, at our sole discretion. If we make material changes to these terms, we will notify you by email or by posting a notice on our website at least 15 days before the changes take effect.
      "
        paragraph2="Your continued use of the Service after the effective date of any changes constitutes your acceptance of the revised terms.
      "
      />
      <TermsPolicyTextCard
        title="Contact Us"
        paragraph1="If you have any questions about these Terms of Use, please contact us.
      "
        paragraph2="Thank you for choosing TechForing!
      "
      />

      <p className="mt-2"> <b>TechForing Ltd.</b> </p>


    </section>
  );
};

export default page;