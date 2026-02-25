export interface BetaWelcomeEmailData {
  name: string;
  email: string;
  invitationCode: string;
}

/**
 * Generates the HTML version of the beta welcome email
 */
export function getBetaWelcomeEmailHTML(data: BetaWelcomeEmailData): string {
  const { name, invitationCode } = data;
  const displayName = name || 'there';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Hide and Chase Closed Beta!</title>
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
      border-left: 4px solid #16684D;
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
      <h1>Welcome to Hide and Chase Beta!</h1>
    </div>
    
    <div class="content">
      <p>Hi ${displayName},</p>
      
      <p>You've been spotted in our system - Thank you for signing up for the Hide and Chase closed beta!</p>
      
      <p><strong>We'll notify you via email when the app is ready for you to download.</strong> Stay tuned!</p>
    </div>

    <div class="invitation-code-box">
      <h3>Your Personal Invitation Code</h3>
      <div class="code-display">
        <code>${invitationCode}</code>
      </div>
      <p><strong>In the meantime, share this code with your friends!</strong></p>
      <p style="font-size: 13px; opacity: 0.9;">When they use your code during signup, they'll get guaranteed beta access.</p>
    </div>

    <div class="community">
      <p><strong>💬 Join Our Community for Updates</strong></p>
      <p>Stay in the loop with the latest beta news and connect with other testers:</p>
      <p>
        <a href="https://reddit.com/r/HideAndChase">
          Join r/HideAndChase on Reddit →
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
  const { name, invitationCode } = data;
  const displayName = name || 'there';

  return `
Welcome to Hide and Chase Closed Beta!

Hi ${displayName},

You've been spotted in our system - Thank you for signing up for the Hide and Chase closed beta!

We'll notify you via email when the app is ready to download. Stay tuned!

YOUR PERSONAL INVITATION CODE
==============================
${invitationCode}

In the meantime, share this code with your friends!
When they use your code during signup, they'll get guaranteed beta access.

JOIN OUR COMMUNITY FOR UPDATES
===============================
Stay in the loop with the latest beta news and connect with other testers:
Join r/HideAndChase on Reddit: https://reddit.com/r/HideAndChase

Best regards,
The Hide and Chase Team

---
You're receiving this email because you signed up for the Hide and Chase closed beta.
`.trim();
}