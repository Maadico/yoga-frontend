import Accordion from "react-bootstrap/Accordion";

function Faques() {
  return (
    <Accordion defaultActiveKey="0" className="faq-container">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why is Yoga Important?</Accordion.Header>
        <Accordion.Body>
          Yoga is important for both physical and mental well-being. It improves
          flexibility, builds strength, promotes relaxation, and reduces stress.
          Additionally, practicing yoga regularly can enhance mindfulness and
          help maintain a balanced lifestyle.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why Choose Maadico?</Accordion.Header>
        <Accordion.Body>
          Maadico offers a comprehensive online yoga session platform that
          caters to individuals of all skill levels. With a diverse range of
          classes led by experienced instructors, Maadico provides convenient
          access to high-quality yoga sessions anytime, anywhere.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Are Maadico Instructors Qualified?</Accordion.Header>
        <Accordion.Body>
          Yes, all Maadico instructors are highly qualified and experienced
          professionals with extensive training in yoga and teaching. They are
          dedicated to providing safe, effective, and enjoyable yoga sessions
          that cater to individuals of all skill levels.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Can I Access Maadico on Multiple Devices?
        </Accordion.Header>
        <Accordion.Body>
          Yes, Maadico is accessible on multiple devices, including smartphones,
          tablets, laptops, and desktop computers. You can easily access the
          platform through your web browser or by downloading the Maadico mobile
          app from the App Store or Google Play Store.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Is There a Free Trial for Maadico?</Accordion.Header>
        <Accordion.Body>
          Yes, Maadico offers a free trial period for new users to explore the
          platform and experience its benefits firsthand. During the trial
          period, you'll have access to a selection of live and on-demand yoga
          sessions, allowing you to test out the platform and decide if it's the
          right fit for your wellness journey.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Faques;
