import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { exportToPdf } from '../utils/pdfExport';
import { useTranslation } from 'react-i18next';
import './styles.css';

const UniCv = () => {
    const { t, i18n } = useTranslation();
    
    const handleExportPdf = () => {
        exportToPdf('uni-cv-content', `Michal_Tchorzewski_${i18n.language === 'en' ? 'Academic' : 'Akademickie'}_CV`);
    };

    return (
    <div className="cv-container">
        <div id="uni-cv-content" className="container" style={{ maxWidth: "960px"}}>
    <div className="row">
        <div className="col-xl">
            <header id="header">
                <h1>Michał Tchórzewski</h1>
                <hr />
                <section>

                    <p>
                        In 2016, I began my studies at the Faculty of Electronics and Information Technology at Warsaw University of Technology, 
                        pursuing a degree in Computer Science taught in English. During my first year, 
                        I was a member of the Faculty Student Council of EiTI and delegated to the Information and Promotion Committee (KIP). 
                        In the third semester, I decided to learn the Java programming language, and shortly thereafter, 
                        I obtained my first job in the industry. In the following years, I balanced my professional development 
                        with academic responsibilities. I advanced in the corporate ladder, which required greater commitment to my professional work, 
                        resulting in a delay in completing my undergraduate studies. Finally, in 2022, I submitted my thesis titled 
                        “Exploring the COVID-19 Patient Database and Developing an Expert System” and passed the exam with a result above good.
                    </p>
                    <p>
                        Currently, I work as a programmer in the position of Senior Software Engineer at the newly opened branch of the international
                         corporation Visa. My responsibilities include maintaining and developing web applications. 
                         My plan is to advance in the field of distributed systems architecture and explore how 
                         artificial intelligence (AI) can change the world and impact the services offered to end users.
                    </p>
                    <p>
                        Despite working on systems and applications, I do not shy away from manual tasks such as building circuits, 
                        connecting cables, or soldering.
                    </p>
                    <p>
                        My expectations for my master's studies are to expand my knowledge in system development and artificial intelligence. 
                        I seek to work on engaging projects that provide opportunities for creative thinking and encourage the effort involved
                        in acquiring new knowledge.
                    </p>

                </section>
            </header>
        </div>
    </div>

    <main className="new-page">
        <div className="row">
            <div className="col-sm">
                <section>

                    <h2>{t('cv.contact')}</h2>

                    <p>
                        <FontAwesomeIcon icon={faPhone} /> <a href="tel:+48511213765">+48 511 213 765</a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:evife2@gmail.com">evife2@gmail.com</a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faGithub} aria-hidden="true" /> <a href="https://github.com/Tchorzyksen37">Tchorzyksen37</a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" /> <a href="https://www.linkedin.com/in/tchorzyksen37/">Michał Tchórzewski</a>
                    </p>

                </section>

                <section>

                    <h2>{t('cv.education')}</h2>
                    <h3>Warsaw University of Technology</h3>
                    <p><b>Faculty of Electronics and Information Technology | 2016 - June 2022</b></p>
                    <p>
                        Field of Study: Computer Science, Specialization: Computer Systems and Networks.
                        Title of Engineering Thesis: "Exploring the COVID-19 Patient Database and Developing an Expert System."
                        Degree Obtained: Bachelor of Science in Engineering.
                    </p>

                </section>

                <section className="new-page">

                    <h2>{t('cv.workExperience')}</h2>

                    <h3>Senior Software Engineer</h3>
                    <p><b>Visa</b> | April 2024 - Present</p>

                    <h3>Software Developer</h3>
                    <p><b>Circle K</b> | August 2022 - April 2024</p>

                    <h3>Regular Java Developer</h3>
                    <p><b>Luxoft</b> | April 2022 - July 2022</p>

                    <h3>Consultant</h3>
                    <p><b>Netcompany</b> | October 2020 - March 2022</p>

                    <h3>Junior Java Developer</h3>
                    <p><b>Accenture</b> | May 2019 - October 2019</p>

                    <h3>Data Analyst</h3>
                    <p><b>Abplanalp</b> | July 2018 - August 2018</p>

                </section>

            </div>
            <div className="col-sm">

                <section>

                    <h2>{t('cv.skills')}</h2>
                    <p><b>Programming languages:</b> Java, Kotlin, Groovy, Python, Type Script, Java Script, SQL</p>
                    <p><b>Frameworks:</b> Spring, Angular</p>
                    <p><b>Test Frameworks:</b> Spock, JUnit</p>
                    <p><b>Cloud:</b> {language === 'en' ? 'Amazon Web Services (AWS)' : 'Amazon Web Services (AWS)'}</p>
                    <p><b>Databases:</b> {language === 'en' ? 'Relational databases (PostgreSQL) and document databases (MongoDB)' : 'Bazy danych relacyjne (PostgreSQL) i dokumentowe (MongoDB)'}</p>
                    <p><b>VCS:</b> Git</p>
                    <p><b>CD/CI pipelines:</b> GitHub Actions, Jenkins</p>
                    <p><b>Containerization Platform:</b> Docker, Kubernetes</p>
                    <p><b>Event Platform</b> Kafka</p>
                    <p><b>{language === 'en' ? 'Collaboration Framework' : 'Metodyka współpracy'}:</b> Scrum / Agile</p>

                </section>

                <section>

                    <h2>{t('cv.languages')}</h2>
                    <p><b>{t('cv.polish')}</b> {t('cv.native')}</p>
                    <p><b>{t('cv.english')}</b> C1</p>
                    <p><b>{t('cv.german')}</b> A2</p>

                </section>

                <section className="new-page">

                    <h2>{t('cv.interests')}</h2>
                    <p>{t('cv.interestsText')}</p>

                </section>

            </div>
        </div>
    </main>

        </div>
        <div className="export-button-container">
            <button className="export-button" onClick={handleExportPdf}>
                <FontAwesomeIcon icon={faFileDownload} /> {t('cv.exportPdf')}
            </button>
        </div>
    </div>
)};

export default UniCv;
