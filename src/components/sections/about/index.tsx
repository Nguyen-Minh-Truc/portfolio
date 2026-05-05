import { Col, Row } from "react-bootstrap";
import AnimationLottie from "@/components/share/animation-lottie";
import codingJSON from "assets/lottie/coding.json";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";

const About = () => {
    return (
        <>
            {/* =======================
                INTRO SECTION
            ======================= */}
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="text-center mb-md-5 mb-3">
                        About <span className="brand-red">Me</span>
                    </h3>

                    <div>
                        <p>
                            Hi, I’m Minh Truc from Ho Chi Minh City, Vietnam.
                        </p>

                        <p>
                            I am an Information Technology student focused on
                            backend development and building scalable web systems.
                        </p>

                        <p>
                            I enjoy working with APIs, system design, and backend
                            architectures using Java and JavaScript technologies.
                        </p>
                    </div>

                    <div className="mt-4">
                        <p>Outside of coding, I enjoy:</p>
                        <ul>
                            <li>Exploring new technologies</li>
                            <li>Building personal projects</li>
                            <li>Learning system design concepts</li>
                        </ul>
                    </div>
                </Col>

                <Col
                    md={6}
                    xs={12}
                    className="d-flex align-items-center justify-content-center"
                >
                    <AnimationLottie width="80%" animationPath={codingJSON} />
                </Col>
            </Row>

            {/* =======================
                EDUCATION SECTION
            ======================= */}
            <Row>
                <Col
                    md={6}
                    xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="60%"
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>

                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <h4 className="text-center brand-red">Education</h4>

                        <GlowCard identifier="education-1">
                            <div className="p-3">
                                <div className="experience-container">
                                    <div className="details">
                                        <div className="icon">
                                            <FaGraduationCap size={36} />
                                        </div>

                                        <div className="info">
                                            <p className="title">
                                                Software Engineering
                                            </p>
                                            <p className="company">
                                                Saigon University
                                            </p>
                                            <p className="duration">
                                                2022 - Present
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GlowCard>
                    </div>
                </Col>
            </Row>

            <Divider />

            {/* =======================
                CONTACT SECTION
            ======================= */}
            <Row>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <h3 className="mb-md-4 mb-2">Find Me On</h3>

                    <SocialMedia
                        youtube={APP_DATA.YOUTUBE_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                        tiktok={APP_DATA.TIKTOK_URL}
                        udemy={APP_DATA.UDEMY_URL}
                    />
                </Col>

                <Col
                    md={6}
                    xs={12}
                    className="d-flex flex-column align-items-center justify-content-center"
                >
                    <AnimationLottie
                        width="50%"
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center mt-3">Let’s Connect</h4>
                </Col>
            </Row>

            <div className="mb-5" />
        </>
    );
};

export default About;