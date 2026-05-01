import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { exportToPdf } from '../utils/pdfExport';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations';
import './styles.css';

const UniCv = () => {
    const { language } = useLanguage();
    const t = useTranslation('common');
    const tUni = useTranslation('uniCv');

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
                    <p>{tUni.aboutParagraph1}</p>
                    <p>{tUni.aboutParagraph2}</p>
                    <p>{tUni.aboutParagraph3}</p>
                    <p>{tUni.aboutParagraph4}</p>
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
                    {tUni.educationEntries.map((entry, i) => (
                        <div key={i}>
                            <h3>{entry.institution}</h3>
                            <p><b>{entry.faculty} | {entry.period}</b></p>
                            <p>{entry.description}</p>
                            {entry.thesis && <p><i>Thesis: {entry.thesis}</i></p>}
                        </div>
                    ))}

                </section>

                <section className="new-page">

                    <h2>{t.workExperience}</h2>
                    {tUni.jobs.map((job, i) => (
                        <div key={i}>
                            <h3>{job.title}</h3>
                            <p><b>{job.company}</b> | {job.period}</p>
                        </div>
                    ))}

                </section>

            </div>
            <div className="col-sm">

                <section>

                    <h2>{t.skills}</h2>
                    {tUni.skillsEntries.map((entry, i) => (
                        <p key={i}><b>{entry.label}:</b> {entry.value}</p>
                    ))}

                </section>

                <section>

                    <h2>{t.languages}</h2>
                    <p><b>{t.polish}</b> {t.native}</p>
                    <p><b>{t.english}</b> C1</p>
                    <p><b>{t.german}</b> A2</p>

                </section>

                <section className="new-page">

                    <h2>{tUni.interests}</h2>
                    <p>{tUni.interestsText}</p>

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
