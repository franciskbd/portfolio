import React from "react";
import "./Resume.css";

let Resume =  ()=> (
  <div class="container">
  <div class="row">
    <div class="col-md-2">

    </div>
      <div class="col-md-8">
<h4>CURRICULUM VITAE</h4>
<p>Summary
I’m a software engineer with fourteen years of experience developing web applications and embedded firmware, as well as providing technical oversight for small teams of software developers.

I’m fluent in Python, C, SQL, JavaScript, HTML, and English. I’ve also written a good amount of C++, C#, Swift, Objective-C, and x86 assembly. I learn quickly, care about detail, and love computers and mathematics.

Skills: what I do...
Develop websites that perform well and are easy to use. I’ve used various languages and databases, and I’m experienced with the scaling and caching required for large-scale websites (2M pageviews per day).
Create native apps for iOS and Android devices. I’m familiar with all aspects of app development from design to code to app store submission.
Contribute to open source projects, for example Python (more here).
Administer web servers and automate complex code deployments on Windows or Linux.
Write desktop tools and automated test software.
Develop embedded firmware for data loggers, control systems, and other electronic devices, using 16-bit and 32-bit microcontrollers.
Provide technical leadership for small teams of software engineers, and oversee product development.
Communicate and document effectively and relate well to people.
Experience
Jetsetter / TripAdvisor – Principal Software Engineer – July 2016 to now:

Designed and developed a real-time image scaling and badging service using Python and ImageMagick (able to serve hundreds of image scaling requests per second).
Implemented a duplicate image detector using the dHash perceptual hash algorithm and BK-Tree data structures.
Wrote a type-safe image metadata injection service using Scala and ElasticSearch.
Worked on internal server setup and deployment tools, load balancing configuration, and React-based admin tools.
Instigated database best practices on the engineering team.
Oyster.com / TripAdvisor – Software Engineer and Technical Manager – June 2010 to June 2016:

Ported our legacy C++ web backend to Python. Instead of generating static HTML, we now render all pages dynamically, in a language that lets us develop and release business-level features much more quickly.
Helped design and implement a custom content management system that enabled us to publish hotel reviews realtime. The CMS is also used to write all of our travel content, with an integrated system that allows us to help users and boost revenue.
Co-developed two mobile apps: a cross-platform iOS and Android app using React Native, and Oyster’s older iPad app written in Objective-C.
Wrote Python and JavaScript libraries to display real-time pricing via TripAdvisor’s hotel pricing API, resulting in a sizeable revenue increase.
Implemented the backend for various website features, including a tag-based photo search engine and a hotel booking system.
Implemented many web-based internal tools, such as a photo album editor and a workflow system to help salespeople schedule photoshoots at hundreds of hotels per month.
Wrote tools for our web infrastructure: a new code deployment system using Ansible, tools to translate and localize the entire website, a data analytics pipeline using Snowplow Analytics and Amazon Redshift, and a system to send personalized emails.
Managed the transition of our 12 points of sale from plain http to SSL while closely monitoring SEO performance.
Co-wrote heavily parallelized software to resize and watermark millions of images in many different sizes using Amazon EC2.
Managed a small team of software developers. Oversaw architecture decisions and performed code reviews for most of Oyster’s software projects. Helped the team switch from Subversion to Git. Led the hiring of new software engineers.
Brush Technology – Software Engineer and Co-director – August 2006 to May 2010:

</p>
      </div>

    <div class="col-md-2">

    </div>
  </div>
  </div>



)
export default Resume
