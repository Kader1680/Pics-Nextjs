import Head from 'next/head'
import React from 'react'

const Contact = () => {
  return (
 
        <>
            <Head>
                <title>Pics | Contact</title>
            </Head>
        

            <div>


              <div class="jumbotron jumbotron-sm">
                  <div class="container">
                      <div class="row">
                          <div class="col-sm-12 col-lg-12">
                              <h1 style={{ color: "#003b95" }} class="h1">
                                  Contact us <span  className="fw-light"  style={{ color: "black" }}>Feel free to contact us</span></h1>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container mb-5">
                  <div class="row">
                      <div class="col-md-8">
                          <div class="well well-sm">
                              <form>
                              <div class="row">
                                  <div class="col-md-6">
                                      <div class="form-group">
                                          <label for="name">
                                              Name</label>
                                          <input type="text" class="form-control" id="name" placeholder="Enter name" required="required" />
                                      </div>
                                      <div class="form-group">
                                          <label for="email">
                                              Email Address</label>
                                          <div class="input-group">
                                              <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                                              </span>
                                              <input type="email" class="form-control" id="email" placeholder="Enter email" required="required" /></div>
                                      </div>
                                      <div class="form-group">
                                          <label for="subject">
                                              Subject</label>
                                          <select id="subject" name="subject" class="form-control" required="required">
                                              <option value="na" selected="">Choose One:</option>
                                              <option value="service">General Customer Service</option>
                                              <option value="suggestions">Suggestions</option>
                                              <option value="product">Product Support</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-group">
                                          <label for="name">
                                              Message</label>
                                          <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                              placeholder="Message"></textarea>
                                      </div>
                                  </div>
                                  <div class="col-md-12">
                                      <button type="submit" class="btn  pull-right" id="btnContactUs">
                                          Send Message</button>
                                  </div>
                              </div>
                              </form>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <form>
                              <h3>Our office</h3>
                              <hr></hr>
                              <h6>witter, Inc.</h6>
                              <p>
                                  795 Folsom Ave, Suite 600<br></br>
                                  San Francisco, CA 94107 <br></br>
                                  P: (123) 456-7890 <br></br>
                              </p>
                              <h6>Full Name</h6>
                              <a>first.last@example.com  </a>
                          
                          </form>
                      </div>
                  </div>
              </div>

        </div>
        </>
        
  )
}

export default Contact