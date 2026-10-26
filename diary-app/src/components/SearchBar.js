import { useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS, RADIUS, SPACE, TYPO } from '../styles/tokens';

export default function SearchBar({ placeholder = 'Cari cerita... 🐾', onChange }) {
  const [queryText, setQueryText] = useState('');

  const handleChange = (text) => {
    setQueryText(text);
    onChange?.(text);
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.icon}>🔍</Text>
      <TextInput
        value={queryText}
        onChangeText={handleChange}
        placeholder={placeholder}
        placeholderTextColor={COLORS.muted}
        style={styles.input}
        accessibilityLabel="Kolom pencarian"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderWidth: 2,
    borderColor: COLORS.pink,
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACE.l,
    marginVertical: SPACE.s,
  },
  icon: { fontSize: 18, marginRight: SPACE.s },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: TYPO.body,
    color: COLORS.text,
    ...Platform.select({ web: { outlineStyle: 'none' } }),
  },
});