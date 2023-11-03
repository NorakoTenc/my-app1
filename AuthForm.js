import React, { Component } from 'react';
import { Input, Stack, FormControl, Box, Button, Center, NativeBaseProvider } from 'native-base'

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      authStatus: '',
      message: '',
    };
  }

  handleLogin = () => {
    const { username, password } = this.state;
    const validCredentials = {
      'User': '123',
      'Nora': '1234',
    };
     if (validCredentials[username] === password) {
          this.setState({ authStatus: 'success', message: 'Auth success' });
        } else {
          this.setState({ authStatus: 'error', message: 'Auth Error' });
        }
      }

      render() {
        const { authStatus, message } = this.state;

        return (
          <NativeBaseProvider>
            <FormControl>
              <Stack space={5}>
                <Stack>
                  <FormControl.Label>Username</FormControl.Label>
                  <Input
                    variant="underlined"
                    p={2}
                    placeholder="Username"
                    onChangeText={(value) => this.setState({ username: value })}
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input
                    variant="underlined"
                    p={2}
                    placeholder="Password"
                    onChangeText={(value) => this.setState({ password: value })}
                  />
                </Stack>
              </Stack>
            </FormControl>
            <Center>
              <Button onPress={this.handleLogin}>Log In</Button>
            </Center>
            {(authStatus === 'success' || authStatus === 'error') && (
              <Box mt={2} bgColor={authStatus === 'success' ? 'green.200' : 'red.200'} p={2} borderRadius={4}>
                {message}
              </Box>
            )}
          </NativeBaseProvider>
        );
      }
    }
