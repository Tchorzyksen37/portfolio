import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { exportToPdf } from '../utils/pdfExport';
import { useLanguage } from '../context/LanguageContext';
import './styles.css';

const WorkCv = () => {
    const { language } = useLanguage();
    
    const translations = {
        en: {
            about: "ABOUT",
            contact: "CONTACT",
            skills: "SKILLS",
            education: "EDUCATION",
            certification: "CERTIFICATION AND EXTERNAL TRAININGS",
            languages: "LANGUAGES",
            workExperience: "WORK EXPERIENCE",
            exportPdf: "Export as PDF",
            polish: "Polish",
            english: "English",
            german: "German",
            native: "Native",
            professional: "Professional working proficiency",
            elementary: "Elementary proficiency",
            aboutText: "I studied at the Faculty of Electronics and Information Technology on Warsaw University of Technology with a concentration in Computer Science. I'm a very dedicated and goal-oriented person. Once I choose to pursue a certain activity, I put in the effort to accomplish it with the best results possible. Moreover, I'm cooperative and a great team player."
        },
        pl: {
            about: "O MNIE",
            contact: "KONTAKT",
            skills: "UMIEJĘTNOŚCI",
            education: "EDUKACJA",
            certification: "CERTYFIKATY I SZKOLENIA ZEWNĘTRZNE",
            languages: "JĘZYKI",
            workExperience: "DOŚWIADCZENIE ZAWODOWE",
            exportPdf: "Eksportuj jako PDF",
            polish: "Polski",
            english: "Angielski",
            german: "Niemiecki",
            native: "Ojczysty",
            professional: "Biegły",
            elementary: "Podstawowy",
            aboutText: "Studiowałem na Wydziale Elektroniki i Technik Informacyjnych Politechniki Warszawskiej ze specjalizacją w Informatyce. Jestem bardzo zaangażowaną i zorientowaną na cel osobą. Gdy decyduję się na podjęcie określonego działania, wkładam wysiłek, aby osiągnąć jak najlepsze rezultaty. Ponadto, jestem kooperatywny i świetnie pracuję w zespole."
        }
    };
    
    const t = translations[language];
    
    const handleExportPdf = () => {
        exportToPdf('work-cv-content', `Michal_Tchorzewski_${language === 'en' ? 'Professional' : 'Zawodowe'}_CV`);
    };

    return (
    <div className="cv-container">
        <div id="work-cv-content" className="container" style={{maxWidth: "960px"}}>
        <div className="row">
            <div className="col-xl">
                <header id="header">
                    <h1>Michał Tchórzewski</h1>
                    <hr />
                    <b>Java Developer</b>
                    <hr />
                    <section>

                        <h2>{t.about}</h2>
                        <p>{t.aboutText}</p>

                    </section>
                </header>
            </div>
        </div>

        <main>
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

                        <h2>{t.skills}</h2>
                        <p>Java, Spring Boot, Groovy, Spock</p>
                        <p>TypeScript, Angular</p>
                        <p>Amazon Web Services (AWS)</p>
                        <p>Relational Databases, Postgresql</p>
                        <p>Document Databases, MongoDb</p>
                        <p>Git, GitHub Actions, Jenkins</p>
                        <p>Docker, Kubernetes</p>
                        <p>Kafka, Amazon Sqs and Sns</p>
                        <p>Python, Kotlin</p>

                    </section>

                    <section>

                        <h2>{t.education}</h2>
                        <h3>Warsaw University of Technology</h3>
                        <p><b>The Faculty of Electronics and Information Technology | 2016 - Jun 2022</b></p>
                        <p>Major in Computer Science with focus on Computer Systems and Networks. Professional title
                            conferred: Bachelor of Science in Engineering</p>

                    </section>

                    <section>

                        <h2>{t.certification}</h2>
                        <p>Test Driven Development by Bottega</p>
                        <p>Scaled Agile, Inc. logo
                            Certified SAFe® 5 Practitioner</p>
                        <p>Microsoft Certified: Azure Fundamentals</p>
                    </section>

                    <section>
                        <h2>{t.languages}</h2>
                        <p><b>{t.polish}</b> {t.native}</p>
                        <p><b>{t.english}</b> {t.professional}</p>
                        <p><b>{t.german}</b> {t.elementary}</p>
                    </section>

                </div>
                <div class="col-sm">

                    <section>

                        <h2>{t.workExperience}</h2>

                        <h3>Regular Java Developer</h3>
                        <p><b>Circle K | Aug 2022 - Now</b></p>
                        <p>Main responsibilities maintenance and development of both monolith spring boot application
                            and frontend.
                            The main functionality is to expose set of tools to the end-user for resource managment and
                            gathering various data summaries.</p>
                        <p>Some of the experience I got working here</p>
                        <ul>
                            <li>Acquired experience in development of single page application in Angular</li>
                            <li>Carried out migration from document to relational database in Python</li>
                            <li>Gathered hands on experience in process of integration to various vendors and systems
                            </li>
                            <li>Gained more knowledge of AWS services</li>
                            <li>Improved debugging and writing automated tests skills. Especially when adding new code
                                to the
                                old code base.</li>
                        </ul>
                        <h3>Regular Java Developer</h3>
                        <p><b>Luxoft | Apr 2022 - Jul 2022</b></p>
                        <p>Maintenance of embedded Java application and development of microservices written in GoLang.
                        </p>

                        <h3>Consultant</h3>
                        <p><b>Netcompany | Oct 2020 - Mar 2022</b></p>
                        <p>Development of Digital Post Denmark</p>
                        <p>Top things I learnt</p>
                        <ul>
                            <li>Microservices architecture</li>
                            <li>Basics of Kafka</li>
                            <li>Basics of Docker and Kubernetes</li>
                            <li>Importance of various tests</li>
                        </ul>

                        <h3>Junior Java Developer</h3>
                        <p><b>Accenture | May 2019 - Oct 2019</b></p>
                        <p>Maintenance, I learnt how difficult legacy systems are to learn programming.</p>

                        <h3>Data Analyst</h3>
                        <p><b>Abplanalp Sp. z o.o. | Jul 2018 - Spe 2018</b></p>
                        <p>Automation of business processes.</p>
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

export default WorkCv;
