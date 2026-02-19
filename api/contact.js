export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ type: 'error', text: 'Method not allowed' });
  }

  const { userName, userEmail, userPhone, userTopic, userMessage } = req.body;

  if (!userName || !userEmail) {
    return res.status(400).json({ type: 'error', text: 'Name and email are required.' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Sweet Churros Contact <onboarding@resend.dev>',
        to: ['sweetchurrosinc@gmail.com'],
        reply_to: userEmail,
        subject: `[Sweet Churros] ${userTopic || 'Contact Form'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${userName}</p>
          <p><strong>Email:</strong> ${userEmail}</p>
          <p><strong>Phone:</strong> ${userPhone || 'N/A'}</p>
          <p><strong>Topic:</strong> ${userTopic || 'N/A'}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${(userMessage || '').replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      return res.status(500).json({ type: 'error', text: 'Failed to send message. Please try again.' });
    }

    return res.status(200).json({ type: 'success', text: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ type: 'error', text: 'Server error. Please try again later.' });
  }
}
