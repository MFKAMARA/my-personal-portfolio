function Container() {
    return <>
        <div class="container-fluid">
            <div id="about" class="row about-section">
                <div class="col-lg-4 about-card">
                    <h3 class="font-weight-light">Who am I ?</h3>
                    <span class="line mb-5"></span>
                    <h5 class="mb-3">A Web Designer / Developer Located in Minneapolis, MN</h5>
                    <p class="mt-20">A Full Stack Web Developer with a prior nursing background, utilizing innovative problem-solving skills to drive the development of healthcare-focused apps with an emphasis on mobile design. Leveraging insights from nursing to offer unique perspectives on user interaction with websites and software platforms. Holds a certificate in Full Stack Web Development from the University of Minnesota Coding Boot Camp. Passionate about mobile-first design and development, with strengths in creativity, teamwork, and project execution from conception to completion.</p>
                    <button class="btn btn-outline-danger"><i class="icon-down-circled2 "></i>Download My CV</button>
                </div>
                <div class="col-lg-4 about-card">
                    <h3 class="font-weight-light">Personal Info</h3>
                    <span class="line mb-5"></span>
                    <ul class="mt40 info list-unstyled">
                        <li><span>Birthdate</span> : 08/27/1991</li>
                        <li><span>Email</span> : malikikamara@yahoo.com</li>
                        <li><span>Phone</span> : + (763) 923-8926</li>
                        <li><span>Skype</span> : Maliki_kamara1 </li>
                        <li><span>Address</span> : Minneapolis, Minnesota, USA.</li>
                    </ul>
                    <ul class="social-icons pt-3">
                        <li class="social-item"><a class="social-link" href="#"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link" href="#"><i class="ti-github" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div class="col-lg-4 about-card">
                    <h3 class="font-weight-light">My Expertise</h3>
                    <span class="line mb-5"></span>
                    <div class="row">
                        <div class="col-1 text-danger pt-1"><i class="ti-widget icon-lg"></i></div>
                        <div class="col-10 ml-auto mr-3">
                            <h6>UX Design</h6>
                            <p class="subtitle"> Focuses on creating intuitive and engaging user experiences for digital products and services.
                                Conducts user research, user interviews, and creates personas to understand user needs and behaviors.
                                Designs wireframes, prototypes, and mockups to visualize the user interface and interactions.</p>
                            <hr />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1 text-danger pt-1"><i class="ti-paint-bucket icon-lg"></i></div>
                        <div class="col-10 ml-auto mr-3">
                            <h6>Web Development</h6>
                            <p class="subtitle">Combines aspects of user experience (UX) design and front-end development.
                                Focuses on creating seamless and intuitive user interfaces (UIs) with a strong emphasis on usability and accessibility.</p>
                            <hr />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1 text-danger pt-1"><i class="ti-stats-up icon-lg"></i></div>
                        <div class="col-10 ml-auto mr-3">
                            <h6>Digital Marketing</h6>
                            <p class="subtitle">Formulates comprehensive digital marketing strategies aligned with business goals.
                                Identifies target audiences, market segments, and key performance indicators (KPIs).
                                Determines the most effective channels and tactics to reach and engage with the target audience.</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Container