import React from "react"
import NavBar from './NavBar'
import Navigation from "./page-components/homepage-components/Navigation"
import Footer from './page-components/homepage-components/Footer'
import FadeIn from './FadeIn.module.scss'

import './css/index.scss'

import styles from './PrivacyPolicy.module.scss'

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <NavBar />

      {/* Main resourse - https://www.onlinegambling.com/blackjack/how-to-count-cards/ */}

      <main className={`${styles.main} ${FadeIn.fadeIn}`}>
        <div className={styles.privacyPolicy}>
          <h2> Privacy Policy of Blackjack Crusher </h2>
          <p>Owner and Data Controller</p>
          <p> Blackjack Crusher LLC </p>
          <h3> Types of Data collected </h3>

          <p> Among the types of Personal Data that Blackjack Crusher collects, by itself or through third parties, there are: Cookies; Usage Data; email address; first name.</p>

          <p> Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.
            Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using Blackjack Crusher. </p>

          <p> Unless specified otherwise, all Data requested by Blackjack Crusher is mandatory and failure to provide this Data may make it impossible for Blackjack Crusher to provide its services. In cases where Blackjack Crusher specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service. </p>

          <p> Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.
            Any use of Cookies – or of other tracking tools – by Blackjack Crusher or by the owners of third-party services used by Blackjack Crusher serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available. </p>

          <p> Users are responsible for any third-party Personal Data obtained, published or shared through Blackjack Crusher and confirm that they have the third party's consent to provide the Data to the Owner.</p>

          <h3> Mode and place of processing the Data</h3>

          <p> Methods of processing</p>

          <p> The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data. </p>

          <p> The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated.In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of Blackjack Crusher (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner.The updated list of these parties may be requested from the Owner at any time. </p>
          <p> Legal basis of processing </p>

          <p> The Owner may process Personal Data relating to Users if one of the following applies:</p>

          <p>Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;</p>

          <p>provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;</p>

          <p>processing is necessary for compliance with a legal obligation to which the Owner is subject;</p>

          <p>processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;</p>

          <p>processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.</p>

          <p>In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.</p>

          <p>Place</p>

          <p>The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.</p>

          <p>Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.</p>

          <p>Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.</p>

          <p>If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section.</p>

          <p>Retention time</p>

          <p>Personal Data shall be processed and stored for as long as required by the purpose they have been collected for.</p>

          <p>Therefore:</p>

          <p>Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.</p>

          <p>Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.</p>

          <p>The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.</p>

          <p>Once the retention period expires, Personal Data shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.</p>

          <p>The purposes of processing</p>

          <p>The Data concerning the User is collected to allow the Owner to provide its Services, as well as for the following purposes: Analytics, Displaying content from external platforms, Remarketing and behavioral targeting, Managing contacts and sending messages, Tag Management, Managing landing and invitation pages, Content performance and features testing (A/B testing), Platform services and hosting, Handling payments, Contacting the User, Interaction with data collection platforms and other third parties and Heat mapping and session recording.</p>
        </div>
      </main>

      <Footer />
    </>
  )
}
