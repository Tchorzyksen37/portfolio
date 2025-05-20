import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { exportToPdf } from '../utils/pdfExport';
import { useLanguage } from '../context/LanguageContext';
import './styles.css';

const UniCv = () => {
    const { language } = useLanguage();
    
    const translations = {
        en: {
            contact: "CONTACT",
            education: "EDUCATION",
            workExperience: "WORK EXPERIENCE",
            skills: "SKILLS",
            languages: "LANGUAGES",
            interests: "INTERESTS",
            exportPdf: "Export as PDF",
            polish: "Polish",
            english: "English",
            german: "German",
            native: "Native",
            collaborationFramework: "Collaboration Framework",
            interestsText: "In my free time, I am active in the Student Sailing Club of Warsaw University of Technology (SKŻ). I am licensed to operate inland and maritime yachts. My goal is to lead an independent sea voyage. My interests also include rollerblading and ice skating. From 2017 to 2019, I was a member of the Night Skating Team, which organizes night rollerblading rides through the streets of Warsaw. In the evenings, I also work on my own web application and solve various coding challenges like Advent of Code and tasks on the LeetCode platform. In summary, I enjoy learning new patterns, gaining knowledge, and sharing it with others."
        },
        pl: {
            contact: "KONTAKT",
            education: "EDUKACJA",
            workExperience: "DOŚWIADCZENIE ZAWODOWE",
            skills: "UMIEJĘTNOŚCI",
            languages: "JĘZYKI",
            interests: "ZAINTERESOWANIA",
            exportPdf: "Eksportuj jako PDF",
            polish: "Polski",
            english: "Angielski",
            german: "Niemiecki",
            native: "Ojczysty",
            collaborationFramework: "Metodyka współpracy",
            interestsText: "W wolnym czasie jestem aktywny w Studenckim Klubie Żeglarskim Politechniki Warszawskiej (SKŻ). Posiadam uprawnienia do prowadzenia jachtów śródlądowych i morskich. Moim celem jest poprowadzenie samodzielnego rejsu morskiego. Moje zainteresowania obejmują również jazdę na rolkach i łyżwach. W latach 2017-2019 byłem członkiem Night Skating Team, który organizuje nocne przejazdy na rolkach ulicami Warszawy. Wieczorami pracuję również nad własną aplikacją internetową i rozwiązuję różne wyzwania programistyczne, takie jak Advent of Code i zadania na platformie LeetCode. Podsumowując, lubię uczyć się nowych wzorców, zdobywać wiedzę i dzielić się nią z innymi."
        }
    };
    
    const t = translations[language];
    
    const handleExportPdf = () => {
        exportToPdf('uni-cv-content', `Michal_Tchorzewski_${language === 'en' ? 'Academic' : 'Akademickie'}_CV`);
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

                    <h2>{t.contact}</h2>

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

                    <h2>{t.education}</h2>
                    <h3>Warsaw University of Technology</h3>
                    <p><b>Faculty of Electronics and Information Technology | 2016 - June 2022</b></p>
                    <p>
                        Field of Study: Computer Science, Specialization: Computer Systems and Networks.
                        Title of Engineering Thesis: "Exploring the COVID-19 Patient Database and Developing an Expert System."
                        Degree Obtained: Bachelor of Science in Engineering.
                    </p>

                </section>

                <section className="new-page">

                    <h2>{t.workExperience}</h2>

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

                    <h2>{t.skills}</h2>
                    <p><b>Programming languages:</b> Java, Kotlin, Groovy, Python, Type Script, Java Script, SQL</p>
                    <p><b>Frameworks:</b> Spring, Angular</p>
                    <p><b>Test Frameworks:</b> Spock, JUnit</p>
                    <p><b>Cloud:</b> Amazon Web Services (AWS)</p>
                    <p><b>Databases:</b> {language === 'en' ? 'Relational databases (PostgreSQL) and document databases (MongoDB)' : 'Bazy danych relacyjne (PostgreSQL) i dokumentowe (MongoDB)'}</p>
                    <p><b>VCS:</b> Git</p>
                    <p><b>CD/CI pipelines:</b> GitHub Actions, Jenkins</p>
                    <p><b>Containerization Platform:</b> Docker, Kubernetes</p>
                    <p><b>Event Platform</b> Kafka</p>
                    <p><b>{t.collaborationFramework}:</b> Scrum / Agile</p>

                </section>

                <section>

                    <h2>{t.languages}</h2>
                    <p><b>{t.polish}</b> {t.native}</p>
                    <p><b>{t.english}</b> C1</p>
                    <p><b>{t.german}</b> A2</p>

                </section>

                <section className="new-page">

                    <h2>{t.interests}</h2>
                    <p>{t.interestsText}</p>

                </section>

            </div>
        </div>
    </main>

        </div>
        <div className="export-button-container">
            <button className="export-button" onClick={handleExportPdf}>
                <FontAwesomeIcon icon={faFileDownload} /> {t.exportPdf}
            </button>
        </div>
    </div>
)};

export default UniCv;
