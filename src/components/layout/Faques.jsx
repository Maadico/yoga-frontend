import Accordion from "react-bootstrap/Accordion";

function Faques() {
  return (
    <Accordion defaultActiveKey="0" className="faq-container">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Can I do yoga if I have never done it before?
        </Accordion.Header>
        <Accordion.Body>
          Absolutely. Our Yoga sessions are excellent for starters and
          intermediate.Join a trial session to test yourself.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do you accept young and old alike?</Accordion.Header>
        <Accordion.Body>Anyone above the age of 10 is welcome.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          In which language yoga sessions are conducted?
        </Accordion.Header>
        <Accordion.Body>
          All our yoga doctors are well versed in both english and Hindi.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How long is each session?</Accordion.Header>
        <Accordion.Body>
          Each session includes 60 minutes of practise.Allow an hour to give
          yourself a little cushion before and after.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          What are the available slots for yoga everyday?
        </Accordion.Header>
        <Accordion.Body>
          Our online clases are available two times in the morning Batch 1 (6:00
          AM to 7:00 AM) and Batch 2 (7:15 AM to 8:15 AM) Join our yoga sessions
          online at the comfort of your home.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          How do I join the classes? Is the process straightforward?
        </Accordion.Header>
        <Accordion.Body>
          Joining our yoga sessions online is as simple as a click on Whatsapp.
          We prioritize simplicity and convenience. All you need from us is on
          your whatsapp! Dive into our online sessions and wellness program from
          the comfort of your home.{" "}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Faques;
