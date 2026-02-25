import { getBetaWelcomeEmailHTML } from '@/lib/email-templates/beta-welcome'

export default function TestEmailPage() {
  const sampleData = {
    name: 'John Doe',
    email: 'john@example.com',
    invitationCode: 'JOHN-X7K9'
  }

  const emailHTML = getBetaWelcomeEmailHTML(sampleData)

  return (
          <div 
            dangerouslySetInnerHTML={{ __html: emailHTML }}
            className="email-preview"
          />
  )
}
