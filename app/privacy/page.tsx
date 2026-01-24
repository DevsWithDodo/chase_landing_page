export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-surface-container-low dark:bg-surface-dark-container-low py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-surface dark:bg-surface-dark rounded-lg shadow-lg p-8 text-on-surface dark:text-on-surface-dark">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy Notice</h2>

        <p className="mb-6 text-on-surface-variant dark:text-on-surface-dark-variant">
          This privacy policy notice is served by the developers of <strong>Hide and Chase</strong>.
          The purpose of this policy is to explain how we collect, control, process, handle, and protect
          your personal data when you use the Hide and Chase mobile application or related services.
          If you do not agree with this policy, you should refrain from using the app or submitting personal data.
        </p>

        <h3 className="text-xl font-bold mb-3">Policy key definitions</h3>
        <ul className="list-disc pl-6 mb-6 space-y-1 text-on-surface-variant dark:text-on-surface-dark-variant">
          <li><strong>"Hide and Chase"</strong> refers to the Hide and Chase mobile application and related services</li>
          <li><strong>"we", "us", "our"</strong> refer to the developers and administrators of Hide and Chase</li>
          <li><strong>"you", "user", "player"</strong> refer to any person using the Hide and Chase app</li>
          <li><strong>"game preset"</strong> refers to a reusable game template defining roles, teams, and visibility rules</li>
          <li><strong>"game session"</strong> refers to a live or completed game created from a preset</li>
          <li><strong>"team"</strong> refers to a group of players assigned together within a game session</li>
          <li><strong>GDPR</strong> means the General Data Protection Regulation</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">Key principles of GDPR</h3>
        <p className="mb-6 text-on-surface-variant dark:text-on-surface-dark-variant">
          Our privacy practices are designed to comply with GDPR principles, including lawfulness,
          fairness and transparency, purpose limitation, data minimisation, accuracy, storage limitation,
          integrity and confidentiality, and accountability.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Processing your personal data</h2>

        <p className="mb-6 text-on-surface-variant dark:text-on-surface-dark-variant">
          Under the GDPR, we process personal data using the lawful basis of <strong>consent</strong>
          and, where applicable, <strong>legitimate interest</strong> to provide the core functionality
          of the Hide and Chase app.
        </p>

        <h4 className="text-lg font-bold mb-3">What data do we collect, why, and how is it used?</h4>

        <ol className="list-decimal pl-6 mb-6 space-y-4 text-on-surface-variant dark:text-on-surface-dark-variant">
          <li>
            <strong>Account information</strong><br />
            When you create an account, we collect your email address and a password (stored securely in hashed form).
            An account is only required to create new game presets or game sessions.
            Participation in an existing game session does not require account creation.
            OAuth-based sign-up (e.g. Google or Apple) may be added in the future.
          </li>

          <li>
            <strong>Game presets</strong><br />
            We store the information you provide when creating game presets, such as preset name,
            description, defined roles, team structures, and visibility rules.
            This data is used solely to enable game creation and gameplay.
          </li>

          <li>
            <strong>Game sessions and teams</strong><br />
            During game setup, we store team assignments, team names, and team selfies.
            Team selfies are visible to other players within the same game session
            and are used to enhance the social and competitive experience.
          </li>

          <li>
            <strong>Location data during gameplay</strong><br />
            During an active game session, the GPS location of each team leader is collected approximately every 10 seconds.
            This location data is processed in real time and shared with other teams strictly according
            to the visibility rules defined in the game preset.
          </li>

          <li>
            <strong>Location data after gameplay</strong><br />
            After a game ends, GPS location data for all teams is stored to create a game overview.
            In this overview, all teams can see the movements of all other teams,
            regardless of the visibility rules used during the live game.
            The creator of the game session may delete the session at any time.
            If not deleted, the session remains stored and can be rewatched later.
          </li>

          <li>
            <strong>Planned notifications</strong><br />
            In the future, we may offer optional notifications related to game events,
            such as eliminations or phase changes.
            If implemented, notifications will be strictly related to gameplay
            and will not be used for advertising or marketing.
          </li>

          <li>
            <strong>Anonymous usage statistics</strong><br />
            We may generate anonymous, aggregated statistics (e.g. number of games created,
            average team size) to improve the app.
            These statistics cannot be used to identify individual users.
          </li>
        </ol>

        <h4 className="text-lg font-bold mb-3">Who can see my data?</h4>

        <p className="mb-6 text-on-surface-variant dark:text-on-surface-dark-variant">
          Data shared within a game session (such as team names, selfies, and location data)
          is visible only to other players in the same session, and only according to the
          visibility rules defined in the game preset.
          Account-related data and data from other sessions are not visible to other users.
        </p>

        <p className="font-bold mb-6 text-on-surface dark:text-on-surface-dark">
          We do not sell, rent, or transmit your personal data to any third parties.
          Hide and Chase does not contain advertisements.
        </p>

        <p className="mb-6 text-on-surface-variant dark:text-on-surface-dark-variant">
          Your data is stored on our servers and may be accessed by us solely for technical
          maintenance, debugging, or legal compliance purposes.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Data retention</h2>

        <p className="mb-6 text-on-surface-variant dark:text-on-surface-dark-variant">
          We retain your personal data only for as long as necessary to provide the service.
          You may delete your account, which will remove your account-related data.
          Game sessions remain stored unless deleted by the session creator.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Your individual rights</h2>

        <p className="mb-4 text-on-surface-variant dark:text-on-surface-dark-variant">
          Under the GDPR, you have the right to be informed, access your data, request correction
          or deletion, restrict or object to processing, and request data portability.
        </p>

        <p className="mb-4 text-on-surface-variant dark:text-on-surface-dark-variant">
          You also have the right to lodge a complaint with your local data protection authority
          if you believe your data is being handled unlawfully.
        </p>

        <p className="mb-6 text-on-surface-variant dark:text-on-surface-dark-variant">
          Hide and Chase does not use automated decision-making or profiling.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Data security</h2>

        <p className="mb-6 text-on-surface-variant dark:text-on-surface-dark-variant">
          We take appropriate technical and organizational measures to secure your data,
          including encrypted communication, secure storage, and access controls.
          Our practices are designed to meet GDPR security requirements.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Third parties</h2>

        <p className="mb-6 text-on-surface-variant dark:text-on-surface-dark-variant">
          Hide and Chase does not share personal data with third parties.
          If notification services or OAuth providers are introduced in the future,
          this policy will be updated accordingly.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>

        <p className="mb-6 text-on-surface-variant dark:text-on-surface-dark-variant">
          If you have questions about this privacy policy or wish to exercise your rights,
          please contact us using the contact information provided within the app or on our website.
        </p>
      </div>
    </div>
  )
}
