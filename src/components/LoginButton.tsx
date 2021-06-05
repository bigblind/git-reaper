import { Button } from 'semantic-ui-react'
import { useIdentityContext } from 'react-netlify-identity';

function LoginButton() {
  const identityContext = useIdentityContext();
  const url = identityContext._goTrueInstance.loginExternalUrl("github");
  return <Button
    icon="github"
    label="Sign in with GitHub" as="a" href={url} />
}

export default LoginButton;
