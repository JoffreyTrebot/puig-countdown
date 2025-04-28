import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCountdown } from './countdown.js'
import { inject } from '@vercel/analytics'

// Initialize Vercel Analytics
inject()

document.querySelector('#app').innerHTML = `
  <div class="logo-container">
    <img src="/logo_Puig.svg" alt="Puig logo" class="puig-logo" />
  </div>
  <div>
    <h1></h1>
    <div class="countdown-section">
      <h1>The new <span style="font-weight: 400;">Home of Puig</span><br>is coming</h1>
      <div id="countdown"></div>
    </div>
  </div>
`

// Set up countdown to a date 30 days from now
const targetDate = new Date('2025-06-30T00:00:00+02:00');
setupCountdown(document.querySelector('#countdown'), targetDate)