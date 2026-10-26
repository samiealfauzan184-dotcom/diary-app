import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS, RADIUS, SPACE } from '../styles/tokens';

export default function SearchBar({ placeholder = 'Cari entri...', onChange }) {
  const [queryText, setQueryText] = useState('');

  const handleChange = (text) => {
    setQueryText(text);
    onChange?.(text);
  };

  return (
    <View style={styles.wrap}>
      <TextInput
        value={queryText}
        onChangeText={handleChange}
        placeholder={placeholder}
        style={styles.input}
        accessibilityLabel="Kolom pencarian"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingVertical: SPACE.m,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    paddingHorizontal: SPACE.m,
    paddingVertical: 10,
    backgroundColor: COLORS.surface,
  },
});