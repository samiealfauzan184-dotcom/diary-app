import { ScrollView, StyleSheet } from 'react-native';
import DiaryCard from '../components/DiaryCard';
import Header from '../components/Header';
import { diaryEntries } from '../data/diaryEntries';

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Header name="Samie Al Fauzan" />

      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          image={entry.image}
          mood={entry.mood}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
});