import { PageLayout } from '../components/page-layout';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import styles from './why-validate.module.css';
import type { Route } from './+types/why-validate';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Why Validate Features? - Feature Vetta' },
    {
      name: 'description',
      content: 'Learn the critical reasons for validating features and the risks of skipping validation.',
    },
  ];
}

export default function WhyValidate() {
  return (
    <PageLayout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Why Validate Features?</h1>
          <p className={styles.intro}>
            Feature validation is not just a best practice—it's a critical safeguard
            that protects your users, your business, and your reputation. Understanding
            why validation matters is the first step toward building more reliable software.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Impact of Poor Validation</h2>
          <div className={styles.content}>
            <p>
              Deploying features without proper validation can have severe consequences
              that ripple through your entire organization. The costs of inadequate
              validation often far exceed the investment required to do it right.
            </p>
          </div>

          <ul className={styles.impactList}>
            <li className={styles.impactItem}>
              <h3 className={styles.impactTitle}>
                <AlertCircle size={20} />
                Critical Bugs in Production
              </h3>
              <p className={styles.impactDescription}>
                Unvalidated features can introduce critical bugs that affect core
                functionality, leading to system failures, data corruption, and
                emergency rollbacks that disrupt operations.
              </p>
            </li>

            <li className={styles.impactItem}>
              <h3 className={styles.impactTitle}>
                <AlertCircle size={20} />
                User Dissatisfaction & Churn
              </h3>
              <p className={styles.impactDescription}>
                Poor user experiences caused by unvalidated features erode trust,
                damage brand reputation, and drive users to competitors. Rebuilding
                lost trust is exponentially harder than preventing its loss.
              </p>
            </li>

            <li className={styles.impactItem}>
              <h3 className={styles.impactTitle}>
                <AlertCircle size={20} />
                Revenue Loss & Business Impact
              </h3>
              <p className={styles.impactDescription}>
                Downtime, broken checkout flows, or degraded performance directly
                impact revenue. Even brief outages can result in significant financial
                losses and missed opportunities.
              </p>
            </li>

            <li className={styles.impactItem}>
              <h3 className={styles.impactTitle}>
                <AlertCircle size={20} />
                Increased Support Costs
              </h3>
              <p className={styles.impactDescription}>
                Unvalidated features generate support tickets, consume team resources,
                and create technical debt. The time spent firefighting could have been
                invested in innovation and growth.
              </p>
            </li>

            <li className={styles.impactItem}>
              <h3 className={styles.impactTitle}>
                <AlertCircle size={20} />
                Team Morale & Productivity
              </h3>
              <p className={styles.impactDescription}>
                Constant production issues demoralize teams, create a culture of fear,
                and reduce overall productivity. Teams spend more time fixing problems
                than building new features.
              </p>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Importance of Early Detection</h2>
          <div className={styles.content}>
            <p>
              Validation enables early detection of issues when they're easiest and
              least expensive to fix. The cost of fixing a bug increases exponentially
              as it moves through the development lifecycle—from development to staging
              to production.
            </p>
          </div>

          <ul className={styles.benefitsList}>
            <li className={styles.benefitItem}>
              <h3 className={styles.benefitTitle}>
                <CheckCircle2 size={20} />
                Catch Issues Before Users Do
              </h3>
              <p className={styles.benefitDescription}>
                Validation processes identify problems in controlled environments where
                they can be addressed without impacting real users or business operations.
              </p>
            </li>

            <li className={styles.benefitItem}>
              <h3 className={styles.benefitTitle}>
                <CheckCircle2 size={20} />
                Reduce Fix Costs
              </h3>
              <p className={styles.benefitDescription}>
                Issues caught during validation are significantly cheaper to fix than
                production bugs, which often require emergency responses, rollbacks,
                and extensive remediation.
              </p>
            </li>

            <li className={styles.benefitItem}>
              <h3 className={styles.benefitTitle}>
                <CheckCircle2 size={20} />
                Build Confidence
              </h3>
              <p className={styles.benefitDescription}>
                Thorough validation gives teams confidence in their deployments,
                enabling faster iteration and reducing the fear and stress associated
                with releasing new features.
              </p>
            </li>

            <li className={styles.benefitItem}>
              <h3 className={styles.benefitTitle}>
                <CheckCircle2 size={20} />
                Improve Quality Over Time
              </h3>
              <p className={styles.benefitDescription}>
                Validation processes create feedback loops that help teams learn from
                issues, improve development practices, and continuously raise quality
                standards across the organization.
              </p>
            </li>

            <li className={styles.benefitItem}>
              <h3 className={styles.benefitTitle}>
                <CheckCircle2 size={20} />
                Enable Data-Driven Decisions
              </h3>
              <p className={styles.benefitDescription}>
                Validation provides metrics and insights that inform better decisions
                about feature design, performance optimization, and user experience
                improvements.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}
