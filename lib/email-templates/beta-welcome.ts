export interface BetaWelcomeEmailData {
  name: string;
  email: string;
  invitationCode: string;
  discordUrl?: string;
}

/**
 * Generates the HTML version of the beta welcome email
 */
export function getBetaWelcomeEmailHTML(data: BetaWelcomeEmailData): string {
  const { name, invitationCode, discordUrl } = data;
  const displayName = name || 'there';
  const communityUrl = discordUrl || 'https://discord.gg/hideandchase';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for signing up - Hide and Chase Beta</title>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #1C1B1F;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #F7FAF6;
    }
    .container {
      background-color: #FEFBFE;
      border-radius: 12px;
      padding: 32px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 24px;
    }
    .header img {
      height: 64px;
      width: auto;
      margin: 0 auto 16px;
      display: block;
    }
    .header h1 {
      color: #16684D;
      margin: 0;
      font-size: 28px;
      font-weight: 800;
    }
    .content {
      margin-bottom: 24px;
    }
    .content p {
      margin: 12px 0;
      color: #1C1B1F;
      font-size: 15px;
    }
    .invitation-code-box {
      background: linear-gradient(135deg, #16684D 0%, #3D646F 100%);
      border-radius: 12px;
      padding: 20px;
      margin: 24px 0;
      text-align: center;
    }
    .invitation-code-box h3 {
      color: #FEFBFE;
      margin: 0 0 12px 0;
      font-size: 16px;
      font-weight: 700;
    }
    .code-display {
      background-color: #FEFBFE;
      border-radius: 8px;
      padding: 12px 16px;
      margin: 12px 0;
    }
    .code-display code {
      font-family: 'Courier New', monospace;
      font-size: 24px;
      font-weight: bold;
      color: #16684D;
      letter-spacing: 2px;
      display: block;
    }
    .invitation-code-box p {
      color: #FEFBFE;
      margin: 8px 0 0 0;
      font-size: 14px;
    }
    .community {
      background-color: #E6F4EA;
      border-radius: 8px;
      padding: 16px;
      margin: 24px 0;
    }
    .community p {
      margin: 8px 0;
      color: #1C1B1F;
      font-size: 14px;
    }
    .community strong {
      color: #16684D;
      font-weight: 700;
    }
    .community a {
      color: #16684D;
      text-decoration: none;
      font-weight: 600;
    }
    .community a:hover {
      text-decoration: underline;
    }
    .footer {
      text-align: center;
      margin-top: 32px;
      padding-top: 16px;
      border-top: 1px solid #E2E2E5;
      font-size: 13px;
      color: #79747E;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://hideandchase.com/logo.png" alt="Hide and Chase Logo" />
      <h1>Thanks for Signing Up!</h1>
    </div>
    
    <div class="content">
      <p>Hi ${displayName},</p>
      
      <p>You've been spotted—thank you for signing up for the Hide and Chase closed beta!</p>
      
      <p>This is an automated confirmation email. <strong>We'll notify you via email if you're selected for the beta.</strong> Stay tuned!</p>
    </div>

    <div class="invitation-code-box">
      <h3>🎁 Your Personal Invitation Code</h3>
      <div class="code-display">
        <code>${invitationCode}</code>
      </div>
      <p><strong>Share this code with your friends!</strong></p>
      <p style="font-size: 13px; opacity: 0.9;">If you're admitted to the beta, friends who use your code will get guaranteed access too.</p>
            

    </div>
    <p style="font-size: 14px; margin-top: 16px;">
        <strong>💡 Tip:</strong> Hide and Chase is best played with friends! We prioritize admitting users who share their codes, so spread the word to increase your chances of selection.
    </p>

    <div class="community">
      <p><strong>💬 Join Our Discord for Updates</strong></p>
      <p>Stay in the loop with the latest beta news and connect with other testers:</p>
      <p>
        <a href="${communityUrl}">
          Join our Discord Server →
        </a>
      </p>
    </div>

    <div class="content">
      <p>
        Best regards,<br>
        <strong>The Hide and Chase Team</strong>
      </p>
    </div>

    <div class="footer">
      <p>You're receiving this email because you signed up for the Hide and Chase closed beta.</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Generates the plain text version of the beta welcome email
 */
export function getBetaWelcomeEmailText(data: BetaWelcomeEmailData): string {
  const { name, invitationCode, discordUrl } = data;
  const displayName = name || 'there';
  const communityUrl = discordUrl || 'https://discord.gg/hideandchase';

  return `
Thank you for signing up - Hide and Chase Beta

Hi ${displayName},

You've been spotted—thank you for signing up for the Hide and Chase closed beta!

This is an automated confirmation email. We'll notify you via email if you're selected for the beta. Stay tuned!


YOUR PERSONAL INVITATION CODE
==============================
${invitationCode}

Share this code with your friends!
If you're admitted to the beta, friends who use your code will get guaranteed access too.

💡 TIP: Hide and Chase is best played with friends! We prioritize admitting users who share their codes, so spread the word to increase your chances of selection.

JOIN OUR DISCORD FOR UPDATES
============================
Stay in the loop with the latest beta news and connect with other testers:
Join our Discord Server: ${communityUrl}

Best regards,
The Hide and Chase Team

---
You're receiving this email because you signed up for the Hide and Chase closed beta.
`.trim();
}