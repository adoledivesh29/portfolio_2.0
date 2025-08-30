import React from "react";

const Contact = () => {
    return (
        <section className="contact-container">
            {/* Left side text */}

            <div className="left-contact">
                <div className="text-content">
                    <h1 className="text-4xl font-bold mb-4">Let's Make Pixels Talk</h1>
                    <p className="description mb-8 max-w-md">
                        From code to canvas, I love collaborating. Fill out the form or shoot
                        me a message — let's bring your ideas to life.
                    </p>
                </div>
            </div>

            {/* Right side form */}
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="Enter your name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        placeholder="Write your message..."
                        rows="5"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
