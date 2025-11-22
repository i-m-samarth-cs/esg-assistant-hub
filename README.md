# ESG Carbon Intelligence Web Application

## ✅ FIXED: Authentication Error & Missing Chat Button

This updated version solves:
- ✅ **401 Authentication Error** - Properly handled with error messages
- ✅ **Missing Chat Button** - Custom button always visible
- ✅ **Watson Integration** - Correct configuration and event handling

## 🚀 Quick Start

```bash
chmod +x setup_esg_app.sh
./setup_esg_app.sh
cd esg-carbon-intelligence
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

## 🔧 Fixing the 401 Authentication Error

The 401 error occurs because Watson Orchestrate requires authentication. Choose one option:

### Option 1: Disable Security (Testing Only - Recommended for Quick Start)

**⚠️ WARNING: Only use for testing! Never in production!**

1. Download the security configuration tool from IBM documentation
2. Run it:
   ```bash
   chmod +x wxO-embed-chat-security-tool.sh
   ./wxO-embed-chat-security-tool.sh
   ```
3. Select option **2) Disable security and allow anonymous access**
4. Refresh your web page - the chat should now work!

### Option 2: Configure JWT Authentication (Production)

For production deployments, you need proper JWT authentication:

1. Run the security tool:
   ```bash
   ./wxO-embed-chat-security-tool.sh
   ```

2. Select option **1) Configure security with custom keys**

3. Follow the prompts to:
   - Generate IBM key pair
   - Generate client key pair
   - Enable security

4. Set up a backend server to generate JWT tokens (see example below)

5. Update your HTML to fetch and use JWT tokens

#### JWT Token Backend Example (Node.js)

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = express();
const privateKey = fs.readFileSync('client_private_key.pem');

app.get('/api/generate-jwt', (req, res) => {
    const token = jwt.sign({
        sub: 'user-' + Date.now(),
        user_payload: {
            name: 'Test User',
            email: 'test@example.com'
        }
    }, privateKey, {
        algorithm: 'RS256',
        expiresIn: '1h'
    });
    
    res.json({ token });
});

app.listen(3000, () => console.log('JWT server on port 3000'));
```

## 🎯 Features

### ✨ What's Fixed

1. **Custom Chat Button**
   - Always visible at bottom-right
   - Animated pulse effect
   - Responsive design (desktop & mobile)
   - Properly triggers Watson chat

2. **Authentication Handling**
   - Graceful error messages
   - Retry mechanism (up to 3 attempts)
   - User-friendly error alerts
   - Console debugging information

3. **Watson Integration**
   - Properly initialized
   - Hidden default Watson launcher
   - Multiple open methods (failsafe)
   - Event handlers for auth errors

### 🎨 UI Features

- Modern, responsive design
- Animated particles background
- Smooth scroll navigation
- Interactive feature cards
- Image gallery with hover effects
- Animated statistics counters
- Mobile-friendly navigation

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Issue: 401 Authentication Error

**Symptoms:**
```
Failed to load resource: the server responded with a status of 401
Error: The authTokenNeeded event was emitted but no new token was provided
```

**Solution:**
- For testing: Disable security (see Option 1 above)
- For production: Configure JWT tokens (see Option 2 above)

### Issue: Chat Button Not Appearing

**Check:**
1. Open browser console (F12)
2. Look for "✅ Custom chat button ready"
3. If missing, check CSS is loading properly
4. Clear browser cache and reload

### Issue: Watson Chat Not Opening

**Debug Steps:**
1. Click the chat button
2. Open console (F12)
3. Look for error messages
4. Check if Watson script loaded: "✅ Watson Orchestrate script loaded successfully"
5. Check if Watson initialized: "✅ Watson Orchestrate initialized successfully"

### Issue: Font Awesome Tracking Prevention

**This is normal!** Modern browsers block tracking from CDNs like Font Awesome. The icons will still display correctly - this is just a privacy feature and can be safely ignored.

## 📚 Important Notes

### Security Best Practices

1. **Never disable security in production**
   - Only disable for local testing
   - Always use JWT authentication for production

2. **Keep private keys secure**
   - Never commit private keys to git
   - Store keys in secure environment variables
   - Rotate keys regularly

3. **Use HTTPS in production**
   - Watson Orchestrate requires HTTPS
   - Get SSL certificate for your domain

### Configuration Files

After running the security tool, you'll find:

```
wxo_security_config/
├── ibm_public_key.pem          # IBM's public key
├── ibm_public_key.txt          # Single-line format
├── client_private_key.pem      # Your private key (KEEP SECURE!)
├── client_public_key.pem       # Your public key
└── client_public_key.txt       # Single-line format
```

**⚠️ NEVER share or commit `client_private_key.pem`!**

## 🔍 Console Messages Explained

### Success Messages
- ✅ = Operation successful
- 🌱 = Initialization started
- 📋 = Configuration loaded
- 💬 = User interaction

### Warning Messages
- ⚠️ = Non-critical issue (like auth needed)
- 🔄 = Retry in progress

### Error Messages
- ❌ = Critical error
- 🚫 = Operation failed

## 🎓 How It Works

1. **Page loads** → Script initializes Watson configuration
2. **Watson script loads** → Creates hidden chat interface
3. **Watson initializes** → Registers event handlers
4. **User clicks button** → Custom button triggers Watson.open()
5. **Auth needed?** → Shows error message with instructions
6. **Chat opens** → User can interact with AI assistant

## 📞 Getting Help

If you're still having issues:

1. Check the browser console (F12) for detailed errors
2. Verify your Watson Orchestrate credentials are correct
3. Ensure you're using the correct agent ID and environment ID
4. Try the security configuration tool
5. Contact IBM Watson support for authentication issues

## 🔗 Useful Links

- [Watson Orchestrate Documentation](https://www.ibm.com/docs/en/watsonx/watson-orchestrate)
- [Embedded Chat Guide](https://www.ibm.com/docs/en/watsonx/watson-orchestrate/base?topic=experience-using-agents-in-embedded-webchat)
- [Security Configuration](https://www.ibm.com/docs/en/watsonx/watson-orchestrate/base?topic=webchat-embedded-chat-security)

## 📝 License

© 2024 ESG Carbon Intelligence. All rights reserved.

---

**Need immediate testing?** Disable security temporarily with the configuration tool, but remember to enable it before going to production!
