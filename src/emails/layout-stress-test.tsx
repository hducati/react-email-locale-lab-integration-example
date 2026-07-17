import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from 'react-email';

/**
 * Intentionally fragile template used to demonstrate locale-driven layout
 * regressions. Do not copy these fixed dimensions into production emails.
 */
export const LayoutStressTestEmail = () => (
  <Html lang="en">
    <Head />
    <Preview>A deliberately fragile email layout</Preview>
    <Body style={body}>
      <Container style={container}>
        <Text style={demoLabel}>INTENTIONAL LAYOUT STRESS TEST</Text>
        <Heading style={heading}>Your plan is ready</Heading>
        <Text style={intro}>
          This version looks compact in English. Compare it with German and Portuguese to reveal text expansion problems.
        </Text>

        <Section style={planCard}>
          <Row>
            <Column style={planCopyColumn}>
              <Text style={planName}>Professional plan</Text>
              <Text style={planDescription}>Advanced reporting and priority support</Text>
            </Column>
            <Column align="right" style={planActionColumn}>
              <Button href="https://example.com/upgrade" style={fragileButton}>Upgrade now</Button>
            </Column>
          </Row>
        </Section>

        <Row style={actionsRow}>
          <Column style={actionColumn}>
            <Button href="https://example.com/save" style={compactAction}>Save</Button>
          </Column>
          <Column style={actionColumn}>
            <Button href="https://example.com/cancel" style={compactAction}>Cancel</Button>
          </Column>
          <Column style={actionColumn}>
            <Button href="https://example.com/help" style={compactAction}>Get help</Button>
          </Column>
        </Row>

        <Section style={preferenceSection}>
          <Text style={preferenceTitle}>Notification categories</Text>
          <Row style={preferenceRow}>
            <Column style={preferenceLabelColumn}><Text style={preferenceLabel}>Billing</Text></Column>
            <Column style={preferenceLabelColumn}><Text style={preferenceLabel}>Privacy</Text></Column>
            <Column style={preferenceLabelColumn}><Text style={preferenceLabel}>Team</Text></Column>
            <Column style={preferenceValueColumn}><Text style={preferenceValue}>Enabled</Text></Column>
          </Row>
        </Section>

        <Section style={fixedHeightNotice}>
          <Text style={noticeTitle}>Payment confirmed</Text>
          <Text style={noticeCopy}>A receipt is available in your account.</Text>
        </Section>

        <Text style={explanation}>
          Warning signs to look for: truncated action labels, overflowing category names and clipped notification text.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default LayoutStressTestEmail;

const body = { backgroundColor: '#f8fafc', fontFamily: 'Arial, sans-serif', margin: 0, padding: '32px 12px' };
const container = { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '0 auto', maxWidth: '520px', padding: '32px' };
const demoLabel = { color: '#dc2626', fontSize: '11px', fontWeight: '800', letterSpacing: '1px', margin: '0 0 16px' };
const heading = { color: '#0f172a', fontSize: '28px', lineHeight: '34px', margin: '0 0 12px' };
const intro = { color: '#475569', fontSize: '14px', lineHeight: '22px', margin: '0 0 24px' };
const planCard = { backgroundColor: '#eff6ff', borderRadius: '10px', padding: '18px' };
const planCopyColumn = { width: '270px' };
const planActionColumn = { width: '120px' };
const planName = { color: '#1e3a8a', fontSize: '16px', fontWeight: '800', margin: '0 0 4px' };
const planDescription = { color: '#475569', fontSize: '12px', lineHeight: '17px', margin: 0, maxWidth: '230px' };
const fragileButton = {
  backgroundColor: '#2563eb',
  borderRadius: '6px',
  color: '#ffffff',
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: '700',
  height: '18px',
  lineHeight: '18px',
  overflow: 'hidden',
  padding: '8px 10px',
  textAlign: 'center' as const,
  textDecoration: 'none',
  whiteSpace: 'nowrap' as const,
  width: '76px',
};
const actionsRow = { marginTop: '20px', tableLayout: 'fixed' as const, width: '210px' };
const actionColumn = { paddingRight: '6px', width: '33.33%' };
const compactAction = {
  border: '1px solid #cbd5e1',
  borderRadius: '6px',
  boxSizing: 'border-box' as const,
  color: '#334155',
  display: 'block',
  fontSize: '11px',
  fontWeight: '700',
  overflow: 'hidden',
  padding: '9px 4px',
  textAlign: 'center' as const,
  textDecoration: 'none',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap' as const,
  width: '58px',
};
const preferenceSection = { border: '1px dashed #f59e0b', marginTop: '20px', padding: '12px' };
const preferenceTitle = { color: '#92400e', fontSize: '11px', fontWeight: '800', margin: '0 0 9px' };
const preferenceRow = { tableLayout: 'fixed' as const, width: '300px' };
const preferenceLabelColumn = { width: '58px' };
const preferenceValueColumn = { width: '68px' };
const preferenceLabel = { backgroundColor: '#fef3c7', boxSizing: 'border-box' as const, color: '#78350f', fontSize: '10px', margin: 0, overflow: 'hidden', padding: '5px', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const, width: '52px' };
const preferenceValue = { color: '#166534', fontSize: '10px', fontWeight: '700', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const, width: '56px' };
const fixedHeightNotice = { backgroundColor: '#f0fdf4', borderLeft: '4px solid #22c55e', height: '34px', marginTop: '22px', overflow: 'hidden', padding: '7px 12px' };
const noticeTitle = { color: '#166534', fontSize: '13px', fontWeight: '800', lineHeight: '16px', margin: '0 0 3px' };
const noticeCopy = { color: '#15803d', fontSize: '11px', lineHeight: '15px', margin: 0 };
const explanation = { color: '#991b1b', fontSize: '11px', lineHeight: '17px', margin: '20px 0 0' };
