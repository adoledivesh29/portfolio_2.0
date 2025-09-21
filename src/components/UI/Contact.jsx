import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const [buttonText, setButtonText] = useState("Send Message");
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setButtonText("Sending...");

        emailjs
            .sendForm(
                "service_64feb1l",   // e.g. service_xxxxx
                "template_d1637xl",  // e.g. template_xxxxx
                e.target,
                "Dvil7ba0ZycN8502b"    // e.g. AbCdEfG123456
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setButtonText("Sent");
                    setIsSending(false);
                    e.target.reset();

                    // Reset button text after 3 seconds
                    setTimeout(() => {
                        setButtonText("Send Message");
                    }, 3000);
                },
                (error) => {
                    console.log(error.text);
                    setButtonText("Send Message");
                    setIsSending(false);
                    alert("❌ Failed to send message. Try again later.");
                }
            );
    };

    return (
        <section className="contact-container" id="contact">
            <div className="left-contact">
                <div className="text-content">
                    <h1 className="text-4xl font-bold mb-4">Let's Make Pixels Talk</h1>
                    <p className="description mb-8 max-w-md">
                        From code to canvas, I love collaborating. Fill out the form or
                        shoot me a message — let's bring your ideas to life.
                    </p>
                </div>
            </div>

            {/* Right side form */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="user_name" placeholder="Enter your name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="user_email" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message..."
                        rows="5"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSending}>
                    {buttonText}
                </button>
            </form>

        </section>
    );
};

export default Contact;
