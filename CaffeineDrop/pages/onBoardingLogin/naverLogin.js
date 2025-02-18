import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET, NAVER_REDIRECT_URI } from '@env';

const CLIENT_ID = NAVER_CLIENT_ID;
const CLIENT_SECRET = NAVER_CLIENT_SECRET;
const REDIRECT_URI = NAVER_REDIRECT_URI;
const STATE = 'RANDOM_STATE';

export default function App() {
  const [authUrl, setAuthUrl] = useState(null);

  const handleLogin = () => {
    const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;
    setAuthUrl(url);
  };

  const handleWebViewNavigationStateChange = (newNavState) => {
    const { url } = newNavState;
    if (url.startsWith(REDIRECT_URI)) {
      const authorizationCode = extractAuthorizationCode(url);
      requestAccessToken(authorizationCode);
      setAuthUrl(null); // Close the WebView
    }
  };

  const extractAuthorizationCode = (url) => {
    const codeMatch = url.match(/code=([^&]*)/);
    return codeMatch ? codeMatch[1] : null;
  };

  const requestAccessToken = async (authorizationCode) => {
    const tokenUrl = `https://nid.naver.com/oauth2.0/token`;
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', CLIENT_ID);
    params.append('client_secret', CLIENT_SECRET);
    params.append('code', authorizationCode);
    params.append('state', STATE);

    try {
      const response = await axios.post(tokenUrl, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log('Access Token:', response.data.access_token);
      // Use the access token to fetch user information
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      {authUrl ? (
        <WebView
          source={{ uri: authUrl }}
          onNavigationStateChange={handleWebViewNavigationStateChange}
        />
      ) : (
        <Button title="Login with Naver" onPress={handleLogin} />
      )}
    </View>
  );
}