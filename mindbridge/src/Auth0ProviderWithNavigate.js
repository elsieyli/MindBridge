import { Auth0Provider } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();
  const [authConfig, setAuthConfig] = useState(null);

  useEffect(() => {
    const fetchAuthConfig = async () => {
      try {
        const res = await fetch("/api/secrets");
        if (!res.ok) {
          throw new Error("Failed to fetch auth configuration");
        }
        const data = await res.json();

        const domain = data.AUTH0_DOMAIN;
        const clientId = data.AUTH0_CLIENT_ID;
        const audience = data.AUTH0_AUDIENCE;
        const redirectUri = `${window.location.href}callback`;

        console.log("Auth0 configuration loaded:", { domain, clientId, audience, redirectUri })

        if (domain && clientId && redirectUri && audience) {
          setAuthConfig({ domain, clientId, audience, redirectUri });
        }
      } catch (error) {
        console.error("Error fetching auth configuration:", error);
      }
    };

    fetchAuthConfig();
  }, []);

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!authConfig) {
    // Render nothing or a loading indicator until the auth config is loaded
    return null; // Or <Loading /> if you have a loading component
  }

  return (
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      authorizationParams={{
        audience: authConfig.audience,
        redirect_uri: authConfig.redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};