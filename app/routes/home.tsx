import { Link } from "react-router";
import { PageLayout } from "../components/page-layout";
import { CheckCircle2, Shield, TrendingUp, ArrowRight } from "lucide-react";
import styles from "./home.module.css";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Feature Vetta - Feature Validation Best Practices" },
    {
      name: "description",
      content: "Learn the critical importance of validating new features before production deployment.",
    },
  ];
}

export default function Home() {
  return (
    <PageLayout>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Validate Before You Deploy</h1>
        <p className={styles.heroDescription}>
          Feature Vetta helps you understand the critical importance of thoroughly validating new features before their
          deployment to production. Learn best practices, methods, and benefits that will transform your development
          process.
        </p>
        <h1>This manual commit is after creating the github repo!</h1>
      </section>

      <section className={styles.concepts}>
        <h2 className={styles.sectionTitle}>Explore Key Concepts</h2>
        <div className={styles.conceptsGrid}>
          <Link to="/why-validate" className={styles.conceptCard}>
            <div className={styles.conceptIcon}>
              <Shield size={28} strokeWidth={2} />
            </div>
            <h3 className={styles.conceptTitle}>Why Validate?</h3>
            <p className={styles.conceptDescription}>
              Discover the critical reasons for validating features and understand the risks of skipping this essential
              step in your development workflow.
            </p>
            <span className={styles.conceptLink}>
              Learn more <ArrowRight size={16} />
            </span>
          </Link>

          <Link to="/methods" className={styles.conceptCard}>
            <div className={styles.conceptIcon}>
              <CheckCircle2 size={28} strokeWidth={2} />
            </div>
            <h3 className={styles.conceptTitle}>Validation Methods</h3>
            <p className={styles.conceptDescription}>
              Explore proven strategies and techniques for effective feature validation, from A/B testing to canary
              releases and beyond.
            </p>
            <span className={styles.conceptLink}>
              Learn more <ArrowRight size={16} />
            </span>
          </Link>

          <Link to="/benefits" className={styles.conceptCard}>
            <div className={styles.conceptIcon}>
              <TrendingUp size={28} strokeWidth={2} />
            </div>
            <h3 className={styles.conceptTitle}>Benefits</h3>
            <p className={styles.conceptDescription}>
              Understand how robust validation practices benefit your organization, your team, and most importantly,
              your users.
            </p>
            <span className={styles.conceptLink}>
              Learn more <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to Improve Your Process?</h2>
        <p className={styles.ctaDescription}>
          Start exploring our comprehensive guides and transform the way you validate features before production
          deployment.
        </p>
        <Link to="/why-validate" className={styles.ctaButton}>
          Get Started <ArrowRight size={20} />
        </Link>
      </section>
    </PageLayout>
  );
}
