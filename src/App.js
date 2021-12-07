import React, {useEffect} from 'react';
import M from 'materialize-css';

function App() {

  useEffect(() => {

    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.Materialbox.init(document.querySelectorAll('.materialboxed'));
    M.Parallax.init(document.querySelectorAll('.parallax'));
    M.Tabs.init(document.querySelectorAll('.tabs'));
    M.ScrollSpy.init(document.querySelectorAll('.scrollspy'));


  }, [])


  return (
    <div className="App">
    <header>
    <nav className="nav-wrapper transparent">
      <div className="container">
        <a href="#" className="brand-logo">Mosaic NE Philly Homeschool Coop</a>
        <a href="#" className="sidenav-trigger" data-target="mobile-menu">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#about">About Us</a></li>
          <li><a href="#what">What We Do</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul className="sidenav grey lighten-2" id="mobile-menu">
          <li><a href="#about">About Us</a></li>
          <li><a href="#what">What We Do</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    </header>

    <section className="section container scrollspy" id="about">
    <div className="row">
      <div className="col s12 l4">
        <h2 className="indigo-text text-darken-4">Who we are...</h2>
        <p>Our <em>mission</em> is to be a God honoring, supportive homeschooling community that nurtures lifelong learning through a balance of academics, enrichment activities and nature studies.</p>
        <p>Our <em>vision</em> is to enrich the lives of kids and moms alike in the godly pursuit of a holistic education.</p>
        <p>Our <em>core values</em> are maintaing a Biblical worldview in all we do as a co-op; community; collaboration; and creativity.</p>
      </div>
      <div className="col s12 l6 offset-l2">
        <ul className="tabs">
          <li className="tab col s4">
            <a href="#classes" className="active indigo-text text-darken-4"><h6>CLASSES</h6></a>
          </li>
          <li className="tab col s4">
            <a href="#whenwhere" className="indigo-text text-darken-4"><h6>WHEN/WHERE</h6></a>
          </li>
          <li className="tab col s4">
            <a href="#cost" className="indigo-text text-darken-4"><h6>CO$T</h6></a>
          </li>
        </ul>
        <div id="classes" className="col s12">
            <p className="flow-text indigo-text text-darken-4">Classes...</p>
            <p>
              <table className="highlight">
                <tbody>
                  <tr>
                    <td>Nursery & Preschool</td>
                    <td>Carpet time(songs and stories), Table time (Sensory Play), Free Play Time, Outdoor Play (weather permitting).</td>
                  </tr>
                  <tr>
                    <td>Grades 4-6</td>
                    <td>Book Club, Dramma, Art.</td>
                  </tr>
                  <tr>
                    <td>Grades 7-12</td>
                    <td>Financial literacy, English, Drama, Woodworking, Coding with App Inventor II.</td>
                  </tr>
                </tbody>
              </table>
            </p>
        </div>
        <div id="whenwhere" className="col s12">
            <p className="flow-text indigo-text text-darken-4">When and Where...</p>
            <p>The first three Wednesdays of each month, we meet in the Grace Community Church, 648 Knorr St, Philadelphia, PA 19111. We start each day with prayer at 9:15AM. Classes run from 9:30-12:00, and are followed by a lunch period. </p>
            <p>The fourth Wednesday, we meet outdoors for nature studies (weather permitting) at 9:45AM, and explore from 10:00AM-12:00, followed by a time for lunch. Location varies.</p>
            <p>When a month has a fifth Wednesday, we go on a fieldtrip!. Times and Locations vary and will be announced prior to the trip.</p>
        </div>
        <div id="cost" className="col s12">
            <p className="flow-text indigo-text text-darken-4">Costs...</p>
            <p>To keep costs affordable, we assign mothers to a class each week (you can let us know your preferences on the applicaiton). Schedules are posted before each semester. We have a Fall and Spring semester each academic year,</p>
            <p>We offer Full and Part time (biweekly) options for families.</p>
            <p>
              <table className="highlight">
                <tbody>
                  <tr>
                    <td>Full-time</td>
                    <td>$55</td>
                  </tr>
                  <tr>
                    <td>Part-time</td>
                    <td>$30</td>
                  </tr>
                </tbody>
              </table>
            </p>
            <p>Please note that some classes may require and addition fee to pay for materials or external teachers.</p>
        </div>
      </div>
    </div>
  </section>

  <div className="parallax-container">
    <div className="parallax">
      <img src="img/franklin.jpg" alt="" className="responsive-img" />
    </div>
  </div>

  <section className="container section scrollspy" id="what">
    <div className="row">
      <div className="col s12 l4">
          <img src="img/storytime.jpg" alt="" className="responsive-img materialboxed" />
      </div>
      <div className="col s12 l6 offset-l1">
        <h2 className="indigo-text text-darken-4">Class Time</h2>
        <p>The first, second, and third Wednesday of each month we meet for classes. The subject matter changes each semester, past classes include, Finacial Peace University Jr., Woodworking, and Coding with App Inventer II.</p>
      </div>
    </div>
    <div className="row">
      <div className="col s12 l4 offset-l1 push-l7">
          <img src="img/naturestudies.jpg" alt="" className="responsive-img materialboxed" />
      </div>
      <div className="col s12 l6 offset-l1 pull-l5 right-align">
        <h2 className="indigo-text text-darken-4">Nature Studies</h2>
        <p>The forth Wednesday of each month we meet outdoors for Nature Studies. Past locations include Tookany Creek Park, John Heinze Wildlife Refuge, and Pennypack Preserve.</p>
      </div>
    </div>
    <div className="row">
      <div className="col s12 l4">
          <img src="img/franklin1.jpg" alt="" className="responsive-img materialboxed" />
      </div>
      <div className="col s12 l6 offset-l1">
        <h2 className="indigo-text text-darken-4">Fieldtrips</h2>
        <p>We take fieldtrips on the fifth Wednesday for Months that have them. Past trips include the Philadelphia Water Wroks and The Franklin Institue.</p>
      </div>
    </div>
  </section>

  <div className="parallax-container">
    <div className="parallax">
      <img src="img/christmasbrunch1.jpg" alt="" className="responsive-img" />
    </div>
  </div>

  <section className="section container scrollspy" id="contact">
    <div className="row">
      <div className="col s12 l5">
        <h2 className="indigo-text text-darken-4">Join us!</h2>
        <p>Interested? We would love for you and your family to join us!. Please submit the form, and if you have any questions, just let us know.</p>
        <p>While waiting to hear back from us, get a head start by requesting the two clearances required by the PA Child Protective Services Law. These are free for volunteers.</p>
        <p>You can find these and more information on the <a href='http://www.keepkidssafe.pa.gov/resources/clearances'>PA Keep Kids Safe Website</a>.</p>
        <p>.</p>
        <p>.</p>
      </div>
      <div className="col s12 l5 offset-l2">
        <form action="http://localhost:5001/mosaicphillyne/us-central1/emailMessage">
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input type="email" id="email" />
            <label for="email">Your Email</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">message</i>
            <textarea id="message" className="materialize-textarea" cols="20" rows="20"></textarea>
            <label for="message">Your Message</label>
          </div>
          <div className="input-field">
            <p>Schedule option:</p>
            <p>
              <label>
                <input type="checkbox" />
                <span>Full-Time</span>
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" />
                <span>Part-Time</span>
              </label>
            </p>
          </div>
          <div className="input-field center">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>


  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>


    </div>
  );
}

export default App;
