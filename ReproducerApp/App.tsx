import { useState } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';

interface TestTextInputProps {
  initialValue: string;
}

function TestTextInput({ initialValue }: TestTextInputProps) {
  const [value, setValue] = useState(initialValue);
  return <TextInput value={value} onChangeText={setValue}/>;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <TestTextInput initialValue={'Test 1'}/>
        <Text>Some text</Text>
        <TestTextInput initialValue={'Test 2'}/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
});
