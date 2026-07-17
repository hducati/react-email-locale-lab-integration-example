import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'react-email';

type OrderConfirmedEmailProps = {
  customerName: string;
  orderNumber: string;
};

export const OrderConfirmedEmail = ({ customerName, orderNumber }: OrderConfirmedEmailProps) => (
  <Html lang="en">
    <Head />
    <Preview>Your Acme order has been confirmed</Preview>
    <Body style={body}>
      <Container style={container}>
        <Text style={brand}>ACME STORE</Text>
        <Heading style={heading}>Your order is confirmed</Heading>
        <Text style={paragraph}>Hi {customerName},</Text>
        <Text style={paragraph}>
          We received order {orderNumber}. Our team is preparing it now and will send another email when it ships.
        </Text>
        <Section style={buttonRow}>
          <Button href="https://example.com/orders/ACM-2048" style={button}>
            View order details
          </Button>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Questions? Reply to this email and our support team will help.</Text>
      </Container>
    </Body>
  </Html>
);

OrderConfirmedEmail.PreviewProps = {
  customerName: 'Taylor',
  orderNumber: 'ACM-2048',
} satisfies OrderConfirmedEmailProps;

export default OrderConfirmedEmail;

const body = { backgroundColor: '#f3f4f6', fontFamily: 'Arial, sans-serif', margin: 0, padding: '32px 12px' };
const container = { backgroundColor: '#ffffff', borderRadius: '12px', margin: '0 auto', maxWidth: '560px', padding: '40px' };
const brand = { color: '#4f46e5', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px' };
const heading = { color: '#111827', fontSize: '30px', lineHeight: '38px', margin: '18px 0 24px' };
const paragraph = { color: '#374151', fontSize: '16px', lineHeight: '26px' };
const buttonRow = { margin: '28px 0' };
const button = { backgroundColor: '#4f46e5', borderRadius: '8px', color: '#ffffff', display: 'inline-block', fontSize: '15px', fontWeight: '700', padding: '14px 22px', textDecoration: 'none' };
const hr = { borderColor: '#e5e7eb', margin: '32px 0 20px' };
const footer = { color: '#6b7280', fontSize: '13px', lineHeight: '20px' };
