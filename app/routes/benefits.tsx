import { PageLayout } from '../components/page-layout';
import {
  Building2,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  Sparkles,
  Smile,
  Clock,
} from 'lucide-react';
import styles from './benefits.module.css';
import type { Route } from './+types/benefits';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Benefits of Validation - Feature Vetta' },
    {
      name: 'description',
      content: 'Discover the organizational and user experience benefits of robust feature validation.',
    },
  ];
}

export default function Benefits() {
  return (
    <PageLayout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Benefits of Feature Validation</h1>
          <p className={styles.intro}>
            Robust feature validation delivers tangible benefits across your entire
            organization—from improved business outcomes to enhanced user experiences.
            Investing in validation pays dividends in quality, reliability, and trust.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Organizational Benefits</h2>
          <div className={styles.content}>
            <p>
              Feature validation strengthens your organization's foundation, enabling
              sustainable growth, operational excellence, and competitive advantage.
              The benefits extend far beyond preventing bugs.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.benefitIcon}>
                  <Building2 size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.benefitTitle}>
                    Protected Brand Reputation
                  </h3>
                </div>
              </div>
              <p className={styles.benefitDescription}>
                Consistent quality builds trust and strengthens your brand. Validation
                ensures users associate your product with reliability and excellence,
                creating positive word-of-mouth and reducing churn. A strong reputation
                becomes a competitive moat that's difficult for competitors to breach.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.benefitIcon}>
                  <TrendingUp size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.benefitTitle}>Significant Cost Savings</h3>
                </div>
              </div>
              <p className={styles.benefitDescription}>
                Prevention is dramatically cheaper than cure. Validation identifies
                issues early when fix costs are minimal, avoiding expensive production
                incidents, emergency hotfixes, and customer compensation. The ROI on
                validation investments is consistently positive and measurable.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.benefitIcon}>
                  <Shield size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.benefitTitle}>Reduced Business Risk</h3>
                </div>
              </div>
              <p className={styles.benefitDescription}>
                Validation mitigates risks to revenue, compliance, and operations.
                Catching issues before production prevents revenue loss from downtime,
                avoids regulatory penalties, and protects against security
                vulnerabilities that could compromise business continuity.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.benefitIcon}>
                  <Zap size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.benefitTitle}>
                    Faster Time to Market
                  </h3>
                </div>
              </div>
              <p className={styles.benefitDescription}>
                Counter-intuitively, thorough validation accelerates delivery.
                Confidence in validation enables faster deployments without fear,
                reduces time wasted on firefighting, and prevents costly rollbacks
                that delay feature releases and roadmap execution.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.benefitIcon}>
                  <Heart size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.benefitTitle}>Improved Team Morale</h3>
                </div>
              </div>
              <p className={styles.benefitDescription}>
                Teams take pride in shipping quality features. Validation reduces
                stress from production incidents, creates psychological safety, and
                allows developers to focus on innovation rather than firefighting.
                Happy teams are more productive and less likely to leave.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.benefitIcon}>
                  <Sparkles size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.benefitTitle}>
                    Continuous Improvement Culture
                  </h3>
                </div>
              </div>
              <p className={styles.benefitDescription}>
                Validation processes generate data and insights that drive improvement.
                Teams learn from validation results, refine practices, and raise
                quality standards over time. This creates a culture of excellence and
                continuous learning that compounds organizational capability.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>User Experience Benefits</h2>
          <div className={styles.content}>
            <p>
              Ultimately, validation benefits the people who matter most—your users.
              Quality features create delightful experiences that keep users engaged,
              satisfied, and loyal to your product.
            </p>
          </div>

          <div className={styles.userBenefitsGrid}>
            <div className={styles.userBenefitCard}>
              <div className={styles.userBenefitIcon}>
                <Smile size={20} strokeWidth={2} />
              </div>
              <div className={styles.userBenefitContent}>
                <h3 className={styles.userBenefitTitle}>
                  Reliable, Bug-Free Experiences
                </h3>
                <p className={styles.userBenefitDescription}>
                  Users encounter fewer bugs, errors, and unexpected behaviors. Features
                  work as intended from day one, creating smooth experiences that don't
                  interrupt workflows or cause frustration. Reliability becomes expected
                  rather than exceptional.
                </p>
              </div>
            </div>

            <div className={styles.userBenefitCard}>
              <div className={styles.userBenefitIcon}>
                <Zap size={20} strokeWidth={2} />
              </div>
              <div className={styles.userBenefitContent}>
                <h3 className={styles.userBenefitTitle}>
                  Consistent Performance
                </h3>
                <p className={styles.userBenefitDescription}>
                  Validation ensures features perform well under real-world conditions.
                  Pages load quickly, interactions feel responsive, and applications
                  remain stable even during peak usage. Performance validation prevents
                  the degraded experiences that drive users away.
                </p>
              </div>
            </div>

            <div className={styles.userBenefitCard}>
              <div className={styles.userBenefitIcon}>
                <Heart size={20} strokeWidth={2} />
              </div>
              <div className={styles.userBenefitContent}>
                <h3 className={styles.userBenefitTitle}>
                  Features That Solve Real Problems
                </h3>
                <p className={styles.userBenefitDescription}>
                  User acceptance testing and feedback loops ensure features actually
                  address user needs. Validation prevents the release of features that
                  looked good on paper but fail in practice, ensuring development effort
                  translates to genuine user value.
                </p>
              </div>
            </div>

            <div className={styles.userBenefitCard}>
              <div className={styles.userBenefitIcon}>
                <Shield size={20} strokeWidth={2} />
              </div>
              <div className={styles.userBenefitContent}>
                <h3 className={styles.userBenefitTitle}>Enhanced Security & Privacy</h3>
                <p className={styles.userBenefitDescription}>
                  Validation includes security testing that protects user data and
                  privacy. Users can trust that their information is safe, their
                  accounts are secure, and the application won't expose them to
                  vulnerabilities or data breaches.
                </p>
              </div>
            </div>

            <div className={styles.userBenefitCard}>
              <div className={styles.userBenefitIcon}>
                <Sparkles size={20} strokeWidth={2} />
              </div>
              <div className={styles.userBenefitContent}>
                <h3 className={styles.userBenefitTitle}>Intuitive, Polished Interfaces</h3>
                <p className={styles.userBenefitDescription}>
                  UAT and usability validation reveal interface issues before launch.
                  Features are intuitive, accessible, and polished. Users don't struggle
                  with confusing interactions or poorly designed flows—they can
                  accomplish their goals effortlessly.
                </p>
              </div>
            </div>

            <div className={styles.userBenefitCard}>
              <div className={styles.userBenefitIcon}>
                <Clock size={20} strokeWidth={2} />
              </div>
              <div className={styles.userBenefitContent}>
                <h3 className={styles.userBenefitTitle}>
                  Reduced Downtime & Disruptions
                </h3>
                <p className={styles.userBenefitDescription}>
                  Thorough validation prevents production incidents that cause downtime.
                  Users experience fewer service interruptions, don't lose work to bugs,
                  and aren't frustrated by emergency maintenance windows. Consistent
                  availability builds trust and dependability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
