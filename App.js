import React from 'react';
import { NativeBaseProvider } from 'native-base';
import AuthForm from './AuthForm';

export default function App() {
  return (
  <NativeBaseProvider>
    <AuthForm />
  </NativeBaseProvider>
  );
}