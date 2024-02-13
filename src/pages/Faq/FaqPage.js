import React from 'react';
import { Faq, FaqSidebar, Footer, Jumbotron } from '../../components';
import { eventFaqs } from '../../components/Faq/data';
import { slackLogo } from '../../assets/images';
import './freq.scss';

const FaqPage = () => {
  const title = 'Frequently Asked Questions';

  return (
    <>
      <Jumbotron title={title} />
      <main className=" faq_container">
        <aside className="sidebar">
          <FaqSidebar />
        </aside>
        <section className="faqPage">
          {eventFaqs.map(({ question, answer }, id) => {
            return <Faq key={id} question={question} answer={answer} />;
          })}

          <p id="learn-more">
            {' '}
            Do you have more questions? Join our community to learn more.
          </p>
          <a
            href="https://github.com/badging/badging"
            alt="chaoss github link"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <img src={slackLogo} alt="slack" />
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FaqPage;
