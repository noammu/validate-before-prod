import { PageLayout } from '../components/page-layout';
import { FlaskConical, Users, Gauge, GitBranch, TestTube2, Eye, CheckCircle2 } from 'lucide-react';
import styles from './methods.module.css';
import type { Route } from './+types/methods';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Validation Methods - Feature Vetta' },
    {
      name: 'description',
      content: 'Explore proven strategies and techniques for effective feature validation.',
    },
  ];
}

export default function Methods() {
  return (
    <PageLayout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Validation Methods</h1>
          <p className={styles.intro}>
            Successful feature validation requires a multi-faceted approach. Understanding
            and implementing the right combination of validation methods ensures your
            features meet quality standards before reaching production.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Types of Validation</h2>
          <div className={styles.content}>
            <p>
              Different validation methods serve different purposes and catch different
              types of issues. A comprehensive validation strategy combines multiple
              approaches to provide thorough coverage.
            </p>
          </div>

          <div className={styles.methodsGrid}>
            <div className={styles.methodCard}>
              <div className={styles.methodHeader}>
                <div className={styles.methodIcon}>
                  <FlaskConical size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.methodTitle}>A/B Testing</h3>
                </div>
              </div>
              <p className={styles.methodDescription}>
                Deploy features to a subset of users and compare outcomes against a
                control group. A/B testing validates that new features actually improve
                key metrics and user behavior before full rollout. This data-driven
                approach removes guesswork and confirms feature value.
              </p>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodHeader}>
                <div className={styles.methodIcon}>
                  <Users size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.methodTitle}>User Acceptance Testing (UAT)</h3>
                </div>
              </div>
              <p className={styles.methodDescription}>
                Involve real users in testing features before production release. UAT
                validates that features meet user needs, are intuitive to use, and
                solve the intended problems. User feedback during UAT often reveals
                usability issues that internal testing misses.
              </p>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodHeader}>
                <div className={styles.methodIcon}>
                  <Gauge size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.methodTitle}>Canary Releases</h3>
                </div>
              </div>
              <p className={styles.methodDescription}>
                Gradually roll out features to increasing percentages of users while
                monitoring key metrics. Canary releases enable early detection of
                performance issues, bugs, or negative impacts in production with
                minimal user exposure, allowing quick rollback if needed.
              </p>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodHeader}>
                <div className={styles.methodIcon}>
                  <GitBranch size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.methodTitle}>Feature Flags</h3>
                </div>
              </div>
              <p className={styles.methodDescription}>
                Deploy code to production with features disabled, then enable them
                selectively for testing or specific user segments. Feature flags
                provide fine-grained control over feature activation, enabling safe
                validation in production without impacting all users.
              </p>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodHeader}>
                <div className={styles.methodIcon}>
                  <TestTube2 size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.methodTitle}>Automated Testing</h3>
                </div>
              </div>
              <p className={styles.methodDescription}>
                Implement comprehensive test suites including unit tests, integration
                tests, and end-to-end tests. Automated testing validates that features
                work correctly, don't break existing functionality, and maintain
                expected behavior across different scenarios and edge cases.
              </p>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodHeader}>
                <div className={styles.methodIcon}>
                  <Eye size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.methodTitle}>Monitoring & Observability</h3>
                </div>
              </div>
              <p className={styles.methodDescription}>
                Instrument features with comprehensive logging, metrics, and tracing.
                Monitoring validates feature performance, identifies anomalies, and
                provides data for optimization. Observability enables quick diagnosis
                when issues occur and validates that features perform as expected.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Best Practices</h2>
          <div className={styles.content}>
            <p>
              Following established best practices maximizes the effectiveness of your
              validation efforts and ensures consistent quality across your development
              process.
            </p>
          </div>

          <ul className={styles.practicesList}>
            <li className={styles.practiceItem}>
              <h3 className={styles.practiceTitle}>
                <CheckCircle2 size={20} />
                Start Validation Early
              </h3>
              <p className={styles.practiceDescription}>
                Begin validation during development, not after. Early validation catches
                issues when they're cheapest to fix and prevents problematic patterns
                from spreading through the codebase.
              </p>
            </li>

            <li className={styles.practiceItem}>
              <h3 className={styles.practiceTitle}>
                <CheckCircle2 size={20} />
                Define Success Criteria
              </h3>
              <p className={styles.practiceDescription}>
                Establish clear, measurable criteria for feature success before
                validation begins. Know what metrics matter and what thresholds must
                be met for a feature to be considered validated and ready for production.
              </p>
            </li>

            <li className={styles.practiceItem}>
              <h3 className={styles.practiceTitle}>
                <CheckCircle2 size={20} />
                Test in Production-Like Environments
              </h3>
              <p className={styles.practiceDescription}>
                Validate features in environments that closely mirror production
                infrastructure, data volumes, and usage patterns. Discrepancies between
                staging and production often hide critical issues.
              </p>
            </li>

            <li className={styles.practiceItem}>
              <h3 className={styles.practiceTitle}>
                <CheckCircle2 size={20} />
                Combine Multiple Methods
              </h3>
              <p className={styles.practiceDescription}>
                Use complementary validation methods together. Automated tests catch
                functional issues, UAT validates usability, canary releases verify
                production performance—each method covers different risk areas.
              </p>
            </li>

            <li className={styles.practiceItem}>
              <h3 className={styles.practiceTitle}>
                <CheckCircle2 size={20} />
                Document Validation Results
              </h3>
              <p className={styles.practiceDescription}>
                Maintain records of validation activities, results, and decisions.
                Documentation creates accountability, enables learning from past
                validations, and provides evidence of due diligence.
              </p>
            </li>

            <li className={styles.practiceItem}>
              <h3 className={styles.practiceTitle}>
                <CheckCircle2 size={20} />
                Iterate and Improve
              </h3>
              <p className={styles.practiceDescription}>
                Continuously refine your validation processes based on lessons learned.
                Retrospect on issues that escaped validation, adapt methods to catch
                similar problems, and share knowledge across teams.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}
