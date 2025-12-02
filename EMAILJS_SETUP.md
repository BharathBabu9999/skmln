# EmailJS Setup Guide

To enable email functionality for the contact form, follow these steps:

## 1. Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## 2. Create Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - For Gmail: Click **Gmail**
   - Click **Connect Account** and authorize with your Google account
   - Note down the **Service ID** (e.g., `service_abc1234`)

## 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Property Inquiry - {{from_name}}
```

**Content:**
```
You have received a new inquiry for Sree Kanaka Maha Lakshmi Nilayam:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}

Message:
{{message}}

---
This email was sent from the contact form on your website.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz5678`)

## 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `AbCdEfGhIjKlMnOp`)

## 5. Update Contact.js

Open `/src/components/Contact.js` and replace these lines (around line 23-25):

```javascript
const serviceId = 'YOUR_SERVICE_ID';        // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';      // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';        // Replace with your Public Key
```

Example:
```javascript
const serviceId = 'service_abc1234';
const templateId = 'template_xyz5678';
const publicKey = 'AbCdEfGhIjKlMnOp';
```

## 6. Test the Form

1. Save the file
2. Fill out the contact form on your website
3. Click "Send Message"
4. Check your email inbox for the inquiry

## Email Settings (Optional)

### To receive emails at a different address:
1. In EmailJS dashboard → Email Templates → Edit your template
2. Click **Test** tab
3. Add your desired email in **To Email** field

### To add auto-reply to customers:
1. Create a second template for auto-reply
2. Modify `Contact.js` to send two emails (one to you, one to customer)

## Troubleshooting

- **Emails not received?** Check spam folder
- **Error sending?** Verify all IDs are correct
- **200 email limit?** Upgrade to paid plan or use multiple EmailJS accounts
- **Form not working?** Check browser console for errors

## Free Tier Limits

- 200 emails/month
- 2 email templates
- 1 email service
- EmailJS branding in emails

For higher volume, consider upgrading at https://www.emailjs.com/pricing/
