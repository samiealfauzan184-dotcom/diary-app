import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { moodStyles } from '../constants/moodStyles';
import { diaryEntries } from '../data/diaryEntries';
import { COLORS, RADIUS, SPACE, TYPO } from '../styles/tokens';

const todayString = () => {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mm}-${dd}`;
};

const MOODS = Object.keys(moodStyles);

// ambil gambar kucing dari entri contoh dengan mood yang sama
const imageForMood = (mood) =>
  (diaryEntries.find((e) => e.mood === mood) ?? diaryEntries[0]).image;

export default function EntryForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(todayString());
  const [preview, setPreview] = useState('');
  const [mood, setMood] = useState('happy');

  const canSubmit = title.trim().length > 0 && preview.trim().length > 0;

  const submit = () => {
    if (!canSubmit) return;

    onSubmit?.({
      id: Date.now(),
      title: title.trim(),
      date: date.trim(),
      preview: preview.trim(),
      body: preview.trim(),
      mood,
      image: imageForMood(mood),
    });

    setTitle('');
    setDate(todayString());
    setPreview('');
    setMood('happy');
  };

  return (
    <View style={styles.form}>
      <Text style={styles.heading}>✏️ Tulis cerita baru</Text>

      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Judul ceritamu"
        placeholderTextColor={COLORS.muted}
        style={styles.input}
        accessibilityLabel="Judul entri"
      />

      <TextInput
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
        placeholderTextColor={COLORS.muted}
        style={styles.input}
        accessibilityLabel="Tanggal entri"
      />

      <TextInput
        value={preview}
        onChangeText={setPreview}
        placeholder="Hari ini aku..."
        placeholderTextColor={COLORS.muted}
        style={[styles.input, styles.multiline]}
        multiline
        accessibilityLabel="Ringkasan entri"
      />

      <Text style={styles.label}>Mood hari ini</Text>
      <View style={styles.chips}>
        {MOODS.map((m) => {
          const t = moodStyles[m];
          const active = mood === m;
          return (
            <Pressable
              key={m}
              onPress={() => setMood(m)}
              style={[
                styles.chip,
                { borderColor: t.borderColor },
                active && { backgroundColor: t.borderColor },
              ]}
              accessibilityRole="button"
              accessibilityLabel={`Mood ${t.label}`}
            >
              <Text style={[styles.chipText, active && { color: '#fff' }]}>
                {t.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        onPress={submit}
        disabled={!canSubmit}
        style={[styles.button, !canSubmit && styles.buttonDisabled]}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Simpan cerita 🐾</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: COLORS.yellowSoft,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: COLORS.pink,
    borderRadius: RADIUS.bubble,
    padding: SPACE.l,
    marginTop: SPACE.m,
    marginBottom: SPACE.s,
    gap: SPACE.s,
  },
  heading: {
    fontSize: TYPO.title,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: SPACE.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    paddingHorizontal: SPACE.m,
    paddingVertical: 10,
    backgroundColor: COLORS.surface,
    color: COLORS.text,
  },
  multiline: { minHeight: 80, textAlignVertical: 'top' },
  label: {
    fontSize: TYPO.caption,
    fontWeight: '700',
    color: COLORS.muted,
    marginTop: SPACE.xs,
  },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACE.s },
  chip: {
    borderWidth: 2,
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACE.m,
    paddingVertical: SPACE.xs + 2,
    backgroundColor: COLORS.surface,
  },
  chipText: { fontSize: TYPO.caption, fontWeight: '700', color: COLORS.text },
  button: {
    marginTop: SPACE.s,
    padding: SPACE.m,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  buttonDisabled: { opacity: 0.5 },
  buttonText: { color: '#fff', fontWeight: '800' },
});