import CleanSoftwareTypewriter from "./CleanSoftwareTypewriter";

export default function Home() {
    return (
        <>
            <div className="mb-l">
                <p>[  OK  ] Environment loaded</p>
                <p>[  OK  ] Developer profile initialized</p>
            </div>

            <header>
                <h1>Bogdan Negoita</h1>
                <p className="highlight">negoitabogdan@icloud.com</p>
                <p>Full-Stack Software Developer</p>
                <p>Bucharest, Romania</p>
            </header>

            <section>
                <h2>{'>'} <CleanSoftwareTypewriter /></h2>
            </section>

            <section>
                <h2>{'>'} About me</h2>
                <p className="width-80ch">
                    I{'\''}m a Software Developer with 6 years of hands-on experience building robust,
                    full-stack applications — primarily in the banking and finance domain.
                </p>
            </section>

            <section>
                <h2>{'>'} What I offer</h2>
                <ul>
                    <li>End-to-end web application development</li>
                    <li>Financial systems design and implementation</li>
                    <li>Document processing and generation</li>
                    <li className="indented"><small>└─ Customisable generation through dynamic templates</small></li>
                    <li>Highly customisable business workflows<br />
                        <small>└─ Flow & Formula administration panel</small></li>
                </ul>
            </section>

            <section>
                <h2>{'>'} Core Expertise</h2>
                <ul>
                    <li>Java, Spring, Spring Boot</li>
                    <li>JavaScript, HTML, CSS, Vue & React</li>
                    <li>Relational Databases - PostgreSQL, Oracle</li>
                    <li>Agile Development, Domain Driven Design, Behaviour Driven Design </li>
                </ul>
            </section>
        </>
    );
}
