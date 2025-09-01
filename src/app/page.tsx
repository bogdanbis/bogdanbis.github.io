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
                <h1>{'>'} <CleanSoftwareTypewriter /></h1>
            </section>

            <section>
                <h2>Core Expertise</h2>
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
