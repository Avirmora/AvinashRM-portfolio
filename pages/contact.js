export default function Contact() {
    return (
      <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    );
  }
  