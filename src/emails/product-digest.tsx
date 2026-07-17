import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Markdown,
  Preview,
  Row,
  Section,
  Text,
} from 'react-email';

type ProductDigestEmailProps = {
  firstName: string;
  workspaceName: string;
  activeMembers: number;
  tasksCompleted: number;
  reportUrl: string;
};

const releaseNotes = `
## What shipped this week

- **Shared dashboards** keep the whole team aligned.
- **Faster search** finds projects, people, and documents from one place.
- **Flexible notifications** let every member choose what deserves attention.

Read the [complete release notes](https://example.com/changelog) for technical details and migration guidance.
`;

export const ProductDigestEmail = ({
  firstName,
  workspaceName,
  activeMembers,
  tasksCompleted,
  reportUrl,
}: ProductDigestEmailProps) => (
  <Html lang="en">
    <Head />
    <Preview>Your weekly product and workspace digest</Preview>
    <Body style={body}>
      <Container style={container}>
        <Row style={headerRow}>
          <Column>
            <Text style={brand}>NORTHSTAR</Text>
          </Column>
          <Column align="right">
            <Text style={edition}>WEEKLY DIGEST</Text>
          </Column>
        </Row>

        <Section style={hero}>
          <Text style={eyebrow}>Workspace insights</Text>
          <Heading style={heading}>A productive week for {workspaceName}</Heading>
          <Text style={intro}>
            Hi {firstName}, here is what your team accomplished and what is new in the product.
          </Text>
          <Button href={reportUrl} style={primaryButton}>Open the full report</Button>
        </Section>

        <Section style={metricsSection}>
          <Row>
            <Column style={metricColumn}>
              <Text style={metricValue}>{activeMembers}</Text>
              <Text style={metricLabel}>Active members</Text>
            </Column>
            <Column style={metricColumn}>
              <Text style={metricValue}>{tasksCompleted}</Text>
              <Text style={metricLabel}>Tasks completed</Text>
            </Column>
            <Column style={metricColumn}>
              <Text style={metricValue}>18%</Text>
              <Text style={metricLabel}>Faster delivery</Text>
            </Column>
          </Row>
        </Section>

        <Section style={featureSection}>
          <Row>
            <Column style={imageColumn}>
              <Img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=720&q=80"
                alt="A team collaborating around a table"
                width="220"
                height="150"
                style={featureImage}
              />
            </Column>
            <Column style={copyColumn}>
              <Text style={eyebrow}>Featured workflow</Text>
              <Heading as="h2" style={featureHeading}>Turn updates into decisions</Heading>
              <Text style={featureCopy}>
                Weekly summaries combine project activity, blockers, and team signals into one focused view.
              </Text>
              <Link href="https://example.com/guides/weekly-review" style={textLink}>Explore the workflow →</Link>
            </Column>
          </Row>
        </Section>

        <Hr style={divider} />

        <Markdown
          markdownContainerStyles={markdownContainer}
          markdownCustomStyles={markdownStyles}
        >
          {releaseNotes}
        </Markdown>

        <Section style={callout}>
          <Heading as="h3" style={calloutHeading}>Need help setting up your next workflow?</Heading>
          <Text style={calloutCopy}>Our customer success team can review your workspace and recommend a practical next step.</Text>
          <Button href="https://example.com/book" style={secondaryButton}>Book a workspace review</Button>
        </Section>

        <Text style={footer}>
          You received this digest because you are an administrator of {workspaceName}.{' '}
          <Link href="https://example.com/preferences" style={footerLink}>Manage email preferences</Link>.
        </Text>
      </Container>
    </Body>
  </Html>
);

ProductDigestEmail.PreviewProps = {
  firstName: 'Taylor',
  workspaceName: 'Acme Product',
  activeMembers: 24,
  tasksCompleted: 186,
  reportUrl: 'https://example.com/reports/weekly',
} satisfies ProductDigestEmailProps;

export default ProductDigestEmail;

const body = { backgroundColor: '#eef2ff', fontFamily: 'Arial, sans-serif', margin: 0, padding: '32px 12px' };
const container = { backgroundColor: '#ffffff', borderRadius: '16px', margin: '0 auto', maxWidth: '680px', overflow: 'hidden', padding: '34px' };
const headerRow = { marginBottom: '24px' };
const brand = { color: '#312e81', fontSize: '14px', fontWeight: '800', letterSpacing: '2px', margin: 0 };
const edition = { color: '#64748b', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', margin: 0 };
const hero = { backgroundColor: '#312e81', borderRadius: '14px', padding: '34px' };
const eyebrow = { color: '#818cf8', fontSize: '12px', fontWeight: '800', letterSpacing: '1px', margin: '0 0 10px', textTransform: 'uppercase' as const };
const heading = { color: '#ffffff', fontSize: '34px', lineHeight: '42px', margin: '0 0 16px' };
const intro = { color: '#e0e7ff', fontSize: '16px', lineHeight: '26px', margin: '0 0 24px' };
const primaryButton = { backgroundColor: '#ffffff', borderRadius: '8px', color: '#312e81', display: 'inline-block', fontSize: '14px', fontWeight: '800', padding: '13px 20px', textDecoration: 'none' };
const metricsSection = { padding: '30px 0' };
const metricColumn = { borderRight: '1px solid #e2e8f0', padding: '0 16px', textAlign: 'center' as const };
const metricValue = { color: '#0f172a', fontSize: '28px', fontWeight: '800', margin: '0 0 4px' };
const metricLabel = { color: '#64748b', fontSize: '12px', lineHeight: '18px', margin: 0 };
const featureSection = { backgroundColor: '#f8fafc', borderRadius: '12px', padding: '20px' };
const imageColumn = { paddingRight: '20px', width: '240px' };
const copyColumn = { verticalAlign: 'middle' as const };
const featureImage = { borderRadius: '10px', display: 'block', objectFit: 'cover' as const };
const featureHeading = { color: '#0f172a', fontSize: '22px', lineHeight: '29px', margin: '0 0 10px' };
const featureCopy = { color: '#475569', fontSize: '14px', lineHeight: '22px', margin: '0 0 12px' };
const textLink = { color: '#4f46e5', fontSize: '14px', fontWeight: '700', textDecoration: 'none' };
const divider = { borderColor: '#e2e8f0', margin: '32px 0 22px' };
const markdownContainer = { color: '#334155', fontSize: '15px', lineHeight: '24px' };
const markdownStyles = {
  h2: { color: '#0f172a', fontSize: '24px', lineHeight: '32px', margin: '0 0 14px' },
  link: { color: '#4f46e5', fontWeight: '700' },
};
const callout = { backgroundColor: '#eef2ff', borderRadius: '12px', marginTop: '28px', padding: '24px' };
const calloutHeading = { color: '#1e1b4b', fontSize: '20px', lineHeight: '27px', margin: '0 0 8px' };
const calloutCopy = { color: '#475569', fontSize: '14px', lineHeight: '22px', margin: '0 0 18px' };
const secondaryButton = { backgroundColor: '#4f46e5', borderRadius: '7px', color: '#ffffff', display: 'inline-block', fontSize: '13px', fontWeight: '700', padding: '11px 16px', textDecoration: 'none' };
const footer = { color: '#94a3b8', fontSize: '11px', lineHeight: '18px', margin: '28px 0 0', textAlign: 'center' as const };
const footerLink = { color: '#64748b', textDecoration: 'underline' };
