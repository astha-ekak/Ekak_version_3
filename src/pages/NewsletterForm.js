import React, { useState } from 'react';
import './navbar.css'; 
const NewsletterForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    setLoading(true); // Show a loading state

    // Collect form data
    const formData = new FormData(event.target);

    try {
      // Send the form data to the server
      const response = await fetch('https://dc14c2ac.sibforms.com/serve/MUIFAJ4IIzh9kiWnHNtDGXCTjjW01KohA0TZGS8dd2m0uM0qpp33LA_3qRZHLPzVAch9JLcS89Y4ZNTqmm2FveWd72Ug2JLNTFVPXVAj-IUDi-R88abDhujhEiNTUlGy3xyPTyJgu7gBY31U0v6yXprAWjAp_3wYCh_KeTD8bo-TuXIJGSRCLHoXTFelT0weaRIHtJeYkMswzUxG', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Set submission state to true to show the thank you message
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false); // Reset state after a delay
        }, 5000); // Adjust the delay as needed
      } else {
        // Handle errors (optional)
        console.error('Subscription failed');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Hide the loading state
    }
  };

  return (
    <div className="sib-form" style={{ textAlign: 'center', backgroundColor: '#EFF2F7' }}>
      <div id="sib-form-container" className="sib-form-container">
        <div
          id="sib-container"
          className="sib-container--large sib-container--vertical"
          style={{
            textAlign: 'center',
            backgroundColor: 'black',
            maxWidth: '540px',
           
            borderWidth: '1px',
            borderColor: 'white',
            borderStyle: 'solid',
          }}
        >
          {submitted ? (
            <div style={{ padding: '8px 0', fontSize: '16px', color: '#3C4858' }}>
              <p>Thank you for subscribing! Please check your email to confirm your subscription.</p>
            </div>
          ) : (
            <form
              id="sib-form"
              method="POST"
              action="https://dc14c2ac.sibforms.com/serve/MUIFAJ4IIzh9kiWnHNtDGXCTjjW01KohA0TZGS8dd2m0uM0qpp33LA_3qRZHLPzVAch9JLcS89Y4ZNTqmm2FveWd72Ug2JLNTFVPXVAj-IUDi-R88abDhujhEiNTUlGy3xyPTyJgu7gBY31U0v6yXprAWjAp_3wYCh_KeTD8bo-TuXIJGSRCLHoXTFelT0weaRIHtJeYkMswzUxG"
              onSubmit={handleSubmit}
            >
              <div style={{ padding: '8px 0' }}>
                <div
                  className="sib-form-block"
                  style={{
                    fontSize: '20px',
                    textAlign: 'left',
                    fontWeight: 500,
                    fontFamily: "'Poppins',sans-serif",
                    color: 'white',
                    backgroundColor: 'transparent',
                  }}
                >
                  <p style={{marginLeft:'30px',marginTop:'20px '}}>NEWSLETTER</p>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div
                  className="sib-form-block"
                  style={{
                    fontSize: '14px',
                    textAlign: 'left',
                    fontFamily: 'Trebuchet MS, sans-serif',
                    color: 'white',
                    backgroundColor: 'transparent',
                  }}
                >
                  <div className="sib-text-form-block">
                    <p style={{marginLeft:'30px'}}>Subscribe to our newsletter and <br/>stay updated.</p>
                  </div>
                </div>
              </div>
              <div >
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <label
                        className="entry__label"
                        style={{
                         marginRight:'30px',
                        marginLeft:'30px',
                          fontWeight: 500,
                          textAlign: 'left',
                          fontSize: '12px',
                          fontFamily: 'Helvetica, sans-serif',
                          color: 'white',
                        }}
                        htmlFor="EMAIL"
                        data-required="*"
                      >
                        Enter your email address to subscribe
                      </label>
                      <div className="entry__field">
                        
                        <input
                          className="input"
                          type="text"
                          id="EMAIL"
                          name="EMAIL"
                          autoComplete="off"
                          placeholder="email"
                          data-required="true"
                          style={{ color: 'black' }}
                          required
                        />
                      </div>
                    </div>
                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        fontSize: '16px',
                        textAlign: 'left',
                        fontFamily: 'Helvetica, sans-serif',
                        color: '#661D1D',
                        backgroundColor: '#FFEDED',
                        borderRadius: '3px',
                        borderColor: '#FF4949',
                      }}
                    ></label>
                  </div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block" style={{ textAlign: 'left',marginLeft:'30px' }}>
                  <button
                    className="sib-form-block__button sib-form-block__button-with-loader"
                    style={{
                      fontSize: '14px',
                      textAlign: 'center',
                      padding:'5px',
                      fontWeight: 500,
                      fontFamily: 'Trebuchet MS, sans-serif',
                      color: 'black',
                      backgroundColor: 'white',
                      borderRadius: '20px',
                      borderWidth: 0,
                      width:'100px',
                    }}
                    form="sib-form"
                    type="submit"
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                  </button>
                </div>
              </div>
              
              <input type="hidden" name="locale" value="en" />
              <input type="hidden" name="html_type" value="simple" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
