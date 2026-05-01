import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { exportToPdf } from '../utils/pdfExport';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations';
import './styles.css';

const WorkCv = () => {
    const { language } = useLanguage();
    const t = useTranslation('common');
    const tWork = useTranslation('workCv');

    const handleExportPdf = () => {
        exportToPdf('work-cv-content', `Michal_Tchorzewski_${language === 'en' ? 'Professional' : 'Zawodowe'}_CV`);
    };

    return (
        <div className="cv-container">
            <div id="work-cv-content" className="container" style={{ maxWidth: "960px" }}>
                <div className="row">
                    <div className="col-xl">
                        <header id="header">
                            <h1>Michał Tchórzewski</h1>
                            <hr />
                            <b>Senior Software Engineer</b>
                            <hr />
                            <section>

                                <h2>{tWork.about}</h2>
                                <p>{tWork.aboutText}</p>

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
                                {tWork.skillsList.map((skill, i) => (
                                    <p key={i}>{skill}</p>
                                ))}

                            </section>

                            <section>

                                <h2>{t.education}</h2>
                                {tWork.educationEntries.map((entry, i) => (
                                    <div key={i}>
                                        <h3>{entry.institution}</h3>
                                        <p><b>{entry.faculty} | {entry.period}</b></p>
                                        <p>{entry.description}</p>
                                        {entry.thesis && <p><i>Thesis: {entry.thesis}</i></p>}
                                    </div>
                                ))}

                            </section>

                            <section>

                                <h2>{tWork.certification}</h2>
                                {tWork.certificationsList.map((cert, i) => (
                                    <p key={i}>{cert}</p>
                                ))}
                            </section>

                            <section>
                                <h2>{t.languages}</h2>
                                <p><b>{t.polish}</b> {t.native}</p>
                                <p><b>{t.english}</b> {tWork.proficiencyProfessional}</p>
                            </section>

                        </div>
                        <div className="col-sm">

                            <section>

                                <h2>{t.workExperience}</h2>
                                {tWork.jobs.map((job, i) => (
                                    <div key={i}>
                                        <h3>{job.title}</h3>
                                        <p><b>{job.company} | {job.period}</b></p>
                                        <p>{job.description}</p>
                                        {job.bulletsIntro && <p>{job.bulletsIntro}</p>}
                                        {job.bullets && (
                                            <ul>
                                                {job.bullets.map((bullet, j) => (
                                                    <li key={j}>{bullet}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
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
    )
};

export default WorkCv;
