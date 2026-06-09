import { Card } from "../stories/components/Card";
import { Footer } from "../stories/modules/Footer";
import { Grid } from "../stories/modules/Grid";
import { Hero } from "../stories/modules/Hero";
import React from "react";
import { worklist } from "./constants";

const GITHUB_URL =
  "https://github.com/ava-collins?tab=repositories&q=&type=public&language=&sort=";
const LINKEDIN_URL = "https://www.linkedin.com/in/avacollins-dev/";

export default function Home() {
  const work = worklist.map((exp, i) => {
    const link = `/work#${exp.name.replace(" ", "-").toLowerCase()}`;
    return (
      <Card
        title={i === 0 ? "work" : undefined}
        name={exp.name}
        description={exp.description}
        image={exp.image}
        link={link}
        key={exp.name}
      />
    );
  });

  return (
    <React.Fragment>
      <main className="main">
        <Hero
          abouttext="Frontend-leaning full-stack developer with a long history of building interactive products for retail, education, and games. Actively using AI tools to accelerate daily development workflows. Comfortable across modern web apps, backend services, AWS cloud infrastructure, CI/CD pipelines, automated testing, and production support."
          resumeHref={GITHUB_URL}
          connectHref={LINKEDIN_URL}
        />
      </main>
      <Grid style="work">{work}</Grid>
      <Footer tagline='"Trying to define yourself is like trying to bite your own teeth." - Alan Watts' />
    </React.Fragment>
  );
}
