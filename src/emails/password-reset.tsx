import { Body, Button, Container, Head, Heading, Html, Preview, Text } from 'react-email';

type PasswordResetEmailProps = {
  customerName: string;
  resetUrl: string;
};

export const PasswordResetEmail = ({ customerName, resetUrl }: PasswordResetEmailProps) => (
  <Html lang="en">
    <Head />
    <Preview>Reset your Acme password</Preview>
    <Body style={body}>
      <Container style={container}>
        <Heading style={heading}>Reset your password</Heading>
        <Text style={paragraph}>Hello {customerName},</Text>
        <Text style={paragraph}>We received a request to reset your password. This link expires in 30 minutes.</Text>
        <Button href={resetUrl} style={button}>Choose a new password</Button>
        <Text style={note}>If you did not request this change, you can safely ignore this email.</Text>
      </Container>
    </Body>
  </Html>
);

PasswordResetEmail.PreviewProps = {
  customerName: 'Taylor',
  resetUrl: 'https://example.com/reset/demo-token',
} satisfies PasswordResetEmailProps;

export default PasswordResetEmail;

const body = { backgroundColor: '#0f172a', fontFamily: 'Arial, sans-serif', margin: 0, padding: '40px 12px' };
const container = { backgroundColor: '#ffffff', borderRadius: '12px', margin: '0 auto', maxWidth: '520px', padding: '40px' };
const heading = { color: '#0f172a', fontSize: '28px', lineHeight: '36px' };
const paragraph = { color: '#334155', fontSize: '16px', lineHeight: '25px' };
const button = { backgroundColor: '#0f172a', borderRadius: '7px', color: '#ffffff', display: 'inline-block', fontWeight: '700', margin: '18px 0', padding: '14px 20px', textDecoration: 'none' };
const note = { color: '#64748b', fontSize: '13px', lineHeight: '20px', marginTop: '22px' };
